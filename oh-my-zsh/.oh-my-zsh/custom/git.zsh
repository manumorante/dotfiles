# GitHub CLI account: personal by default, work only inside the founderz tree
gh() {
  local want="manumorante"
  [[ "$PWD/" == */projects/founderz/* ]] && want="manumorante-fdz"

  local active
  active=$(sed -n 's/^ *user: *//p' ~/.config/gh/hosts.yml 2>/dev/null | head -1)
  [[ "$active" != "$want" ]] && command gh auth switch --user "$want" >/dev/null 2>&1

  command gh "$@"
}

# Fetch + pull only master (avoids errors from other remote branches)
alias glt="glthis"

glthis() {
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
    echo "$(red 'No estás en un repositorio git')"
    return 1
  }

  local remote=$(git config --get branch.master.remote 2>/dev/null || echo "origin")

  local fetch_configs=($(git config --get-all remote.${remote}.fetch 2>/dev/null))

  git config --unset-all remote.${remote}.fetch 2>/dev/null
  git config --add remote.${remote}.fetch "+refs/heads/master:refs/remotes/${remote}/master"

  local fetch_output=$(git fetch ${remote} 2>&1)
  local fetch_status=$?

  if [[ $fetch_status -ne 0 ]] || echo "$fetch_output" | grep -qE "(master|error|fatal|warning)"; then
    echo "$fetch_output" | grep -E "(master|error|fatal|warning|From.*master|Already|Updating)" || echo "$fetch_output"
  fi

  if [[ $fetch_status -ne 0 ]]; then
    git config --unset-all remote.${remote}.fetch 2>/dev/null
    for config in "${fetch_configs[@]}"; do
      git config --add remote.${remote}.fetch "$config"
    done
    if [[ ${#fetch_configs[@]} -eq 0 ]]; then
      git config --add remote.${remote}.fetch "+refs/heads/*:refs/remotes/${remote}/*"
    fi
    return $fetch_status
  fi

  git config --unset-all remote.${remote}.fetch 2>/dev/null
  for config in "${fetch_configs[@]}"; do
    git config --add remote.${remote}.fetch "$config"
  done

  if [[ ${#fetch_configs[@]} -eq 0 ]]; then
    git config --add remote.${remote}.fetch "+refs/heads/*:refs/remotes/${remote}/*"
  fi

  git merge ${remote}/master
}

# Checkout with branch autocompletion
gcol() {
    git checkout "$@"
}

_gcol() {
    if ! git rev-parse --is-inside-work-tree &>/dev/null; then
      echo "Not a git repository."
      return 1
    fi

    local -a branches
    branches=( ${(f)"$(git branch --format='%(refname:short)' 2>/dev/null)"} )
    if [[ -z $branches ]]; then
      echo "No branches found."
      return 1
    fi
    _describe 'branch' branches
}

compdef _gcol gcol

# Discard tracked changes and abort in-progress operations. Asks before wiping.
nah() {
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || { echo "$(red 'No estás en un repositorio git')"; return 1; }

  local force=false
  [[ "$1" == "-y" || "$1" == "--yes" ]] && force=true

  local gitdir=$(git rev-parse --git-dir)
  local branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)

  # In-progress operations that nah would abort
  local -a ops
  [[ -d "$gitdir/rebase-merge" || -d "$gitdir/rebase-apply" ]] && ops+=("rebase")
  [[ -f "$gitdir/MERGE_HEAD" ]]                               && ops+=("merge")
  [[ -f "$gitdir/CHERRY_PICK_HEAD" ]]                         && ops+=("cherry-pick")
  [[ -f "$gitdir/REVERT_HEAD" ]]                              && ops+=("revert")

  # Tracked changes (staged + unstaged) vs untracked (kept)
  local -a tracked untracked
  tracked=(${(f)"$(git status --porcelain --untracked-files=no 2>/dev/null)"})
  untracked=(${(f)"$(git ls-files --others --exclude-standard 2>/dev/null)"})

  local -a locks
  for lock in "$gitdir/index.lock" "$gitdir/HEAD.lock" "$gitdir/packed-refs.lock"; do
    [[ -f "$lock" ]] && locks+=("${lock:t}")
  done

  if [[ ${#tracked[@]} -eq 0 && ${#ops[@]} -eq 0 && ${#locks[@]} -eq 0 ]]; then
    echo "$(green '✓ Nada que descartar.') $(cyan "${branch}")$([[ ${#untracked[@]} -gt 0 ]] && echo " · ${#untracked[@]} sin trackear (se mantienen)")"
    return 0
  fi

  echo ""
  echo "$(red '⚠  nah') $(cyan "· ${branch}")"
  echo ""

  if [[ ${#tracked[@]} -gt 0 ]]; then
    local n=${#tracked[@]}
    echo "$(red "   ✗ ${n} archivo$([[ $n -gt 1 ]] && echo s) trackeado$([[ $n -gt 1 ]] && echo s) se resetea$([[ $n -gt 1 ]] && echo n) a HEAD")"
    local shown=0
    for line in "${tracked[@]}"; do
      (( shown++ >= 10 )) && { echo "        $(cyan "… y $(( ${#tracked[@]} - 10 )) más")"; break; }
      echo "        ${line}"
    done
  fi

  [[ ${#ops[@]} -gt 0 ]]   && echo "$(red "   ✗ en curso: ${(j:, :)ops} → se aborta")"
  [[ ${#locks[@]} -gt 0 ]] && echo "$(red "   ✗ locks: ${(j:, :)locks} → se borran")"
  [[ ${#untracked[@]} -gt 0 ]] && echo "$(green "   ✓ ${#untracked[@]} sin trackear se mantiene$([[ ${#untracked[@]} -gt 1 ]] && echo n)")"

  echo ""

  if [[ "$force" == "false" ]]; then
    local answer
    read "answer?$(red '¿Descartar? Esto no se puede deshacer') [y/N] "
    echo ""
    [[ "$answer" == [yYsS] ]] || { echo "$(cyan 'Cancelado. Nada tocado.')"; return 1; }
  fi

  git rebase --abort      >/dev/null 2>&1 || true
  git merge --abort       >/dev/null 2>&1 || true
  git cherry-pick --abort >/dev/null 2>&1 || true
  git revert --abort      >/dev/null 2>&1 || true

  rm -f "$gitdir/index.lock" "$gitdir/HEAD.lock" "$gitdir/packed-refs.lock" 2>/dev/null || true

  git reset --hard >/dev/null

  echo "$(green '✓ Repo reseteado a HEAD') $(cyan '(solo trackeados)')"
}

# Check for local git changes
hasChanges() {
  if [[ -n $(git status --porcelain) ]]; then
    return 0
  else
    return 1
  fi
}

# Switch to master only if no changes, then run a command
gcmAnd() {
  if hasChanges; then
    echo "$(red 'There are local changes. Cannot switch branches.')"
    gss
  else
    gcm
    "$@"
  fi
}

# Soft reset to origin/master keeping changes staged (for splitting a branch)
# Saves backup commit for undo. Branch must have upstream.
gsplit() {
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
    echo "$(red 'No estás en un repositorio git')"
    return 1
  }

  local upstream=$(git rev-parse --abbrev-ref --symbolic-full-name @{upstream} 2>/dev/null)
  if [[ -z "$upstream" ]]; then
    echo "$(red '❌ La rama debe estar en remoto para usar gsplit.')"
    echo "$(cyan 'Haz push primero: git push -u origin nombre-rama')"
    return 1
  fi

  echo "$(cyan '⚠️  Recordatorio: origin/master debe existir y estar actualizado')"
  echo ""

  if ! git rev-parse --verify origin/master >/dev/null 2>&1; then
    echo "$(red '❌ origin/master no existe.')"
    echo "$(cyan 'Asegúrate de que master existe en remoto y está actualizado.')"
    return 1
  fi

  local current_commit=$(git rev-parse HEAD)
  local backup_file=".git/GSPLIT_BACKUP"

  echo "$current_commit" > "$backup_file"

  git reset --soft origin/master

  echo "$(green '✅ Reset realizado. Cambios en staging.')"
  echo "Para deshacer: $(cyan 'gundo')"
}

# Undo last gsplit (restores saved commit)
gundo() {
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
    echo "$(red 'No estás en un repositorio git')"
    return 1
  }

  local backup_file=".git/GSPLIT_BACKUP"

  if [[ ! -f "$backup_file" ]]; then
    echo "$(red 'No hay backup de gsplit. No se puede deshacer.')"
    echo "$(cyan 'Usa git reflog para encontrar el commit anterior.')"
    return 1
  fi

  local saved_commit=$(cat "$backup_file")

  if ! git rev-parse --verify "$saved_commit" >/dev/null 2>&1; then
    echo "$(red 'El commit guardado ya no existe.')"
    rm -f "$backup_file"
    return 1
  fi

  git reset --hard "$saved_commit"

  rm -f "$backup_file"

  echo "$(green 'Reset deshecho. Estado restaurado.')"
}

# Recent collaborator activity — usage: gwho [since] e.g. gwho "3 days ago"
gwho() {
  local since="${1:-7 days ago}"
  echo ""
  echo "$(cyan "Activity since: ${since}")"
  echo ""
  git log \
    --no-merges \
    --since="$since" \
    --format="%C(bold cyan)%<(8,trunc)%al%Creset %C(yellow)%h%Creset %<(80,trunc)%s"
  echo ""
}

# Delete all merged local branches (safe -d only)
gbdall() {
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
    echo "$(red 'No estás en un repositorio git')"
    return 1
  }

  local current_branch=$(git rev-parse --abbrev-ref HEAD)
  local protected_branches=("master" "main" "staging" "develop" "dev" "$current_branch")

  local -a local_branches
  local_branches=(${(f)"$(git branch --format='%(refname:short)' 2>/dev/null)"})

  if [[ ${#local_branches[@]} -eq 0 ]]; then
    echo "$(cyan 'ℹ️  No hay ramas locales para limpiar.')"
    return 0
  fi

  echo "$(cyan "📍 Rama actual: ${current_branch}")"
  echo "$(cyan "🔍 Encontradas ${#local_branches[@]} ramas locales")"
  echo ""

  local -a branches_to_clean
  for branch in "${local_branches[@]}"; do
    local is_protected=false
    for protected in "${protected_branches[@]}"; do
      if [[ "$branch" == "$protected" ]]; then
        is_protected=true
        break
      fi
    done

    if [[ "$is_protected" == "false" ]]; then
      branches_to_clean+=("$branch")
    fi
  done

  if [[ ${#branches_to_clean[@]} -eq 0 ]]; then
    echo "$(cyan 'ℹ️  Todas las ramas están protegidas. Nada que limpiar.')"
    return 0
  fi

  echo "$(cyan "📋 Ramas a procesar: ${#branches_to_clean[@]}")"
  echo "$(cyan "   (Ramas protegidas: ${(j:, :)protected_branches})")"
  echo ""

  local deleted=0
  local protected_by_git=0
  local errors=0

  for branch in "${branches_to_clean[@]}"; do
    echo -n "🔹 ${branch}... "

    if git branch -d "$branch" 2>/dev/null; then
      echo "$(green '✓ Borrada')"
      ((deleted++))
    else
      local error_msg=$(git branch -d "$branch" 2>&1 || true)

      if echo "$error_msg" | grep -q "is not fully merged"; then
        echo "$(cyan '⚠ No mergeada (protegida)')"
        ((protected_by_git++))
      else
        echo "$(red "✗ Error: ${error_msg}")"
        ((errors++))
      fi
    fi
  done

  echo ""
  echo "$(cyan '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')"
  echo "$(green "✅ Ramas borradas: ${deleted}")"
  echo "$(cyan "⚠️  Ramas protegidas (no mergeadas): ${protected_by_git}")"
  if [[ $errors -gt 0 ]]; then
    echo "$(red "❌ Errores: ${errors}")"
  fi
  echo "$(cyan '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')"
  echo ""

  if [[ $protected_by_git -gt 0 ]]; then
    echo "$(cyan '💡 Tip: Si quieres forzar el borrado de ramas no mergeadas, usa:')"
    echo "   $(cyan 'git branch -D <nombre-rama>')"
    echo "   $(cyan '(⚠️  Cuidado: esto borra incluso ramas con trabajo sin mergear)')"
    echo ""
  fi
}

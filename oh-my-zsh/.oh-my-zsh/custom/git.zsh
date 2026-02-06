# GitHub CLI auto-switch account based on directory
gh() {
  local current_dir=$(pwd)

  if [[ "$current_dir" == *"/projects/personal/"* ]]; then
    command gh auth switch --user manumorante 2>/dev/null
  elif [[ "$current_dir" == *"/projects/founderz/"* ]]; then
    command gh auth switch --user manumorante-fdz 2>/dev/null
  fi

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

# Discard ALL local changes, .lock files, abort operations
nah() {
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || { echo "Fuera de un repo"; return 1; }

  echo "⚠️  Descartar TODOS los cambios locales y archivos .lock"
  read -q "REPLY?¿Continuar? (y/n) " || { echo ""; return 0; }
  echo ""

  git rebase --abort       >/dev/null 2>&1 || true
  git merge --abort        >/dev/null 2>&1 || true
  git cherry-pick --abort  >/dev/null 2>&1 || true
  git revert --abort       >/dev/null 2>&1 || true

  find .git -name "*.lock" -type f -delete 2>/dev/null || true

  git reset --hard
  git clean -df

  git remote prune origin

  echo "✨ Repo limpio"
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

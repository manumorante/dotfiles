# Color functions
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
RESET='\033[0m'

color() {
  local color=$1
  local text=$2
  echo -ne "${color}${text}${RESET}"
}

red() { color $RED "$1"; }
green() { color $GREEN "$1"; }
cyan() { color $CYAN "$1"; }

# Git checkout with autocompletion
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

# Git nah function
nah() {
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || { echo "Fuera de un repo"; return 1; }

  echo "⚠️  Descartar TODOS los cambios locales y archivos .lock"
  read -q "REPLY?¿Continuar? (y/n) " || { echo ""; return 0; }
  echo ""

  # Abortar operaciones en curso
  git rebase --abort       >/dev/null 2>&1 || true
  git merge --abort        >/dev/null 2>&1 || true
  git cherry-pick --abort  >/dev/null 2>&1 || true
  git revert --abort       >/dev/null 2>&1 || true

  # Limpiar TODOS los locks (antes del reset)
  find .git -name "*.lock" -type f -delete 2>/dev/null || true

  # Descartar cambios
  git reset --hard
  git clean -df

  # Limpiar referencias corruptas de remotes
  git remote prune origin

  echo "✨ Repo limpio"
}


# Check for local git changes
hasChanges() {
  if [[ -n $(git status --porcelain) ]]; then
    return 0 # true
  else
    return 1 # false
  fi
}

# Change branch if no changes
# Uses gcm (git checkout main/master) from git plugin
gcmAnd() {
  if hasChanges; then
    echo "$(red 'There are local changes. Cannot switch branches.')"
    gss # git status short from git plugin
  else
    gcm # git checkout main/master from git plugin
    "$@"
  fi
}

# Check Node.js version
isMyNodeVersion() {
  if ! command -v node &>/dev/null; then
    echo "Node.js is not installed."
    return 2
  fi
  [[ $(node -v) == v16* ]]
}

myNodeVersionWarning() {
  if ! isMyNodeVersion; then
    echo "$(red 'The Node version is not 16.')"
    echo "You can change it with $(cyan 'nvm use 16')"
    return 1
  fi
}

# Delete node_modules
del_modules() {
  path="${1:-.}"  # Use current directory if no path provided
  
  if [ ! -d "$path" ]; then
    echo "The path does not exist or is not a valid directory: $path"
    return 1
  fi
  
  echo "This will delete all node_modules and package-lock.json in $path"
  echo -n "Are you sure? (y/N): "
  read -r confirm
  
  if [[ "$confirm" != [yY]* ]]; then
    echo "Operation cancelled."
    return 0
  fi

  local modules_count=0
  local locks_count=0

  # Delete 'node_modules' directories
  while IFS= read -r -d '' dir; do
    rm -rf "$dir"
    ((modules_count++))
  done < <(find "$path" -name "node_modules" -type d -print0)

  # Delete 'package-lock.json' files
  while IFS= read -r -d '' file; do
    rm -f "$file"
    ((locks_count++))
  done < <(find "$path" -name "package-lock.json" -type f -print0)

  echo "Deleted $modules_count node_modules directories and $locks_count package-lock.json files in: $path"
}

# Package manager detection functions
isYarn() {
  [[ -f "yarn.lock" ]]
}

isNpm() {
  [[ -f "package-lock.json" ]]
}

isPnpm() {
  [[ -f "pnpm-lock.yaml" ]]
}

# Package manager helper functions
get_scripts() {
  if [ ! -f "package.json" ]; then
    echo "No package.json found in current directory."
    return 1
  fi
  cat package.json | jq -r '.scripts'
}

runkey() {
  if [ ! -f "package.json" ]; then
    echo "No package.json found in current directory."
    return 1
  fi
  # Directamente comprueba dev o start sin procesar todo el objeto scripts
  jq -r '.scripts | if has("dev") then "dev" elif has("start") then "start" else "start" end' package.json
}

get_run() {
  # Check if jq is installed
  if ! command -v jq &>/dev/null; then
    echo "jq is not installed. Please install it to use package.json parsing functions."
    return 1
  fi

  local pkg=""
  local cmd=""

  if isYarn; then
    pkg="yarn"
    cmd="$(runkey)"
  elif isNpm; then
    pkg="npm"
    cmd="run $(runkey)"
  elif isPnpm; then
    pkg="pnpm"
    cmd="run $(runkey)"
  else
    echo "$(green 'Ready to install.')"
    echo "Install with $(cyan 'npm install') or $(cyan 'yarn install')"
    echo "And start with $(cyan 'npm run dev') or $(cyan 'yarn dev')"
    return
  fi

  echo "$(green "Using $pkg")"
  echo "$(cyan "$pkg $cmd")"
}

# Dividir una rama en varias (versión segura)
# Guarda el commit actual antes del reset para poder deshacerlo
# REQUISITO: La rama debe estar en remoto (tener upstream)
gsplit() {
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || { 
    echo "$(red 'No estás en un repositorio git')"
    return 1
  }
  
  # Verificar que la rama actual está en remoto (OBLIGATORIO)
  local upstream=$(git rev-parse --abbrev-ref --symbolic-full-name @{upstream} 2>/dev/null)
  if [[ -z "$upstream" ]]; then
    echo "$(red '❌ La rama debe estar en remoto para usar gsplit.')"
    echo "$(cyan 'Haz push primero: git push -u origin nombre-rama')"
    return 1
  fi
  
  # Mensaje recordatorio
  echo "$(cyan '⚠️  Recordatorio: origin/master debe existir y estar actualizado')"
  echo ""
  
  # Verificar que origin/master existe
  if ! git rev-parse --verify origin/master >/dev/null 2>&1; then
    echo "$(red '❌ origin/master no existe.')"
    echo "$(cyan 'Asegúrate de que master existe en remoto y está actualizado.')"
    return 1
  fi
  
  local current_commit=$(git rev-parse HEAD)
  local backup_file=".git/GSPLIT_BACKUP"
  
  # Guardar el commit actual
  echo "$current_commit" > "$backup_file"
  
  # Hacer el reset soft a origin/master
  git reset --soft origin/master
  
  echo "$(green '✅ Reset realizado. Cambios en staging.')"
  echo "Para deshacer: $(cyan 'gundo')"
}

# Deshacer el último gsplit (versión segura)
# Restaura desde el commit guardado, no desde ORIG_HEAD
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
  
  # Verificar que el commit existe
  if ! git rev-parse --verify "$saved_commit" >/dev/null 2>&1; then
    echo "$(red 'El commit guardado ya no existe.')"
    rm -f "$backup_file"
    return 1
  fi
  
  # Restaurar el commit
  git reset --hard "$saved_commit"
  
  # Limpiar el archivo de backup
  rm -f "$backup_file"
  
  echo "$(green 'Reset deshecho. Estado restaurado.')"
}

# Git fetch + pull solo de master (sin traer otras ramas)
# Evita mensajes de error de otras ramas remotas
glthis() {
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || { 
    echo "$(red 'No estás en un repositorio git')"
    return 1
  }
  
  # Obtener el nombre del remote (por defecto "origin")
  local remote=$(git config --get branch.master.remote 2>/dev/null || echo "origin")
  
  # Guardar todas las configuraciones de fetch actuales
  local fetch_configs=($(git config --get-all remote.${remote}.fetch 2>/dev/null))
  
  # Eliminar todas las configuraciones de fetch existentes
  git config --unset-all remote.${remote}.fetch 2>/dev/null
  
  # Configurar fetch solo para master
  git config --add remote.${remote}.fetch "+refs/heads/master:refs/remotes/${remote}/master"
  
  # Hacer fetch solo de master
  # Capturar salida y mostrar solo si hay errores o información relevante de master
  local fetch_output=$(git fetch ${remote} 2>&1)
  local fetch_status=$?
  
  # Mostrar solo si hay errores o información de master
  if [[ $fetch_status -ne 0 ]] || echo "$fetch_output" | grep -qE "(master|error|fatal|warning)"; then
    echo "$fetch_output" | grep -E "(master|error|fatal|warning|From.*master|Already|Updating)" || echo "$fetch_output"
  fi
  
  # Si hubo error en el fetch, restaurar config y salir
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
  
  # Restaurar las configuraciones originales
  git config --unset-all remote.${remote}.fetch 2>/dev/null
  for config in "${fetch_configs[@]}"; do
    git config --add remote.${remote}.fetch "$config"
  done
  
  # Si no había configuraciones, restaurar la por defecto
  if [[ ${#fetch_configs[@]} -eq 0 ]]; then
    git config --add remote.${remote}.fetch "+refs/heads/*:refs/remotes/${remote}/*"
  fi
  
  # Hacer merge directamente (evita que git pull haga fetch de todas las ramas)
  git merge ${remote}/master
}

# Limpiar todas las ramas locales mergeadas (equivalente a ejecutar gbd en todas)
# Solo borra ramas que están completamente mergeadas (git branch -d)
gbdall() {
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || { 
    echo "$(red 'No estás en un repositorio git')"
    return 1
  }
  
  local current_branch=$(git rev-parse --abbrev-ref HEAD)
  local protected_branches=("master" "main" "staging" "develop" "dev" "$current_branch")
  
  # Obtener todas las ramas locales (sin el asterisco de la rama actual)
  local -a local_branches
  local_branches=(${(f)"$(git branch --format='%(refname:short)' 2>/dev/null)"})
  
  if [[ ${#local_branches[@]} -eq 0 ]]; then
    echo "$(cyan 'ℹ️  No hay ramas locales para limpiar.')"
    return 0
  fi
  
  echo "$(cyan "📍 Rama actual: ${current_branch}")"
  echo "$(cyan "🔍 Encontradas ${#local_branches[@]} ramas locales")"
  echo ""
  
  # Filtrar ramas protegidas
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
  
  # Contadores
  local deleted=0
  local protected_by_git=0
  local errors=0
  
  # Intentar borrar cada rama
  for branch in "${branches_to_clean[@]}"; do
    echo -n "🔹 ${branch}... "
    
    # Intentar borrar con -d (solo si está merged)
    if git branch -d "$branch" 2>/dev/null; then
      echo "$(green '✓ Borrada')"
      ((deleted++))
    else
      # Si falla, puede ser porque no está merged
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
  
  # Resumen
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

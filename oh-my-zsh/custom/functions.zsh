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
  git reset --hard
  git clean -df
  if [ -d ".git/rebase-apply" ] || [ -d ".git/rebase-merge" ]; then
    git rebase --abort
  fi
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

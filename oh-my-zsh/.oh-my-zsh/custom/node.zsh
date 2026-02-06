# Package manager detection
isYarn() { [[ -f "yarn.lock" ]]; }
isNpm() { [[ -f "package-lock.json" ]]; }
isPnpm() { [[ -f "pnpm-lock.yaml" ]]; }

# Show package.json scripts
alias showrun="get_run"
alias showscripts="get_scripts"

# Run with confetti
alias rndev="confetti && npm run dev"
alias rnstart="confetti && npm run start"
alias rnbuild="npm run build && confetti"

# Delete node_modules and package-lock.json
alias del-modules='(del_modules "."; del_modules "packages")'
alias rmnext='rm -rf .next && echo "$(green ".next directory removed")"'
alias rmbuild="rmnext"

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
  jq -r '.scripts | if has("dev") then "dev" elif has("start") then "start" else "start" end' package.json
}

get_run() {
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

del_modules() {
  path="${1:-.}"

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

  while IFS= read -r -d '' dir; do
    rm -rf "$dir"
    ((modules_count++))
  done < <(find "$path" -name "node_modules" -type d -print0)

  while IFS= read -r -d '' file; do
    rm -f "$file"
    ((locks_count++))
  done < <(find "$path" -name "package-lock.json" -type f -print0)

  echo "Deleted $modules_count node_modules directories and $locks_count package-lock.json files in: $path"
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

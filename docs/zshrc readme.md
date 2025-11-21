# zshrc

## Historical Records

### 2025-11-21

- Added advanced git functions: `gsplit` (safe split: soft reset to `origin/master` with backup) and `gundo` (restore)
- Added `glthis` to fetch/merge only `master` without syncing other branches
- Added `gbdall` to delete fully merged local branches while keeping protected ones (e.g., `master`, `main`)

### 2025-10-15

- Added `nah` to abort ongoing git operations, remove `.lock` files, hard reset, clean, and prune remote references

### 2025-09-10

- Added package manager detection: `isYarn`, `isNpm`, `isPnpm`
- Added package manager helpers: `get_scripts`, `runkey`, `get_run` (auto-detect package manager and suggest commands)

- Added Node.js version helpers: `isMyNodeVersion` (checks Node v16), `myNodeVersionWarning`
- Added `del_modules` to recursively remove `node_modules` and `package-lock.json` under a path
- Added `gcol` (git checkout with completion) and `_gcol` compdef
- Added git helpers: `hasChanges`, `gcmAnd` (switch to main/master and run a command if clean)
- Added color helpers: `color`, `red`, `green`, `cyan`

### 2024-04-11

- Separated shell functions and aliases into independent files for better organization and maintainability
- Functions moved to `.oh-my-zsh/custom/functions.zsh`
- Aliases moved to `.oh-my-zsh/custom/aliases.zsh`

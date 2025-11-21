# Oh My Zsh Custom Configuration

Custom aliases and functions for zsh shell.

## Files

- `aliases.zsh` - Shell aliases for common commands
- `functions.zsh` - Custom shell functions

## Aliases

### Navigation
- `..` - Go up one directory
- `cd..` - Go up one directory
- `-` - Go to previous directory
- `ll` - List files sorted by size

### Editor
- `code` - Open Cursor editor
- `ca` - Open Cursor agent CLI
- `openz` - Open `.zshrc` and custom folder in editor

### Git
- `glt` - Fetch and pull current branch only (uses `glthis` function)

### Docker
- `cphp` - Enter PHP container (requires `$work` variable)

### Node.js / Package Management
- `showrun` / `showscripts` - Show available npm scripts
- `del-modules` - Delete all `node_modules` and `package-lock.json` files
- `rmnext` / `rmbuild` - Remove `.next` directory

### Development
- `rndev` - Run `npm run dev` with confetti
- `rnstart` - Run `npm run start` with confetti
- `rnbuild` - Run `npm run build` with confetti

### Utilities
- `confetti` / `confeti` - Trigger Raycast confetti
- `restart` - Restart terminal session

## Functions

### Git Operations

#### `gcol` - Git checkout with autocompletion
```bash
gcol <branch-name>
```

#### `nah` - Discard all local changes
Discards all local changes, cleans untracked files, and removes lock files.

#### `gsplit` - Split branch into multiple commits
Resets current branch to `origin/master` while keeping changes staged. Requires branch to be pushed to remote.
```bash
gsplit  # Reset to origin/master with changes staged
gundo   # Undo the last gsplit
```

#### `glthis` - Fetch and pull master only
Fetches and merges only the master branch, avoiding errors from other remote branches.

#### `gbdall` - Delete all merged local branches
Safely deletes all local branches that are fully merged. Protects: `master`, `main`, `staging`, `develop`, `dev`, and current branch.

#### `gcmAnd` - Switch to main/master and run command
Switches to main/master branch only if there are no local changes, then executes a command.

### Node.js

#### `del_modules` - Delete node_modules recursively
```bash
del_modules [path]  # Default: current directory
```

#### `isYarn` / `isNpm` / `isPnpm` - Detect package manager
Check which package manager is used in the current project.

#### `get_run` - Show recommended run command
Detects package manager and shows the command to run the project (dev or start script).

#### `get_scripts` - Show all npm scripts
Displays all scripts from `package.json`.

#### `isMyNodeVersion` - Check Node.js version
Returns true if Node.js version is 16.x.

#### `myNodeVersionWarning` - Warn if Node.js version is not 16
Shows warning and suggests using `nvm use 16`.

### Utilities

#### Color functions
- `red "text"` - Print text in red
- `green "text"` - Print text in green
- `cyan "text"` - Print text in cyan

## Requirements

- `jq` - Required for package.json parsing functions
- `git` - Required for git functions
- `node` / `nvm` - Required for Node.js functions

## Configuration

The `$work` variable in `aliases.zsh` should be set to your work directory path.


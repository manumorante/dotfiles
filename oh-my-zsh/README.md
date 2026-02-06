# Oh My Zsh Custom Configuration

Custom aliases and functions for zsh shell, organized by topic.

## Files

```
.oh-my-zsh/custom/
├── aliases.zsh      → General aliases (navigation, IDE, docker, shell)
├── functions.zsh    → Color helpers (red, green, cyan)
├── git.zsh          → Git aliases and functions
├── node.zsh         → Node.js/npm aliases and functions
└── nvm.zsh          → NVM configuration
```

## aliases.zsh - General

| Alias | Description |
|-------|-------------|
| `..` / `cd..` | Go up one directory |
| `-` | Go to previous directory |
| `ll` | List files sorted by size |
| `code` | Open Cursor editor |
| `ca` | Open Cursor agent CLI |
| `cphp` | Enter PHP container (founderz) |
| `confetti` | Raycast confetti |
| `openz` | Open shell config in editor |
| `restart` | Reload terminal session |

## git.zsh - Git

| Command | Description |
|---------|-------------|
| `gh` | Auto-switch GitHub account by directory (personal/work) |
| `glt` | Fetch + pull only master |
| `gcol <branch>` | Checkout with branch autocompletion |
| `nah` | Discard ALL local changes, .lock files, abort operations |
| `gsplit` | Soft reset to origin/master (for splitting branches) |
| `gundo` | Undo last gsplit |
| `gbdall` | Delete all merged local branches (safe) |
| `gcmAnd <cmd>` | Switch to master + run command (only if clean) |
| `hasChanges` | Check for uncommitted changes |

## node.zsh - Node.js

| Command | Description |
|---------|-------------|
| `showrun` | Detect package manager and show run command |
| `showscripts` | Show package.json scripts |
| `rndev` | `npm run dev` with confetti |
| `rnstart` | `npm run start` with confetti |
| `rnbuild` | `npm run build` with confetti |
| `del-modules` | Delete node_modules and package-lock.json |
| `rmnext` / `rmbuild` | Remove .next directory |
| `isYarn` / `isNpm` / `isPnpm` | Detect package manager |

## functions.zsh - Helpers

| Function | Description |
|----------|-------------|
| `red "text"` | Print text in red |
| `green "text"` | Print text in green |
| `cyan "text"` | Print text in cyan |

## Requirements

- `jq` - For package.json parsing
- `git` - For git functions
- `node` / `nvm` - For Node.js functions

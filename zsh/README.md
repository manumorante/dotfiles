# Zsh Configuration

Main zsh configuration file (`.zshrc`).

## Configuration

### Oh My Zsh
- **Theme**: `fwalch`
- **Plugins**: `git`

### Node Version Manager (NVM)
Automatically loads NVM and bash completion from:
- `$HOME/.nvm` (default)
- `$XDG_CONFIG_HOME/nvm` (if XDG_CONFIG_HOME is set)

### pnpm
Adds pnpm to PATH:
- `$HOME/Library/pnpm`

### Performance
- Compinit optimization with `-C` flag (skip security check for faster startup)

## Installation

1. Copy `.zshrc` to `~/.zshrc`
2. Ensure Oh My Zsh is installed
3. Install NVM if using Node.js
4. Install pnpm if using it

## Custom Files

This configuration loads custom files from `$ZSH_CUSTOM`:
- `aliases.zsh` - Custom aliases
- `functions.zsh` - Custom functions
- `shortcut.zsh` - Custom shortcuts

See `../oh-my-zsh/README.md` for details on custom aliases and functions.


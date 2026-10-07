# Oh My Zsh core
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="fwalch"

# Default editor
export EDITOR="cursor --wait"

# Shell behavior preferences
# ENABLE_CORRECTION="true"
COMPLETION_WAITING_DOTS="true"

plugins=(git command-not-found)

source $ZSH/oh-my-zsh.sh

# PATH (unique entries)
typeset -U path PATH
export PATH="$HOME/.local/bin:$PATH"
export PATH="$HOME/.antigravity/antigravity/bin:$PATH"
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# Node / nvm: loaded in ~/.oh-my-zsh/custom/nvm.zsh

# Bun
[ -s "$HOME/.bun/_bun" ] && source "$HOME/.bun/_bun"

# pnpm
export PNPM_HOME="/Users/manumorante/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

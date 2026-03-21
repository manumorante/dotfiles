# Oh My Zsh core
export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="fwalch"

# Shell behavior preferences
ENABLE_CORRECTION="true"
COMPLETION_WAITING_DOTS="true"

plugins=(git command-not-found)

# OPENSPEC:START
# OpenSpec shell completions configuration
fpath=("$HOME/.oh-my-zsh/custom/completions" $fpath)
# OPENSPEC:END

source $ZSH/oh-my-zsh.sh

# PATH (unique entries)
typeset -U path PATH
export PATH="$HOME/.local/bin:$PATH"
export PATH="$HOME/.antigravity/antigravity/bin:$PATH"
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# Node / nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Bun
[ -s "$HOME/.bun/_bun" ] && source "$HOME/.bun/_bun"

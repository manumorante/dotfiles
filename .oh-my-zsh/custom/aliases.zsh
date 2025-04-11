# Easier navigation: .., -
alias ..="cd .."
alias cd..="cd .."
alias -- -="cd -"

# Open Visual Studio Code or Cursor
alias code='cursor'
# alias code='vscode'

# Show run commands from package.json
alias showrun="get_run"
alias showscripts="get_scripts"

# Delete node_modules folder
alias del-modules='(del_modules "."; del_modules "packages")'

# Confetti celebration
alias confetti="open raycast://extensions/raycast/raycast/confetti"
alias confeti="confetti"

# Run npm with confetti
alias rndev="confetti && npm run dev"
alias rnstart="confetti && npm run start"
alias rnbuild="npm run build && confetti"

# Open .zshrc and the custom folder in the configured IDE
alias openz="code ~/.zshrc ~/.oh-my-zsh/custom/"

# Restart terminal
alias restart='exec $SHELL -l'

# Remove .next directory
alias rmnext='rm -rf .next && echo "$(green ".next directory removed")"'
alias rmbuild="rmnext"


# Work directory variable
work="/Users/manumorante/projects/work/founderz"

# Easier navigation: .., ...,
alias ..="cd .."
alias cd..="cd .."
alias -- -="cd -"


alias ll='ls -lh | awk "{print \$5, \$2, \$9}" | sort -k2,2rn | column -t'

# Open Visual Studio Code or Cursor
alias code='cursor'
# alias code='vscode'

# Para entrar a CLI de Cursor
alias ca="cursor-agent"

# Comando pra hacer git fetch + git pull de la rama actual pero sin hacerlo de las demas ramas
# Función definida en functions.zsh
alias glt="glthis"

# Enter php container
alias cphp="cd $work && docker compose --env-file .env.local exec php bash"

# Dividir una rama en varias (funciones seguras en functions.zsh)
# gsplit: resetea a origin/master guardando el commit actual
# gundo: restaura el commit guardado (más seguro que ORIG_HEAD)

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


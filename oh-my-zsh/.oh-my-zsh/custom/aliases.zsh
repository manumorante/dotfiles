# Navigation
alias ..="cd .."
alias cd..="cd .."
alias -- -="cd -"
alias ll='ls -lh | awk "{print \$5, \$2, \$9}" | sort -k2,2rn | column -t'

# IDE
alias code='cursor'
alias ca="cursor-agent"

# Docker
work="/Users/manumorante/projects/work/founderz"
alias cphp="cd $work && docker compose --env-file .env.local exec php bash"

# Confetti
alias confetti="open raycast://extensions/raycast/raycast/confetti"
alias confeti="confetti"

# Shell management
alias openz="code ~/.zshrc ~/.oh-my-zsh/custom/"
alias restart='exec $SHELL -l'

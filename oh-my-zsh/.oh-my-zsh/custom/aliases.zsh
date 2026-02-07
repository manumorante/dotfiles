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

# Daily Log
alias daily-log='/Users/manumorante/projects/personal/ia/daily-log/daily-log'

# Confetti
alias confetti="open raycast://extensions/raycast/raycast/confetti"
alias confeti="confetti"

# Shell management
alias openz="code ~/.zshrc ~/.oh-my-zsh/custom/"
alias myclaude="code ~/.claude/CLAUDE.md"
alias restart='exec $SHELL -l'

# Quick reference for custom commands
myhelp() {
  echo ""
  echo "  NAVIGATION    ..  ll  -"
  echo "  IDE           code (cursor)  ca (cursor-agent)  openz"
  echo "  SHELL         restart  confetti  myhelp  daily-log"
  echo "  DOCKER        cphp"
  echo ""
  echo "  GIT           glt (pull master)  nah (discard all)  gcol <branch>"
  echo "                gsplit / gundo (split branches)"
  echo "                gbdall (delete merged branches)"
  echo "                gh (auto-switch account)"
  echo ""
  echo "                + omz git plugin (gss gp gl gcm gco gcb...)"
  echo ""
  echo "  NODE          showrun  showscripts  rndev  rnstart  rnbuild"
  echo "                del-modules  rmnext"
  echo ""
  echo "  ---"
  echo "  Config:       myclaude  openz"
  echo "  Dotfiles:     ~/projects/personal/dotfiles"
  echo ""
}

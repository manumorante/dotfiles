# Color helpers
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
RESET='\033[0m'

color() {
  local color=$1
  local text=$2
  echo -ne "${color}${text}${RESET}"
}

red() { color $RED "$1"; }
green() { color $GREEN "$1"; }
cyan() { color $CYAN "$1"; }

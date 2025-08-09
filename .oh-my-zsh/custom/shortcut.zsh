# Shortcut API
API_BASE='https://api.app.shortcut.com/api/v3'
TOKEN='<your-shortcut-token>'

# API call helper
api() { curl -s "$API_BASE/$1" -H "Shortcut-Token: $TOKEN" | tr -d '\r'; }

# Main branch command
storyb() {
 local id=$1 story branch from
 [[ -z $id ]] && return 1
 
 story=$(api "stories/$id")
 
 # Try existing branch from Shortcut
 branch=$(jq -r '.branches[0].name // empty' <<< "$story" 2>/dev/null)
 [[ -n $branch ]] && from="Shortcut"
 
 # Try local branch if not found
 if [[ -z $branch ]]; then
   branch=$(git branch -a 2>/dev/null | grep -E "sc-$id(-|$)" | head -1 | sed 's/^[* ]*//' | sed 's/^remotes\/origin\///')
   [[ -n $branch ]] && from="local"
 fi
 
 # Generate new branch if none exists
 if [[ -z $branch ]]; then
   local name=$(jq -r '.name // empty' <<< "$story" | tr '[:upper:]' '[:lower:]' | tr -cs '[:alnum:]' '-' | sed 's/-$//')
   local type=$(jq -r '.story_type // empty' <<< "$story")
   local prefix=$([[ $type == "bug" ]] && echo "BF" || echo "FEAT")
   
   branch="${prefix}/sc-${id}-${name}"
   echo "No existe → Creando: $branch"
   git checkout -b "$branch"
 else
   echo "Rama $from → $branch"
   if ! git checkout "$branch" 2>/dev/null; then
     echo "No existe en origin, creando local..."
     git checkout -b "$branch"
   fi
 fi
}

# Search stories
story() {
 if [[ -z $1 ]]; then
   cat << 'EOF'
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Shortcut Branch Help

  storyb <ID>

  Flujo inteligente:
    1. Busca rama vinculada en Shortcut
    2. Comprueba si existe en local
    3. La crea con formato acordado FEAT/sc-1234-name | BF/sc-1234-name
    4. Checkout automático

  
  story <NAME>

  Buscar por nombre en Shortcut.

  Ejemplos:
    storyb 1234
    story fellow
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EOF
   return 1
 fi
 
 local query=$(printf '%s' "$1" | jq -sRr @uri)
 api "search/stories?query=$query" | jq -r '.data[]? | "\(.id) | \(.name)"'
}

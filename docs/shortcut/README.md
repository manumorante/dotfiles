# Shortcut CLI Tools

Colección de funciones Bash para interactuar con la API de Shortcut y gestionar ramas vinculadas a historias.

## Configuración
Definir variables en el entorno:
```bash
API_BASE='https://api.app.shortcut.com/api/v3'
TOKEN='<tu-shortcut-token>'
```

## Funciones

### `api()`
Realiza una llamada GET a la API de Shortcut.
- **Entrada**: ruta relativa (`stories/ID`, `search/stories?...`)
- **Salida**: JSON limpio (`\r` eliminado)

Ejemplo:
```bash
api "stories/1234"
```

---

### `storyb <ID>`
Gestiona la rama asociada a una historia:
1. Busca rama vinculada en Shortcut (`branches[0]`)
2. Si no existe, busca rama local `sc-ID`
3. Si no existe, crea rama nueva:
   - Formato: `FEAT/sc-ID-nombre` o `BF/sc-ID-nombre`
   - Prefijo según tipo de historia (`feature` o `bug`)
4. Cambia automáticamente a la rama encontrada o creada

Uso:
```bash
storyb 1234
```

---

### `story <NOMBRE>`
Busca historias en Shortcut por nombre.
- Sin argumentos: muestra ayuda con flujo y ejemplos.
- Con nombre: devuelve lista `ID | Título`.

Uso:
```bash
story login
```

---

## Flujo típico
```bash
storyb 4567      # Ir o crear rama para historia 4567
story "checkout" # Buscar historias con 'checkout'
```

## Notas
- Requiere `jq` y `git` instalados.
- La creación de ramas normaliza el título a minúsculas y reemplaza caracteres no alfanuméricos por guiones.

# Biome Configuration

Code formatter and linter configuration with custom settings.

## Configuration

Personal settings that differ from Biome defaults:
- **Spaces instead of tabs** - `indentStyle: "space"`, `indentWidth: 2`
- **Semicolons as needed** - `semicolons: "asNeeded"`
- **Single quotes** - `quoteStyle: "single"`

## Require Config File

 Only activate the extension when a `biome.json` file is found in the project.


## Project Setup

When I want to enable formatting and linting actions on save in a project, I copy both files:
- **`biome.json`** - Biome configuration (controls when formatting/actions are applied)
- **`.vscode/setting.json`** - Editor settings (enables format on save and code actions)

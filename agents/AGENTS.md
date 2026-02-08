# Manu Morante

> **Style for this file**: Keep each section short. Use one-liners and compact lists over verbose tables. Only document what changes how Claude should behave — skip obvious details. Max ~100 lines total.

## Language

- **Code, comments, variable names, commits, PRs**: Always in English.
- **Conversation**: Match the language I use (Spanish or English).

## Docs

Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.

## Shell

Zsh + Oh My Zsh (theme: fwalch, plugin: git). IDE: Cursor (aliased as `code`).

Custom files in `~/.oh-my-zsh/custom/`: `aliases.zsh` (general), `functions.zsh` (color helpers), `git.zsh` (all git), `node.zsh` (all node/npm), `nvm.zsh`.

## Two GitHub Identities (personal / work)

Everything auto-switches by directory:

| | Personal | Work (Founderz) |
|---|---|---|
| **Directory** | `~/projects/personal/` | `~/projects/founderz/` |
| **GitHub user** | `manumorante` | `manumorante-fdz` |
| **SSH** | default key | `git@github-founderz:` rewrite |

How: `~/.gitconfig` `includeIf` per directory (name, email, SSH rewrite). `gh()` function in `git.zsh` runs `gh auth switch` per `pwd`.

## Key Aliases & Functions

Only the ones that affect how Claude should work:

- `code` → `cursor`, `ca` → `cursor-agent`
- `glt` → fetch + pull only master (avoids other branch errors)
- `nah` → discard ALL local changes + .lock files (asks confirmation)
- `gsplit` / `gundo` → soft reset to origin/master for splitting branches / undo
- `gbdall` → delete all merged local branches (safe `-d`)
- `gh()` → auto-switch GitHub account wrapper (uses `command gh`)
- `restart` → `exec $SHELL -l` (reload shell)
- `myhelp` → cheatsheet of all custom commands

Oh My Zsh git plugin: `gss`, `gcm`, `gp`, `gl`, `gco`, `gcb`, `gsta`, `gstp`.

## Universal Agent Config (`~/.agents/`)

`~/.agents/` is the single source of truth for skills, rules, and global instructions. Each agent symlinks to it:

- `~/.claude/CLAUDE.md` → `~/.agents/AGENTS.md`
- `~/.claude/skills/` → `~/.agents/skills/`
- `~/.claude/agents/` → `~/.agents/agents/`
- `~/.cursor/skills/` → `~/.agents/skills/`
- `~/.cursor/agents/` → `~/.agents/agents/`

Always create/edit in `~/.agents/`. Never duplicate — add symlinks instead.

## Dotfiles

All configs (shell, git, ssh, gh, agents) backed up in `~/projects/personal/dotfiles/`. Use `/sync-dotfiles` to sync, sanitize secrets, and update docs. Never commit real emails or tokens.

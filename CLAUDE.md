# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A dotfiles repo for macOS. Each top-level directory contains config files for one tool, stored at the repo-relative paths that mirror where they get symlinked/copied to on the system.

## Repository Structure

```
agents/         → Universal agent config (AGENTS.md, .skill-lock.json) — symlinked by Claude & Cursor
biome/          → Biome linter/formatter config (biome.json + VS Code settings)
gh/             → GitHub CLI config (config.yml, hosts.yml)
git/            → Git config: .gitconfig, .gitignore-global
hushlogin/      → .hushlogin (suppress terminal login message)
iTerm2/         → iTerm2 profile JSON
oh-my-zsh/      → Custom Oh My Zsh files in .oh-my-zsh/custom/
prettier/       → Prettier config
zsh/            → .zshrc (Oh My Zsh theme: fwalch, plugin: git), .zprofile (Homebrew PATH)
```

## Oh My Zsh Custom Files

All `*.zsh` files in `oh-my-zsh/.oh-my-zsh/custom/` are auto-loaded by Oh My Zsh:

- `aliases.zsh` — General aliases (navigation, IDE, docker, shell)
- `functions.zsh` — Color output helpers (`red()`, `green()`, `cyan()`)
- `git.zsh` — Git functions (`nah`, `gcol`, `gsplit`, `gundo`, `glthis`, `gbdall`, `hasChanges`, `gcmAnd`)
- `node.zsh` — Node/npm utilities (package manager detection, `del_modules`, `get_scripts`, `get_run`)
- `nvm.zsh` — NVM (Node Version Manager) initialization, plus automatic `nvm use` in folders with a `.nvmrc`
- `tex.zsh` — TinyTeX (`~/Library/TinyTeX`) on PATH

## Installation Mapping (dotfiles → real location)

| Repo path | Destination |
|-----------|-------------|
| `zsh/.zshrc` | `~/.zshrc` |
| `zsh/.zprofile` | `~/.zprofile` |
| `git/.gitconfig` | `~/.gitconfig` |
| `git/.gitignore-global` | `~/.config/git/ignore` |
| `gh/config.yml` | `~/.config/gh/config.yml` |
| `gh/hosts.yml` | `~/.config/gh/hosts.yml` |
| `oh-my-zsh/.oh-my-zsh/custom/*.zsh` | `~/.oh-my-zsh/custom/*.zsh` |
| `agents/AGENTS.md` | `~/.agents/AGENTS.md` |
| `agents/.skill-lock.json` | `~/.agents/.skill-lock.json` |
| `hushlogin/.hushlogin` | `~/.hushlogin` |

SSH keys are NOT in this repo — import them from 1Password into `~/.ssh/`.
After copying `gh/` configs, authenticate with `gh auth login`.

## Secrets and Placeholders

Sensitive values are replaced with placeholders. NEVER commit real values.

| Placeholder | Where | What to replace with |
|-------------|-------|---------------------|
| `[personal_email]` | `git/.gitconfig` | Personal email (1Password) |

When editing config files, always check that no real emails, tokens, or keys leak into the commit.

## Conventions

- Shell functions use Spanish for user-facing messages (confirmations, errors, tips)
- Color helpers from `functions.zsh` are used throughout: `$(red 'message')`, `$(green 'message')`, `$(cyan 'message')`
- Destructive operations (`nah`, `del_modules`) require interactive confirmation before proceeding
- No build system or tests — this is a collection of config files and shell scripts

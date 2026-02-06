# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A dotfiles repo for macOS. Each top-level directory contains config files for one tool, stored at the repo-relative paths that mirror where they get symlinked/copied to on the system.

## Repository Structure

```
biome/          → Biome linter/formatter config (biome.json + VS Code settings)
gh/             → GitHub CLI config (config.yml, hosts.yml) with multi-account setup
git/            → Git config: .gitconfig (conditional includes), .gitconfig-personal, .gitconfig-work, .gitignore-global
hushlogin/      → .hushlogin (suppress terminal login message)
iTerm2/         → iTerm2 profile JSON
oh-my-zsh/      → Custom Oh My Zsh files in .oh-my-zsh/custom/
prettier/       → Prettier config
ssh/            → SSH config with host aliases for dual GitHub identity
zsh/            → .zshrc (Oh My Zsh theme: fwalch, plugin: git, NVM, Antigravity)
```

## Dual GitHub Identity System

The core architectural pattern: personal (`manumorante`) and work (`manumorante-fdz`) identities are auto-selected by directory path (`~/projects/personal/` vs `~/projects/founderz/`).

Three layers coordinate this:
1. **Git** (`git/.gitconfig`): `includeIf "gitdir:"` loads the right user name/email and SSH URL rewrite
2. **SSH** (`ssh/config`): Separate keys per identity, work uses `Host github-founderz` alias
3. **GitHub CLI** (`oh-my-zsh/.oh-my-zsh/custom/git.zsh`): `gh()` wrapper function runs `gh auth switch` before every command based on `pwd`

## Oh My Zsh Custom Files

All `*.zsh` files in `oh-my-zsh/.oh-my-zsh/custom/` are auto-loaded by Oh My Zsh:

- `aliases.zsh` — General aliases (navigation, IDE, docker, shell)
- `functions.zsh` — Color output helpers (`red()`, `green()`, `cyan()`)
- `git.zsh` — Git functions (`nah`, `gcol`, `gsplit`, `gundo`, `glthis`, `gbdall`, `hasChanges`, `gcmAnd`) and the `gh()` auto-switch wrapper
- `node.zsh` — Node/npm utilities (package manager detection, `del_modules`, `get_scripts`, `get_run`)

## Installation Mapping (dotfiles → real location)

| Repo path | Destination |
|-----------|-------------|
| `zsh/.zshrc` | `~/.zshrc` |
| `git/.gitconfig` | `~/.gitconfig` |
| `git/.gitconfig-personal` | `~/.gitconfig-personal` |
| `git/.gitconfig-work` | `~/.gitconfig-work` |
| `git/.gitignore-global` | `~/.config/git/ignore` |
| `ssh/config` | `~/.ssh/config` |
| `gh/config.yml` | `~/.config/gh/config.yml` |
| `gh/hosts.yml` | `~/.config/gh/hosts.yml` |
| `oh-my-zsh/.oh-my-zsh/custom/*.zsh` | `~/.oh-my-zsh/custom/*.zsh` |
| `hushlogin/.hushlogin` | `~/.hushlogin` |

SSH keys are NOT in this repo — import them from 1Password into `~/.ssh/`.
After copying `gh/` configs, authenticate both accounts with `gh auth login`.

## Secrets and Placeholders

Sensitive values are replaced with placeholders. NEVER commit real values.

| Placeholder | Where | What to replace with |
|-------------|-------|---------------------|
| `[personal_email]` | `git/.gitconfig`, `git/.gitconfig-personal` | Personal email (1Password) |
| `[work_email]` | `git/.gitconfig-work` | Work email (1Password) |

When editing config files, always check that no real emails, tokens, or keys leak into the commit.

## Conventions

- Shell functions use Spanish for user-facing messages (confirmations, errors, tips)
- Color helpers from `functions.zsh` are used throughout: `$(red 'message')`, `$(green 'message')`, `$(cyan 'message')`
- Destructive operations (`nah`, `del_modules`) require interactive confirmation before proceeding
- No build system or tests — this is a collection of config files and shell scripts

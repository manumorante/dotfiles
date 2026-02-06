# Git Configuration

Conditional Git config that automatically switches between personal and work settings based on repository location.

## Files

- **`.gitconfig`** → Main config with conditional includes, core settings
- **`.gitconfig-personal`** → Personal repos (`~/projects/personal/`)
- **`.gitconfig-work`** → Work repos (`~/projects/founderz/`) with SSH key rewrite
- **`.gitignore-global`** → Global gitignore rules

## Setup

```bash
cp .gitconfig .gitconfig-personal .gitconfig-work ~/
git config --global core.excludesfile ~/.gitignore-global
cp .gitignore-global ~/.config/git/ignore
```

Replace `[personal_email]` and `[work_email]` with actual emails (stored in 1Password).

## How the dual identity works

1. **SSH** (`~/.ssh/config`) routes each host to a different key
2. **Git config** (`includeIf`) sets name/email per directory
3. **Git URL rewrite** (`.gitconfig-work`) rewrites `git@github.com:` to `git@github-founderz:`
4. **GitHub CLI** (`gh()` function) auto-switches account per directory

All four layers use the same directory convention (`~/projects/personal/` vs `~/projects/founderz/`).

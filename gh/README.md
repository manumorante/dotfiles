# GitHub CLI Configuration

Preferences for `gh`.

## Files

- `config.yml` → Preferences, aliases. Copy to `~/.config/gh/config.yml`
- `hosts.yml` → Account structure. Copy to `~/.config/gh/hosts.yml`

## Setup

```bash
mkdir -p ~/.config/gh
cp config.yml hosts.yml ~/.config/gh/
gh auth login
```

## Aliases

- `gh co <pr-number>` → `gh pr checkout`

## Notes

The tokens are managed by `gh` itself, not stored in these files.

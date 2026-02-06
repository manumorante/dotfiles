# GitHub CLI Configuration

Preferences and multi-account setup for `gh`.

## Files

- `config.yml` → Preferences, aliases. Copy to `~/.config/gh/config.yml`
- `hosts.yml` → Account structure. Copy to `~/.config/gh/hosts.yml`

## Setup

```bash
mkdir -p ~/.config/gh
cp config.yml hosts.yml ~/.config/gh/
gh auth login  # Authenticate both accounts
```

## Aliases

- `gh co <pr-number>` → `gh pr checkout`

## Notes

After copying, you need to authenticate both accounts with `gh auth login`. The tokens are managed by `gh` itself, not stored in these files.

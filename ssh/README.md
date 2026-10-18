# SSH Configuration

SSH host config for GitHub.

## Hosts

| Host | Identity | Key |
|------|----------|-----|
| `github.com` | `manumorante` | `~/.ssh/id_ed25519_manumorante` |

## Setup

```bash
cp config ~/.ssh/config
chmod 600 ~/.ssh/config
```

SSH keys must be imported from 1Password into `~/.ssh/`.

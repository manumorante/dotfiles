# SSH Configuration

SSH host aliases for dual GitHub identity and staging server.

## Hosts

| Host | Identity | Key |
|------|----------|-----|
| `github.com` | `manumorante` (personal) | `~/.ssh/id_ed25519_manumorante` |
| `github-founderz` | `manumorante-fdz` (work) | `~/.ssh/id_ed25519_founderz` |
| `staging.founderz.com` | `azureuser` | `~/.ssh/id_rsa_staging` |

## Setup

```bash
cp config ~/.ssh/config
chmod 600 ~/.ssh/config
```

SSH keys must be imported from 1Password into `~/.ssh/`.

## How it works

`.gitconfig-work` rewrites `git@github.com:` to `git@github-founderz:`, which routes through the work SSH key. Personal repos use the default `github.com` host with the personal key.

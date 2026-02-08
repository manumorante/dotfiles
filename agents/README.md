# Universal Agent Config

Shared configuration for AI coding agents (Claude Code, Cursor, etc.), managed from a single source of truth at `~/.agents/`.

## Structure

```
~/.agents/
├── AGENTS.md          → Global instructions for all agents
├── .skill-lock.json   → Installed skills registry
├── skills/            → Shared skills (synced separately)
└── agents/            → Custom agent definitions (e.g. tailwind-craftsman.md)
```

## Symlink Map

| Source (`~/.agents/`) | Target |
|---|---|
| `AGENTS.md` | `~/.claude/CLAUDE.md` |
| `skills/` | `~/.claude/skills/` |
| `agents/` | `~/.claude/agents/` |
| `skills/` | `~/.cursor/skills/` |
| `agents/` | `~/.cursor/agents/` |

## Setup

```bash
# Create base directory
mkdir -p ~/.agents/skills ~/.agents/agents

# Claude Code symlinks
ln -sf ~/.agents/AGENTS.md ~/.claude/CLAUDE.md
ln -sf ~/.agents/skills ~/.claude/skills
ln -sf ~/.agents/agents ~/.claude/agents

# Cursor symlinks
ln -sf ~/.agents/skills ~/.cursor/skills
ln -sf ~/.agents/agents ~/.cursor/agents
```

## Installed Skills

Managed via `.skill-lock.json`:

| Skill | Source |
|-------|--------|
| `skill-creator` | `anthropics/skills` |
| `find-skills` | `vercel-labs/skills` |

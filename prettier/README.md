# Prettier Configuration

Code formatter configuration for consistent code style.

## Configuration

- **No semicolons** - `semi: false`
- **Single quotes** - `singleQuote: true`
- **Brackets on same line** - `bracketSameLine: true`
- **Line width** - `printWidth: 100`
- **Tailwind CSS plugin** - Automatically sorts Tailwind classes

## Installation

Copy `.prettierrc` to your project root or home directory:

```bash
cp .prettierrc ~/.prettierrc  # Global
# or
cp .prettierrc ./project/.prettierrc  # Project-specific
```

## Requirements

```bash
npm install -D prettier prettier-plugin-tailwindcss
```


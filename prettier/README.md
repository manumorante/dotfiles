# Prettier Configuration

Code formatter configuration for consistent code style.

## Configuration

- **No semicolons** - `semi: false`
- **Single quotes** - `singleQuote: true`
- **Brackets on same line** - `bracketSameLine: true`
- **Line width** - `printWidth: 100`
- **Tailwind CSS plugin** - Automatically sorts Tailwind classes

## Installation

Copy `.prettierrc` to the root of each project that uses it (not to the home directory: the
Tailwind plugin fails in projects that do not install it):

```bash
cp .prettierrc ./project/.prettierrc
```

## Requirements

```bash
npm install -D prettier prettier-plugin-tailwindcss
```


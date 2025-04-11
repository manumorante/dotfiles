# Custom Oh My Zsh Configurations

Custom configurations for Oh My Zsh, optimized for macOS.

## Structure

```
oh-my-zsh/
├── .zshrc                 # Main configuration
└── custom/
    ├── aliases.zsh        # Custom aliases
    └── functions.zsh      # Custom functions
```

## Installation

1. Install Oh My Zsh:

   ```bash
   sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
   ```

2. Copy the contents of `.zshrc` to your `~/.zshrc` file

## Configuration

- Theme: `fwalch`
- Plugins: `git`
- Additional configurations:
  - NVM for Node.js management
  - pnpm for package management
  - Compinit optimization

## Dependencies

- [Oh My Zsh](https://ohmyz.sh/)
- [NVM](https://github.com/nvm-sh/nvm)
- [pnpm](https://pnpm.io/)

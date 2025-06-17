# EM Platform Setup Instructions

## Prerequisites

- Node.js 18.17 or later
- pnpm 8.0 or later
- Git

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd web-frontend-anvaya
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

## Development

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking

## Project Structure

See [project-structure.md](./project-structure.md) for detailed information about the project organization.

## Design System

See [design-system.md](./design-system.md) for information about our design system and component architecture.

## Development Guidelines

1. **Code Style**

   - Use TypeScript for all new code
   - Follow ESLint and Prettier configurations
   - Use meaningful variable and function names

2. **Git Workflow**

   - Create feature branches from `main`
   - Write meaningful commit messages
   - Submit PRs for review

3. **Testing**

   - Write tests for new features
   - Maintain test coverage
   - Run tests before submitting PRs

4. **Performance**
   - Monitor bundle size
   - Optimize images and assets
   - Use proper code splitting

## Troubleshooting

1. **Installation Issues**

   - Clear pnpm store: `pnpm store prune`
   - Delete node_modules: `rm -rf node_modules`
   - Reinstall: `pnpm install`

2. **Build Issues**

   - Clear Next.js cache: `rm -rf .next`
   - Rebuild: `pnpm build`

3. **TypeScript Issues**
   - Run type check: `pnpm type-check`
   - Check tsconfig.json settings

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

See [LICENSE](../LICENSE) for details.

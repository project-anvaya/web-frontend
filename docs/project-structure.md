# EM Platform Project Structure

## Overview

The EM Platform is built using Next.js 14 with the App Router architecture. This document outlines the project structure and organization principles.

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   └── layout.tsx         # Root layout
├── components/            # Shared components
│   ├── ui/               # ShadCN UI components
│   └── common/           # Common reusable components
├── features/             # Feature-based modules
│   ├── auth/            # Authentication feature
│   ├── vendors/         # Vendor management feature
│   └── events/          # Event management feature
├── lib/                  # Utility functions and shared logic
│   ├── utils/           # Helper functions
│   ├── hooks/           # Custom React hooks
│   └── api/             # API client and endpoints
├── styles/              # Global styles and CSS modules
└── types/               # TypeScript type definitions

public/                  # Static assets
docs/                    # Project documentation
```

## Feature Organization

Each feature module in `/features` should follow this structure:

```
features/
└── feature-name/
    ├── components/      # Feature-specific components
    ├── hooks/          # Feature-specific hooks
    ├── api/            # Feature-specific API calls
    ├── types/          # Feature-specific types
    └── utils/          # Feature-specific utilities
```

## Key Principles

1. **Feature-First Organization**: All feature-specific code should live in the `/features` directory
2. **Shared Components**: Reusable components go in `/components`
3. **Type Safety**: Strict TypeScript usage throughout
4. **Code Splitting**: Features are automatically code-split by Next.js
5. **State Management**:
   - Server state: TanStack Query
   - Client state: Zustand
6. **Component Architecture**:
   - Use ShadCN UI components as base
   - Extend with Material You design tokens
   - Follow atomic design principles

## Best Practices

1. Keep feature modules self-contained
2. Use absolute imports with `@/*` alias
3. Follow the "colocation" principle for related code
4. Maintain clear boundaries between features
5. Use TypeScript for all new code
6. Follow the established naming conventions

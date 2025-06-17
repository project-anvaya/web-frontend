# EM Platform Coding Conventions

## File Naming

### React Components

- Use PascalCase for component files: `Button.tsx`, `UserProfile.tsx`
- Use `.tsx` extension for components with JSX
- Use `.ts` extension for pure TypeScript files

### Utilities and Hooks

- Use camelCase for utility files: `formatDate.ts`, `useAuth.ts`
- Prefix hooks with `use`: `useAuth.ts`, `useQuery.ts`

### Feature Modules

- Use kebab-case for feature directories: `vendor-management/`, `event-booking/`
- Use PascalCase for feature components: `VendorCard.tsx`, `EventForm.tsx`

## Code Style

### TypeScript

```typescript
// Use explicit types for props
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// Use type inference where appropriate
const count = 0; // TypeScript infers number

// Use type assertions sparingly
const element = document.getElementById('root') as HTMLElement;
```

### React Components

```typescript
// Use functional components with TypeScript
export const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'md',
  children,
}) => {
  return (
    <button
      className={cn(
        'rounded-full',
        size === 'sm' && 'px-3 py-1',
        size === 'md' && 'px-4 py-2',
        size === 'lg' && 'px-6 py-3'
      )}
    >
      {children}
    </button>
  );
};
```

### State Management

```typescript
// Zustand store
interface AuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

// TanStack Query
const useUser = (id: string) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUser(id),
  });
};
```

## Import Order

1. React and Next.js imports
2. Third-party libraries
3. Components
4. Hooks
5. Utils
6. Types
7. Styles

```typescript
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { formatDate } from '@/utils/date';
import type { User } from '@/types';
import './styles.css';
```

## Comments and Documentation

### Component Documentation

```typescript
/**
 * Button component that follows Material You design system
 * @param variant - The visual style of the button
 * @param size - The size of the button
 * @param children - The content of the button
 */
export const Button: React.FC<ButtonProps> = ({ ... }) => {
  // Component implementation
};
```

### Function Documentation

```typescript
/**
 * Formats a date string into a localized format
 * @param date - The date to format
 * @param locale - The locale to use for formatting
 * @returns Formatted date string
 */
export const formatDate = (date: string, locale = 'en-US'): string => {
  // Function implementation
};
```

## Testing Conventions

### Test File Naming

- Use `.test.ts` or `.test.tsx` for test files
- Place tests next to the files they test: `Button.tsx` → `Button.test.tsx`

### Test Structure

```typescript
describe('Button', () => {
  it('renders correctly', () => {
    // Test implementation
  });

  it('handles click events', () => {
    // Test implementation
  });
});
```

## Git Commit Messages

Follow the Conventional Commits specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

Example:

```
feat(auth): add social login support

- Add Google OAuth integration
- Add Facebook login button
- Update auth documentation

Closes #123
```

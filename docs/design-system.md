# EM Platform Design System

## Overview

The EM Platform uses a custom design system built on top of Tailwind CSS and ShadCN UI, with Material You design tokens. This document outlines our design principles and component architecture.

## Design Tokens

### Color System

We use Material You color tokens mapped to Tailwind classes:

```typescript
// Example usage in components
<div className="bg-primary text-primary-on">
<div className="bg-surface-dim text-surface-on">
```

### Typography

Typography follows Material You's type scale:

- Display: `font-display`
- Headline: `font-headline`
- Title: `font-title`
- Body: `font-sans`
- Label: `font-label`

### Elevation

Material You elevation levels are available as shadow utilities:

```typescript
// Example usage
<div className="shadow-elevation-1">
<div className="shadow-elevation-3">
```

## Component Architecture

### Base Components (ShadCN)

We use ShadCN UI components as our foundation:

- Button
- Card
- Dialog
- Input
- Select
- etc.

### Custom Components

Custom components should:

1. Extend ShadCN components when possible
2. Use Material You design tokens
3. Follow atomic design principles
4. Be fully typed with TypeScript
5. Include proper accessibility attributes

### Component Structure

```typescript
// Example component structure
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types';

export const Button = ({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'rounded-full px-4 py-2',
        'transition-colors duration-200',
        variant === 'primary' && 'bg-primary text-primary-on',
        variant === 'secondary' && 'bg-secondary text-secondary-on',
        className
      )}
      {...props}
    />
  );
};
```

## Animation

We use Framer Motion for animations:

```typescript
import { motion } from 'framer-motion';

// Example usage
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
  Content
</motion.div>
```

## Best Practices

1. **Consistency**: Use design tokens for all styling
2. **Accessibility**: Follow WCAG guidelines
3. **Responsiveness**: Design for all screen sizes
4. **Performance**: Optimize animations and transitions
5. **Dark Mode**: Support both light and dark themes
6. **Documentation**: Document all custom components

## Usage Guidelines

1. Always use Tailwind classes for styling
2. Extend ShadCN components when possible
3. Use Material You tokens for colors and typography
4. Follow the established component patterns
5. Maintain consistent spacing and sizing
6. Use semantic HTML elements

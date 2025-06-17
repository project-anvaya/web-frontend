# Component Architecture Guidelines

This document outlines how to create, extend, and structure components in the EM Platform.

---

## 🧩 Component Types

| Type             | Folder                   | Example                    |
| ---------------- | ------------------------ | -------------------------- |
| UI Base          | `/components/ui/`        | `Button.tsx`, `Input.tsx`  |
| Shared/Common    | `/components/common/`    | `Navbar.tsx`, `Footer.tsx` |
| Feature-Specific | `features/*/components/` | `VendorCard.tsx`           |

---

## 🛠️ Building Components

1. Prefer extending **ShadCN components** unless absolutely custom
2. Always use **Material You design tokens** (via Tailwind)
3. Keep styling utility-based (avoid inline styles)

---

## 📜 Type Safety

- Always use interfaces for props
- Provide default props where needed
- Never use `any`

```ts
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}
```

## ♿ Accessibility Rules

- Use semantic tags (`<button>`, `<nav>`, `<section>`)
- Use `aria-*` attributes when needed
- Use Radix-powered components for accessibility-by-default

## 🌈 Styling Rules

- Use Tailwind spacing, typography, and color classes
- All color classes should come from our token set:
  - `bg-primary`
  - `text-surface-on`
  - `shadow-elevation-3`

## 🔍 Component File Structure

```
components/
└── ui/
    ├── Button.tsx
    ├── Input.tsx
    └── Card.tsx
```

```ts
export const Button = ({
  size = 'md',
  ...props
}: ButtonProps) => (
  <button
    className={cn(
      'rounded-full font-label px-4 py-2',
      size === 'sm' && 'text-sm',
      size === 'lg' && 'text-lg'
    )}
    {...props}
  />
);
```

## ✅ Summary Best Practices

- Use ShadCN as base
- Apply Tailwind tokens
- Stick to one purpose per component
- Split into feature-specific folders when needed
- Always include basic props typing

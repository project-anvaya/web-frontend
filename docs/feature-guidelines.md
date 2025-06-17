# Feature Module Guidelines

This document outlines how to structure, name, and organize feature modules in the EM Platform frontend codebase.

---

## 📦 What Is a Feature?

A _feature_ is a self-contained business module. Examples:

- `auth/`
- `vendors/`
- `event-booking/`
- `dashboard/`

All features live in `src/features/`.

---

## 🧱 Standard Structure

Every feature folder should follow this structure:

features/feature-name/
├── components/ # Feature-specific UI components
├── hooks/ # Custom hooks
├── api/ # API queries/mutations using TanStack Query
├── types/ # TypeScript types/interfaces
├── utils/ # Local helpers
└── index.ts # Optional: central export for cleaner imports

Example:

features/vendors/
├── components/
│ └── VendorCard.tsx
├── hooks/
│ └── useVendors.ts
├── api/
│ └── getVendors.ts
├── types/
│ └── vendor.ts
├── utils/
│ └── formatCategory.ts

---

## 🧑‍🎨 Component Rules

- Feature-specific components belong in `features/feature/components/`
- Shared UI components (like Button, Card) go in `/components/ui/`

---

## 🌐 API Integration

Use TanStack Query and abstract all API logic into the `api/` directory.

```ts
// features/vendors/api/getVendors.ts
export const getVendors = async (): Promise<Vendor[]> => {
  const res = await fetch('/api/vendors');
  return res.json();
};
```

Use useQuery in hooks/.

---

## 📜 Type Definitions

- Always define your own types in types/
- Do not mix types into logic or utils directly

---

## ✅ Best Practices

- Keep all logic inside the feature folder
- Don't import components between features
- Use absolute imports: @/features/vendors/api/getVendors
- Split large features into subfolders if needed

---

## 🔄 Updates

If you're modifying an existing feature:

- Match its current structure
- Keep imports clean
- Do not break its component/logic boundaries

For help, check out /features/auth or ask your reviewer.

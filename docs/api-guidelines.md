# API Guidelines

This document outlines how to interact with APIs in the EM Platform frontend using best practices, type safety, and performance principles.

---

## 🎯 Goals

- Type-safe API interactions
- Consistent usage of TanStack Query
- Separation of concerns: fetch logic vs UI logic
- Scalable and maintainable API structure

---

## 🔁 Fetch Layer Convention

All external or backend API calls should be placed in the `features/*/api/` directory.

Each API function should:

- Return typed data (`Promise<Type>`)
- Handle fetch errors cleanly
- Accept parameters using `options` or named arguments

```ts
// features/vendors/api/getVendors.ts
export const getVendors = async (): Promise<Vendor[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/vendors`);
  if (!res.ok) throw new Error('Failed to fetch vendors');
  return res.json();
};
```

---

## 🔄 Using TanStack Query

We use TanStack Query for all server state management.

```ts
// features/vendors/hooks/useVendors.ts
import { useQuery } from '@tanstack/react-query';

export const useVendors = () => {
  return useQuery({
    queryKey: ['vendors'],
    queryFn: getVendors,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
```

---

## 📬 POST / Mutation Requests

Mutations should follow the same pattern with useMutation:

```ts
export const addVendor = async (payload: CreateVendorPayload) => {
  const res = await fetch('/api/vendors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error('Failed to create vendor');
  return res.json();
};
```

---

## 📦 API Typing

Always define request and response types.

```ts
// features/vendors/types/vendor.ts
export interface Vendor {
  id: string;
  name: string;
  services: string[];
  location: string;
}

export interface CreateVendorPayload {
  name: string;
  services: string[];
  location: string;
}
```

---

## ✅ DOs and DON'Ts

| ✅ Do                  | ❌ Don't                |
| ---------------------- | ----------------------- |
| Type everything        | Use any                 |
| Use async/await        | Chain .then()           |
| Catch & throw errors   | Silently fail           |
| Keep logic in api/     | Mix logic into UI files |
| Use .env for base URLs | Hardcode strings        |

---

## 🛠️ Tools & Helpers

- `lib/apiClient.ts`: optional wrapper for fetch (can be added later)
- Centralize headers or auth tokens there

---

## 💡 Advanced Patterns (Future)

- API caching & revalidation
- Global error handling via QueryClient
- Retry & backoff strategies
- Optimistic UI updates

---

## 💬 Summary

- All API calls live in features/\*/api/
- Use TanStack Query for all async data
- Keep API & UI concerns separate
- Use .env for all dynamic values
- Prefer REST for MVP — GraphQL can be considered later

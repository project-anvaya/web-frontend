# Continuous Integration Pipeline

This document outlines the CI/CD pipeline configured for the EM Platform frontend.

---

## ⚙️ CI Provider

- Platform: GitHub Actions
- Config file: `.github/workflows/ci.yml`

---

## 🔍 What the Pipeline Checks

Each push and pull request to `main` and `nexus-internship` runs:

1. **Type Checking**

   - Ensures no TypeScript errors
   - Uses `tsc --noEmit`

2. **Linting**

   - Enforces ESLint rules
   - Uses `pnpm lint`

3. **Formatting**

   - Validates Prettier formatting
   - Uses `pnpm format:check` or `pnpm prettier --check`

4. **Test Suite** (future)
   - Will run Playwright or React Testing Library tests

---

## 🚦 GitHub Checks

| Check Name      | Script              |
| --------------- | ------------------- |
| Lint            | `pnpm lint`         |
| Type Check      | `pnpm type-check`   |
| Format Check    | `pnpm format:check` |
| Test (optional) | `pnpm test`         |

---

## 📁 Sample Workflow File

```yaml
name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install pnpm
        run: npm install -g pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Lint
        run: pnpm lint

      - name: Type Check
        run: pnpm type-check

      - name: Format Check
        run: pnpm prettier --check .
```

## 💡 Future Improvements

- Add test runner
- Add production deployment checks
- Integrate bundle size tracking

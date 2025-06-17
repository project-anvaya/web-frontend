# Pull Request Review Process

This document outlines how pull requests (PRs) are created, reviewed, and merged in the EM Platform repository.

---

## 🧱 Branching Strategy

- `main` → Stable production-ready code
- `nexus-internship` → Used exclusively for intern PRs
- `feature/*` → Used for new features
- `bugfix/*` → Used for fixing issues
- `hotfix/*` → Reserved for critical production fixes

---

## 📝 PR Naming Convention

Use this format:

```
<type>(<scope>): <short description>
```

Examples:

- `feat(auth): implement OTP-based login`
- `fix(events): resolve date picker overflow bug`
- `chore(ci): add lint check on push`

---

## ✅ PR Checklist

Before opening a PR:

- [ ] All code builds without error (`pnpm dev`)
- [ ] Passes `pnpm lint`, `pnpm type-check`, and `pnpm format`
- [ ] Commits follow conventional commit format
- [ ] Only the intended feature/bug is included
- [ ] Feature follows `feature-guidelines.md`
- [ ] Component follows `component-guidelines.md`
- [ ] Proper typing and test coverage is added if applicable

---

## 🔍 Reviewer Guidelines

- Review assigned PRs within 24–48 hours
- Use **GitHub code suggestions** where possible
- Leave specific, constructive feedback
- Request changes if:
  - Code is not modular
  - Feature structure is broken
  - State is misused (Zustand, TanStack, etc.)
- Approve only if the PR meets all checklist items

---

## 🚀 Merging Policy

| PR Type    | Target Branch      | Merge Method   | Who Can Merge             |
| ---------- | ------------------ | -------------- | ------------------------- |
| Intern PR  | `nexus-internship` | Squash & Merge | Onkar / Assigned Reviewer |
| Feature PR | `main`             | Rebase & Merge | Onkar / Core Team         |
| Hotfix     | `main`             | Merge Commit   | Onkar only                |

---

## 🔁 Back-and-Forth Etiquette

- Don't argue defensively — ask questions
- Use emojis for light commentary 👍✅😅
- Always tag the original reviewer after pushing updates

---

## 💡 Tips

- Use **draft PRs** for ongoing work
- If you're blocked, add a comment and tag the reviewer
- Use GitHub's checklist feature to make PR self-reviewable

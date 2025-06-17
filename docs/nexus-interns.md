# Nexus Internship Contributor Guidelines

Welcome to the EM Platform team! This document serves as your guide for contributing as part of the Nexus Internship cohort.

## 📌 Purpose of This Document

- To set clear expectations for interns
- To define workflows for contributing
- To maintain quality, consistency, and clarity across the codebase

---

## 🧑‍💻 Working Branch

> **All intern pull requests must be made to the `nexus-internship` branch.**

You are **not allowed to push or make PRs to `main`** unless explicitly told to.

---

## 🧭 Workflow

1. **Clone the repo**

   ```bash
   git clone https://github.com/project-anvaya/web-frontend.git
   cd web-frontend
   ```

2. Create a new branch for your task

   ```bash
   git checkout -b feature/your-task-name
   ```

3. Make your changes in `src/features/your-feature`

4. Run checks before committing

   ```bash
   pnpm lint
   pnpm type-check
   pnpm format
   ```

5. Commit using conventional commit messages

   ```
   feat(vendors): add vendor listing grid
   ```

6. Push and create a pull request to `nexus-internship`

## 🏷️ Naming Conventions

- Files: `camelCase.ts`, `PascalCase.tsx`
- Folders: `kebab-case`
- PR Title: `feat(scope): short summary`

See `conventions.md` for full rules.

## ✅ PR Requirements

- Descriptive PR title & body
- Link to issue/task ID (if applicable)
- Only include changes for your assigned task
- Do not commit `.env.local`, `node_modules`, or `.next`

## ❌ Common Mistakes to Avoid

- Pushing directly to `main` or `project-anvaya:main`
- Naming files inconsistently
- Leaving debug `console.logs` in code
- Submitting incomplete components without placeholder handling

## 🧠 Need Help?

If you're stuck:

1. Ask in the `#team-11-oss` channel (if using Whatsapp)
2. Tag your reviewer in the PR
3. Check the `/docs` directory before asking

Thanks for being part of the team — let's build something great!

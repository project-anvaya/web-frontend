# Environment Variables Reference

This document outlines all environment variables used in the EM Platform frontend.

---

## 🔒 File to Configure

All environment variables should go in `.env.local` (for local dev).  
Do **not** commit this file to GitHub.

---

## 🌐 Common Variables

| Variable                   | Description                               |
| -------------------------- | ----------------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | The base URL for backend API endpoints    |
| `NEXT_PUBLIC_APP_NAME`     | Public-facing app name                    |
| `NEXT_PUBLIC_ANALYTICS_ID` | Analytics platform key (e.g., Google Tag) |
| `NEXT_PUBLIC_IMAGE_CDN`    | CDN base URL for images (if used)         |

---

## 🔐 Auth-Specific

| Variable                             | Description              |
| ------------------------------------ | ------------------------ |
| `NEXT_PUBLIC_AUTH_PROVIDER_GOOGLE`   | Google client ID (OAuth) |
| `NEXT_PUBLIC_AUTH_PROVIDER_FACEBOOK` | Facebook App ID (OAuth)  |

---

## 💡 Usage

Environment variables **must be prefixed with `NEXT_PUBLIC_`** to be exposed to the browser in a Next.js frontend.

```ts
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
```

## 🧪 Example .env.local

```
NEXT_PUBLIC_API_BASE_URL=https://api.emplatform.in
NEXT_PUBLIC_APP_NAME=EM Platform
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXX1234
NEXT_PUBLIC_AUTH_PROVIDER_GOOGLE=AIzaSyXXXXX
```

## 🚫 Never Commit Secrets

Do not commit `.env.local`, API keys, or OAuth secrets to GitHub.

Use `.env.example` to share key formats only.

# CLAUDE.md — Project context for Ali Haider's portfolio site

Personal portfolio for **Ali Haider**, a WordPress-developer/freelancer, live at
**https://alihaider.dev**. It is evolving from a portfolio into a course business.
Owner email: alisdevhub@gmail.com. Repo: github.com/alihaider-dev/MY-Portfolio-Site.

## Tech stack
- **Vite + React 19 + Tailwind CSS v4 + Framer Motion.**
- Build-time **prerendering (SSG)** for SEO, then hydrated on the client.
- Hosted on **Vercel** (auto-deploys on push to `main`). DNS on **Cloudflare**.

## Commands
- `npm run dev` — local dev server (http://localhost:5173).
- `npm run build` — full production build: `vite build` → SSR build → `node prerender.mjs`.
- `npm run build:client` — client-only build (skips prerender), for quick checks.

## How the prerender/SSG works (don't break this)
- `src/entry-server.jsx` server-renders `<App/>` to an HTML string.
- `prerender.mjs` (runs after build, plain Node — no browser) does two things:
  1. injects that HTML into `<div id="root">` in `dist/index.html`, and
  2. **inlines the CSS** into `<head>` and removes the render-blocking `<link>`.
- `src/main.jsx` uses **`hydrateRoot`** (falls back to `createRoot` if root is empty)
  so the prerendered, already-painted content counts toward LCP.
- Net effect: crawlers/first paint get full HTML; the headline is the LCP element
  and must stay paintable without JS (it's intentionally NOT animated).

## Editing content (do this instead of touching components)
All copy/data lives in editable data files:
- `src/data/site.js` — name, headline, socials, **Discord invite**, About, FAQ, stats, services, Turnstile site key, Web3Forms key.
- `src/data/projects.js` — real client work (Kentucky Best, Rockford Ave, NAAIA LA).
- `src/data/testimonials.js` — video testimonial + **real Fiverr** written reviews.
- `src/data/courses.js` — Courses section: course cards, curriculum previews, waitlist
  copy. Each course has a `live` flag — `false` shows "Join the Waitlist"; flip to
  `true` (and set `url`) once the course exists on courses.alihaider.dev to show
  "Enroll Free →".
Components live in `src/components/`. Match the existing Tailwind + Framer Motion style.

## Contact form — DO NOT "simplify" it
Two-step by design (see `src/components/Contact.jsx` + `api/contact.js`):
1. Browser gets a **Cloudflare Turnstile** token → POSTs to `/api/contact` (Vercel
   function) which verifies it **server-side** with the secret key.
2. On success, the **browser** POSTs the message to **Web3Forms**, which emails
   alisdevhub@gmail.com.
Web3Forms' WAF blocks server-to-server calls, so the browser must do final delivery.
Never revert to a single direct call or to server-side forwarding.

## Secrets
- `TURNSTILE_SECRET_KEY` lives **only in Vercel env vars** — never commit it.
- The Turnstile *site* key and Web3Forms *access* key are public and live in `src/data/site.js` (fine).

## Performance conventions (keep these)
- Fonts are **self-hosted** in `public/fonts/` (Space Grotesk + Inter, Latin woff2),
  with the critical weights **preloaded** in `index.html`. No third-party font requests.
- Images are **WebP** with explicit `width`/`height` (no layout shift) and
  `loading="lazy"` for anything below the fold. Optimize new images the same way.
- Current PageSpeed: SEO/Accessibility/Best-Practices 100, CLS 0, desktop LCP ~0.8s.

## Deploy workflow (two machines)
- `git pull` before starting, `git push` when done — **the push IS the deploy** (Vercel).
- If tooling can't find `node`, reopen the terminal (Windows PATH quirk after install).

## Roadmap — Online courses (Path A, in progress)
Ali is adding an online course platform. Decided approach:
- Keep **this React site** as the fast front door.
- Run the LMS as a **separate WordPress + Tutor LMS** install on a subdomain:
  **courses.alihaider.dev** (subdomain chosen over subdirectory for practicality;
  cross-link + Search Console to mitigate SEO).
- Free courses first (1: responsive site with HTML & CSS; 2: build a WordPress site),
  paid later (Phase 2: WooCommerce + a merchant-of-record for global payments).
- ✔ **Done:** the "Courses" section (cards, curriculum preview, "Free" badge, waitlist
  email capture via Web3Forms, nav link, Course JSON-LD). Data in `src/data/courses.js`;
  flip each course's `live` flag once it exists on the LMS.
- **In progress:** the LMS build itself — full guide, brand CSS and course build
  sheets live in `docs/lms/` (start with `docs/lms/setup-guide.md`).

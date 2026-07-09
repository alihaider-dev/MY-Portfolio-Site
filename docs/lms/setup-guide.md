# courses.alihaider.dev — WordPress + Tutor LMS build guide

Companion files in this folder:
- `brand.css` — paste into the Customizer to make the LMS match alihaider.dev
- `course-1-responsive-html-css.md` / `course-2-wordpress-website.md` — course build sheets

Decisions already made: existing hosting · Tutor LMS **Free** · brand-matched dark design.

---

## Phase 0 — Subdomain + DNS (Cloudflare)

1. In your hosting panel, create the subdomain `courses.alihaider.dev` (new docroot or separate WP instance — keep it isolated from anything else on the account).
2. In Cloudflare DNS, add the record your host gives you: usually `A courses → <server IP>` (or `CNAME courses → <host target>`). Done 2026-07-09: `A courses → 198.187.29.22` (Namecheap server124.web-hosting.com).
3. Set it **DNS only (grey cloud)** first so your host can issue the SSL cert (validation fails behind the proxy). **Add the DNS record BEFORE creating the domain in cPanel if possible** — Namecheap auto-issues PositiveSSL at domain creation, and if DNS doesn't resolve yet that first attempt fails and you wait for the retry cycle (up to ~1 hour). Once HTTPS works, optionally flip to **Proxied (orange cloud)**.
4. Cloudflare SSL/TLS mode: **Full (strict)** — you already have this for the apex; the subdomain inherits it.

## Phase 1 — Clean WordPress install

- Fresh WP, PHP 8.1+, non-`admin` username, strong password.
- Settings → Permalinks: **Post name**.
- Settings → Reading: **✔ Discourage search engines** — keep ON until launch day (Phase 6 flips it).
- Delete stock plugins/themes you won't use (Hello Dolly, Akismet if unused, extra default themes).
- Timezone, site title: `Ali's Dev Hub — Courses` (or similar), tagline: `Free web development courses by Ali Haider`.

## Phase 2 — Theme + branding

**Theme: Kadence (free).** Lightweight, has a proper header/footer builder and global palette, plays well with Tutor LMS. (Astra/Blocksy work too if you prefer — the palette below is theme-agnostic.)

Global palette (Customizer → Colors) — map to the portfolio tokens:

| Role | Hex | Portfolio token |
|---|---|---|
| Background | `#100f1a` | ink |
| Surface / cards | `#1b1a2a` | surface |
| Borders | `#2c2b3f` | line |
| Accent / buttons / links | `#f4a203` | accent |
| Accent hover | `#c98600` | accent-dim |
| Headings | `#f7f6f2` | cream |
| Body text | `#928fa4` → use `#b9b6c9` for long-form lesson text (better contrast for reading) | muted |

**Fonts** — use Kadence's built-in **"Load Google Fonts Locally"** (Customizer → General → Performance):
1. Enable local font loading — Kadence downloads the woff2 files to the server and serves them first-party (same privacy/performance as the portfolio's self-hosted fonts, no manual upload).
2. Set typography: headings = Space Grotesk, body = Inter.
3. Then paste `brand.css` into Customizer → Additional CSS — skip its `@font-face` block (Kadence handles font loading; the block is only needed if you self-host manually at `wp-content/uploads/fonts/`).

**Header/footer:** logo (reuse `public/logo.svg`), nav: Courses · About · alihaider.dev ← (link back to the main site, this cross-link matters for SEO). Footer: same socials as the portfolio + link to alihaider.dev.

## Phase 3 — Tutor LMS (Free) configuration

Install **Tutor LMS** from the plugin repo. Key settings (Tutor LMS → Settings):

- **General**: enable "Course marketplace" **OFF** — single-instructor site.
- **Course**: permalink base `courses` is fine → URLs like `courses.alihaider.dev/courses/build-a-responsive-website-with-html-css/`.
- **Monetization**: **Disabled / Free** — everything is free for now. (Phase 2 of the business plan adds WooCommerce + merchant of record.)
- **Students**: allow registration (Tutor's own signup form); enrollment requires login — that's your email list of students.
- **Design → Color**: primary `#f4a203`, hover `#c98600` (brand.css reinforces this, but set it here too so emails/embeds inherit it).
- **Email**: verify the from-address works (send yourself a test enrollment email). If host mail is flaky, add an SMTP plugin (FluentSMTP) pointed at whatever you already use.
- Disable Tutor features you don't need at launch: Q&A ON (good for free courses), Certificates (Pro-only anyway), Zoom/Google Meet OFF.

## Phase 4 — Build the two courses

Follow the two build sheets in this folder. Non-negotiables (they must match what the portfolio cards promise):

- Course 1: **24 lessons, ~4 h**, 6 topics named exactly like the portfolio curriculum bullets.
- Course 2: **20 lessons, ~3.5 h**, same rule.
- Both: price **Free**, difficulty **Beginner**, a thumbnail using the card gradient (Course 1: `#f4a203 → #6b4a00`, Course 2: `#38bdf8 → #0c4a6e`).
- Host videos on YouTube (unlisted) and embed — don't self-host video on shared hosting.

## Phase 5 — Pages + performance

- **Home**: simple landing that lists the courses (Tutor's course archive can BE the front page — Settings → Reading → static page → Tutor's Courses page). One headline, the two course cards, one line about you linking to alihaider.dev.
- Privacy policy page (WP generator is fine to start) — you're collecting student emails.
- Caching: whatever fits your host (LiteSpeed Cache on LiteSpeed hosts, otherwise WP Rocket if you own it / FlyingPress / W3TC). Target: sub-2s loads, same standard as your client work.
- Images: WebP, sized, lazy — same conventions as the portfolio.

## Phase 6 — Launch day checklist

1. Settings → Reading: **✘ un-tick Discourage search engines**.
2. Install an SEO plugin (Rank Math or Yoast, your preference): set canonical URLs, connect the sitemap.
3. Google Search Console: if alihaider.dev is a **Domain property**, the subdomain is already covered; submit the new sitemap. Otherwise add `courses.alihaider.dev` as a property.
4. Test the full student journey in a private window: land → register → enroll → complete a lesson → progress saves.
5. **In this repo:** `src/data/courses.js` → set `live: true` on each launched course and change its `url` to the real course URL. Commit + push (that deploys the portfolio's "Enroll Free →" buttons).
6. **Email the waitlist** — signups arrived in your inbox with subject "New course waitlist signup". Send them the enrollment link personally (small list = personal email beats a newsletter tool for now).

## Parked for Phase 2 (paid courses)

- Tutor LMS Pro (certificates, drip content, reports)
- WooCommerce + merchant of record (Paddle / Lemon Squeezy / Freemius) for global payments
- Proper email marketing tool once the list outgrows your inbox

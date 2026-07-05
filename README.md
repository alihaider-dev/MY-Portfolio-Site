# Ali Haider — Portfolio Site

Dark, high-motion personal portfolio built with **Vite + React + Tailwind CSS v4 + Framer Motion**.

## Run locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
```

## Where to edit your content (no code knowledge needed)

| What | File |
|---|---|
| Name, headline, email, Discord & social links | `src/data/site.js` |
| Stats, services, process steps | `src/data/site.js` |
| Client projects (titles, results, links, screenshots) | `src/data/projects.js` |
| Video + written testimonials | `src/data/testimonials.js` |

### Adding project screenshots
1. Drop the image in `public/projects/` (e.g. `public/projects/luxe.png`)
2. In `src/data/projects.js` set `image: "/projects/luxe.png"`

Until an image is set, a styled typographic cover is generated automatically.

### Adding client feedback videos
- **YouTube**: set `videoUrl: "https://www.youtube.com/watch?v=XXXX"`
- **Local file**: drop it in `public/videos/` and set `videoUrl: "/videos/client1.mp4"`
- Optional thumbnail: `thumbnail: "/videos/thumbs/name.jpg"`

## Deploy

`npm run build` produces a static `dist/` folder. Upload it to any host:
- **Shared hosting / cPanel**: upload the *contents* of `dist/` to `public_html`
- **Vercel / Netlify / Cloudflare Pages**: connect the repo, build command `npm run build`, output dir `dist`

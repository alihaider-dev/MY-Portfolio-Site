// Post-build step (plain Node, no browser):
//  1. Render every route to its own dist/<path>/index.html (SEO / fast paint).
//  2. Give each service page its own <head>: title, description, canonical,
//     OG tags and page-specific JSON-LD (Service + FAQPage + BreadcrumbList).
//  3. Inline the CSS into <head> so it isn't a render-blocking request.
//  4. Generate dist/sitemap.xml with every URL.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { pathToFileURL } from "node:url"
import { resolve, dirname } from "node:path"

const { render } = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href)
const { servicePages, servicesHub } = await import(
  pathToFileURL(resolve("src/data/servicePages.js")).href
)

const ORIGIN = "https://alihaider.dev"
const template = readFileSync(resolve("dist/index.html"), "utf-8")

// Inline the stylesheet once (shared by every page).
let baseTemplate = template
const cssLink = baseTemplate.match(/<link[^>]+rel="stylesheet"[^>]+href="(\/assets\/[^"]+\.css)"[^>]*>/)
if (cssLink) {
  const css = readFileSync(resolve("dist" + cssLink[1]), "utf-8")
  baseTemplate = baseTemplate.replace(cssLink[0], `<style>${css}</style>`)
  console.log(`prerender: inlined ${Math.round(css.length / 1024)}KB of CSS (removed render-blocking request)`)
} else {
  console.warn("prerender: no stylesheet <link> found to inline")
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;")

// Swap the homepage head for a page-specific one. The base JSON-LD graph
// (Person/ProfessionalService/Courses) is replaced by the page's own graph.
function withHead(html, { title, description, canonical, jsonLd }) {
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
  html = html.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${esc(description)}$2`
  )
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`)
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(description)}$2`)
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(description)}$2`)
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>`
  )
  return html
}

const personRef = { "@id": `${ORIGIN}/#person` }
const businessRef = { "@id": `${ORIGIN}/#service` }
const baseEntities = [
  {
    "@type": "Person",
    "@id": `${ORIGIN}/#person`,
    name: "Ali Haider",
    url: `${ORIGIN}/`,
    jobTitle: "WordPress Developer",
    sameAs: ["https://www.youtube.com/@AlisDevHub", "https://www.fiverr.com/elementorhero"],
  },
  {
    "@type": "ProfessionalService",
    "@id": `${ORIGIN}/#service`,
    name: "Ali Haider — WordPress Development",
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/og-image.png`,
    founder: personRef,
  },
]

const breadcrumb = (items) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, url], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    ...(url ? { item: url } : {}),
  })),
})

function serviceJsonLd(s, canonical) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...baseEntities,
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: s.name,
        serviceType: s.eyebrow,
        description: s.metaDescription,
        url: canonical,
        provider: businessRef,
        areaServed: "Worldwide",
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: s.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      breadcrumb([
        ["Home", `${ORIGIN}/`],
        ["Services", `${ORIGIN}/services/`],
        [s.name],
      ]),
    ],
  }
}

const hubJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...baseEntities,
    {
      "@type": "ItemList",
      "@id": `${ORIGIN}/services/#list`,
      itemListElement: servicePages.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: `${ORIGIN}/services/${s.slug}/`,
      })),
    },
    breadcrumb([["Home", `${ORIGIN}/`], ["Services"]]),
  ],
}

// ── Route table ──────────────────────────────────────────────────────────────
const routes = [
  { path: "/", out: "dist/index.html", head: null }, // homepage keeps its hand-written head
  {
    path: "/services/",
    out: "dist/services/index.html",
    head: {
      title: servicesHub.metaTitle,
      description: servicesHub.metaDescription,
      canonical: `${ORIGIN}/services/`,
      jsonLd: hubJsonLd,
    },
  },
  ...servicePages.map((s) => ({
    path: `/services/${s.slug}/`,
    out: `dist/services/${s.slug}/index.html`,
    head: {
      title: s.metaTitle,
      description: s.metaDescription,
      canonical: `${ORIGIN}/services/${s.slug}/`,
      jsonLd: serviceJsonLd(s, `${ORIGIN}/services/${s.slug}/`),
    },
  })),
]

for (const route of routes) {
  const appHtml = render(route.path)
  let html = baseTemplate
  if (route.head) html = withHead(html, route.head)
  if (html.includes('<div id="root"></div>')) {
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  } else {
    console.error(`prerender: empty #root not found for ${route.path} — skipping HTML injection`)
  }
  const outPath = resolve(route.out)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(`prerender: ${route.path} → ${route.out} (${appHtml.length.toLocaleString()} chars)`)
}

// ── sitemap.xml ──────────────────────────────────────────────────────────────
const today = new Date().toISOString().slice(0, 10)
const urlEntry = (loc, priority) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntry(`${ORIGIN}/`, "1.0")}
${urlEntry(`${ORIGIN}/services/`, "0.9")}
${servicePages.map((s) => urlEntry(`${ORIGIN}/services/${s.slug}/`, "0.8")).join("\n")}
</urlset>
`
writeFileSync(resolve("dist/sitemap.xml"), sitemap)
console.log(`prerender: sitemap.xml written with ${routes.length} URLs`)

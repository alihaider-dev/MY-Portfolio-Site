// Post-build step (plain Node, no browser):
//  1. Inject server-rendered HTML into #root (SEO / fast first paint).
//  2. Inline the CSS into <head> so it isn't a render-blocking request —
//     the headline (LCP element) can paint as soon as the HTML arrives.
import { readFileSync, writeFileSync } from "node:fs"
import { pathToFileURL } from "node:url"
import { resolve } from "node:path"

const { render } = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href)

const appHtml = render()
const templatePath = resolve("dist/index.html")
let html = readFileSync(templatePath, "utf-8")

// 1. Bake the app HTML into #root
if (html.includes('<div id="root"></div>')) {
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  console.log(`prerender: baked ${appHtml.length.toLocaleString()} chars of HTML into #root`)
} else {
  console.error("prerender: empty #root not found — skipping HTML injection")
}

// 2. Inline the stylesheet and drop the render-blocking <link>
const cssLink = html.match(/<link[^>]+rel="stylesheet"[^>]+href="(\/assets\/[^"]+\.css)"[^>]*>/)
if (cssLink) {
  const cssPath = resolve("dist" + cssLink[1])
  const css = readFileSync(cssPath, "utf-8")
  html = html.replace(cssLink[0], `<style>${css}</style>`)
  console.log(`prerender: inlined ${Math.round(css.length / 1024)}KB of CSS (removed render-blocking request)`)
} else {
  console.warn("prerender: no stylesheet <link> found to inline")
}

writeFileSync(templatePath, html)

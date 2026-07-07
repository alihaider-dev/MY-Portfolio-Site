// Injects the server-rendered HTML into dist/index.html after the build.
// Runs in plain Node (no browser needed) so it works in CI / Vercel builds.
import { readFileSync, writeFileSync } from "node:fs"
import { pathToFileURL } from "node:url"
import { resolve } from "node:path"

const { render } = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href)

const appHtml = render()
const templatePath = resolve("dist/index.html")
const template = readFileSync(templatePath, "utf-8")

if (!template.includes('<div id="root"></div>')) {
  console.error("prerender: could not find empty #root in dist/index.html — skipping")
  process.exit(0)
}

const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
writeFileSync(templatePath, html)
console.log(`prerender: baked ${appHtml.length.toLocaleString()} chars of HTML into index.html`)

import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { pageForPath } from "./routes.jsx"

// Renders the page for a given URL path to an HTML string at build time so
// the content is baked into each route's index.html for search engines and
// social/link crawlers. Defaults to the homepage for backwards compatibility.
export function render(path = "/") {
  return renderToString(<StrictMode>{pageForPath(path)}</StrictMode>)
}

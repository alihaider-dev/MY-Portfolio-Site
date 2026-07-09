import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import { inject } from "@vercel/analytics"
import "./index.css"
import { pageForPath } from "./routes.jsx"

inject()

// The HTML is pre-rendered at build time (one document per route). Hydrate
// onto it (instead of re-rendering from scratch) so the already-painted
// content counts toward LCP. Fall back to a clean client render if the root
// is somehow empty. The rendered page MUST match what the server rendered
// for this path — pageForPath is shared with entry-server.jsx for that.
const root = document.getElementById("root")
const app = <StrictMode>{pageForPath(window.location.pathname)}</StrictMode>
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}

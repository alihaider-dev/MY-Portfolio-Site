import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import { inject } from "@vercel/analytics"
import "./index.css"
import App from "./App.jsx"

inject()

// The HTML is pre-rendered at build time. Hydrate onto it (instead of
// re-rendering from scratch) so the already-painted content counts toward
// LCP. Fall back to a clean client render if the root is somehow empty.
const root = document.getElementById("root")
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}

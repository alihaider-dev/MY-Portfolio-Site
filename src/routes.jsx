import App from "./App.jsx"
import ServicesHub from "./components/ServicesHub.jsx"
import ServicePage from "./components/ServicePage.jsx"
import { getServiceBySlug } from "./data/servicePages"

// Tiny path-based router shared by the client (main.jsx), the SSR entry
// (entry-server.jsx) and the prerenderer. No client-side navigation — each
// page is its own prerendered HTML document; links are plain <a href>.
export function pageForPath(path) {
  const clean = (path || "/").replace(/\/+$/, "") || "/"
  if (clean === "/") return <App />
  if (clean === "/services") return <ServicesHub />
  const match = clean.match(/^\/services\/([^/]+)$/)
  if (match) {
    const service = getServiceBySlug(match[1])
    if (service) return <ServicePage service={service} />
  }
  return <App />
}

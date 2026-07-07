import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import App from "./App.jsx"

// Renders the full app to an HTML string at build time so the content is
// baked into index.html for search engines and social/link crawlers.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

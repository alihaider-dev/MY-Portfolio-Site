// Vercel serverless function: verifies Cloudflare Turnstile server-side,
// then forwards the submission to Web3Forms. Bots without a valid token
// never reach the inbox.

async function fetchJson(url, options, label) {
  const res = await fetch(url, options)
  const text = await res.text()
  try {
    return JSON.parse(text)
  } catch {
    console.error(`${label} returned non-JSON (status ${res.status}):`, text.slice(0, 500))
    throw new Error(`${label} returned an unexpected response`)
  }
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false, message: "Method not allowed" })
    }

    let body = req.body
    if (typeof body === "string") {
      try {
        body = JSON.parse(body)
      } catch {
        return res.status(400).json({ success: false, message: "Invalid request body" })
      }
    }
    const { name, email, message, turnstileToken, botcheck } = body || {}

    // Honeypot — pretend success so bots don't retry
    if (botcheck) return res.status(200).json({ success: true })

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Missing required fields" })
    }
    if (!turnstileToken) {
      return res.status(400).json({ success: false, message: "Captcha not completed" })
    }

    const secret = process.env.TURNSTILE_SECRET_KEY
    if (!secret) {
      console.error("TURNSTILE_SECRET_KEY is not set")
      return res.status(500).json({ success: false, message: "Captcha not configured on server" })
    }

    const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim()
    const verification = await fetchJson(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: turnstileToken, ...(ip && { remoteip: ip }) }).toString(),
      },
      "Turnstile siteverify",
    )

    if (!verification.success) {
      console.error("Turnstile verification failed:", JSON.stringify(verification["error-codes"] || verification))
      return res.status(403).json({ success: false, message: "Captcha verification failed" })
    }

    const forwarded = await fetchJson(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY || "15fc4646-3e1e-44aa-ac6d-84d650e9e64e",
          subject: `New project inquiry from ${name}`,
          name,
          email,
          message,
        }),
      },
      "Web3Forms",
    )

    if (!forwarded.success) {
      console.error("Web3Forms rejected submission:", JSON.stringify(forwarded).slice(0, 500))
    }
    return res.status(forwarded.success ? 200 : 502).json({ success: !!forwarded.success })
  } catch (err) {
    console.error("contact function error:", err.message)
    return res.status(500).json({ success: false, message: "Server error" })
  }
}

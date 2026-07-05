// Vercel serverless function: verifies a Cloudflare Turnstile token with the
// secret key. The browser only forwards the submission to Web3Forms after
// this returns success, so fake/injected tokens are rejected server-side.
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
    const { turnstileToken } = body || {}
    if (!turnstileToken) {
      return res.status(400).json({ success: false, message: "Captcha not completed" })
    }

    const secret = process.env.TURNSTILE_SECRET_KEY
    if (!secret) {
      console.error("TURNSTILE_SECRET_KEY is not set")
      return res.status(500).json({ success: false, message: "Captcha not configured on server" })
    }

    const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim()
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: turnstileToken, ...(ip && { remoteip: ip }) }).toString(),
    })
    const verification = await verifyRes.json()

    if (!verification.success) {
      console.error("Turnstile verification failed:", JSON.stringify(verification["error-codes"] || verification))
      return res.status(403).json({ success: false, message: "Captcha verification failed" })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error("contact function error:", err.message)
    return res.status(500).json({ success: false, message: "Server error" })
  }
}

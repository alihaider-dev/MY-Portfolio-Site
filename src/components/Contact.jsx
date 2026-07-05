import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { site } from "../data/site"
import Reveal from "./Reveal"

function ContactForm() {
  const [status, setStatus] = useState("idle") // idle | sending | success | error | captcha
  const captchaRef = useRef(null)
  const widgetIdRef = useRef(null)

  // Load the Turnstile script once and render the widget explicitly (plays
  // nicely with React re-mounts).
  useEffect(() => {
    const render = () => {
      if (widgetIdRef.current !== null || !captchaRef.current) return
      widgetIdRef.current = window.turnstile.render(captchaRef.current, {
        sitekey: site.turnstileSiteKey,
        theme: "dark",
      })
    }
    if (window.turnstile) {
      render()
    } else {
      window.__onTurnstileLoad = render
      if (!document.getElementById("cf-turnstile-script")) {
        const s = document.createElement("script")
        s.id = "cf-turnstile-script"
        s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=__onTurnstileLoad&render=explicit"
        s.async = true
        s.defer = true
        document.head.appendChild(s)
      }
    }
    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    if (form.botcheck.value) return // honeypot
    const turnstileToken = window.turnstile?.getResponse(widgetIdRef.current)
    if (!turnstileToken) {
      setStatus("captcha")
      return
    }
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
          turnstileToken,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? "success" : "error")
      if (data.success) form.reset()
      else window.turnstile?.reset(widgetIdRef.current)
    } catch {
      setStatus("error")
      window.turnstile?.reset(widgetIdRef.current)
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-accent/40 bg-accent/10 p-10 text-center"
      >
        <span className="text-4xl">🎉</span>
        <h3 className="mt-4 font-display text-2xl font-bold">Message sent!</h3>
        <p className="mt-2 text-muted">
          Thanks for reaching out — I'll get back to you within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="text-left">
      <input type="text" name="botcheck" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block font-display text-sm font-medium text-cream/90">
            Your name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="w-full rounded-xl border border-line bg-surface px-5 py-4 text-cream placeholder:text-muted/60 outline-none transition-colors duration-300 focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block font-display text-sm font-medium text-cream/90">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            className="w-full rounded-xl border border-line bg-surface px-5 py-4 text-cream placeholder:text-muted/60 outline-none transition-colors duration-300 focus:border-accent"
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="cf-message" className="mb-2 block font-display text-sm font-medium text-cream/90">
          Tell me about your project
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows="5"
          placeholder="What does your business do, and what should your website achieve?"
          className="w-full resize-y rounded-xl border border-line bg-surface px-5 py-4 text-cream placeholder:text-muted/60 outline-none transition-colors duration-300 focus:border-accent"
        />
      </div>
      <div className="mt-5" ref={captchaRef} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="group relative mt-5 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-10 py-5 font-display text-lg font-semibold text-ink transition-opacity disabled:opacity-60 sm:w-auto"
      >
        <span className="absolute inset-0 -translate-x-full bg-cream transition-transform duration-500 ease-out group-hover:translate-x-0" />
        <span className="relative">{status === "sending" ? "Sending…" : "Send My Project Details"}</span>
        <span className="relative transition-transform duration-300 group-hover:translate-x-1.5">→</span>
      </button>
      {status === "error" && (
        <p className="mt-4 text-sm text-red-400">
          Something went wrong sending your message — please try again in a moment.
        </p>
      )}
      {status === "captcha" && (
        <p className="mt-4 text-sm text-red-400">
          Please wait for the security check to complete, then try again.
        </p>
      )}
      <p className="mt-4 text-sm text-muted">
        I reply to every inquiry within 24 hours — usually much faster.
      </p>
    </form>
  )
}

export default function Contact() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="relative mt-16 overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
        <Reveal>
          <p className="font-display text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Got a project in mind?
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight">
            Let's build a website that <span className="text-stroke-accent">converts</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-lg text-muted">
            Tell me about your business and I'll show you exactly how your website can start pulling its weight.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 max-w-2xl">
            <ContactForm />
          </div>
        </Reveal>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-10">
          <a href="#top" className="flex items-center">
            <img src="/logo.svg" alt="alihaider.dev" className="h-6 w-auto" />
          </a>
          <ul className="flex flex-wrap gap-6 text-sm text-muted">
            {site.socials.map((s) => (
              <li key={s.label}>
                <motion.a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="transition-colors hover:text-accent"
                >
                  {s.label}
                </motion.a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted">© {year} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

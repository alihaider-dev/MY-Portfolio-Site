import { motion } from "framer-motion"
import { site } from "../data/site"
import Reveal from "./Reveal"
import MagneticButton from "./MagneticButton"

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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <a
                href={`mailto:${site.email}?subject=Project%20Inquiry`}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-10 py-5 font-display text-lg font-semibold text-ink"
              >
                <span className="absolute inset-0 -translate-x-full bg-cream transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative">Start Your Project</span>
                <span className="relative transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            </MagneticButton>
          </div>
          <p className="mt-6 text-sm text-muted">
            or email me directly —{" "}
            <a href={`mailto:${site.email}`} className="text-cream underline decoration-accent underline-offset-4 hover:text-accent">
              {site.email}
            </a>
          </p>
        </Reveal>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-10">
          <p className="font-display font-semibold">
            Ali<span className="text-accent">.</span>Haider
          </p>
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

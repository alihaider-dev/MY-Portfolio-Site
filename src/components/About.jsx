import { motion } from "framer-motion"
import { about, site } from "../data/site"
import Reveal, { SectionTag } from "./Reveal"

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute left-[-12%] bottom-0 h-96 w-96 rounded-full bg-accent/8 blur-[130px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[2fr_3fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.65, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/40 to-violet/30 blur-xl" />
          <div className="relative overflow-hidden rounded-3xl border border-line">
            <img src={about.photo} alt={site.name} width={460} height={460} loading="lazy" decoding="async" className="w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/80 px-5 py-4 backdrop-blur">
              <div>
                <p className="font-display font-semibold">{site.name}</p>
                <p className="text-sm text-muted">{site.role}</p>
              </div>
              <span className="flex h-3 w-3">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-accent opacity-60" />
                <span className="h-3 w-3 rounded-full bg-accent" />
              </span>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionTag>Meet Ali</SectionTag>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight lg:text-6xl">
              {about.heading.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-stroke">{about.heading.split(" ").slice(-1)}</span>
            </h2>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08}>
              <p className="mt-6 leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.35}>
            <ul className="mt-8 space-y-3">
              {about.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-cream/90">
                  <span className="mt-0.5 text-accent">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.45}>
            <a
              href={site.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-display text-sm font-semibold text-cream transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <span className="text-accent">★ 5.0</span> Verified reviews on Fiverr
              <span>→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

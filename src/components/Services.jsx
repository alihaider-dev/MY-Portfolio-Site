import { motion } from "framer-motion"
import { services } from "../data/site"
import { servicePages } from "../data/servicePages"
import Reveal, { SectionTag } from "./Reveal"

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute right-[-15%] top-0 h-[28rem] w-[28rem] rounded-full bg-accent/8 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTag>What I Offer</SectionTag>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl font-bold tracking-tight lg:text-7xl">
              Everything your
              <br />
              <span className="text-stroke">website needs</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={servicePages[i] ? `/services/${servicePages[i].slug}/` : "/services/"}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.1, ease: [0.21, 0.65, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/0 blur-2xl transition-colors duration-500 group-hover:bg-accent/15" />
              <span className="text-2xl text-accent">{s.icon}</span>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{s.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{s.desc}</p>
              <span className="mt-4 font-display text-sm font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn more →
              </span>
            </motion.a>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 text-center">
            <a
              href="/services/"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 font-display text-sm font-semibold text-cream/80 transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Explore all services →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

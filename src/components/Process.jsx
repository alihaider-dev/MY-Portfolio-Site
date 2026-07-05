import { motion } from "framer-motion"
import { process } from "../data/site"
import Reveal, { SectionTag } from "./Reveal"

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <SectionTag>The Process</SectionTag>
      <Reveal delay={0.1}>
        <h2 className="mt-6 font-display text-5xl font-bold tracking-tight lg:text-7xl">
          From idea to launch,
          <br />
          <span className="text-stroke">without the headache</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {process.map((p, i) => (
          <motion.div
            key={p.step}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.21, 0.65, 0.36, 1] }}
            className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-surface lg:p-10"
          >
            <span className="font-display text-6xl font-bold text-line transition-colors duration-500 group-hover:text-accent">
              {p.step}
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{p.desc}</p>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

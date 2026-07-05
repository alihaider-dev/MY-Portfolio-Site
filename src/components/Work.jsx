import { motion } from "framer-motion"
import { projects } from "../data/projects"
import Reveal, { SectionTag } from "./Reveal"

function Cover({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
      />
    )
  }
  // Generated typographic cover shown until a real screenshot is added
  const [from, to] = project.gradient
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105"
      style={{ background: `linear-gradient(135deg, ${from}22 0%, ${to}66 100%)` }}
    >
      <span
        className="select-none font-display text-[10rem] font-bold leading-none opacity-30"
        style={{ color: from }}
      >
        {project.initials}
      </span>
      <span className="absolute bottom-5 left-6 font-display text-sm uppercase tracking-[0.25em] text-cream/50">
        {project.category}
      </span>
      <div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
        style={{ background: `${from}33` }}
      />
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: [0.21, 0.65, 0.36, 1] }}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface">
        <Cover project={project} />
        {/* result badge */}
        <div className="absolute left-4 top-4 translate-y-2 rounded-full bg-ink/85 px-4 py-2 font-display text-sm font-semibold text-accent opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {project.result}
        </div>
        {/* visit arrow */}
        <div className="absolute bottom-4 right-4 flex h-12 w-12 -rotate-45 items-center justify-center rounded-full bg-accent text-xl text-ink opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100">
          →
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{project.desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
        <span className="shrink-0 font-display text-sm text-muted">{project.year}</span>
      </div>
    </motion.a>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <SectionTag>Selected Work</SectionTag>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl font-bold tracking-tight lg:text-7xl">
            Websites that
            <br />
            <span className="text-stroke">pay for themselves</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-sm text-muted">
            Real client projects, live on the web right now. Click any card to explore the actual site.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((p, i) => (
          <div key={p.title} className={i % 2 === 1 ? "md:mt-24" : ""}>
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}

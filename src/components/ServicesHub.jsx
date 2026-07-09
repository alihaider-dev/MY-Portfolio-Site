import Cursor from "./Cursor"
import Nav from "./Nav"
import Contact from "./Contact"
import Reveal from "./Reveal"
import { servicesHub, servicePages } from "../data/servicePages"
import { services } from "../data/site"

// /services/ hub page — links down to every service landing page.
export default function ServicesHub() {
  // Match the homepage's icon for each service by name where possible.
  const iconFor = (name) =>
    services.find((s) => s.title.toLowerCase().includes(name.split(" ")[0].toLowerCase()))?.icon

  return (
    <div className="grain">
      <Cursor />
      <Nav sub />
      <main>
        <section className="relative overflow-hidden pb-16 pt-32 lg:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
              <a href="/" className="transition-colors hover:text-accent">Home</a>
              <span className="mx-2 opacity-50">›</span>
              <span className="text-accent">Services</span>
            </nav>
            <p className="font-display text-xs font-medium uppercase tracking-[0.25em] text-accent">
              {servicesHub.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
              {servicesHub.h1[0]} <span className="text-stroke-accent">{servicesHub.h1[1]}</span>
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">{servicesHub.sub}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <a
                  href={`/services/${s.slug}/`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60"
                >
                  <span className="text-xl text-accent">{iconFor(s.name) || "◆"}</span>
                  <h2 className="mt-4 font-display text-lg font-semibold leading-snug text-cream">
                    {s.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.metaDescription.split(" — ")[0]}.</p>
                  <span className="mt-5 font-display text-sm font-semibold text-accent">
                    Learn more <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Contact />
    </div>
  )
}

import Cursor from "./Cursor"
import Nav from "./Nav"
import Contact from "./Contact"
import Reveal, { SectionTag } from "./Reveal"
import MagneticButton from "./MagneticButton"
import { servicePages } from "../data/servicePages"

// SEO landing page template — one prerendered page per service.
// All copy comes from src/data/servicePages.js; this only renders it.
export default function ServicePage({ service }) {
  const related = service.related
    .map((slug) => servicePages.find((s) => s.slug === slug))
    .filter(Boolean)

  return (
    <div className="grain">
      <Cursor />
      <Nav sub />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-32 lg:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
              <a href="/" className="transition-colors hover:text-accent">Home</a>
              <span className="mx-2 opacity-50">›</span>
              <a href="/services/" className="transition-colors hover:text-accent">Services</a>
              <span className="mx-2 opacity-50">›</span>
              <span className="text-accent">{service.name}</span>
            </nav>
            <p className="font-display text-xs font-medium uppercase tracking-[0.25em] text-accent">
              {service.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
              {service.h1[0]} <span className="text-stroke-accent">{service.h1[1]}</span>
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">{service.sub}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display font-semibold text-ink transition-transform duration-300 hover:scale-105"
                >
                  Get a Free Quote
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </MagneticButton>
              <a
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-display font-semibold text-cream transition-colors duration-300 hover:border-accent/60"
              >
                See My Work
              </a>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted">
              <li><span className="text-accent">★★★★★</span> <span className="text-cream/90">5.0</span> on Fiverr</li>
              <li><span className="text-cream/90">100+</span> projects delivered</li>
              <li><span className="text-cream/90">50+</span> happy clients</li>
            </ul>
          </div>
        </section>

        {/* Pain match */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Sound familiar?
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {service.pains.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-dashed border-line p-6">
                  <h3 className="font-display font-semibold text-cream">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* What's included */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <SectionTag>What's Included</SectionTag>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight lg:text-5xl">
              Everything handled, <span className="text-stroke">end to end</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60">
                  <span className="text-xl text-accent">{f.icon}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Proof: stats and/or real review */}
        {(service.stats || service.quote) && (
          <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
            {service.stats && (
              <div className="grid gap-4 md:grid-cols-3">
                {service.stats.map((s) => (
                  <Reveal key={s.label}>
                    <div className="rounded-2xl border border-line bg-surface p-7">
                      <p className="font-display text-xs font-medium uppercase tracking-[0.18em] text-muted">{s.label}</p>
                      <p className="mt-3 font-display text-4xl font-bold text-cream">{s.value}</p>
                      <p className="mt-2 text-sm text-muted">{s.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
            {service.quote && (
              <Reveal delay={0.1}>
                <figure className="mt-8 max-w-3xl border-l-2 border-accent pl-6">
                  <blockquote className="leading-relaxed text-cream/90">
                    “{service.quote.text}”
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-muted">
                    <span className="text-accent">★★★★★</span> {service.quote.author} — {service.quote.role}
                  </figcaption>
                </figure>
              </Reveal>
            )}
          </section>
        )}

        {/* Process */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <SectionTag>How It Works</SectionTag>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {service.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-surface p-7">
                  <span className="font-display text-sm font-bold tracking-widest text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Price anchor */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <Reveal>
            <div className="flex flex-wrap items-center gap-6 rounded-3xl border border-line bg-surface p-8 lg:p-10">
              <div>
                <p className="font-display text-3xl font-bold text-cream">
                  {service.priceFrom ? `From ${service.priceFrom}` : "Fixed quote"}
                  <span className="ml-2 text-sm font-semibold text-muted">
                    {service.priceFrom ? "· fixed quote" : "· free consultation"}
                  </span>
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                  Your exact price is based on what your site actually needs — quoted up front
                  after a free consultation. No hourly billing, no surprises.
                </p>
              </div>
              <MagneticButton className="lg:ml-auto">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display font-semibold text-ink transition-transform duration-300 hover:scale-105"
                >
                  Start With a Free Consult
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </MagneticButton>
            </div>
          </Reveal>
        </section>

        {/* FAQ — mirrored in FAQPage JSON-LD injected at build time */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <SectionTag>Questions, Answered</SectionTag>
          <div className="mt-10 flex max-w-3xl flex-col gap-3">
            {service.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-line bg-surface px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-cream [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-accent transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related services — internal-link mesh */}
        <section className="mx-auto max-w-7xl px-6 pb-8 text-center lg:px-10">
          <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Related services
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {related.map((r) => (
              <a
                key={r.slug}
                href={`/services/${r.slug}/`}
                className="rounded-full border border-line px-5 py-2.5 font-display text-sm font-medium text-cream/80 transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {r.name} →
              </a>
            ))}
            <a
              href="/services/"
              className="rounded-full border border-line px-5 py-2.5 font-display text-sm font-medium text-cream/80 transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              All services →
            </a>
          </div>
        </section>
      </main>
      <Contact />
    </div>
  )
}

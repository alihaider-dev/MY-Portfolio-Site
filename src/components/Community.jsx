import { site } from "../data/site"
import Reveal from "./Reveal"
import MagneticButton from "./MagneticButton"

export default function Community() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-10 lg:p-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent/12 blur-[100px]" />

          <div className="relative flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-violet">Community</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight lg:text-5xl">
                Join my Discord community
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Direct access to me, a network of developers and freelancers, and free resources on WordPress
                and freelancing. Come hang out.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/80">
                <li>✓ Direct access to me</li>
                <li>✓ Networking community</li>
                <li>✓ Free support & help</li>
              </ul>
            </div>
            <MagneticButton>
              <a
                href={site.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-violet px-8 py-4 font-display font-semibold text-ink transition-transform duration-300 hover:scale-105"
              >
                Join Discord Server
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

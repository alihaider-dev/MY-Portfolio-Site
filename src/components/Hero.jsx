import { useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { site, stats } from "../data/site"
import Counter from "./Counter"
import MagneticButton from "./MagneticButton"
import VideoModal from "./VideoModal"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.65, 0.36, 1] } },
}

export default function Hero() {
  const { scrollY } = useScroll()
  const glowY = useTransform(scrollY, [0, 600], [0, 180])
  const fade = useTransform(scrollY, [0, 500], [1, 0])
  const [playingIntro, setPlayingIntro] = useState(false)

  return (
    <section id="top" className="bg-grid relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* ambient glows */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]"
      />
      <div className="pointer-events-none absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-violet/10 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-6 lg:px-10"
      >
        <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-3">
          <a
            href={site.fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted transition-colors duration-300 hover:border-accent hover:text-cream"
          >
            <span className="text-accent">★★★★★</span> 5.0 on Fiverr — verified reviews
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(2.75rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight"
        >
          I Build {site.headlineTop}
          <br />
          <span className="text-stroke-accent">{site.headlineAccent}</span>
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          {site.subheadline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 font-display font-semibold text-ink"
            >
              <span className="absolute inset-0 -translate-x-full bg-cream transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative">Hire Me Now</span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#work"
              className="inline-flex items-center gap-3 rounded-full border border-line px-8 py-4 font-display font-semibold text-cream transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              View My Work
              <span className="rotate-90 text-sm">→</span>
            </a>
          </MagneticButton>

          {site.introVideo && (
            <button
              onClick={() => setPlayingIntro(true)}
              className="group flex items-center gap-4 rounded-full py-2 pl-2 pr-6 transition-colors duration-300 hover:bg-surface"
            >
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-accent">
                <img
                  src={site.introVideo.thumbnail}
                  alt={site.introVideo.label}
                  width={460}
                  height={460}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/40 text-sm text-cream transition-colors duration-300 group-hover:bg-ink/10">
                  ▶
                </span>
              </span>
              <span className="text-left">
                <span className="block font-display font-semibold text-cream transition-colors duration-300 group-hover:text-accent">
                  {site.introVideo.label}
                </span>
                <span className="block text-sm text-muted">{site.introVideo.sublabel}</span>
              </span>
            </button>
          )}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="group bg-ink p-6 transition-colors duration-300 hover:bg-surface lg:p-8">
              <Counter
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals || 0}
                className="font-display text-4xl font-bold text-cream transition-colors duration-300 group-hover:text-accent lg:text-5xl"
              />
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#work"
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted md:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-accent"
        >
          ↓
        </motion.span>
      </motion.a>

      <AnimatePresence>
        {playingIntro && (
          <VideoModal
            title={site.name}
            subtitle={site.role}
            videoUrl={site.introVideo.url}
            onClose={() => setPlayingIntro(false)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

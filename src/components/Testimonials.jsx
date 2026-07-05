import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { videoTestimonials, writtenTestimonials } from "../data/testimonials"
import Reveal, { SectionTag } from "./Reveal"
import VideoModal from "./VideoModal"

function VideoCard({ t, index, onPlay }) {
  const [from, to] = t.gradient
  return (
    <motion.button
      onClick={() => onPlay(t)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.21, 0.65, 0.36, 1] }}
      className="group relative block w-full overflow-hidden rounded-2xl border border-line text-left"
    >
      <div
        className="relative aspect-[3/4] w-full overflow-hidden"
        style={{
          background: t.thumbnail
            ? undefined
            : `linear-gradient(160deg, ${from}26 0%, ${to}99 100%)`,
        }}
      >
        {t.thumbnail && (
          <img
            src={t.thumbnail}
            alt={t.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

        {/* play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="relative flex h-20 w-20 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-accent/25 transition-transform duration-500 group-hover:scale-150 group-hover:opacity-0" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl text-ink transition-transform duration-300 group-hover:scale-110">
              ▶
            </span>
          </span>
        </div>

        <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs text-cream backdrop-blur">
          {t.duration}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-display text-lg font-semibold leading-snug">“{t.quote}”</p>
          <p className="mt-3 text-sm text-accent">{t.name}</p>
          <p className="text-xs text-muted">{t.role}</p>
        </div>
      </div>
    </motion.button>
  )
}

function WrittenCard({ t }) {
  return (
    <figure className="w-[22rem] shrink-0 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/50">
      <div className="text-accent">{"★".repeat(t.rating)}</div>
      <blockquote className="mt-4 text-sm leading-relaxed text-cream/85">“{t.text}”</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-bold text-accent">
          {t.name.split(" ").map((w) => w[0]).join("")}
        </span>
        <div>
          <p className="font-display text-sm font-semibold">{t.name}</p>
          <p className="text-xs text-muted">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const [playing, setPlaying] = useState(null)
  const rowA = [...writtenTestimonials, ...writtenTestimonials]
  // Only show video cards that actually have a video yet
  const videos = videoTestimonials.filter((t) => t.videoUrl)

  return (
    <section id="results" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute left-[-10%] top-1/3 h-96 w-96 rounded-full bg-violet/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTag>Client Love</SectionTag>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl font-bold tracking-tight lg:text-7xl">
              Don't take
              <br />
              <span className="text-stroke">my word for it</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted">
              Real clients, on camera, talking about what happened to their business after we worked together.
            </p>
          </Reveal>
        </div>

        {videos.length > 0 && (
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((t, i) => (
              <VideoCard key={t.name} t={t} index={i} onPlay={setPlaying} />
            ))}
          </div>
        )}
      </div>

      {/* written feedback marquee */}
      <div className="marquee-paused mt-16 space-y-6 overflow-hidden">
        <div className="animate-marquee-slow flex w-max gap-6 pl-6">
          {rowA.map((t, i) => (
            <WrittenCard key={`a-${i}`} t={t} />
          ))}
        </div>
        <div className="animate-marquee-reverse flex w-max gap-6 pl-6">
          {rowA.map((t, i) => (
            <WrittenCard key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {playing && (
          <VideoModal
            title={playing.name}
            subtitle={playing.role}
            videoUrl={playing.videoUrl}
            onClose={() => setPlaying(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Reveal, { SectionTag } from "./Reveal"

// ─── Industry presets — each themes the live mock website ────────────────────
const industries = [
  {
    id: "restaurant",
    label: "Restaurant",
    emoji: "🍽️",
    bg: "#1c1206",
    panel: "#150d04",
    accent: "#f0a830",
    text: "#fdf4e6",
    muted: "#caa877",
    heroFrom: "#7c3a05",
    heroTo: "#f0a830",
    nav: ["Menu", "Reservations", "About"],
    tagline: "Fresh flavors, crafted daily and served with love.",
    cta: "Reserve a Table",
    badge: "⭐ 4.9 · 2,000+ happy diners",
  },
  {
    id: "fitness",
    label: "Gym & Fitness",
    emoji: "💪",
    bg: "#0d1206",
    panel: "#080d03",
    accent: "#a3e635",
    text: "#f2fbe6",
    muted: "#a3b585",
    heroFrom: "#365314",
    heroTo: "#a3e635",
    nav: ["Classes", "Trainers", "Pricing"],
    tagline: "Transform your body. Transform your life. Starting today.",
    cta: "Start Free Trial",
    badge: "🔥 500+ members crushing goals",
  },
  {
    id: "realestate",
    label: "Real Estate",
    emoji: "🏡",
    bg: "#0a1020",
    panel: "#060a16",
    accent: "#38bdf8",
    text: "#e8f4ff",
    muted: "#8aa8c4",
    heroFrom: "#0c4a6e",
    heroTo: "#38bdf8",
    nav: ["Buy", "Sell", "Agents"],
    tagline: "Find the home you've always dreamed of, right here.",
    cta: "Browse Listings",
    badge: "🏆 $23M+ in homes sold",
  },
  {
    id: "beauty",
    label: "Salon & Beauty",
    emoji: "💅",
    bg: "#1c0a15",
    panel: "#15060f",
    accent: "#f472b6",
    text: "#ffe9f5",
    muted: "#d19bb8",
    heroFrom: "#831843",
    heroTo: "#f472b6",
    nav: ["Services", "Gallery", "Book"],
    tagline: "Look stunning, feel unstoppable. Beauty, redefined.",
    cta: "Book Appointment",
    badge: "✨ Rated #1 salon in town",
  },
  {
    id: "legal",
    label: "Law & Professional",
    emoji: "⚖️",
    bg: "#0b0f1a",
    panel: "#070a12",
    accent: "#c9b072",
    text: "#f0f2f7",
    muted: "#9aa3b5",
    heroFrom: "#1e293b",
    heroTo: "#c9b072",
    nav: ["Practice", "Team", "Contact"],
    tagline: "Trusted counsel and results when it matters most.",
    cta: "Free Consultation",
    badge: "🛡️ 20+ years, 1,000+ clients",
  },
  {
    id: "shop",
    label: "Online Store",
    emoji: "🛍️",
    bg: "#120a1c",
    panel: "#0c0514",
    accent: "#a78bfa",
    text: "#f1ecff",
    muted: "#b0a3d1",
    heroFrom: "#4c1d95",
    heroTo: "#a78bfa",
    nav: ["Shop", "New In", "Sale"],
    tagline: "Discover pieces you'll love — shipped straight to your door.",
    cta: "Shop the Collection",
    badge: "🚚 Free shipping · 4.8★ reviews",
  },
]

function slugify(name) {
  const clean = name.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 22)
  return clean || "yourbusiness"
}

// ─── The live browser mockup ─────────────────────────────────────────────────
function Mockup({ preset, name }) {
  const display = name.trim() || "Your Business"
  const initials = display
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <motion.div
      animate={{ backgroundColor: "#0a0a0f" }}
      className="overflow-hidden rounded-2xl border border-line shadow-2xl"
    >
      {/* browser chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-ink px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex flex-1 items-center gap-2 rounded-md bg-surface px-3 py-1.5 text-xs text-muted">
          <span className="text-[10px]">🔒</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={slugify(display)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="truncate"
            >
              www.{slugify(display)}.com
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* rendered site */}
      <motion.div
        animate={{ backgroundColor: preset.bg }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* nav */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ backgroundColor: preset.accent, color: preset.bg }}
              transition={{ duration: 0.6 }}
              className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold"
            >
              {initials}
            </motion.span>
            <motion.span
              animate={{ color: preset.text }}
              transition={{ duration: 0.6 }}
              className="max-w-[9rem] truncate text-sm font-semibold"
            >
              {display}
            </motion.span>
          </div>
          <div className="hidden gap-4 sm:flex">
            {preset.nav.map((n) => (
              <motion.span
                key={n}
                animate={{ color: preset.muted }}
                transition={{ duration: 0.6 }}
                className="text-xs"
              >
                {n}
              </motion.span>
            ))}
          </div>
          <motion.span
            animate={{ backgroundColor: preset.accent, color: preset.bg }}
            transition={{ duration: 0.6 }}
            className="rounded-full px-3 py-1 text-[11px] font-semibold"
          >
            {preset.nav[preset.nav.length - 1]}
          </motion.span>
        </div>

        {/* hero */}
        <div className="grid gap-4 px-5 pb-6 pt-2 sm:grid-cols-2 sm:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={preset.id + display}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                animate={{ color: preset.accent }}
                className="text-[11px] font-semibold"
              >
                {preset.badge}
              </motion.span>
              <motion.h3
                animate={{ color: preset.text }}
                transition={{ duration: 0.6 }}
                className="mt-2 text-2xl font-bold leading-tight sm:text-[1.7rem]"
              >
                {display}
              </motion.h3>
              <motion.p
                animate={{ color: preset.muted }}
                transition={{ duration: 0.6 }}
                className="mt-2 text-xs leading-relaxed"
              >
                {preset.tagline}
              </motion.p>
              <motion.span
                animate={{ backgroundColor: preset.accent, color: preset.bg }}
                transition={{ duration: 0.6 }}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold"
              >
                {preset.cta} <span>→</span>
              </motion.span>
            </motion.div>
          </AnimatePresence>

          {/* "hero image" */}
          <motion.div
            animate={{
              background: `linear-gradient(140deg, ${preset.heroFrom} 0%, ${preset.heroTo} 100%)`,
            }}
            transition={{ duration: 0.6 }}
            className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={preset.id}
                initial={{ scale: 0.5, opacity: 0, rotate: -12 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotate: 12 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="text-6xl drop-shadow-lg"
              >
                {preset.emoji}
              </motion.span>
            </AnimatePresence>
            <span className="absolute bottom-2 right-2 rounded-md bg-black/25 px-2 py-1 text-[9px] text-white/90 backdrop-blur">
              built by Ali ✦
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function MockupStudio() {
  const [name, setName] = useState("")
  const [industryId, setIndustryId] = useState("restaurant")
  const preset = useMemo(() => industries.find((i) => i.id === industryId), [industryId])

  return (
    <section id="studio" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-96 w-96 rounded-full bg-violet/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-[-8%] bottom-0 h-80 w-80 rounded-full bg-accent/8 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionTag>Try It Live</SectionTag>
          </div>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold tracking-tight lg:text-7xl">
              See <span className="text-stroke-accent">your</span> website
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-lg text-muted">
              Type your business name, pick your industry, and watch a preview come to life. This is a
              taste of what I could build for you.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[2fr_3fr]">
          {/* controls */}
          <Reveal>
            <div className="rounded-2xl border border-line bg-surface p-7">
              <label htmlFor="biz-name" className="mb-2 block font-display text-sm font-medium text-cream/90">
                Your business name
              </label>
              <input
                id="biz-name"
                type="text"
                value={name}
                maxLength={28}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Bloom Café"
                className="w-full rounded-xl border border-line bg-ink px-5 py-4 text-cream placeholder:text-muted/60 outline-none transition-colors duration-300 focus:border-accent"
              />

              <p className="mb-3 mt-6 font-display text-sm font-medium text-cream/90">Your industry</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => {
                  const active = ind.id === industryId
                  return (
                    <button
                      key={ind.id}
                      onClick={() => setIndustryId(ind.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                        active
                          ? "border-accent bg-accent/15 text-cream"
                          : "border-line text-muted hover:border-accent/50 hover:text-cream"
                      }`}
                    >
                      <span>{ind.emoji}</span>
                      {ind.label}
                    </button>
                  )
                })}
              </div>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-accent"
              >
                Love it? Let's build yours for real
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>

          {/* live mockup */}
          <Reveal delay={0.15}>
            <Mockup preset={preset} name={name} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { motion } from "framer-motion"

// Scroll-triggered reveal used across every section.
export default function Reveal({ children, delay = 0, y = 40, className = "", once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.65, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionTag({ children }) {
  return (
    <Reveal>
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 font-display text-xs font-medium uppercase tracking-[0.2em] text-accent">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        {children}
      </span>
    </Reveal>
  )
}

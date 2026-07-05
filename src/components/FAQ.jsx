import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { faq } from "../data/site"
import Reveal, { SectionTag } from "./Reveal"

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg font-semibold transition-colors duration-300 group-hover:text-accent lg:text-xl">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-2xl text-accent"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.65, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 leading-relaxed text-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <SectionTag>FAQ</SectionTag>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight lg:text-5xl">
              Questions?
              <br />
              <span className="text-stroke">Answered.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-sm text-muted">
              Anything else on your mind? Ask me directly — I reply to every message.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="border-t border-line">
            {faq.map((item, i) => (
              <FaqItem key={item.q} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

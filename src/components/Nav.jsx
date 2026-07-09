import { useEffect, useState } from "react"
import { AnimatePresence, motion, useScroll } from "framer-motion"
import { site } from "../data/site"
import MagneticButton from "./MagneticButton"

const links = [
  { label: "Work", href: "#work" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "FAQ", href: "#faq" },
]

export default function Nav() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    return scrollY.on("change", (y) => {
      setScrolled(y > 40)
      setHidden(y > 140 && y > scrollY.getPrevious())
    })
  }, [scrollY])

  return (
    <motion.header
      animate={{ y: hidden && !open ? "-110%" : "0%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line/60 bg-ink/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center">
          <img src="/logo.svg" alt="alihaider.dev" className="h-7 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-display text-sm font-medium text-muted transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 font-display text-sm font-semibold text-ink transition-transform duration-300 hover:scale-105"
            >
              Hire Me
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </MagneticButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }} className="h-0.5 w-6 bg-cream" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -4 : 0 }} className="h-0.5 w-6 bg-cream" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-line bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl font-semibold text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-full bg-accent px-8 py-3 font-display font-semibold text-ink"
                >
                  Hire Me →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

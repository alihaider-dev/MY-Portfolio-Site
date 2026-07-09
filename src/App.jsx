import { useEffect } from "react"
import Cursor from "./components/Cursor"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Work from "./components/Work"
import Testimonials from "./components/Testimonials"
import About from "./components/About"
import Process from "./components/Process"
import Services from "./components/Services"
import Courses from "./components/Courses"
import FAQ from "./components/FAQ"
import Community from "./components/Community"
import Contact from "./components/Contact"

export default function App() {
  // Smooth-scroll all in-page anchor links with a rAF animation. Native
  // smooth scrolling (CSS scroll-behavior AND scrollIntoView smooth) gets
  // cancelled by Chromium when triggered from a click on this page, so we
  // animate window.scrollTo ourselves — instant scrolls are never cancelled.
  useEffect(() => {
    const HEADER_OFFSET = 72
    const animateScrollTo = (targetY) => {
      const startY = window.scrollY
      const diff = targetY - startY
      const duration = Math.min(1100, 400 + Math.abs(diff) * 0.08)
      const start = performance.now()
      const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
      const step = (now) => {
        const p = Math.min(1, (now - start) / duration)
        window.scrollTo(0, startY + diff * ease(p))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const target = document.querySelector(link.getAttribute("href"))
      if (!target) return
      e.preventDefault()
      const targetY = Math.max(0, target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET)
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (reduced || document.visibilityState === "hidden") {
        window.scrollTo(0, targetY)
      } else {
        animateScrollTo(targetY)
        // Safety net: if the animation frames never arrive (throttled tab,
        // battery saver), land on the target instantly.
        setTimeout(() => {
          if (Math.abs(window.scrollY - targetY) > 4) window.scrollTo(0, targetY)
        }, 1400)
      }
      history.pushState(null, "", link.getAttribute("href"))
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return (
    <div className="grain">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Testimonials />
        <About />
        <Process />
        <Services />
        <Courses />
        <FAQ />
        <Community />
      </main>
      <Contact />
    </div>
  )
}

import { useState } from "react"
import { motion } from "framer-motion"
import { site } from "../data/site"
import { coursesSection, courses, waitlist } from "../data/courses"
import Reveal, { SectionTag } from "./Reveal"

function CourseCard({ course, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.21, 0.65, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 lg:p-10"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-[80px] transition-opacity duration-500 group-hover:opacity-35"
        style={{ background: course.gradient[0] }}
      />

      <div className="flex items-start justify-between gap-4">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-2xl font-display text-xl font-bold text-ink"
          style={{ background: `linear-gradient(135deg, ${course.gradient[0]}, ${course.gradient[1]})` }}
          aria-hidden="true"
        >
          {course.icon}
        </span>
        <div className="flex items-center gap-2">
          {!course.live && (
            <span className="rounded-full border border-line bg-ink/60 px-3 py-1 font-display text-xs font-medium uppercase tracking-wider text-muted">
              Launching Soon
            </span>
          )}
          <span className="rounded-full bg-accent px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-ink">
            {course.price}
          </span>
        </div>
      </div>

      <h3 className="mt-6 font-display text-2xl font-bold leading-snug tracking-tight lg:text-3xl">
        {course.title}
      </h3>

      <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
        <span>◆ {course.level}</span>
        <span>▸ {course.lessons} lessons</span>
        <span>● {course.duration}</span>
      </p>

      <p className="mt-4 leading-relaxed text-muted">{course.desc}</p>

      <p className="mt-7 font-display text-xs font-medium uppercase tracking-[0.2em] text-accent">
        What you'll learn
      </p>
      <ol className="mt-3 flex flex-col gap-2.5">
        {course.curriculum.map((item, i) => (
          <li key={item} className="flex items-baseline gap-3 text-sm leading-relaxed text-cream/80">
            <span className="font-display text-xs font-semibold text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item}
          </li>
        ))}
      </ol>

      <div className="mt-8 pt-2">
        {course.live ? (
          <a
            href={course.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display font-semibold text-ink transition-transform duration-300 hover:scale-105"
          >
            Enroll Free
            <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
          </a>
        ) : (
          <a
            href="#waitlist"
            className="group/btn inline-flex items-center gap-2 rounded-full border border-accent/60 px-7 py-3.5 font-display font-semibold text-accent transition-colors duration-300 hover:bg-accent hover:text-ink"
          >
            Join the Waitlist
            <span className="transition-transform duration-300 group-hover/btn:translate-y-0.5">↓</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}

function WaitlistForm() {
  const [status, setStatus] = useState("idle") // idle | sending | success | error

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    if (form.botcheck.value) return // honeypot
    setStatus("sending")
    try {
      // Same Web3Forms browser-post used by the contact form (their WAF only
      // trusts browser submissions) — just a different subject line.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: "New course waitlist signup",
          from_name: "Course Waitlist",
          email: form.email.value,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? "success" : "error")
      if (data.success) form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-accent/40 bg-accent/10 px-8 py-6 text-center"
      >
        <p className="font-display text-xl font-bold">🎉 {waitlist.successHeading}</p>
        <p className="mt-1 text-sm text-muted">{waitlist.successSub}</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <input type="text" name="botcheck" tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full flex-1 rounded-full border border-line bg-ink/60 px-6 py-4 text-cream placeholder:text-muted/60 outline-none transition-colors duration-300 focus:border-accent"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-7 py-4 font-display font-semibold text-ink transition-transform duration-300 hover:scale-105 disabled:opacity-60"
        >
          {status === "sending" ? "Joining…" : waitlist.buttonLabel}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">
          Something went wrong — please try again in a moment.
        </p>
      )}
    </form>
  )
}

export default function Courses() {
  return (
    <section id="courses" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute left-[-15%] top-24 h-[28rem] w-[28rem] rounded-full bg-accent/8 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTag>{coursesSection.tag}</SectionTag>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl font-bold tracking-tight lg:text-7xl">
              {coursesSection.headingTop}
              <br />
              <span className="text-stroke">{coursesSection.headingAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-md leading-relaxed text-muted">{coursesSection.intro}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {courses.map((c, i) => (
            <CourseCard key={c.id} course={c} index={i} />
          ))}
        </div>

        <Reveal>
          <div
            id="waitlist"
            className="relative mt-6 overflow-hidden rounded-3xl border border-line bg-surface p-10 lg:p-14"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/12 blur-[100px]" />
            <div className="relative flex flex-wrap items-center justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="font-display text-3xl font-bold tracking-tight lg:text-4xl">
                  {waitlist.heading}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{waitlist.sub}</p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

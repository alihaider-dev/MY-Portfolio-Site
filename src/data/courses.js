// ─── Your courses ─────────────────────────────────────────────────────────────
// Everything on the Courses section is edited here — no component changes needed.
//
// For each course:
//   • live:       false = "Join the Waitlist" button (scrolls to the email
//                 capture). Flip to true once the course exists on
//                 courses.alihaider.dev and the button becomes "Enroll Free →"
//                 linking straight to `url`.
//   • url:        the course page on your Tutor LMS install
//   • price:      "Free" renders the badge; use e.g. "$49" for paid later
//   • curriculum: module titles shown as the preview — keep them outcome-y
//   • gradient:   the card's glow colors (top accent → deep base)
export const coursesSection = {
  tag: "Free Courses",
  headingTop: "Learn to build",
  headingAccent: "your own website",
  intro:
    "The exact skills I use on client projects, taught step by step. No fluff, no jargon — you finish each course with a real website you built yourself.",
  lmsUrl: "https://courses.alihaider.dev",
}

export const courses = [
  {
    id: "responsive-html-css",
    title: "Build a Responsive Website with HTML & CSS",
    level: "Beginner",
    price: "Free",
    live: false,
    url: "https://courses.alihaider.dev",
    lessons: 24,
    duration: "4 hours",
    desc: "Start from a blank file and finish with a fully responsive, multi-section website — the foundation every web developer builds on.",
    curriculum: [
      "How websites actually work (the 10-minute version)",
      "HTML that structures real pages, not toy examples",
      "CSS layouts with Flexbox & Grid",
      "Making it responsive — mobile, tablet, desktop",
      "Polish: fonts, spacing, and a pro-level finish",
      "Publish your site live on the internet, free",
    ],
    gradient: ["#f4a203", "#6b4a00"],
    icon: "</>",
  },
  {
    id: "wordpress-website",
    title: "Build a Complete WordPress Website",
    level: "Beginner",
    price: "Free",
    live: false,
    url: "https://courses.alihaider.dev",
    lessons: 20,
    duration: "3.5 hours",
    desc: "Launch a professional WordPress site the way I do for paying clients — hosting, theme, pages, and the settings that actually matter.",
    curriculum: [
      "Domains & hosting without getting ripped off",
      "Installing WordPress the right way",
      "Themes & page builders — what pros really use",
      "Building your pages: home, about, services, contact",
      "Speed, security & SEO essentials",
      "Launch day: going live with confidence",
    ],
    gradient: ["#38bdf8", "#0c4a6e"],
    icon: "W",
  },
]

export const waitlist = {
  heading: "Be first in when the courses launch",
  sub: "Drop your email and I'll send you the enrollment link the day the first course goes live — plus the occasional free tip. No spam, ever.",
  buttonLabel: "Join the Waitlist",
  successHeading: "You're on the list!",
  successSub: "I'll email you the moment enrollment opens.",
}

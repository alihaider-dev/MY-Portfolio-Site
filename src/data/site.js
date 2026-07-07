// ─── Edit your personal info here ───────────────────────────────────────────
export const site = {
  name: "Ali Haider",
  role: "WordPress Expert",
  email: "alisdevhub@gmail.com",
  headlineTop: "WordPress Websites",
  headlineAccent: "That Convert",
  subheadline:
    "I help businesses turn their websites into their best salesperson — stunning design, blazing speed, and layouts engineered to convert visitors into customers.",
  discordUrl: "https://discord.gg/4PYsWBWfCg", // ← replace with your real Discord invite
  introVideo: {
    url: "/videos/intro-video.mp4",
    thumbnail: "/videos/thumbs/intro-thumbnail.webp",
    label: "Meet Ali",
    sublabel: "Watch my intro",
  },
  fiverrUrl: "https://www.fiverr.com/elementorhero",
  // Cloudflare Turnstile site key (public). The secret key lives in Vercel's
  // TURNSTILE_SECRET_KEY env var; /api/contact.js verifies the token, then
  // the browser forwards the message to Web3Forms (public access key below),
  // which emails it to alisdevhub@gmail.com.
  turnstileSiteKey: "0x4AAAAAAAHxAszu3x96ulyC",
  web3formsKey: "15fc4646-3e1e-44aa-ac6d-84d650e9e64e",
  socials: [
    { label: "Discord", url: "https://discord.gg/4PYsWBWfCg" },
    // { label: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
    { label: "YouTube", url: "https://www.youtube.com/@AlisDevHub" },
    { label: "Fiverr", url: "https://www.fiverr.com/elementorhero" },
  ],
}

export const about = {
  photo: "/videos/thumbs/intro-thumbnail.webp",
  heading: "The developer behind the results",
  // ← Edit this story freely — it converts best when it sounds like you.
  paragraphs: [
    "I'm Ali Haider — a WordPress expert who has spent years turning websites from pretty brochures into salespeople that work around the clock. Over 100 projects and 50+ happy clients later, one thing hasn't changed: I only win when your website wins.",
    "I work with business owners who don't care about tech jargon — they care about more leads, more bookings, and more sales. That's the language I build in. Every layout decision, every speed optimization, every line of copy placement is aimed at one thing: turning your visitors into customers.",
  ],
  bullets: [
    "5.0★ rated across every client project",
    "Fast, clear communication — no ghosting, ever",
    "You own everything: site, files, and accounts",
  ],
}

export const faq = [
  {
    q: "How much does a website cost?",
    a: "It depends on what your business needs — a lead-generation site and a full online store are very different projects. After a free discovery chat, you get a fixed quote with no hidden costs, so you know the exact investment before we start. No surprises, ever.",
  },
  {
    q: "How long will my website take?",
    a: "Most projects launch within 1–3 weeks depending on scope. You'll get a clear timeline before we start, and I keep you updated at every milestone — you'll never wonder what's happening with your project.",
  },
  {
    q: "Will I own my website?",
    a: "100%. The domain, hosting, files, and all accounts belong to you from day one. You're never locked in to me — though most clients stay because they want to, not because they have to.",
  },
  {
    q: "Can I update the site myself after launch?",
    a: "Yes — that's one of the reasons I build on WordPress. You get a walkthrough at launch showing you how to edit text, images, and products yourself. No developer needed for everyday changes.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just your business goals and any content you already have (logo, photos, text). Don't have content ready? No problem — I'll guide you through exactly what's needed, step by step.",
  },
  {
    q: "What happens after my site goes live?",
    a: "I don't disappear. Every project includes post-launch support, and if you want ongoing peace of mind, my maintenance plans cover updates, backups, security, and priority help whenever you need it.",
  },
]

export const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5.0, suffix: "★", label: "Average Rating", decimals: 1 },
  { value: 7, suffix: "d", label: "Avg. Delivery Time" },
]

export const marqueeItems = [
  "WordPress",
  "WooCommerce",
  "Speed Optimization",
  "Theme Customization",
  "SEO",
  "Security",
  "Elementor",
  "Landing Pages",
  "Migration",
  "Maintenance",
]

export const services = [
  {
    title: "Custom WordPress Websites",
    desc: "Fully custom WordPress builds tailored to your brand and engineered to sell.",
    icon: "◆",
  },
  {
    title: "WooCommerce Development",
    desc: "Complete online stores with conversion-first checkout experiences.",
    icon: "▲",
  },
  {
    title: "Speed Optimization",
    desc: "Sub-2-second load times. Fast sites rank higher and convert better.",
    icon: "●",
  },
  {
    title: "Theme Customization",
    desc: "Premium themes reshaped to match your unique brand identity.",
    icon: "■",
  },
  {
    title: "Security Hardening",
    desc: "Robust protection so your site — and your customers — stay safe.",
    icon: "⬟",
  },
  {
    title: "SEO Optimization",
    desc: "Technical SEO foundations that put your business in front of buyers.",
    icon: "✦",
  },
  {
    title: "Website Migration",
    desc: "Seamless moves to WordPress with zero downtime and zero data loss.",
    icon: "◗",
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing updates, backups and support so you can focus on business.",
    icon: "◈",
  },
]

export const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "We discuss your vision, goals, and requirements to create a tailored plan for your website — and how it will make you money.",
  },
  {
    step: "02",
    title: "Design & Development",
    desc: "I build your custom WordPress website with premium tools, conversion-focused layouts, and optimizations for peak performance.",
  },
  {
    step: "03",
    title: "Launch & Support",
    desc: "Your website goes live. I provide training and ongoing support so your site keeps performing long after launch.",
  },
]

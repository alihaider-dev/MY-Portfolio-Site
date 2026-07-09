// ─── Service pages (SEO landing pages) ──────────────────────────────────────
// One object per page → one prerendered URL at /services/<slug>/.
// Edit copy here — no component changes needed. Fields:
//   • metaTitle/metaDescription: what Google shows (title ≤ 60 chars-ish)
//   • h1: [plainPart, outlinedPart] — outlined part gets the amber stroke
//   • quote: a REAL verbatim review (from testimonials.js) or null to hide
//   • stats: optional "typical results" tiles — only claim what you can back
//   • priceFrom: e.g. "$149" to show "From $149", or null for "fixed quote"
//   • related: slugs cross-linked at the bottom (internal-link mesh)
export const servicesHub = {
  metaTitle: "WordPress Development Services — Ali Haider",
  metaDescription:
    "Custom WordPress websites, WooCommerce stores, speed optimization, SEO, security, migration and maintenance — by a 5.0-rated WordPress expert. Fixed quotes, fast delivery.",
  eyebrow: "Services",
  h1: ["Every service your", "website needs"],
  sub: "Pick the service that fits — every engagement starts with a free consultation and ends with measurable results. 100+ projects delivered, 5.0★ rated.",
}

export const servicePages = [
  {
    slug: "custom-wordpress-website-development",
    name: "Custom WordPress Websites",
    metaTitle: "Custom WordPress Website Development — Ali Haider",
    metaDescription:
      "Fully custom WordPress websites engineered to convert — strategy, design, build and launch by a 5.0-rated WordPress expert with 100+ projects delivered.",
    eyebrow: "Custom WordPress Development",
    h1: ["A website that works like", "your best salesperson"],
    sub: "Not a template with your logo on it — a fully custom WordPress site built around your business, your customers, and the one action you want visitors to take.",
    pains: [
      { t: "Your site looks like everyone else's", d: "Template sites blend in. Customers can't tell why they should pick you." },
      { t: "Visitors come, but nobody enquires", d: "Traffic without conversions is a design problem, not a marketing problem." },
      { t: "You can't update anything yourself", d: "Every small change means paying a developer and waiting a week." },
    ],
    included: [
      { icon: "◆", title: "Conversion-first design", d: "Layouts engineered around the action you want — calls, bookings, or sales." },
      { icon: "■", title: "Fully custom build", d: "Designed from your brand up. No bloated multipurpose themes." },
      { icon: "●", title: "Fast by default", d: "Sub-2-second loads and green Core Web Vitals from day one." },
      { icon: "✦", title: "SEO foundations", d: "Clean structure, schema markup and metadata Google can actually read." },
      { icon: "▲", title: "Easy self-editing", d: "Change text, images and pages yourself — with a training video included." },
      { icon: "◈", title: "30 days of support", d: "Post-launch fixes and tweaks included, so nothing is left hanging." },
    ],
    steps: [
      { title: "Free discovery chat", d: "We talk about your business and what the site must achieve. You get a fixed quote — no hourly surprises." },
      { title: "Design & build", d: "You see progress early and often. Feedback rounds are included, not extra." },
      { title: "Launch & handover", d: "Live site, training video, and 30 days of support." },
    ],
    quote: {
      text: "He was amazing to work with. He delivered everything extremely fast and responded quickly to all of our additional requests. The quality of his work exceeded our expectations, and he is now officially on our list of preferred WordPress editors.",
      author: "victoratpremier",
      role: "Fiverr · United States",
    },
    stats: null,
    priceFrom: null,
    faqs: [
      { q: "How long does a custom website take?", a: "Most business sites launch in 2–4 weeks depending on size. You'll get a concrete timeline with your quote, and I hit it — my average delivery rating on Fiverr is 5.0." },
      { q: "Will I be able to edit the site myself?", a: "Yes. Every build is handed over with a training video showing you exactly how to change text, images, and pages. You'll never need a developer for small edits." },
      { q: "Do you write the content too?", a: "I structure every page around proven conversion patterns and polish your draft copy as part of the build. If you need content written from scratch, we'll scope that in your quote." },
      { q: "What do you need from me to start?", a: "A short conversation about your business, any brand assets you have (logo, colors, photos), and examples of sites you like. I'll handle everything else." },
    ],
    related: ["woocommerce-development", "wordpress-speed-optimization", "wordpress-seo-service"],
  },
  {
    slug: "woocommerce-development",
    name: "WooCommerce Development",
    metaTitle: "WooCommerce Development Service — Ali Haider",
    metaDescription:
      "WooCommerce stores built to sell — conversion-first product pages, fast checkout, payments and shipping configured right. 5.0-rated WordPress expert.",
    eyebrow: "WooCommerce Development",
    h1: ["An online store built", "to actually sell"],
    sub: "From product pages to a checkout that doesn't leak customers — a complete WooCommerce store, configured by someone who's done it for real businesses.",
    pains: [
      { t: "Carts get abandoned at checkout", d: "Every extra field and slow page in checkout costs you real revenue." },
      { t: "Managing products is a chore", d: "A store you dread updating is a store that goes stale." },
      { t: "Payments & shipping feel risky", d: "One wrong tax or shipping setting quietly costs money on every order." },
    ],
    included: [
      { icon: "▲", title: "Complete store setup", d: "Products, categories, variations, taxes and emails — configured properly." },
      { icon: "◆", title: "Conversion-first product pages", d: "Clear photos, trust signals and CTAs where they actually work." },
      { icon: "●", title: "Streamlined checkout", d: "Fewer steps, fewer fields, more completed orders." },
      { icon: "⬟", title: "Payments & shipping", d: "Stripe, PayPal, local gateways, real shipping rates — tested end to end." },
      { icon: "✦", title: "Store SEO", d: "Product schema and clean category structure so products show up in Google." },
      { icon: "◈", title: "Owner training", d: "A video walkthrough of managing products, orders and discounts yourself." },
    ],
    steps: [
      { title: "Free store consult", d: "What you sell, where you ship, how you want to get paid. Fixed quote follows." },
      { title: "Build & test", d: "Store built on staging, then every flow tested with real test orders." },
      { title: "Launch & train", d: "Go live with confidence plus a training video and 30 days of support." },
    ],
    quote: {
      text: "He created a clean, professional design and added a functional popup form on the “Buy Now” button exactly as requested. Communication was smooth, and the delivery was right on time.",
      author: "abyusuf",
      role: "Fiverr · Bangladesh",
    },
    stats: null,
    priceFrom: null,
    faqs: [
      { q: "Can you fix my existing WooCommerce store instead of building new?", a: "Absolutely. Store rescues — fixing checkout, speed, or configuration on an existing store — are some of my most common projects. The free consult tells you exactly what's wrong." },
      { q: "Which payment gateways do you set up?", a: "Stripe and PayPal are standard, and I've configured regional gateways for clients worldwide. If it has a WooCommerce integration, I can set it up and test it properly." },
      { q: "How many products can you migrate or add?", a: "Any amount — small catalogs get added by hand, large ones get imported via CSV with images, variations and SEO fields mapped correctly." },
      { q: "Will my store be fast?", a: "Yes — WooCommerce has a reputation for being slow only when it's set up carelessly. Every store I build ships with caching, image optimization and lean plugins." },
    ],
    related: ["custom-wordpress-website-development", "wordpress-speed-optimization", "wordpress-maintenance"],
  },
  {
    slug: "wordpress-speed-optimization",
    name: "Speed Optimization",
    metaTitle: "WordPress Speed Optimization Service — Ali Haider",
    metaDescription:
      "Slow WordPress site? Get sub-2-second load times and 90+ PageSpeed scores — caching, image optimization, Core Web Vitals fixes with before/after proof.",
    eyebrow: "WordPress Speed Optimization",
    h1: ["Slow WordPress site? I'll make it load in", "under 2 seconds"],
    sub: "Google ranks fast sites higher and visitors buy from them more. I find exactly what's slowing your WordPress site down and fix it — with before/after numbers to prove it.",
    pains: [
      { t: "Visitors leave before it loads", d: "Most mobile users abandon a site that takes over 3 seconds." },
      { t: "PageSpeed score stuck in the red", d: "You've tried caching plugins and it barely moved." },
      { t: "Ads cost more, convert less", d: "Slow landing pages quietly raise your cost per lead." },
    ],
    included: [
      { icon: "●", title: "Core Web Vitals fix", d: "LCP, CLS and INP brought into Google's green zone — the metrics that affect rankings." },
      { icon: "◆", title: "Caching & CDN setup", d: "Server-level caching plus a CDN so it's fast everywhere, not just near your host." },
      { icon: "■", title: "Image & media optimization", d: "WebP conversion, right-sizing and lazy loading — usually the single biggest win." },
      { icon: "▲", title: "Database & code cleanup", d: "Bloated revisions, transient junk and render-blocking scripts removed." },
      { icon: "⬟", title: "Theme & plugin audit", d: "The two plugins costing you 2 seconds get found, replaced or configured properly." },
      { icon: "✦", title: "Verified results report", d: "Before/after PageSpeed and GTmetrix reports — you see exactly what you paid for." },
    ],
    steps: [
      { title: "Free speed audit", d: "Send your URL. You get a plain-English report of what's slow and why — no obligation." },
      { title: "Fix sprint", d: "Everything implemented on a staging copy first. Your live site is never at risk." },
      { title: "Verified handover", d: "Before/after reports, and 30 days of support in case anything drifts." },
    ],
    quote: {
      text: "Ali is Amazing to work with. Extremely fast and knowledgeable. He has high level of competence with high standards for all projects.",
      author: "pronation",
      role: "Fiverr · United States · Repeat Client",
    },
    stats: [
      { label: "Load time", value: "Sub-2s", note: "target on every project" },
      { label: "PageSpeed mobile", value: "90+", note: "typical post-fix score" },
      { label: "This site's LCP", value: "0.8s", note: "practice what I preach" },
    ],
    priceFrom: null,
    faqs: [
      { q: "How fast will my site actually get?", a: "Most sites land at sub-2-second load times and 90+ mobile PageSpeed. If your hosting is the real bottleneck, the free audit will say so before you spend anything." },
      { q: "Will anything on my site break?", a: "No — all changes are made on a staging copy first and tested before going live. Your live site is never the experiment." },
      { q: "Do you work with WooCommerce stores?", a: "Yes, and they benefit the most — faster product and checkout pages directly increase completed orders. Cart and checkout get special cache-exclusion handling." },
      { q: "What if the scores drop again later?", a: "You get 30 days of included support, and a maintenance plan can keep scores locked in long-term — new plugins and content are usually what cause drift." },
    ],
    related: ["wordpress-seo-service", "wordpress-maintenance", "woocommerce-development"],
  },
  {
    slug: "wordpress-theme-customization",
    name: "Theme Customization",
    metaTitle: "WordPress Theme Customization — Ali Haider",
    metaDescription:
      "Make your WordPress theme match your brand — layout changes, custom sections, Elementor builds and pixel-perfect polish by a 5.0-rated expert.",
    eyebrow: "WordPress Theme Customization",
    h1: ["Your theme, reshaped to", "match your brand"],
    sub: "Premium themes are a starting point, not a finished site. I customize layout, styling and functionality until your site looks like your brand — not like the theme demo.",
    pains: [
      { t: "Your site still looks like the demo", d: "Customers notice when a business runs on an untouched template." },
      { t: "The theme fights you", d: "That one section you want to change never quite looks right." },
      { t: "Custom code scares you", d: "One wrong edit in the wrong file can take the whole site down." },
    ],
    included: [
      { icon: "■", title: "Layout & section changes", d: "Rearrange, add or rebuild sections the theme options can't touch." },
      { icon: "◆", title: "Brand styling", d: "Your exact colors, fonts and spacing applied consistently everywhere." },
      { icon: "▲", title: "Elementor expertise", d: "Custom Elementor sections and templates — my daily tool of choice." },
      { icon: "●", title: "Child-theme safety", d: "All changes update-proof, so theme updates never wipe your customizations." },
      { icon: "⬟", title: "Responsive polish", d: "Every change checked on mobile, tablet and desktop — not just desktop." },
      { icon: "✦", title: "Performance-safe", d: "Customizations that don't slow your site down or break Core Web Vitals." },
    ],
    steps: [
      { title: "Free walkthrough", d: "Show me what you want changed — a list, sketches, or example sites all work." },
      { title: "Customize & preview", d: "Changes built safely and shared for your feedback before going live." },
      { title: "Live & documented", d: "Changes deployed, documented, and protected from future theme updates." },
    ],
    quote: {
      text: "Ali was super helpful and really understood our project. Super easy to work with and even jumped online to add further value with an extra training video to support us.",
      author: "lloydgroom",
      role: "Fiverr · United Kingdom",
    },
    stats: null,
    priceFrom: null,
    faqs: [
      { q: "Which themes and builders do you work with?", a: "All major ones — Elementor (my specialty), Astra, Divi, Avada, Kadence, Hello, GeneratePress and custom themes. If it's WordPress, I can customize it." },
      { q: "Will theme updates undo your changes?", a: "No — customizations are done the update-safe way (child themes, custom CSS layers, or builder templates), so you can keep updating your theme normally." },
      { q: "Can you just make small tweaks, or only big projects?", a: "Both. Plenty of clients bring a punch-list of small fixes; others want whole sections redesigned. The free walkthrough gets you a fixed quote either way." },
      { q: "My theme is slow and clunky — customize or rebuild?", a: "I'll tell you honestly in the walkthrough. Sometimes an hour of customization saves a rebuild; sometimes a rebuild saves years of fighting a bad theme." },
    ],
    related: ["custom-wordpress-website-development", "wordpress-speed-optimization", "wordpress-maintenance"],
  },
  {
    slug: "wordpress-security-service",
    name: "Security Hardening",
    metaTitle: "WordPress Security Hardening Service — Ali Haider",
    metaDescription:
      "WordPress security hardening and malware cleanup — firewall, login protection, automated backups and monitoring so your site and customers stay safe.",
    eyebrow: "WordPress Security",
    h1: ["Lock your site down", "before someone else does"],
    sub: "WordPress powers 40% of the web, which makes it the most attacked platform on earth. I harden your site, clean up anything suspicious, and set up backups you can actually restore.",
    pains: [
      { t: "Strange redirects or spam pages", d: "Classic signs of an infection that gets worse the longer it sits." },
      { t: "Google flagged your site", d: "'Deceptive site ahead' warnings kill traffic and trust instantly." },
      { t: "No real backups", d: "If your host's backup fails, your business is one hack from zero." },
    ],
    included: [
      { icon: "⬟", title: "Malware scan & cleanup", d: "Infected files found and removed, backdoors closed, blacklists cleared." },
      { icon: "◆", title: "Firewall & login protection", d: "Web application firewall, brute-force protection and two-factor login." },
      { icon: "●", title: "Automated off-site backups", d: "Scheduled backups to Google Drive or S3 — tested by actually restoring one." },
      { icon: "■", title: "Hardening pass", d: "File permissions, database prefix, XML-RPC, user roles — locked down." },
      { icon: "▲", title: "Update strategy", d: "Core, theme and plugin updates configured so security patches land fast." },
      { icon: "✦", title: "Monitoring & alerts", d: "Uptime and file-change monitoring so you hear about problems first." },
    ],
    steps: [
      { title: "Free security check", d: "I scan your site and tell you what's exposed — in plain English." },
      { title: "Clean & harden", d: "Any infection removed, then the full hardening pass applied." },
      { title: "Protected & monitored", d: "Backups running, monitoring live, and a report of everything done." },
    ],
    quote: {
      text: "Once again, Ali did a fantastic job! He successfully cleaned malware, improved the security, and set up Google Drive backups for all my WordPress sites. Highly recommended for anyone looking for a reliable and knowledgeable WordPress expert.",
      author: "amirgtr",
      role: "Fiverr · United States",
    },
    stats: null,
    priceFrom: null,
    faqs: [
      { q: "My site is hacked right now — how fast can you help?", a: "Malware cleanups are priority jobs; most are cleaned within 24–48 hours, including getting Google's warnings removed and your site off blacklists." },
      { q: "Will security plugins slow my site down?", a: "Badly configured ones do. I use lean, server-level protection where possible, so you get real security without the performance tax." },
      { q: "Do I need this if my host says they handle security?", a: "Host security protects the server, not your WordPress install. Most infections come through plugins, themes and weak logins — which are your responsibility, not your host's." },
      { q: "What happens if the site gets infected again?", a: "The hardening pass closes the holes that let infections in, and backups + monitoring mean any future problem is caught early and recoverable. Maintenance plans include ongoing protection." },
    ],
    related: ["wordpress-maintenance", "wordpress-speed-optimization", "wordpress-migration-service"],
  },
  {
    slug: "wordpress-seo-service",
    name: "SEO Optimization",
    metaTitle: "WordPress SEO Service — Ali Haider",
    metaDescription:
      "Technical WordPress SEO that puts your business in front of buyers — site structure, schema markup, Core Web Vitals and on-page optimization done right.",
    eyebrow: "WordPress SEO",
    h1: ["Get found by people", "ready to buy"],
    sub: "SEO isn't magic — it's technical foundations done properly. I fix the structure, speed and markup that decide whether Google takes your site seriously.",
    pains: [
      { t: "Competitors outrank you everywhere", d: "Their sites aren't better — their SEO foundations are." },
      { t: "You publish content, nothing happens", d: "Great content on a technically broken site stays invisible." },
      { t: "SEO agencies want $1k+/month", d: "Most sites need foundations fixed once, not a retainer forever." },
    ],
    included: [
      { icon: "✦", title: "Technical SEO audit & fix", d: "Crawlability, indexing, redirects, sitemaps — the invisible stuff that decides rankings." },
      { icon: "◆", title: "Site structure & internal links", d: "Pages organized the way Google (and buyers) actually navigate." },
      { icon: "■", title: "Schema markup", d: "Structured data for rich results — stars, FAQs, breadcrumbs in search listings." },
      { icon: "●", title: "Speed & Core Web Vitals", d: "Page experience signals brought into the green — a confirmed ranking factor." },
      { icon: "▲", title: "On-page optimization", d: "Titles, headings and metadata rewritten around the keywords buyers use." },
      { icon: "◈", title: "Search Console setup", d: "Tracking configured so you can see rankings and clicks improve." },
    ],
    steps: [
      { title: "Free SEO check", d: "I audit your site and show you the exact issues holding rankings back." },
      { title: "Foundation fix", d: "Technical issues, structure, schema and on-page work — all implemented, not just recommended." },
      { title: "Measure & handover", d: "Search Console configured and a clear report of what changed and what to expect." },
    ],
    quote: {
      text: "I hired them to take over the management of my WordPress blog, which involved everything from content formatting and uploading to on-page SEO optimization, and I am incredibly impressed with the results.",
      author: "evertonh",
      role: "Fiverr · United Kingdom",
    },
    stats: null,
    priceFrom: null,
    faqs: [
      { q: "How long until I see ranking improvements?", a: "Technical fixes typically show movement in 4–8 weeks as Google recrawls. Competitive keywords take longer — I'll set honest expectations in the free check, not promises." },
      { q: "Is this a one-time fix or ongoing service?", a: "The foundation fix is one-time — most sites don't need a monthly retainer. If you want ongoing content and link support afterwards, we can scope that separately." },
      { q: "Do you guarantee #1 rankings?", a: "No, and you should run from anyone who does. I guarantee the technical work is done correctly and completely — the part of SEO you can actually control." },
      { q: "Will this work with Yoast / Rank Math?", a: "Yes — I configure whichever SEO plugin you prefer properly. The plugin is a tool; the audit and implementation are what move rankings." },
    ],
    related: ["wordpress-speed-optimization", "custom-wordpress-website-development", "wordpress-maintenance"],
  },
  {
    slug: "wordpress-migration-service",
    name: "Website Migration",
    metaTitle: "WordPress Migration Service (Zero Downtime) — Ali Haider",
    metaDescription:
      "Move your website to WordPress or a new host with zero downtime and zero data loss — content, SEO rankings, emails and SSL handled end to end.",
    eyebrow: "WordPress Migration",
    h1: ["Move your site without", "losing a thing"],
    sub: "New host, new domain, or moving to WordPress from another platform — migrated properly, your visitors never notice and your Google rankings come with you.",
    pains: [
      { t: "Scared of breaking the site", d: "One bad migration can mean days of downtime and lost sales." },
      { t: "Worried about SEO rankings", d: "Botched redirects after a move can erase years of ranking work." },
      { t: "Your current host is holding you hostage", d: "Slow support and renewal price hikes — but leaving feels risky." },
    ],
    included: [
      { icon: "◗", title: "Full-site migration", d: "Files, database, media and settings — everything moves, nothing gets lost." },
      { icon: "✦", title: "SEO-safe redirects", d: "Every old URL 301-redirected so rankings and backlinks survive the move." },
      { icon: "●", title: "Zero-downtime cutover", d: "The site moves behind the scenes; DNS flips only when everything's verified." },
      { icon: "⬟", title: "SSL & email continuity", d: "HTTPS reissued and email routing preserved — the two things that usually break." },
      { icon: "■", title: "Platform moves", d: "Wix, Squarespace, Shopify or static HTML → WordPress, content intact." },
      { icon: "◈", title: "Post-move verification", d: "Forms, checkout and every key page tested on the new home before handover." },
    ],
    steps: [
      { title: "Free migration plan", d: "Tell me where you are and where you're going — you get a plan and fixed quote." },
      { title: "Staged move", d: "Full copy built and tested at the destination while your live site keeps running." },
      { title: "Verified cutover", d: "DNS switch at a low-traffic hour, everything re-tested, redirects confirmed." },
    ],
    quote: null,
    stats: null,
    priceFrom: null,
    faqs: [
      { q: "Will my site really have zero downtime?", a: "Yes — the migration happens on a staged copy while your current site stays live. The final DNS switch takes effect gradually and both copies serve traffic during the overlap." },
      { q: "Will I lose my Google rankings?", a: "Not if redirects are done right, and that's the core of this service. Every old URL maps to its new home with a 301, and Search Console is updated so Google follows the move." },
      { q: "Can you move me from Wix / Squarespace / Shopify to WordPress?", a: "Yes — pages, posts, images and products are rebuilt or imported into WordPress, usually looking better than the original. You also finally own your site outright." },
      { q: "What about my email?", a: "Email routing is mapped before anything moves. If your email lives with your old host, I'll set it up at the new home or move you to a proper email provider — no lost messages." },
    ],
    related: ["wordpress-maintenance", "wordpress-security-service", "wordpress-speed-optimization"],
  },
  {
    slug: "wordpress-maintenance",
    name: "Maintenance & Support",
    metaTitle: "WordPress Maintenance & Support Plans — Ali Haider",
    metaDescription:
      "WordPress maintenance plans — updates, backups, security monitoring, uptime checks and priority support, so your site stays fast and safe while you run your business.",
    eyebrow: "WordPress Maintenance & Support",
    h1: ["Your website, looked after", "so you never think about it"],
    sub: "Updates, backups, security and small fixes — handled every month by the same expert who builds sites for a living. You run the business; I keep the site healthy.",
    pains: [
      { t: "17 pending updates and counting", d: "Updating blind is risky; not updating is riskier." },
      { t: "No idea if backups actually work", d: "A backup you've never restored is a hope, not a plan." },
      { t: "Small fixes take weeks to get done", d: "Finding a developer for 20-minute jobs is harder than the job itself." },
    ],
    included: [
      { icon: "◈", title: "Managed updates", d: "Core, themes and plugins updated safely — with rollback if anything misbehaves." },
      { icon: "●", title: "Verified backups", d: "Automated off-site backups, periodically test-restored so they're real." },
      { icon: "⬟", title: "Security monitoring", d: "Malware scanning, uptime monitoring and firewall kept current." },
      { icon: "■", title: "Monthly support time", d: "Included time each month for tweaks, fixes and small improvements." },
      { icon: "◆", title: "Speed check-ups", d: "Performance reviewed regularly so scores don't quietly decay." },
      { icon: "✦", title: "Priority response", d: "When something's wrong, you skip the queue — direct access, fast answers." },
    ],
    steps: [
      { title: "Free site health check", d: "I review your site's current state and recommend the right plan level." },
      { title: "Onboard & baseline", d: "Backups configured, security hardened, everything updated to a clean baseline." },
      { title: "Monthly care", d: "Ongoing updates, monitoring and support — with a monthly report you can actually read." },
    ],
    quote: {
      text: "Once again, Ali did a fantastic job! He successfully cleaned malware, improved the security, and set up Google Drive backups for all my WordPress sites.",
      author: "amirgtr",
      role: "Fiverr · United States",
    },
    stats: null,
    priceFrom: null,
    faqs: [
      { q: "What's included in the monthly plan?", a: "Safe updates, verified backups, security and uptime monitoring, speed check-ups, and a block of included support time for fixes and tweaks. Plans scale for stores and busier sites." },
      { q: "My site wasn't built by you — can you still maintain it?", a: "Yes. Onboarding starts with a health check and cleanup baseline, so I know your site inside out before taking over its care." },
      { q: "What if my site goes down at 2am?", a: "Uptime monitoring alerts me automatically — most issues are fixed before you'd have noticed. That's the point of monitoring versus waiting for a customer to tell you." },
      { q: "Can I cancel anytime?", a: "Yes — plans are month to month, no lock-in. Everything (backups, access, documentation) is yours and stays with you if you leave." },
    ],
    related: ["wordpress-security-service", "wordpress-speed-optimization", "wordpress-theme-customization"],
  },
]

// Lookup helper used by the router, prerenderer and sitemap.
export const getServiceBySlug = (slug) => servicePages.find((s) => s.slug === slug)

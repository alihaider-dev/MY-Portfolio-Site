// ─── Client feedback ─────────────────────────────────────────────────────────
// VIDEO testimonials: set videoUrl to either
//   • a YouTube link  → "https://www.youtube.com/watch?v=XXXX" (or youtu.be/XXXX)
//   • a local file    → put it in /public/videos/ and use "/videos/client1.mp4"
// While videoUrl is empty ("") the card still renders so you can see the design.
// NOTE ON QUOTES: only put text in `quote` if the client actually said/wrote
// it word-for-word. If you don't have a verbatim quote, leave `quote: ""` and
// use `caption` for an honest, non-quote line — the card won't fake a quote.
export const videoTestimonials = [
  {
    name: "Mohammad Salah",
    role: "Business Director, WiConnect",
    videoUrl: "https://youtu.be/OxJKhU4ML1E",
    thumbnail: "/videos/thumbs/WiConnect-Thumbnail.webp",
    gradient: ["#f4a203", "#3a2800"],
    quote: "", // ← paste Mohammad's exact words from the video here for a real pull-quote
    caption: "Hear it from the client — WiConnect's WordPress redesign.",
    duration: "3:49",
  },
  {
    name: "Namrial Hurd",
    role: "Owner, Bigger Vision Agency",
    videoUrl: "",
    thumbnail: null,
    gradient: ["#a78bfa", "#2e1065"],
    quote: "",
    caption: "Client feedback — watch the full story.",
    duration: "0:58",
  },
  {
    name: "Austin Cheatham",
    role: "CEO, Kentucky Best",
    videoUrl: "",
    thumbnail: null,
    gradient: ["#f472b6", "#500724"],
    quote: "",
    caption: "Client feedback — watch the full story.",
    duration: "1:47",
  },
]

// Real reviews pulled verbatim from fiverr.com/elementorhero (5.0★, 16 reviews)
export const writtenTestimonials = [
  {
    name: "pronation",
    role: "Fiverr · United States · Repeat Client",
    rating: 5,
    text: "Ali is Amazing to work with. Extremely fast and knowledgeable. He has high level of competence with high standards for all projects. Ali is great to work and his communication great. I highly recommend his service.",
  },
  {
    name: "victoratpremier",
    role: "Fiverr · United States",
    rating: 5,
    text: "He was amazing to work with. He delivered everything extremely fast and responded quickly to all of our additional requests. The quality of his work exceeded our expectations, and he is now officially on our list of preferred WordPress editors. Highly recommended.",
  },
  {
    name: "evertonh",
    role: "Fiverr · United Kingdom",
    rating: 5,
    text: "This has been an absolute game-changer for my business. I hired them to take over the management of my WordPress blog, which involved everything from content formatting and uploading to on-page SEO optimization, and I am incredibly impressed with the results.",
  },
  {
    name: "lloydgroom",
    role: "Fiverr · United Kingdom",
    rating: 5,
    text: "Ali was super helpful and really understood our project. Super easy to work with and even jumped online to add further value with an extra training video to support us. We will defo use again in future.",
  },
  {
    name: "amirgtr",
    role: "Fiverr · United States",
    rating: 5,
    text: "Once again, Ali did a fantastic job! He successfully cleaned malware, improved the security, and set up Google Drive backups for all my WordPress sites. Highly recommended for anyone looking for a reliable and knowledgeable WordPress expert.",
  },
  {
    name: "abyusuf",
    role: "Fiverr · Bangladesh",
    rating: 5,
    text: "He created a clean, professional design and added a functional popup form on the “Buy Now” button exactly as requested. Communication was smooth, and the delivery was right on time. Highly recommend his service to anyone looking for quality WordPress work!",
  },
]

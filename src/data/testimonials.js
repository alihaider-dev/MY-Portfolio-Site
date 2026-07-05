// ─── Client feedback ─────────────────────────────────────────────────────────
// VIDEO testimonials: set videoUrl to either
//   • a YouTube link  → "https://www.youtube.com/watch?v=XXXX" (or youtu.be/XXXX)
//   • a local file    → put it in /public/videos/ and use "/videos/client1.mp4"
// While videoUrl is empty ("") the card still renders so you can see the design.
export const videoTestimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Luxe Interiors Studio",
    videoUrl: "",
    thumbnail: null, // optional: "/videos/thumbs/sarah.jpg"
    gradient: ["#c9f24b", "#1a2e05"],
    quote: "Ali didn't just build us a website — he built us a sales machine.",
    duration: "1:24",
  },
  {
    name: "Marcus Chen",
    role: "Owner, Peak Performance Gym",
    videoUrl: "",
    thumbnail: null,
    gradient: ["#a78bfa", "#2e1065"],
    quote: "We did $40k in sales the first month after launch. Unreal.",
    duration: "0:58",
  },
  {
    name: "Amelia Ross",
    role: "CEO, Bloom Skincare",
    videoUrl: "",
    thumbnail: null,
    gradient: ["#f472b6", "#500724"],
    quote: "The best investment we've made in our business, period.",
    duration: "1:47",
  },
]

export const writtenTestimonials = [
  {
    name: "David Okafor",
    role: "Nova Legal Partners",
    rating: 5,
    text: "Our site went from 8 seconds to 1 second load time. Organic traffic is up 68% and we're getting case inquiries every single day now.",
  },
  {
    name: "Jessica Tran",
    role: "Harvest & Co.",
    rating: 5,
    text: "Reservations tripled within weeks. Ali understood exactly what our customers needed and delivered beyond expectations.",
  },
  {
    name: "Tom Reeves",
    role: "Summit Consulting",
    rating: 5,
    text: "400 pages migrated with literally zero downtime. The most professional developer I've worked with in 15 years of business.",
  },
  {
    name: "Priya Sharma",
    role: "Verve Fitness",
    rating: 5,
    text: "Fast, communicative, and the design is stunning. He treated our small business like it was a million-dollar account.",
  },
  {
    name: "Liam Bennett",
    role: "Bennett Roofing",
    rating: 5,
    text: "I've hired four developers before Ali. He's the only one who delivered on time, on budget, and better than the mockups.",
  },
  {
    name: "Chloe Winters",
    role: "Winters Boutique",
    rating: 5,
    text: "Our WooCommerce store finally works on mobile. Sales are up 87% and cart abandonment dropped through the floor.",
  },
]

import Cursor from "./components/Cursor"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Work from "./components/Work"
import Testimonials from "./components/Testimonials"
import Process from "./components/Process"
import Services from "./components/Services"
import Community from "./components/Community"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="grain">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Testimonials />
        <Process />
        <Services />
        <Community />
      </main>
      <Contact />
    </div>
  )
}

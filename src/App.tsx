import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Experience } from "./components/Experience"
import { Works } from "./components/Works"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Works />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Experience } from "./components/Experience"
import { Works } from "./components/Works"
import { Notes } from "./components/Notes"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="font-mono min-h-svh bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Works />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

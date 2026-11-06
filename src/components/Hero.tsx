import { lazy, Suspense, useState } from "react"
import { motion } from "framer-motion"
import { useScrollReveal } from "../lib/useScrollReveal"
import { site } from "../data/site"
import { Arrow } from "./Icons"

const Sculpture = lazy(() => import("./Sculpture"))

export function Hero() {
  const reveal = useScrollReveal()
  const [motionPaused, setMotionPaused] = useState(false)

  return (
    <section id="top" className="hero">
      <div className="hero-orbits" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <ellipse cx="1010" cy="440" rx="940" ry="270" transform="rotate(-28 1010 440)" />
          <ellipse cx="1010" cy="440" rx="1050" ry="390" transform="rotate(-28 1010 440)" />
          <ellipse cx="1010" cy="440" rx="680" ry="550" transform="rotate(-28 1010 440)" />
          <path d="M-100 800 1540 100" />
        </svg>
      </div>
      <div className="container hero-inner">
        <div className="hero-topline">
          <span>AUNG KO OO <span className="hero-alias">/ CALL ME TONY</span></span>
          <span className="availability"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</span>
        </div>
        <motion.div className="hero-copy" {...reveal}>
          <p className="hero-intro">BACKEND DEVELOPER · CREATIVE MIND</p>
          <h1>Built with<br /><span>purpose.</span></h1>
          <p className="hero-description">Thoughtful code. Solid foundations.<br />Digital experiences that do something.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#works">Explore my work <Arrow diagonal /></a>
            <a className="hero-cv" href={site.cv} download="AUNG_KO_OO_CV.pdf">Download CV <span aria-hidden="true">↓</span></a>
          </div>
        </motion.div>
        <div className="sculpture-stage">
          <div className="sculpture-fallback" aria-hidden="true"><i /><i /><i /></div>
          <Suspense fallback={null}><Sculpture paused={motionPaused} /></Suspense>
          <div className="sculpture-caption"><span className="crosshair">+</span> FORM FOLLOWS FUNCTION</div>
          <button className="motion-control" type="button" aria-pressed={motionPaused} aria-label={motionPaused ? "Resume 3D animation" : "Pause 3D animation"} onClick={() => setMotionPaused((paused) => !paused)}>
            <span aria-hidden="true">{motionPaused ? "▶" : "Ⅱ"}</span> {motionPaused ? "RESUME MOTION" : "PAUSE MOTION"}
          </button>
        </div>
        <div className="hero-bottom">
          <a className="scroll-cue" href="#works"><span className="scroll-circle" aria-hidden="true">↓</span><span>SCROLL TO<br />DISCOVER</span></a>
          <p>I’m {site.firstName}, a backend developer turning<br className="desktop-break" /> complex ideas into dependable systems.</p>
          <span className="hero-location"><span aria-hidden="true">◎</span> {site.location}<small>OPEN TO THE WORLD ↗</small></span>
        </div>
      </div>
    </section>
  )
}

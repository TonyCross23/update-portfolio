import { motion } from "framer-motion"
import { useScrollReveal } from "../lib/useScrollReveal"
import { site } from "../data/site"
import { Arrow } from "./Icons"

function SystemIllustration() {
  const reveal = useScrollReveal()
  return (
    <motion.div
      {...reveal}
      className="system-illustration"
      aria-label="Illustration of an API connected to a database and a background worker"
      role="img"
    >
      <div className="system-orbit orbit-one" />
      <div className="system-orbit orbit-two" />
      <div className="system-label">
        <span className="status-dot" /> IDEAS INTO SYSTEMS
      </div>
      <div className="code-window">
        <div className="window-bar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>hello.ts</span>
          <span>TS</span>
        </div>
        <div className="code-content">
          <span className="code-comment">// A little about me</span>
          <p>
            <span className="code-purple">const</span> engineer{" "}
            <span className="code-purple">=</span> {"{"}
          </p>
          <p className="code-indent">
            name: <span className="code-green">'Aung Ko Oo'</span>,
          </p>
          <p className="code-indent">
            alias: <span className="code-green">'Tony'</span>,
          </p>
          <p className="code-indent">
            focus: <span className="code-green">'Backend & beyond'</span>,
          </p>
          <p className="code-indent">
            stack: [<span className="code-green">'TypeScript'</span>,
          </p>
          <p className="code-indent deep">
            <span className="code-green">'NestJS'</span>,{" "}
            <span className="code-green">'PostgreSQL'</span>],
          </p>
          <p>{"}"};</p>
          <p className="code-last">
            engineer.<span className="code-blue">build</span>(
            <span className="code-green">'something useful'</span>);
            <span className="code-cursor" />
          </p>
        </div>
        <div className="window-footer">
          <span>
            <span className="status-dot" /> Ready to build
          </span>
          <span>UTF-8</span>
        </div>
      </div>
      <div className="system-flow">
        <div>
          <span className="node-symbol">{"{ }"}</span>
          <span>API</span>
        </div>
        <i />
        <div>
          <span className="node-symbol">▤</span>
          <span>Database</span>
        </div>
        <i />
        <div>
          <span className="node-symbol">↻</span>
          <span>Worker</span>
        </div>
      </div>
      <div className="floating-label">
        <span>↗</span> Built with intention.
      </div>
    </motion.div>
  )
}

export function Hero() {
  const reveal = useScrollReveal()
  return (
    <section id="top" className="hero container">
      <motion.div className="hero-copy" {...reveal}>
        <p className="eyebrow">
          <span className="status-dot" /> AVAILABLE FOR WORK
        </p>
        <p className="hero-intro">
          Hey, I’m Tony{" "}
          <span className="wave" aria-hidden="true">
            ✳
          </span>
        </p>
        <h1>
          Thoughtful code.
          <br />
          Useful products.
          <br />
          <span>Solid foundations.</span>
        </h1>
        <p className="hero-description">
          I’m {site.name}, a backend developer building APIs, dependable backend
          systems, and the interfaces that bring them to life.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#works">
            Explore my projects <Arrow diagonal />
          </a>
          <a
            className="button button-secondary"
            href={site.cv}
            download="AUNG_KO_OO_CV.pdf"
          >
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-location">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <circle
              cx="12"
              cy="10"
              r="2.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
          {site.location}
          <span className="location-divider">/</span> Open to remote
          opportunities
        </div>
      </motion.div>
      <SystemIllustration />
      <div className="hero-bottom">
        <span>A BACKEND MINDSET. A PRODUCT PERSPECTIVE.</span>
        <a href="#works">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}

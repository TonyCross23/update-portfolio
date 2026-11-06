import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion"
import { useId, useRef, useState, type PointerEvent } from "react"
import { site, works, type Project } from "../data/site"
import { Arrow } from "./Icons"
import "./Works.css"

function Preview({ type }: { type: Project["preview"] }) {
  if (type === "expense")
    return (
      <div className="project-art expense-art" aria-hidden="true">
        <span className="art-background-label">
          MAKE EVERY
          <br />
          KYAT COUNT.
        </span>
        <div className="phone-preview">
          <div className="phone-notch" />
          <div className="phone-top">
            9:41 <span>•••</span>
          </div>
          <small>YOUR MONEY, AT A GLANCE</small>
          <strong>Expense Tracker</strong>
          <div className="balance">
            <small>Total balance</small>
            <b>
              245,000 <em>MMK</em>
            </b>
            <div>
              <span>↙ Income</span>
              <span>↗ Expenses</span>
            </div>
          </div>
          <div className="phone-section-title">
            Spending overview <span>October</span>
          </div>
          <div className="expense-bars">
            {[42, 70, 48, 85, 62, 100, 55].map((height, i) => (
              <i key={i} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="phone-section-title">Recent transactions</div>
          <div className="transaction">
            <span>↗</span>
            <div>
              Lunch<small>Food & drinks</small>
            </div>
            <b>−8,000</b>
          </div>
          <div className="phone-nav">
            ⌂ <span>▥</span> ＋ <span>◷</span> ⚙
          </div>
        </div>
      </div>
    )
  if (type === "recipe")
    return (
      <div className="project-art recipe-art" aria-hidden="true">
        <div className="recipe-screen">
          <div className="recipe-brand"><span>✳</span> SocialRecipe <small>Hub</small></div>
          <div className="recipe-heading">A little inspiration.<br /><strong>A lot of flavour.</strong></div>
          <div className="recipe-feature">
            <div className="recipe-dish">
              <svg viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="86" fill="#e9d9bf" />
                <circle cx="100" cy="96" r="82" fill="#fffcf4" />
                <circle cx="100" cy="96" r="64" fill="#eee4cd" />
                <circle cx="100" cy="96" r="56" fill="#d3873b" />
                <path d="M65 79c60-37 76 14 22 27s-22-43 16-33 39 31-1 45-59-14-31-28 52-2 42 15-44 12-27-12 45-1 31 19" stroke="#f5c976" strokeWidth="8" strokeLinecap="round" />
                <path d="M86 52c-20-10-29 2-20 16 11 8 23-1 20-16ZM128 122c21 2 25 17 10 25-15 2-21-11-10-25Z" fill="#466b42" />
                <circle cx="132" cy="72" r="9" fill="#b84c35" /><circle cx="69" cy="116" r="7" fill="#b84c35" />
                <path d="m90 127 7-3m27-34 6 4m-47-7 6 3" stroke="#fff3cf" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="recipe-feature-copy"><span>FROM THE COMMUNITY</span><h4>Made to be<br />shared.</h4><p>Recipes, stories & everyday cooking.</p></div>
          </div>
          <div className="recipe-tabs"><span>Discover recipes</span><span>♡ Saved</span><span>✧ AI Cook</span></div>
        </div>
      </div>
    )
  if (type === "map")
    return (
      <div className="project-art map-art" aria-hidden="true">
        <div className="map-grid" />
        <svg
          className="map-roads"
          viewBox="0 0 500 300"
          preserveAspectRatio="none"
        >
          <path
            d="M-20 240 190 80 330 130 530 10M100 -10l80 145 70 165M-20 50l160 25 80 130 300-45M400-10l-80 140 100 180"
            fill="none"
            stroke="#fff"
            strokeWidth="15"
          />
          <path
            d="m140 198 64-49 93 17 38-78"
            fill="none"
            stroke="#5772e8"
            strokeWidth="4"
            strokeDasharray="8 5"
          />
        </svg>
        <div className="map-brand">
          <span>◎</span> PulseMap
        </div>
        <div className="map-pin pin-one">T</div>
        <div className="map-pin pin-two">A</div>
        <div className="map-pin pin-three">B</div>
        <div className="map-info">
          <span className="status-dot" />
          <div>
            Stay connected.<small>Live location sharing</small>
          </div>
          <span>↗</span>
        </div>
      </div>
    )
  if (type === "logs")
    return (
      <div className="project-art logs-art" aria-hidden="true">
        <div className="dashboard-preview">
          <div className="dash-sidebar">
            <b>◈</b>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="dash-main">
            <div className="dash-title">
              Log overview <span>● Sample data</span>
            </div>
            <div className="dash-stats">
              <div>
                <small>Total events</small>
                <b>24,892</b>
                <span>↗ Event activity</span>
              </div>
              <div>
                <small>Error rate</small>
                <b>
                  0.24<span>%</span>
                </b>
                <span>All services</span>
              </div>
              <div>
                <small>Projects</small>
                <b>08</b>
                <span>Connected sources</span>
              </div>
            </div>
            <div className="dash-chart">
              <small>Event volume</small>
              <svg viewBox="0 0 400 75">
                <path
                  d="M0 65 20 60 35 66 55 45 75 53 90 30 110 40 130 35 145 50 165 20 180 33 200 24 220 45 240 35 260 15 280 25 300 5 315 25 340 15 360 30 380 10 400 15"
                  fill="none"
                  stroke="#a7e6ce"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="log-line">
              <span>INFO</span> Request completed <em>200 OK</em>
            </div>
            <div className="log-line">
              <span className="log-warn">WARN</span> Retry scheduled{" "}
              <em>worker</em>
            </div>
            <div className="log-line">
              <span>INFO</span> Database connected <em>ready</em>
            </div>
          </div>
        </div>
      </div>
    )
  if (type === "services")
    return (
      <div className="project-art backend-art" aria-hidden="true">
        <span className="art-caption">DECOUPLED BY DESIGN</span>
        <div className="architecture">
          <div>API gateway</div>
          <span>↓</span>
          <div className="architecture-row">
            <div>Auth</div>
            <div>Catalog</div>
            <div>Orders</div>
          </div>
          <span>↓</span>
          <div className="architecture-queue">RabbitMQ · message queue</div>
        </div>
      </div>
    )
  if (type === "todo")
    return (
      <div className="project-art todo-art" aria-hidden="true">
        <div className="todo-preview">
          <small>A LITTLE CLARITY FOR YOUR DAY</small>
          <strong>One task at a time.</strong>
          <p>
            <span>✓</span> Define the API contract
          </p>
          <p>
            <span>✓</span> Connect the database
          </p>
          <p>
            <span>○</span> Build something useful
          </p>
          <div>✧ A little help from AI</div>
        </div>
      </div>
    )
  return (
    <div className="project-art pos-art" aria-hidden="true">
      <div className="pos-preview">
        <div className="pos-title">
          POS / Checkout <span>＋ New sale</span>
        </div>
        <div className="pos-products">
          {["Coffee", "Tea", "Pastry", "Juice"].map((name, i) => (
            <div key={name}>
              <span>{["☕", "◉", "◒", "◓"][i]}</span>
              <small>{name}</small>
            </div>
          ))}
        </div>
        <div className="pos-total">
          <span>
            A simple flow.
            <br />
            <small>From catalog to checkout.</small>
          </span>
          <b>→</b>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const filterId = useId().replace(/[^a-zA-Z0-9_-]/g, "")
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(pointerY, { stiffness: 130, damping: 22 })
  const rotateY = useSpring(pointerX, { stiffness: 130, damping: 22 })
  function move(event: PointerEvent<HTMLAnchorElement>) {
    if (reduceMotion || event.pointerType === "touch") return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - bounds.left) / bounds.width - .5) * 5)
    pointerY.set(-((event.clientY - bounds.top) / bounds.height - .5) * 5)
    setHovered(true)
  }
  function reset() { pointerX.set(0); pointerY.set(0); setHovered(false) }
  return (
    <motion.article
      className={`project-card project-${project.preview}`}
      initial={reduceMotion ? false : { opacity: 0, y: 48, filter: "blur(3px)", clipPath: "inset(8% 0 0 0)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: false, amount: .18, margin: "0px 0px -24px 0px" }}
      transition={{ duration: reduceMotion ? 0 : .8, delay: reduceMotion ? 0 : (index % 3) * .08, ease: [.22, 1, .36, 1] }}
    >
      <svg className="work-filter-defs" aria-hidden="true"><defs><filter id={filterId} x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="8" result="ripple" />
        <motion.feDisplacementMap in="SourceGraphic" in2="ripple" xChannelSelector="R" yChannelSelector="G" initial={{ attrScale: 0 }} animate={{ attrScale: hovered && !reduceMotion ? [0, 13, 4] : 0 }} transition={{ duration: .8, ease: "easeOut" }} />
      </filter></defs></svg>
      <motion.a
        className="project-art-link"
        onPointerMove={move}
        onPointerLeave={reset}
        onBlur={reset}
        style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1000 }}
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} on GitHub`}
      >
        <div className="project-cover-surface" style={{ filter: hovered && !reduceMotion ? `url(#${filterId})` : undefined }}><Preview type={project.preview} /></div>
        <span className="preview-label">Concept preview</span>
        <span className="project-hover-label" aria-hidden="true">EXPLORE ↗</span>
      </motion.a>
      <div className="project-copy">
        <h3><a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
        <div className="project-summary">
          <p className="project-description">{project.blurb}</p>
          <a className="project-explore" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${project.title} on GitHub`}>
            <span>EXPLORE PROJECT</span><Arrow />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function FloatingPreview({ project, index, progress }: { project: Project; index: number; progress: MotionValue<number> }) {
  const reduceMotion = useReducedMotion()
  const direction = index % 2 === 0 ? -1 : 1
  const x = useTransform(progress, [0, .5, 1], [direction * 70, 0, direction * -100])
  const y = useTransform(progress, [0, 1], [70 + index * 8, -100 - index * 12])
  const rotate = useTransform(progress, [0, 1], [direction * -7, direction * 8])
  return <motion.div className={`work-float work-float-${index + 1}`} style={reduceMotion ? undefined : { x, y, rotate }}><Preview type={project.preview} /></motion.div>
}

function WorkIntroduction() {
  const intro = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: intro, offset: ["start end", "end start"] })
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })
  const titleY = useTransform(progress, [0, 1], [35, -45])
  return (
    <div className="work-introduction" ref={intro}>
      <div className="work-collage" aria-hidden="true">
        {[...works, works[0], works[2]].slice(0, 8).map((project, index) => <FloatingPreview project={project} index={index} progress={progress} key={`${project.preview}-${index}`} />)}
      </div>
      <div className="work-monogram" aria-hidden="true">t.</div>
      <motion.div className="work-intro-copy" style={reduceMotion ? undefined : { y: titleY }}>
        <motion.h2 initial={reduceMotion ? false : { opacity: 0, y: 25, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0% 0 0 0)" }} viewport={{ once: true }} transition={{ duration: 1 }}>My work</motion.h2>
        <p>A curated collection of backend systems,<br />web products, and mobile experiences.</p>
      </motion.div>
      <a className="work-discover" href="#project-collection" aria-label="Discover my projects">↓</a>
    </div>
  )
}

export function Works() {
  const [filter, setFilter] = useState("All projects")
  const filtered = works.filter((project) => filter === "All projects" || project.kind === filter)
  return (
    <section id="works" className="projects-section" aria-label="Selected work">
      <div className="work-background" aria-hidden="true">
        <svg viewBox="0 0 1440 3200" preserveAspectRatio="none">
          <path d="M-180 70C250 240 1420 260 1260 670S-140 1130 140 1500S1530 1910 1190 2350S160 2670 330 3180" />
          <path d="M-220 110C350 270 1450 310 1260 670S-80 1090 140 1500S1460 1990 1190 2350S90 2720 330 3180" />
          <path d="M-80 20C170 320 1520 370 1260 670S-180 1200 140 1500S1570 1850 1190 2350S250 2640 330 3180" />
          <circle className="work-flow-dot" r="1.6"><animateMotion dur="18s" repeatCount="indefinite" path="M-180 70C250 240 1420 260 1260 670S-140 1130 140 1500S1530 1910 1190 2350S160 2670 330 3180" /></circle><circle cx="1260" cy="670" r="2" /><circle cx="140" cy="1500" r="2" /><circle cx="1190" cy="2350" r="2" />
        </svg>
        <i /><i /><i /><i /><i /><i />
      </div>
      <WorkIntroduction />
      <div id="project-collection" className="work-collection container">
        <div className="project-filters" role="group" aria-label="Filter projects">
          {["All projects", "Web", "Mobile"].map((item) => (
            <button type="button" key={item} aria-pressed={filter === item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map((project, index) => <ProjectCard key={project.href} project={project} index={index} />)}
        </div>
        <div className="work-outro">
          <p className="project-count" aria-live="polite">Showing {filtered.length} of {works.length} projects</p>
          <a href={site.github} className="work-github" target="_blank" rel="noopener noreferrer">More on GitHub <Arrow diagonal /></a>
        </div>
      </div>
    </section>
  )
}

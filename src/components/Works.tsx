import { motion } from "framer-motion"
import { useScrollReveal } from "../lib/useScrollReveal"
import { useState } from "react"
import { site, works, type Project } from "../data/site"
import { Arrow, SectionHeading } from "./Icons"

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

export function Works() {
  const reveal = useScrollReveal()
  const [filter, setFilter] = useState("All projects")
  const filtered = works.filter(
    (project) => filter === "All projects" || project.kind === filter,
  )
  return (
    <section id="works" className="section projects-section">
      <div className="container">
        <div className="section-top">
          <SectionHeading
            number="01"
            label="SELECTED WORK"
            title="Built to do something."
            description="A few things I’ve been working on. From the services behind the scenes to the experience on your screen."
          />
          <a
            className="text-link"
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            All on GitHub <Arrow diagonal />
          </a>
        </div>
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects"
        >
          {["All projects", "Web", "Mobile"].map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
              <span>
                {item === "All projects"
                  ? works.length
                  : works.filter((project) => project.kind === item).length}
              </span>
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map((project) => (
            <motion.article
              {...reveal}
              className="project-card"
              key={project.href}
            >
              <a
                className="project-art-link"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Preview type={project.preview} />
                <span className="project-open">
                  <Arrow diagonal />
                </span>
                <span className="preview-label">Illustrative preview</span>
              </a>
              <div className="project-copy">
                <p className="eyebrow">{project.category}</p>
                <h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title} <Arrow diagonal />
                  </a>
                </h3>
                <p className="project-description">{project.blurb}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="project-count" aria-live="polite">
          Showing {filtered.length} of {works.length} projects{" "}
          <span>Good ideas. Working code.</span>
        </p>
      </div>
    </section>
  )
}

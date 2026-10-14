import { motion } from "framer-motion"
import { useScrollReveal } from "../lib/useScrollReveal"
import { services, serviceCopy, contact } from "../data/site"
import { SectionHeading } from "./Icons"

const symbols = ["{ }", "⌘", "⇄"]
const descriptions = [
  "Clear contracts, validated inputs, and authentication that belongs at the edge.",
  "Independent services with focused responsibilities and room to grow.",
  "Reliable data models and background workers that keep requests moving.",
]

export function Services() {
  const reveal = useScrollReveal()
  return (
    <section id="services" className="section expertise-section">
      <div className="container">
        <div className="expertise-layout">
          <SectionHeading
            number="02"
            label="WHAT I BRING"
            title={serviceCopy.title}
          />
          <div>
            <p className="expertise-intro">{serviceCopy.body}</p>
            <div className="stack-list">
              {contact.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="expertise-grid">
          {services.map((service, i) => (
            <motion.article
              {...reveal}
              className="expertise-item"
              key={service.title}
            >
              <span className="expertise-icon" aria-hidden="true">
                {symbols[i]}
              </span>
              <span className="expertise-number">0{i + 1}</span>
              <h3>{service.title}</h3>
              <p>{descriptions[i]}</p>
              <span className="expertise-stack">{service.count}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

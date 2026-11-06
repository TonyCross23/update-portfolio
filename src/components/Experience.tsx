import { motion } from "framer-motion"
import { useScrollReveal } from "../lib/useScrollReveal"
import { experience } from "../data/site"
import { SectionHeading } from "./Icons"

export function Experience() {
  const reveal = useScrollReveal()
  return (
    <section id="experience" className="section">
      <div className="container experience-layout">
        <div>
          <SectionHeading
            label="MY EXPERIENCE"
            title="Always building. Always learning."
          />
          <p className="section-description">
            Hands-on work with APIs, data, and the systems that connect them.
          </p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <motion.article
              {...reveal}
              key={item.company}
              className="experience-item"
            >
              <span className="timeline-dot" />
              <div className="experience-meta">
                <p>{item.company}</p>
                <span>{item.period}</span>
              </div>
              <h3>{item.role}</h3>
              {item.points.length > 0 && (
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

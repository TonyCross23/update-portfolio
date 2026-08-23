import { motion } from "framer-motion"
import { experience } from "../data/site"

const dots = ["bg-teal", "bg-gold", "bg-coral"]

export function Experience() {
  return (
    <section id="experience" className="bg-cream px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold md:text-4xl"
        >
          Work experience
        </motion.h2>

        <div className="relative mt-14">
          <div className="absolute top-2 bottom-2 left-[7px] w-px bg-ink/15 md:left-1/2 md:-translate-x-1/2" />
          <ul className="space-y-12">
            {experience.map((item, index) => (
              <motion.li
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08 }}
                className="relative grid gap-4 md:grid-cols-2 md:gap-16"
              >
                <span
                  className={`absolute top-1.5 left-0 z-10 h-4 w-4 rounded-full border-4 border-cream ${dots[index % dots.length]} md:left-1/2 md:-translate-x-1/2`}
                />
                <div className="pl-8 md:pr-10 md:pl-0 md:text-right">
                  <p className="text-lg font-bold">{item.company}</p>
                  <p className="text-sm text-teal">{item.role}</p>
                  <p className="mt-1 text-xs text-muted">{item.period}</p>
                </div>
                <div className="pl-8 md:pl-10">
                  <ul className="space-y-2 text-sm leading-relaxed text-muted">
                    {item.points.map((point) => (
                      <li key={point}>— {point}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

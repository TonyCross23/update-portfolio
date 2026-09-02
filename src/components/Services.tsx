import { motion } from "framer-motion"
import { serviceCopy, services } from "../data/site"
import { fadeUp, stagger } from "../lib/motion"

const tones: Record<string, string> = {
  teal: "bg-teal text-white",
  gold: "bg-gold text-ink",
  coral: "bg-coral text-white",
}

function ServiceIcon({ name }: { name: string }) {
  if (name === "api") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === "mesh") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
        <circle cx="7" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 9.2 10.6 14M15 9.2 13.4 14M9.2 8h5.6" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path d="M5 8h4l2 3h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 16h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="7" cy="8" r="1.4" fill="currentColor" />
      <circle cx="17" cy="16" r="1.4" fill="currentColor" />
    </svg>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {services.map((item) => (
            <motion.li key={item.title} variants={fadeUp} className="flex items-center gap-5">
              <span
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${tones[item.color]}`}
              >
                <ServiceIcon name={item.icon} />
              </span>
              <div>
                <p className="text-lg font-bold">{item.title}</p>
                <p className="text-sm text-muted">{item.count}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{serviceCopy.title}</h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {serviceCopy.body}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            {serviceCopy.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex h-36 w-36 flex-col items-center justify-center rounded-2xl p-5 text-center ${
                  index === 0 ? "bg-teal text-white" : "bg-ink/10 text-ink"
                }`}
              >
                <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

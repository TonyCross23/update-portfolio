import { motion } from "framer-motion"
import { works } from "../data/site"

const cardTone: Record<string, string> = {
  gold: "bg-gold-soft",
  teal: "bg-teal-soft",
  mint: "bg-mint",
}

function DeviceMock({ tone }: { tone: string }) {
  const bar = tone === "teal" ? "bg-teal" : tone === "gold" ? "bg-gold" : "bg-coral"
  return (
    <div className="mx-auto mt-8 w-[70%] rotate-[-8deg] rounded-2xl bg-paper p-3 shadow-xl">
      <div className="mb-2 flex gap-1">
        <span className="h-2 w-2 rounded-full bg-[#ff7a73]" />
        <span className="h-2 w-2 rounded-full bg-[#f5c542]" />
        <span className="h-2 w-2 rounded-full bg-[#63d07a]" />
      </div>
      <div className={`h-28 rounded-lg ${bar} opacity-80`} />
      <div className="mt-3 space-y-2">
        <div className="h-2 w-4/5 rounded bg-ink/10" />
        <div className="h-2 w-3/5 rounded bg-ink/10" />
      </div>
    </div>
  )
}

export function Works() {
  return (
    <section id="works" className="bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between gap-4"
        >
          <h2 className="text-3xl font-bold md:text-5xl">My latest works</h2>
          <a
            href="https://github.com/TonyCross23"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-coral underline underline-offset-4 sm:inline"
          >
            Explore more
          </a>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {works.map((work, index) => (
            <motion.a
              key={work.title}
              href={work.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`block overflow-hidden rounded-[2rem] p-6 ${cardTone[work.tone]}`}
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink/70">
                {work.category}
              </p>
              <h3 className="mt-2 text-xl font-bold">{work.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{work.blurb}</p>
              <DeviceMock tone={work.tone} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

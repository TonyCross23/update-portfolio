import { motion } from "framer-motion"
import { notes } from "../data/site"
import { fadeUp, stagger } from "../lib/motion"

export function Notes() {
  return (
    <section id="notes" className="bg-cream px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold md:text-4xl"
        >
          Notes
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {notes.map((note) => (
            <motion.article
              key={note.title}
              variants={fadeUp}
              className="rounded-3xl bg-paper p-6 shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-lg font-bold">{note.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{note.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

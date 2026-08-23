import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { contact, site } from "../data/site"
import { fadeUp, stagger } from "../lib/motion"

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const subject = encodeURIComponent(`Project from ${name || "the site"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        >
          <div>
            <motion.p variants={fadeUp} className="text-xs font-medium uppercase tracking-[0.18em] text-teal">
              {contact.kicker}
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold md:text-5xl">
              {contact.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
              {contact.body}
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-10 space-y-5">
              {contact.facts.map((fact) => (
                <li key={fact.label}>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{fact.label}</p>
                  <p className="mt-1 text-sm font-bold">{fact.value}</p>
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-2">
              {contact.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.form
            variants={fadeUp}
            onSubmit={onSubmit}
            className="rounded-[2rem] bg-cream p-8 shadow-[0_16px_40px_rgba(0,0,0,0.05)]"
          >
            <label className="block text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Name
              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-teal"
              />
            </label>
            <label className="mt-5 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Email
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2 w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-teal"
              />
            </label>
            <label className="mt-5 block text-xs font-medium uppercase tracking-[0.14em] text-muted">
              What should we build?
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-y rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink outline-none focus:border-teal"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-coral py-3 text-sm font-bold text-white transition hover:opacity-90"
            >
              {sent ? "Opening your mail app" : "Send a note"}
            </button>
            <p className="mt-4 text-center text-xs text-muted">
              Opens mailto — no fake inbox, no backend required.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

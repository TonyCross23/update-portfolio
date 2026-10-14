import { motion } from "framer-motion"
import { useScrollReveal } from "../lib/useScrollReveal"
import { useState, type FormEvent } from "react"
import { contact, site } from "../data/site"
import { Arrow } from "./Icons"

export function Contact() {
  const reveal = useScrollReveal()
  const [opened, setOpened] = useState(false)
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const subject = encodeURIComponent(`Project from ${name || "the site"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setOpened(true)
  }
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-layout">
        <motion.div className="contact-copy" {...reveal}>
          <p className="eyebrow">
            <span className="status-dot" /> LET’S BUILD SOMETHING
          </p>
          <h2>
            {contact.title}
            <span>Let’s talk.</span>
          </h2>
          <p>{contact.body}</p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email} <Arrow diagonal />
          </a>
          <div className="contact-detail">
            <span>BASED IN</span>
            <p>{site.location}</p>
            <span>FIND ME ELSEWHERE</span>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub <Arrow diagonal />
            </a>
          </div>
        </motion.div>
        <motion.form {...reveal} className="contact-form" onSubmit={onSubmit}>
          <div className="form-header">
            <span>A GOOD CONVERSATION STARTS HERE</span>
            <Arrow diagonal />
          </div>
          <label>
            Your name
            <input
              required
              name="name"
              autoComplete="name"
              placeholder="What should I call you?"
            />
          </label>
          <label>
            Email address
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>
          <label>
            Tell me about your project
            <textarea
              required
              name="message"
              rows={4}
              placeholder="The idea, the challenge, or just a hello…"
            />
          </label>
          <button className="button button-primary" type="submit">
            Write an email <Arrow diagonal />
          </button>
          <p className="form-note" role="status">
            {opened
              ? "Your email app will open with your message. Send it there when you’re ready."
              : "Opens your email app with your message ready to send."}
          </p>
        </motion.form>
      </div>
    </section>
  )
}

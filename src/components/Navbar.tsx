import { useEffect, useRef, useState } from "react"
import { nav, site } from "../data/site"
import { useTheme } from "../lib/theme"
import { Arrow } from "./Icons"

export function Navbar() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#top")
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const sections = ["#top", ...nav.map((item) => item.href)]
      .map((href) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null)
    let frame: number | null = null

    function updateActiveSection() {
      frame = null
      const header = document.querySelector(".header-inner")
      const activationLine = (header?.getBoundingClientRect().bottom ?? 90) + 24
      let current = "#top"

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          current = `#${section.id}`
        }
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        current = "#contact"
      }
      setActiveSection(current)
    }

    function scheduleUpdate() {
      if (frame === null)
        frame = window.requestAnimationFrame(updateActiveSection)
    }

    const resizeObserver = new ResizeObserver(scheduleUpdate)
    for (const section of sections) resizeObserver.observe(section)
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)
    updateActiveSection()

    return () => {
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      resizeObserver.disconnect()
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  function selectSection(href: string) {
    setActiveSection(href)
    setOpen(false)
  }

  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    function resize() {
      if (window.innerWidth >= 900) setOpen(false)
    }
    window.addEventListener("keydown", close)
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("keydown", close)
      window.removeEventListener("resize", resize)
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#top"
          className="wordmark"
          aria-label={`${site.name}, home`}
          aria-current={activeSection === "#top" ? "location" : undefined}
          onClick={() => selectSection("#top")}
        >
          tony<span>.</span>
          <span className="wordmark-caption">BACKEND DEVELOPER</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav
            .filter((item) => item.href !== "#contact")
            .map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={
                  activeSection === item.href ? "location" : undefined
                }
                onClick={() => selectSection(item.href)}
              >
                {item.label}
              </a>
            ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            type="button"
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
              </svg>
            )}
          </button>
          <a
            className="header-contact"
            href="#contact"
            aria-current={activeSection === "#contact" ? "location" : undefined}
            onClick={() => selectSection("#contact")}
          >
            Let’s talk <Arrow diagonal />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            type="button"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                activeSection === item.href ? "location" : undefined
              }
              onClick={() => selectSection(item.href)}
            >
              {item.label}
              <Arrow diagonal />
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

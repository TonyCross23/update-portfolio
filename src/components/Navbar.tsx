import { useEffect, useState } from "react"
import { nav, site } from "../data/site"
import { useTheme } from "../lib/theme"

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream transition duration-300 hover:bg-teal"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 3.5v1.6M12 18.9v1.6M4.6 12H3M21 12h-1.6M6.2 6.2l1.1 1.1M16.7 16.7l1.1 1.1M17.8 6.2l-1.1 1.1M7.3 16.7l-1.1 1.1"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
          <path
            d="M15.4 14.6A6.2 6.2 0 0 1 9.8 5.4 7 7 0 1 0 18.6 16a6.2 6.2 0 0 1-3.2-1.4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}

function Hamburger({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink md:hidden"
    >
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      <span className="relative block h-3.5 w-4">
        <span
          className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${
            open ? "top-1.5 rotate-45" : "top-0"
          }`}
        />
        <span
          className={`absolute top-1.5 left-0 block h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${
            open ? "scale-x-0 opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ease-in-out ${
            open ? "top-1.5 -rotate-45" : "top-3"
          }`}
        />
      </span>
    </button>
  )
}

function linkClass(active: boolean, mobile = false) {
  const base = mobile
    ? "block rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.16em] transition-all duration-500 ease-in-out"
    : "rounded-full px-4 py-2 transition-all duration-500 ease-in-out"

  if (active) {
    return `${base} bg-teal text-white`
  }

  return mobile
    ? `${base} bg-paper text-ink`
    : `${base} text-ink hover:bg-teal-soft hover:text-teal`
}

function smoothScrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const headerOffset = 72
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
  const start = window.scrollY
  const distance = top - start
  const duration = 700
  let startTime: number | null = null

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    window.scrollTo(0, start + distance * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function Navbar() {
  const [active, setActive] = useState(nav[0]?.href ?? "")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1))
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActive(`#${visible[0].target.id}`)
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    function onResize() {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  function goTo(href: string) {
    setActive(href)
    setOpen(false)
    smoothScrollTo(href.slice(1))
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="font-script text-3xl leading-none text-ink md:text-4xl">
          {site.logo}
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-paper/80 px-2 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-ink shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              onClick={(event) => {
                event.preventDefault()
                goTo(item.href)
              }}
              className={linkClass(active === item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Hamburger open={open} onToggle={() => setOpen((value) => !value)} />
        </div>
      </div>

      <div
        className={`fixed inset-0 top-[65px] z-30 bg-ink/40 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <nav
        className={`absolute inset-x-0 top-full z-40 origin-top border-b border-ink/10 bg-cream px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ease-in-out md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 scale-y-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-y-95 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  goTo(item.href)
                }}
                className={linkClass(active === item.href, true)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

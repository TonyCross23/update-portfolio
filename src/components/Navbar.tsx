import { nav, site } from "../data/site"
import { useTheme } from "../lib/theme"

function CvIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M7 4.5h7.2L17.5 8v11.5H7A1.5 1.5 0 0 1 5.5 18V6A1.5 1.5 0 0 1 7 4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 4.5V8h3.5M8.5 12h7M8.5 15.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:border-teal hover:text-teal"
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

export function Navbar() {
  return (
    <>
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6 md:px-8">
      <a href="#top" className="font-script text-4xl leading-none text-ink">
        {site.logo}
      </a>
      <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.18em] text-ink md:flex">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="transition hover:text-teal">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href={site.cv}
          download="AUNG_KO_OO_CV.pdf"
          className="flex items-center gap-2 text-xs text-ink md:text-sm"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-cream">
            <CvIcon />
          </span>
          <span className="hidden sm:inline">CV</span>
        </a>
      </div>
    </header>
      <nav className="mx-auto flex max-w-6xl flex-wrap gap-4 px-5 pb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-ink md:hidden">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </>
  )
}

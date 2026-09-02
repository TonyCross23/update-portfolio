import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { site } from "../data/site"

const STORAGE_KEY = "portfolio-welcome-v2"

function hasSeenWelcome() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1"
  } catch {
    return false
  }
}

function markWelcomeSeen() {
  try {
    localStorage.setItem(STORAGE_KEY, "1")
  } catch {
    // ignore
  }
}

export function WelcomeRing() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (hasSeenWelcome()) return

    const showId = window.setTimeout(() => setVisible(true), 400)
    return () => window.clearTimeout(showId)
  }, [])

  useEffect(() => {
    if (!visible) return

    const hideId = window.setTimeout(() => {
      setVisible(false)
      markWelcomeSeen()
    }, 6500)

    return () => window.clearTimeout(hideId)
  }, [visible])

  function dismiss() {
    setVisible(false)
    markWelcomeSeen()
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {visible ? (
        <motion.aside
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-5 z-[9999] flex justify-center px-4 md:bottom-8"
        >
          <div className="flex w-full max-w-md items-center gap-3 rounded-full border border-ink/10 bg-paper px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.18)] ring-4 ring-teal/30 md:gap-4 md:px-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
              {site.firstName.slice(0, 1)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-ink">{site.greeting} welcome!</p>
              <p className="truncate text-xs text-muted">
                Glad you&apos;re here — take a look around.
              </p>
            </div>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss welcome message"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink transition hover:bg-ink hover:text-cream"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}

import { useReducedMotion } from "framer-motion"

export function useScrollReveal() {
  const reduceMotion = useReducedMotion()

  return {
    initial: reduceMotion ? (false as const) : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }
}

import { motion } from "framer-motion"
import { useScrollReveal } from "../lib/useScrollReveal"
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string
  label: string
  title: string
  description?: string
}) {
  const reveal = useScrollReveal()
  return (
    <motion.div className="section-heading" {...reveal}>
      <p className="eyebrow">
        <span>{number}</span> {label}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </motion.div>
  )
}

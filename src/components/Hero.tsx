import { motion } from "framer-motion"
import { site } from "../data/site"
import { fadeUp, stagger } from "../lib/motion"
import { BrushBlob, Portrait } from "./Portrait"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-6 md:px-8 md:pb-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl items-end gap-8 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl leading-[1.08] font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            {site.greeting}
            <br />
            I&apos;m {site.firstName}.
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-coral underline decoration-coral/40 underline-offset-4"
            >
              {site.email}
            </a>
            <a
              href={site.cv}
              download="AUNG_KO_OO_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-medium text-cream"
            >
              Download CV
            </a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-16 max-w-xs text-4xl leading-none font-bold md:text-5xl"
          >
            {site.highlight}
          </motion.p>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <motion.p
            variants={fadeUp}
            className="absolute -top-2 right-0 z-20 max-w-[220px] text-right text-sm leading-relaxed text-muted lg:-right-4 lg:top-8"
          >
            {site.loveLine}
          </motion.p>

          <div className="relative mx-auto mt-16 flex h-[420px] items-end justify-center md:h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.86, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-6 mx-auto h-[340px] w-[340px] md:h-[420px] md:w-[420px]"
            >
              <BrushBlob />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative z-10"
            >
              <Portrait />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, type: "spring", stiffness: 160 }}
              className="absolute right-0 bottom-16 z-20 flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-cream bg-ink text-center text-[9px] leading-snug font-medium tracking-wide text-cream uppercase md:right-2 md:h-32 md:w-32 md:text-[10px]"
            >
              <span className="px-3">{site.badge}</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

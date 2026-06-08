'use client'

import { motion } from 'motion/react'
import { SectionHeading } from './SectionHeading'
import { SpotlightCard } from './magic/SpotlightCard'

export function About({ parrafos, title }) {
  return (
    <section id="about" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>{title}</SectionHeading>

        <SpotlightCard className="rounded-2xl border border-[var(--brand-border)] bg-[var(--surface)] shadow-[var(--shadow)]">
          <div className="grid gap-6 p-4 sm:gap-8 sm:p-6 md:grid-cols-2">
            {parrafos.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-base leading-relaxed text-[var(--text-muted)] sm:text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}

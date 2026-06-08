'use client'

import { motion } from 'motion/react'
import { SectionHeading } from './SectionHeading'
import { Timeline } from './magic/Timeline'

export function Experience({ jobs, title, presentLabel }) {
  return (
    <section id="experience" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading>{title}</SectionHeading>
        </motion.div>

        <Timeline items={jobs} presentLabel={presentLabel} />
      </div>
    </section>
  )
}

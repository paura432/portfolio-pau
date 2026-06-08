'use client'

import { motion } from 'motion/react'
import { Marquee } from './magic/Marquee'

const companies = [
  { name: 'Performanze', logo: '/logos/performanze_logo.jpeg' },
  { name: 'Telefónica Tech', logo: '/logos/telefonica-tech.jpg' },
  { name: '42 Madrid', logo: '/logos/42Madrid.png' },
  { name: 'AllCloud Computing', logo: '/logos/Tarjeta-AllCloud.png' },
  { name: 'ITEP', logo: '/logos/ITEP.png' },
]

// Repeat to fill the strip
const marqueItems = [...companies, ...companies, ...companies]

export function LogoMarquee({ label }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.8 }}
      className="py-6 sm:py-8"
    >
      <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-[var(--subtle)]">
        {label}
      </p>
      <Marquee items={marqueItems} speed={28} />
    </motion.div>
  )
}

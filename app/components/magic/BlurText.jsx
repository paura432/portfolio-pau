'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { cn } from '@/lib/utils'

export function BlurText({ text, as: Tag = 'span', className, delay = 0, once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-40px' })

  const words = text.split(' ')

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: delay,
      },
    },
  }

  const word = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  return (
    <Tag ref={ref} className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="inline-flex flex-wrap justify-center gap-x-[0.25em]"
        aria-label={text}
      >
        {words.map((w, i) => (
          <motion.span
            key={i}
            variants={word}
            className="inline-block"
            aria-hidden="true"
          >
            {w}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}

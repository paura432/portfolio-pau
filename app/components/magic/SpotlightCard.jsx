'use client'

import { useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

const TILT_SPRING = { stiffness: 140, damping: 20, mass: 0.6 }

export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(0, 102, 255, 0.13)',
  featuredColor = 'rgba(0, 102, 255, 0.22)',
  featured = false,
  tilt = true,
  tiltStrength = 7,
}) {
  const cardRef = useRef(null)

  const rawRX = useMotionValue(0)
  const rawRY = useMotionValue(0)
  const rotateX = useSpring(rawRX, TILT_SPRING)
  const rotateY = useSpring(rawRY, TILT_SPRING)

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()

      // Spotlight position
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--spotlight-x', `${x}px`)
      card.style.setProperty('--spotlight-y', `${y}px`)
      card.style.setProperty('--spotlight-color', featured ? featuredColor : spotlightColor)
      card.style.setProperty('--spotlight-opacity', '1')

      // 3D tilt
      if (tilt) {
        const nx = x / rect.width - 0.5
        const ny = y / rect.height - 0.5
        rawRX.set(-ny * tiltStrength)
        rawRY.set(nx * tiltStrength)
      }
    },
    [spotlightColor, featuredColor, featured, tilt, tiltStrength, rawRX, rawRY]
  )

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--spotlight-opacity', '0')
    rawRX.set(0)
    rawRY.set(0)
  }, [rawRX, rawRY])

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tilt ? rotateX : 0,
        rotateY: tilt ? rotateY : 0,
        transformPerspective: 1000,
        '--spotlight-x': '50%',
        '--spotlight-y': '50%',
        '--spotlight-color': spotlightColor,
        '--spotlight-opacity': '0',
      }}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Spotlight radial that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(300px circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color), transparent 70%)',
          opacity: 'var(--spotlight-opacity)',
        }}
      />
      {children}
    </motion.div>
  )
}

'use client'

import { useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(0, 102, 255, 0.13)',
  featuredColor = 'rgba(0, 102, 255, 0.22)',
  featured = false,
}) {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const color = featured ? featuredColor : spotlightColor
      card.style.setProperty('--spotlight-x', `${x}px`)
      card.style.setProperty('--spotlight-y', `${y}px`)
      card.style.setProperty('--spotlight-color', color)
      card.style.setProperty('--spotlight-opacity', '1')
    },
    [spotlightColor, featuredColor, featured]
  )

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--spotlight-opacity', '0')
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('relative overflow-hidden', className)}
      style={{
        '--spotlight-x': '50%',
        '--spotlight-y': '50%',
        '--spotlight-color': spotlightColor,
        '--spotlight-opacity': '0',
      }}
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
    </div>
  )
}

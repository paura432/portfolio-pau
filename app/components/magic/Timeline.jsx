'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

function TimelineItem({ item, index, presentLabel, dotRef }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative flex gap-4 sm:gap-6"
    >
      {/* Logo + dot */}
      <div className="relative z-10 flex-shrink-0">
        {item.logo ? (
          <motion.div
            className="h-16 w-16 overflow-hidden rounded-xl border border-[var(--brand-border)] bg-white shadow-sm"
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ type: 'spring', stiffness: 320, damping: 16 }}
          >
            <Image
              src={item.logo}
              alt={`${item.empresa || item.centro} logo`}
              width={64}
              height={64}
              className="h-full w-full object-contain p-1.5"
            />
          </motion.div>
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[var(--brand-border)] bg-[var(--surface-soft)] text-xl font-bold text-[var(--brand-accent)]">
            {(item.empresa || item.centro || '?').charAt(0)}
          </div>
        )}
        {/* Animated dot on the line */}
        <motion.div
          ref={dotRef}
          className="absolute -right-[9px] top-7 hidden h-3 w-3 rounded-full border-2 border-[var(--brand-accent)] bg-[var(--bg)] sm:block"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ type: 'spring', stiffness: 400, damping: 18, delay: index * 0.06 + 0.15 }}
          style={{ boxShadow: '0 0 10px rgba(0,102,255,0.7)' }}
        />
      </div>

      {/* Content card */}
      <div
        className={cn(
          'flex-1 rounded-2xl border border-[var(--brand-border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] sm:p-5',
          'transition-colors duration-200 hover:border-[var(--brand-accent)]/50'
        )}
      >
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-bold text-[var(--brand-accent-2)] sm:text-xl">
            {item.puesto || item.titulo}
          </h3>
          {(item.fecha?.includes('Present') || item.fecha?.includes('Actualidad')) && (
            <Badge className="bg-[var(--brand-accent)] text-white hover:bg-[var(--brand-accent)] text-[10px] px-2 py-0.5">
              {presentLabel}
            </Badge>
          )}
        </div>

        <p className="text-sm font-semibold text-[var(--text)] sm:text-base">
          {item.empresa || item.centro}
        </p>
        <p className="mb-3 text-xs text-[var(--subtle)] sm:text-sm">{item.fecha}</p>
        <p className="mb-3 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          {item.descripcion}
        </p>

        {item.bullets && item.bullets.length > 0 && (
          <ul className="space-y-1.5 text-sm text-[var(--subtle)] sm:text-base">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-accent)]"
                  aria-hidden="true"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export function Timeline({ items, presentLabel }) {
  const containerRef = useRef(null)
  const pathRef = useRef(null)
  const [pathLength, setPathLength] = useState(0)

  useEffect(() => {
    if (!pathRef.current) return

    const totalLength = pathRef.current.getTotalLength()
    setPathLength(totalLength)
    pathRef.current.style.strokeDasharray = `${totalLength}`
    pathRef.current.style.strokeDashoffset = `${totalLength}`

    let gsapInstance = null
    let scrollTriggerInstance = null

    const loadGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      gsapInstance = gsap

      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'bottom 30%',
          scrub: 0.8,
        },
      })
    }

    loadGsap()

    return () => {
      if (typeof window !== 'undefined') {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach((t) => t.kill())
        })
      }
    }
  }, [items.length])

  // Calculate approximate SVG line height based on items
  const lineHeight = items.length * 168

  return (
    <div ref={containerRef} className="relative">
      {/* GSAP-animated SVG path — desktop only */}
      <svg
        className="absolute left-8 top-0 hidden h-full w-px sm:block"
        style={{ height: lineHeight, overflow: 'visible' }}
        viewBox={`0 0 1 ${lineHeight}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Grey background line */}
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2={lineHeight}
          stroke="var(--brand-border)"
          strokeWidth="1"
        />
        {/* Animated blue line */}
        <path
          ref={pathRef}
          d={`M 0.5 0 L 0.5 ${lineHeight}`}
          stroke="var(--brand-accent)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          style={{
            filter: 'drop-shadow(0 0 4px rgba(0,102,255,0.8))',
          }}
        />
      </svg>

      <div className="space-y-8 sm:space-y-10">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            presentLabel={presentLabel}
          />
        ))}
      </div>
    </div>
  )
}

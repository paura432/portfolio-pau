'use client'

import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

function InfiniteTrack({ children, speed = 40, reverse = false, className }) {
  const baseX = useMotionValue(0)
  const trackRef = useRef(null)

  useAnimationFrame((_, delta) => {
    const dir = reverse ? 1 : -1
    baseX.set(baseX.get() + dir * (speed / 1000) * delta)

    if (!trackRef.current) return
    const trackWidth = trackRef.current.scrollWidth / 2
    if (Math.abs(baseX.get()) >= trackWidth) {
      baseX.set(0)
    }
  })

  const x = useTransform(baseX, (v) => `${v}px`)

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        ref={trackRef}
        style={{ x, whiteSpace: 'nowrap' }}
        className="inline-flex"
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export function Marquee({ items, speed = 35, pauseOnHover = true, className }) {
  return (
    <div
      className={cn(
        'group relative',
        pauseOnHover && '[&:hover_*]:animation-play-state-paused',
        className
      )}
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent" />

      <InfiniteTrack speed={speed}>
        <div className={cn('inline-flex items-center gap-8 px-4', pauseOnHover && 'group-hover:[animation-play-state:paused]')}>
          {items.map((item, i) => (
            <div key={i} className="flex flex-shrink-0 items-center gap-3">
              {item.logo && (
                <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-lg border border-[var(--brand-border)] bg-white p-1">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <span className="text-sm font-medium text-[var(--subtle)]">{item.name}</span>
              <span className="text-[var(--brand-border)]" aria-hidden>·</span>
            </div>
          ))}
        </div>
      </InfiniteTrack>
    </div>
  )
}

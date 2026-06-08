'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

const DOT_SPRING = { stiffness: 600, damping: 30 }
const RING_SPRING = { stiffness: 120, damping: 20, mass: 0.5 }

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])'

export function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const isTouchRef = useRef(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  // Dot: snappy
  const dotX = useSpring(rawX, DOT_SPRING)
  const dotY = useSpring(rawY, DOT_SPRING)

  // Ring: lagged
  const ringX = useSpring(rawX, RING_SPRING)
  const ringY = useSpring(rawY, RING_SPRING)

  useEffect(() => {
    const onMove = (e) => {
      if (isTouchRef.current) return
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      setVisible(true)
    }

    const onTouch = () => { isTouchRef.current = true }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const onOver = (e) => {
      if (e.target.closest(INTERACTIVE)) setHovering(true)
    }
    const onOut = (e) => {
      if (e.target.closest(INTERACTIVE)) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchstart', onTouch, { once: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [rawX, rawY])

  // Hide native cursor globally
  useEffect(() => {
    if (!isTouchRef.current) {
      document.documentElement.style.cursor = 'none'
    }
    return () => {
      document.documentElement.style.cursor = ''
    }
  }, [])

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  const ringSize = hovering ? 44 : clicking ? 28 : 36
  const dotSize = clicking ? 6 : 8

  return (
    <>
      {/* Dot — sharp, centered */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full bg-[var(--brand-accent)]"
        style={{
          x: dotX,
          y: dotY,
          width: dotSize,
          height: dotSize,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
        animate={{ width: dotSize, height: dotSize }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring — lagged */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border border-[var(--brand-accent)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 0.6 : 0,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: visible ? (hovering ? 0.9 : 0.5) : 0,
          backgroundColor: hovering ? 'rgba(0,102,255,0.08)' : 'transparent',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}

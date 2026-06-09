'use client'

import { useRef, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { Github, Linkedin, Mail, Globe2 } from 'lucide-react'
import { AnimatedGradientText } from './magic/AnimatedGradientText'
import { ShimmerButton } from './magic/ShimmerButton'
import { MagneticButton } from './magic/MagneticButton'

const Hero3DScene = dynamic(
  () => import('./Hero3DScene').then((mod) => mod.Hero3DScene),
  { ssr: false }
)

const SPRING = { stiffness: 140, damping: 20, mass: 0.6 }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
})

const socialLinks = [
  { key: 'github', icon: Github, label: 'GitHub', getHref: (s) => s.github },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn', getHref: (s) => s.linkedin },
  { key: 'email', icon: Mail, label: 'Email', getHref: (s) => `mailto:${s.email}` },
]

export function Hero({ shared, t, ui }) {
  const cardRef = useRef(null)

  // 3D tilt motion values
  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rotateX = useSpring(rawRotateX, SPRING)
  const rotateY = useSpring(rawRotateY, SPRING)

  // Spotlight inside the card
  const spotX = useMotionValue(50)
  const spotY = useMotionValue(50)

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width - 0.5   // -0.5 … 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5

      rawRotateX.set(-ny * 10)   // tilt up/down
      rawRotateY.set(nx * 10)    // tilt left/right

      spotX.set(((e.clientX - rect.left) / rect.width) * 100)
      spotY.set(((e.clientY - rect.top) / rect.height) * 100)
    },
    [rawRotateX, rawRotateY, spotX, spotY]
  )

  const handleMouseLeave = useCallback(() => {
    rawRotateX.set(0)
    rawRotateY.set(0)
  }, [rawRotateX, rawRotateY])

  const spotBg = useTransform(
    [spotX, spotY],
    ([x, y]) =>
      `radial-gradient(340px circle at ${x}% ${y}%, rgba(0, 102, 255, 0.12), transparent 65%)`
  )

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
      <Hero3DScene />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          {...fadeUp(0)}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-medium text-[var(--subtle)]"
        >
          <Globe2 size={16} aria-hidden="true" />
          {shared.ubicacion}
        </motion.p>

        <motion.h1 {...fadeUp(0.1)} className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          <AnimatedGradientText>{shared.nombre}</AnimatedGradientText>
        </motion.h1>

        {/* 3D tilt card */}
        <motion.div
          {...fadeUp(0.2)}
          ref={cardRef}
          style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: 'preserve-3d' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-2xl border border-[var(--brand-border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] sm:p-8 md:p-10"
        >
          {/* Spotlight overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{ background: spotBg }}
          />

          <p className="relative mb-3 text-xl text-[var(--text-muted)] sm:mb-4 sm:text-2xl md:text-3xl">
            {t.titulo}
          </p>
          <h2 className="relative mb-4 text-2xl font-semibold leading-tight text-[var(--text)] sm:text-3xl md:text-4xl">
            {t.headline}
          </h2>
          <p className="relative mb-8 px-2 text-base leading-relaxed text-[var(--subtle)] sm:text-lg md:text-xl">
            {t.descripcion}
          </p>

          <div className="relative mb-8 flex justify-center gap-4 sm:gap-6">
            {socialLinks.map(({ key, icon: Icon, label, getHref }) => (
              <MagneticButton key={key}>
                <motion.a
                  href={getHref(shared)}
                  target={key !== 'email' ? '_blank' : undefined}
                  rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                  className="flex rounded-full bg-[var(--surface-soft)] p-3 text-[var(--text)] transition-colors hover:bg-[var(--brand-accent)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
                  aria-label={label}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} className="sm:h-6 sm:w-6" />
                </motion.a>
              </MagneticButton>
            ))}
          </div>

          <div className="relative flex justify-center">
            <MagneticButton>
              <ShimmerButton href="#projects">{ui.viewProjects}</ShimmerButton>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

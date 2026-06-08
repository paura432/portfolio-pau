'use client'

import { useCallback } from 'react'
import { motion } from 'motion/react'
import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import {
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiTypescript, SiJavascript,
  SiNodedotjs, SiExpress, SiSupabase, SiPostgresql, SiMongodb, SiDocker,
  SiVercel, SiPython, SiGit, SiGithubactions, SiLinux,
} from 'react-icons/si'
import { BentoGrid, BentoCard } from './magic/BentoGrid'
import { SectionHeading } from './SectionHeading'

const techIcons = {
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Vite': SiVite,
  'Tailwind CSS': SiTailwindcss,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'Supabase': SiSupabase,
  'PostgreSQL': SiPostgresql,
  'MongoDB': SiMongodb,
  'Docker': SiDocker,
  'Vercel': SiVercel,
  'Python': SiPython,
  'Git': SiGit,
  'GitHub Actions': SiGithubactions,
  'Linux': SiLinux,
}

function DraggableSkillTag({ skill }) {
  const Icon = techIcons[skill]

  const [{ x, y, scale, shadow }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    shadow: 0,
    config: { tension: 320, friction: 22, mass: 0.8 },
  }))

  const bind = useDrag(
    ({ active, movement: [mx, my] }) => {
      api.start({
        x: active ? mx : 0,
        y: active ? my : 0,
        scale: active ? 1.15 : 1,
        shadow: active ? 12 : 0,
        immediate: (key) => key === 'x' || key === 'y',
      })
    },
    { filterTaps: true }
  )

  return (
    <animated.span
      {...bind()}
      style={{
        x,
        y,
        scale,
        boxShadow: shadow.to((s) => `0 ${s}px ${s * 2.5}px rgba(0,102,255,0.25)`),
        touchAction: 'none',
        userSelect: 'none',
        cursor: 'grab',
        zIndex: scale.to((s) => (s > 1 ? 10 : 'auto')),
      }}
      className="relative inline-flex cursor-grab items-center gap-1.5 rounded-full border border-[var(--brand-border)] bg-[var(--surface-soft)] px-3 py-1.5 font-mono text-xs text-[var(--subtle)] transition-colors hover:border-[var(--brand-accent)]/50 hover:text-[var(--text)] active:cursor-grabbing"
    >
      {Icon && <Icon className="h-3 w-3 text-[var(--brand-accent)]" aria-hidden="true" />}
      {skill}
    </animated.span>
  )
}

function StaticSkillTag({ skill }) {
  const Icon = techIcons[skill]
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand-border)] bg-[var(--surface-soft)] px-3 py-1.5 font-mono text-xs text-[var(--subtle)] transition-colors hover:border-[var(--brand-accent)]/50 hover:text-[var(--text)]">
      {Icon && <Icon className="h-3 w-3 text-[var(--brand-accent)]" aria-hidden="true" />}
      {skill}
    </span>
  )
}

export function Skills({ habilidades, aiSection, title }) {
  return (
    <section id="skills" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>{title}</SectionHeading>

        {aiSection && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mb-6 text-center text-xs text-[var(--subtle)] sm:text-sm"
          >
            💡 Drag the skill tags — they have spring physics
          </motion.p>
        )}

        <BentoGrid>
          {/* AI section — full width featured card */}
          {aiSection && (
            <motion.div
              className="sm:col-span-2 lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <BentoCard featured>
                <h3 className="mb-2 text-lg font-bold text-[var(--brand-accent)] sm:text-xl">
                  {aiSection.titulo}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                  {aiSection.descripcion}
                </p>
                <div className="flex flex-wrap gap-2">
                  {aiSection.tools.map((tool, i) => (
                    <DraggableSkillTag key={i} skill={tool} />
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          )}

          {/* Skill categories */}
          {habilidades.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
            >
              <BentoCard>
                <h3 className="mb-3 text-base font-bold text-[var(--brand-accent)] sm:text-lg">
                  {cat.categoria}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, j) => (
                    <DraggableSkillTag key={j} skill={skill} />
                  ))}
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

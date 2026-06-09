'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { SectionHeading } from './SectionHeading'
import { SpotlightCard } from './magic/SpotlightCard'

const isPendingUrl = (url) => !url || url.startsWith('PENDING_')

function ProjectCard({ project, ui, onClick }) {
  const isFeatured = project.featured

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-[var(--surface)] shadow-[var(--shadow)] transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] ${
        isFeatured
          ? 'border-[var(--brand-accent)]/50 hover:border-[var(--brand-accent)] hover:shadow-[0_0_40px_rgba(0,102,255,0.18)]'
          : 'border-[var(--brand-border)] hover:border-[var(--brand-accent)]/50 hover:shadow-[0_32px_64px_rgba(0,0,0,0.35)]'
      }`}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.titulo}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
    >
      <SpotlightCard featured={isFeatured} className="rounded-2xl">
      {/* Featured glow */}
      {isFeatured && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--brand-accent)]/5 to-[var(--brand-accent-2)]/5" />
      )}

      <div className="grid gap-0 md:grid-cols-2">
        {/* Image with zoom effect */}
        <div className="w-full overflow-hidden bg-[var(--image-bg)]">
          <Image
            src={project.imagen}
            alt={`${project.titulo} preview`}
            width={800}
            height={500}
            className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105 md:rounded-l-2xl"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between bg-[var(--surface)] p-4 sm:p-5">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {isFeatured && (
                <Badge className="bg-gradient-to-r from-[#0066FF] to-[#00a8ff] text-white border-0 text-[10px] px-2.5 py-0.5">
                  {ui.featured}
                </Badge>
              )}
              <Badge
                variant="outline"
                className="border-[var(--brand-border)] bg-[var(--surface-soft)] text-[var(--subtle)] text-[10px] px-2.5 py-0.5"
              >
                {project.tipo}
              </Badge>
              {project.company && (
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--subtle)]">
                  {project.company}
                </span>
              )}
            </div>

            <h3 className="mb-2 text-lg font-bold text-[var(--brand-accent-2)] sm:text-xl">
              {project.titulo}
            </h3>
            {project.brandName && (
              <p className="mb-1 text-sm font-semibold text-[var(--brand-accent)]">
                {project.brandName}
              </p>
            )}

            <p className="mb-3 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              {project.descripcion}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tecnologias.slice(0, 6).map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-[var(--brand-border)] bg-[var(--surface-soft)] px-2.5 py-1 font-mono text-[10px] text-[var(--subtle)]"
                >
                  {tech}
                </span>
              ))}
              {project.tecnologias.length > 6 && (
                <span className="rounded-full border border-[var(--brand-border)] bg-[var(--surface-soft)] px-2.5 py-1 font-mono text-[10px] text-[var(--subtle)]">
                  +{project.tecnologias.length - 6}
                </span>
              )}
            </div>
          </div>

          <p className="mt-4 text-xs text-[var(--brand-accent)] opacity-0 transition-opacity group-hover:opacity-100">
            {ui.viewDetails} →
          </p>
        </div>
      </div>
      </SpotlightCard>
    </motion.article>
  )
}

function ProjectDialog({ project, ui, open, onClose }) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-[var(--brand-border)] bg-[var(--surface)] text-[var(--text)]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[var(--brand-accent-2)] sm:text-2xl">
            {project.titulo}
          </DialogTitle>
          {project.brandName && (
            <p className="text-sm font-semibold text-[var(--brand-accent)]">
              {project.brandName}
            </p>
          )}
        </DialogHeader>

        {/* Image */}
        <div className="overflow-hidden rounded-xl border border-[var(--brand-border)] bg-[var(--image-bg)]">
          <Image
            src={project.imagen}
            alt={`${project.titulo} preview`}
            width={800}
            height={500}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tecnologias.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full border border-[var(--brand-border)] bg-[var(--surface-soft)] px-2.5 py-1 font-mono text-xs text-[var(--subtle)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Details */}
        <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          {project.detalles || ui.fallbackDetails}
        </p>

        {/* Bullets */}
        {project.bullets && (
          <>
            <p className="text-sm font-semibold text-[var(--text)]">{ui.keyContributions}</p>
            <ul className="space-y-2 text-sm text-[var(--subtle)] sm:text-base">
              {project.bullets.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--brand-accent)]"
                    aria-hidden="true"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Private code note */}
        {project.github === '/#' && (
          <p className="text-xs text-[var(--subtle)] sm:text-sm">{ui.privateCode}</p>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          {!isPendingUrl(project.url || project.link) && (
            <a
              href={project.url || project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00a8ff] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
            >
              <ExternalLink size={16} /> {ui.liveDemo}
            </a>
          )}
          {isPendingUrl(project.url) && project.url && (
            <p className="inline-flex items-center justify-center rounded-lg border border-[var(--brand-border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--subtle)]">
              {ui.urlPending}
            </p>
          )}
          {project.github !== '/#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--brand-border)] bg-[var(--surface)] px-4 py-2.5 text-sm transition-colors hover:border-[var(--brand-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]"
            >
              <Github size={16} /> {ui.code}
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function Projects({ projects, ui }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: ui.filterAll },
    { id: 'featured', label: ui.filterFeatured },
    { id: 'professional', label: ui.filterProfessional },
    { id: 'systems', label: ui.filterSystems },
  ]

  const filtered = useMemo(() => {
    if (activeTab === 'all') return projects
    if (activeTab === 'featured') return projects.filter((p) => p.featured)
    if (activeTab === 'professional')
      return projects.filter(
        (p) =>
          p.tipo?.toLowerCase().includes('professional') ||
          p.tipo?.toLowerCase().includes('profesional')
      )
    if (activeTab === 'systems')
      return projects.filter(
        (p) =>
          p.tipo?.toLowerCase().includes('systems') ||
          p.tipo?.toLowerCase().includes('sistemas')
      )
    return projects
  }, [projects, activeTab])

  return (
    <section id="projects" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>{ui.navProjects}</SectionHeading>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="flex h-auto flex-wrap gap-1 border border-[var(--brand-border)] bg-[var(--surface-soft)] p-1">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-md px-4 py-2 text-xs font-medium text-[var(--subtle)] transition-all data-[state=active]:bg-[var(--brand-accent)] data-[state=active]:text-white data-[state=active]:shadow-sm sm:text-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <motion.div layout className="mt-6 grid gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, index) => (
                  <ProjectCard
                    key={project.titulo}
                    project={project}
                    ui={ui}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>
        </Tabs>

        <ProjectDialog
          project={selectedProject}
          ui={ui}
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  )
}

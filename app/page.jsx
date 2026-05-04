'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Sun, Moon, Globe2 } from 'lucide-react'
import Image from 'next/image'
import ParticlesBackground from './components/ParticlesBackground'

const sectionIds = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact']

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [data, setData] = useState(null)
  const [openProject, setOpenProject] = useState(null)
  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('dark')

  const toggleAccordion = (i) => {
    setOpenProject(openProject === i ? null : i)
  }

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error('Failed to load data.json:', err))
  }, [])

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language')
    const savedTheme = window.localStorage.getItem('portfolio-theme')

    if (savedLanguage === 'en' || savedLanguage === 'es') {
      setLanguage(savedLanguage)
    }

    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.lang = language
    window.localStorage.setItem('portfolio-theme', theme)
    window.localStorage.setItem('portfolio-language', language)
  }, [theme, language])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120

      for (const section of sectionIds) {
        const el = document.getElementById(section)
        if (el) {
          const { offsetTop, offsetHeight } = el
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="text-[var(--text)] text-xl">Loading...</div>
      </div>
    )
  }

  const t = data.locales[language]
  const shared = data.shared
  const isPendingUrl = (url) => !url || url.startsWith('PENDING_')

  const renderControls = (isMobile = false) => (
    <div className={`flex ${isMobile ? 'flex-col items-stretch' : 'items-center'} gap-2`}>
      <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-1" aria-label={t.ui.languageLabel}>
        {['en', 'es'].map((locale) => (
          <button
            key={locale}
            type="button"
            onClick={() => setLanguage(locale)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${language === locale
              ? 'bg-[var(--accent)] text-white'
              : 'text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            aria-pressed={language === locale}
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-2 text-xs font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        aria-label={`${t.ui.themeLabel}: ${theme === 'dark' ? t.ui.dark : t.ui.light}`}
      >
        {theme === 'dark' ? <Moon size={15} aria-hidden="true" /> : <Sun size={15} aria-hidden="true" />}
        {theme === 'dark' ? t.ui.dark : t.ui.light}
      </button>
    </div>
  )

  return (
    <>
      <ParticlesBackground theme={theme} />
      <div className="relative z-20 min-h-screen bg-[var(--page-overlay)] text-[var(--text)] transition-colors duration-300">
        <nav className="fixed top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
            <a
              href="#home"
              className="text-xl font-bold text-gradient sm:text-2xl"
              aria-label={`${shared.nombre} ${t.ui.portfolio}`}
            >
              {t.ui.portfolio}
            </a>

            <div className="hidden items-center gap-6 md:flex lg:gap-8">
              {sectionIds.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-sm font-medium transition-colors lg:text-base ${activeSection === section
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text)] hover:text-[var(--accent)]'
                    }`}
                >
                  {t.nav[section]}
                </a>
              ))}
              {renderControls()}
            </div>

            <button
              type="button"
              className="rounded-lg p-2 text-[var(--text)] transition-colors hover:bg-[var(--surface-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-[var(--border)] bg-[var(--nav-bg)] md:hidden">
              <div className="flex flex-col gap-3 px-4 py-4">
                {sectionIds.map(section => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className="rounded-lg px-3 py-2 text-[var(--text)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--accent)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t.nav[section]}
                  </a>
                ))}
                {renderControls(true)}
              </div>
            </div>
          )}
        </nav>

        <section id="home" className="flex min-h-screen items-center justify-center px-4 pt-24 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-medium text-[var(--muted)]">
              <Globe2 size={16} aria-hidden="true" />
              {shared.ubicacion}
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gradient sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
              {shared.nombre}
            </h1>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] sm:p-8 md:p-10">
              <p className="mb-3 text-xl text-[var(--muted)] sm:mb-4 sm:text-2xl md:text-3xl">{t.personal.titulo}</p>
              <h2 className="mb-4 text-2xl font-semibold leading-tight text-[var(--text)] sm:text-3xl md:text-4xl">
                {t.personal.headline}
              </h2>
              <p className="mb-6 px-2 text-base leading-relaxed text-[var(--subtle)] sm:mb-8 sm:text-lg md:text-xl">
                {t.personal.descripcion}
              </p>

              <div className="mb-6 flex justify-center gap-4 sm:mb-8 sm:gap-6">
                <a
                  href={shared.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--surface-soft)] p-3 transition-colors hover:bg-[var(--accent)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  aria-label="GitHub"
                >
                  <Github size={20} className="sm:h-6 sm:w-6" />
                </a>
                <a
                  href={shared.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--surface-soft)] p-3 transition-colors hover:bg-[var(--accent)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="sm:h-6 sm:w-6" />
                </a>
                <a
                  href={`mailto:${shared.email}`}
                  className="rounded-full bg-[var(--surface-soft)] p-3 transition-colors hover:bg-[var(--accent)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  aria-label="Email"
                >
                  <Mail size={20} className="sm:h-6 sm:w-6" />
                </a>
              </div>

              <a
                href="#projects"
                className="inline-block rounded-full bg-gradient-to-r from-[#0066FF] to-[#00a8ff] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] sm:px-8 sm:py-4 sm:text-base"
              >
                {t.ui.viewProjects}
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gradient sm:mb-12 sm:text-4xl md:text-5xl">
              {t.nav.about}
            </h2>

            <div className="grid gap-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] sm:gap-8 sm:p-6 md:grid-cols-2">
              {t.sobre_mi.parrafos.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gradient sm:mb-12 sm:text-4xl md:text-5xl">
              {t.nav.experience}
            </h2>

            <div className="grid gap-6 sm:gap-8">
              {t.experiencia_laboral.map((job, index) => (
                <article key={index} className="flex flex-col items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] sm:flex-row sm:gap-6 sm:p-6">
                  {job.logo ? (
                    <Image
                      src={job.logo}
                      alt={`${job.empresa} logo`}
                      width={70}
                      height={70}
                      className="h-16 w-16 flex-shrink-0 rounded-lg bg-white object-contain p-2 sm:h-[70px] sm:w-[70px]"
                    />
                  ) : (
                    <div
                      className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] text-xl font-bold text-[var(--accent)] sm:h-[70px] sm:w-[70px]"
                      aria-label={`${job.empresa} logo placeholder`}
                    >
                      {job.empresa.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--accent-2)] sm:text-2xl">{job.puesto}</h3>
                    <p className="text-sm font-semibold text-[var(--text)] sm:text-base">{job.empresa}</p>
                    <p className="mb-2 text-xs text-[var(--subtle)] sm:mb-3 sm:text-sm">{job.fecha}</p>
                    <p className="mb-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">{job.descripcion}</p>
                    <ul className="space-y-2 text-sm text-[var(--subtle)] sm:text-base">
                      {job.bullets.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gradient sm:mb-12 sm:text-4xl md:text-5xl">
              {t.nav.education}
            </h2>

            <div className="grid gap-6 sm:gap-8">
              {t.educacion_completa.map((edu, i) => (
                <article key={i} className="flex flex-col items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] sm:flex-row sm:gap-6 sm:p-6">
                  <Image
                    src={edu.logo}
                    alt={`${edu.centro} logo`}
                    width={70}
                    height={70}
                    className="h-16 w-16 flex-shrink-0 rounded-lg bg-white object-contain p-2 sm:h-[70px] sm:w-[70px]"
                  />

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--accent-2)] sm:text-2xl">{edu.titulo}</h3>
                    <p className="text-sm font-semibold text-[var(--text)] sm:text-base">{edu.centro}</p>
                    <p className="mb-2 text-xs text-[var(--subtle)] sm:mb-3 sm:text-sm">{edu.fecha}</p>
                    <p className="mb-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">{edu.descripcion}</p>
                    <ul className="space-y-2 text-sm text-[var(--subtle)] sm:text-base">
                      {edu.bullets.map((item, bulletIndex) => (
                        <li key={bulletIndex} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gradient sm:mb-12 sm:text-4xl md:text-5xl">
              {t.nav.skills}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
              {t.ai_section && (
                <article className="rounded-2xl border border-[var(--accent)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] sm:col-span-2 sm:p-6 lg:col-span-3">
                  <h3 className="mb-3 text-xl font-bold text-[var(--accent)] sm:mb-4 sm:text-2xl">{t.ai_section.titulo}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">{t.ai_section.descripcion}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {t.ai_section.tools.map((tool, index) => (
                      <span key={index} className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs text-[var(--subtle)] sm:px-4 sm:py-2 sm:text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              )}
              {t.habilidades.map((cat, i) => (
                <article key={i} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] sm:p-6">
                  <h3 className="mb-3 text-xl font-bold text-[var(--accent)] sm:mb-4 sm:text-2xl">{cat.categoria}</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {cat.items.map((skill, j) => (
                      <span key={j} className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs text-[var(--subtle)] sm:px-4 sm:py-2 sm:text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gradient sm:mb-12 sm:text-4xl md:text-5xl">
              {t.nav.projects}
            </h2>

            <div className="grid gap-8 sm:gap-12">
              {t.proyectos.map((project, index) => (
                <article
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openProject === index}
                  className="cursor-pointer overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all hover:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  onClick={() => toggleAccordion(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      toggleAccordion(index)
                    }
                  }}
                >
                  <div className="grid gap-0 md:grid-cols-2">
                    <div className="w-full bg-[var(--image-bg)]">
                      <Image
                        src={project.imagen}
                        alt={`${project.titulo} preview`}
                        width={1200}
                        height={700}
                        className="h-auto w-full object-contain md:rounded-l-2xl"
                      />
                    </div>

                    <div className="flex flex-col justify-between bg-[var(--surface)] p-4 sm:p-6">
                      <div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          {project.featured && (
                            <span className="inline-flex rounded-full bg-gradient-to-r from-[#0066FF] to-[#00a8ff] px-3 py-1 text-xs font-semibold text-white">
                              {t.ui.featured}
                            </span>
                          )}
                          <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-semibold text-[var(--subtle)]">
                            {project.tipo}
                          </span>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-[var(--accent-2)] sm:mb-4 sm:text-2xl">
                          {project.titulo}
                        </h3>
                        {project.brandName && (
                          <p className="mb-3 text-sm font-semibold text-[var(--accent)]">
                            {project.brandName}
                          </p>
                        )}
                        {project.company && (
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--subtle)]">
                            {project.company}
                          </p>
                        )}

                        <p className="mb-3 text-sm leading-relaxed text-[var(--muted)] sm:mb-4 sm:text-base">
                          {project.descripcion}
                        </p>

                        <div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
                          {project.tecnologias.map((tech, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-2 py-1 text-xs text-[var(--subtle)] sm:px-3"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {openProject === index && (
                    <div className="animate-fadeIn border-t border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:p-6">
                      <h4 className="mb-2 text-lg font-bold text-[var(--accent-2)] sm:text-xl">
                        {t.ui.detailsOf} {project.titulo}
                      </h4>

                      <p className="mb-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                        {project.detalles || t.ui.fallbackDetails}
                      </p>

                      {project.bullets && (
                        <>
                          <p className="mb-2 text-sm font-semibold text-[var(--text)]">{t.ui.keyContributions}</p>
                          <ul className="mb-4 space-y-2 text-sm text-[var(--subtle)] sm:text-base">
                            {project.bullets.map((f, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {project.github === '/#' && (
                        <p className="mb-3 text-xs text-[var(--subtle)] sm:text-sm">
                          {t.ui.privateCode}
                        </p>
                      )}
                      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                        {!isPendingUrl(project.url || project.link) && (
                          <a
                            href={project.url || project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00a8ff] px-4 py-2.5 text-sm text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] sm:py-2 sm:text-base"
                          >
                            <ExternalLink size={16} /> {t.ui.liveDemo}
                          </a>
                        )}
                        {project.url && isPendingUrl(project.url) && (
                          <p className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--subtle)] sm:py-2 sm:text-base">
                            {t.ui.urlPending}
                          </p>
                        )}
                        {project.github !== '/#' && (
                          <a
                            href={project.github}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm transition-colors hover:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] sm:py-2 sm:text-base"
                          >
                            <Github size={16} /> {t.ui.code}
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-[var(--shadow)] sm:p-8">
            <h2 className="mb-4 text-3xl font-bold text-gradient sm:text-4xl">{t.ui.contactTitle}</h2>
            <p className="mx-auto mb-6 max-w-2xl text-[var(--muted)]">{t.ui.contactText}</p>
            <div className="flex justify-center gap-5 sm:gap-7">
              <a
                href={shared.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text)] transition-colors hover:bg-[var(--accent)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] sm:h-14 sm:w-14"
                aria-label="GitHub"
              >
                <Github size={22} aria-hidden="true" />
              </a>
              <a
                href={shared.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text)] transition-colors hover:bg-[var(--accent)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] sm:h-14 sm:w-14"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${shared.email}`}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text)] transition-colors hover:bg-[var(--accent)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] sm:h-14 sm:w-14"
                aria-label="Email"
              >
                <Mail size={22} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-[var(--border)] px-4 py-6 sm:px-6 sm:py-8">
          <div className="mx-auto max-w-6xl text-center text-sm text-[var(--subtle)] sm:text-base">
            <p>{t.contacto.copyright}</p>
          </div>
        </footer>
      </div>
    </>
  )
}

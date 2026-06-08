'use client'

import { useState, useEffect } from 'react'
import ParticlesBackground from './components/ParticlesBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { LogoMarquee } from './components/LogoMarquee'
import { CustomCursor } from './components/magic/CustomCursor'
import { useTheme } from 'next-themes'

export default function Portfolio() {
  const [data, setData] = useState(null)
  const [language, setLanguage] = useState('en')
  const { theme } = useTheme()

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Failed to load data.json:', err))
  }, [])

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language')
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
        <div className="flex items-center gap-3 text-[var(--text-muted)]">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--brand-accent)] border-t-transparent" />
          <span className="text-base font-medium">Loading…</span>
        </div>
      </div>
    )
  }

  const t = data.locales[language]
  const shared = data.shared

  return (
    <>
      <CustomCursor />
      <ParticlesBackground theme={theme ?? 'dark'} />

      <div className="relative z-20 min-h-screen bg-[var(--page-overlay)] text-[var(--text)] transition-colors duration-300">
        <Navbar
          t={t}
          language={language}
          setLanguage={setLanguage}
          portfolioName={shared.nombre}
        />

        <Hero shared={shared} t={t.personal} ui={t.ui} />

        <About
          parrafos={t.sobre_mi.parrafos}
          title={t.nav.about}
        />

        <LogoMarquee label={t.ui.marqueeLabel} />

        <Experience
          jobs={t.experiencia_laboral}
          title={t.nav.experience}
          presentLabel={t.ui.present}
        />

        <Education
          items={t.educacion_completa}
          title={t.nav.education}
          presentLabel={t.ui.present}
        />

        <Skills
          habilidades={t.habilidades}
          aiSection={t.ai_section}
          title={t.nav.skills}
        />

        <Projects projects={t.proyectos} ui={t.ui} />

        <Contact
          shared={shared}
          ui={t.ui}
          copyright={t.contacto.copyright}
        />
      </div>
    </>
  )
}

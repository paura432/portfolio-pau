'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, Sun, Moon, Globe2 } from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const sectionIds = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact']

export function Navbar({ t, language, setLanguage, portfolioName }) {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      setScrolled(window.scrollY > 20)

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

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const NavLink = ({ section, onClick }) => (
    <a
      href={`#${section}`}
      onClick={onClick}
      className={`relative text-sm font-medium transition-colors lg:text-base ${
        activeSection === section
          ? 'text-[var(--brand-accent)]'
          : 'text-[var(--text)] hover:text-[var(--brand-accent)]'
      }`}
    >
      {t.nav[section]}
      {activeSection === section && (
        <motion.span
          layoutId="activeNav"
          className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[var(--brand-accent)]"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  )

  const Controls = ({ mobile = false }) => (
    <div className={`flex ${mobile ? 'flex-col items-stretch gap-3' : 'items-center gap-2'}`}>
      <div
        className="flex items-center gap-1 rounded-full border border-[var(--brand-border)] bg-[var(--surface-soft)] p-1"
        aria-label={t.ui.languageLabel}
      >
        {['en', 'es'].map((locale) => (
          <button
            key={locale}
            type="button"
            onClick={() => setLanguage(locale)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] ${
              language === locale
                ? 'bg-[var(--brand-accent)] text-white shadow-sm'
                : 'text-[var(--subtle)] hover:text-[var(--text)]'
            }`}
            aria-pressed={language === locale}
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        className={`inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--surface-soft)] px-3 py-2 text-xs font-semibold text-[var(--text)] transition-all hover:border-[var(--brand-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] ${
          mobile ? 'w-full' : ''
        }`}
        aria-label={`${t.ui.themeLabel}: ${theme === 'dark' ? t.ui.dark : t.ui.light}`}
      >
        {theme === 'dark' ? (
          <Moon size={15} aria-hidden="true" />
        ) : (
          <Sun size={15} aria-hidden="true" />
        )}
        {theme === 'dark' ? t.ui.dark : t.ui.light}
      </button>
    </div>
  )

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 z-50 w-full border-b border-[var(--brand-border)] bg-[var(--nav-bg)] backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.15)]' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#home"
          className="text-xl font-bold text-gradient sm:text-2xl"
          aria-label={`${portfolioName} ${t.ui.portfolio}`}
        >
          {t.ui.portfolio}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {sectionIds.map((section) => (
            <NavLink key={section} section={section} />
          ))}
          <Controls />
        </div>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="rounded-lg p-2 text-[var(--text)] transition-colors hover:bg-[var(--surface-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] md:hidden"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-[var(--brand-border)] bg-[var(--nav-bg)] text-[var(--text)]"
          >
            <SheetHeader>
              <SheetTitle className="text-left text-gradient text-xl font-bold">
                {t.ui.portfolio}
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-1">
              {sectionIds.map((section) => (
                <SheetTrigger asChild key={section}>
                  <a
                    href={`#${section}`}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--brand-accent)] ${
                      activeSection === section
                        ? 'bg-[var(--surface-soft)] text-[var(--brand-accent)]'
                        : 'text-[var(--text)]'
                    }`}
                  >
                    {t.nav[section]}
                  </a>
                </SheetTrigger>
              ))}
              <div className="mt-4 border-t border-[var(--brand-border)] pt-4">
                <Controls mobile />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}

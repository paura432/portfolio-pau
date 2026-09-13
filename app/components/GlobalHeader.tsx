'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { copy, localizedPath, type Locale } from '../i18n'

export default function GlobalHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const labels = copy[locale]
  const links = [{ label: labels.work, href: `${localizedPath(locale)}/#work`, active: pathname.includes('/work') }, { label: labels.experience, href: `${localizedPath(locale)}/#experience`, active: false }, { label: labels.archive, href: localizedPath(locale, '/foundations'), active: pathname.includes('/foundations') }, { label: labels.design, href: localizedPath(locale, '/design'), active: pathname.includes('/design') }, { label: labels.colophon, href: localizedPath(locale, '/colophon'), active: pathname.includes('/colophon') }]
  const languagePath = pathname.replace(`/${locale}`, `/${locale === 'en' ? 'es' : 'en'}`)
  const navigation = <>{links.map(({ label, href, active }) => <Link key={href} href={href} aria-current={active ? 'page' : undefined}>{label}</Link>)}<Link href={languagePath} aria-label={locale === 'en' ? 'Cambiar a castellano' : 'Switch to English'}>{locale === 'en' ? 'ES' : 'EN'}</Link><details className="cv-menu"><summary>CV</summary><a href="/cv-en.pdf" download>CV EN</a><a href="/cv-es.pdf" download>CV ES</a></details></>
  return <header className="global-header"><Link className="wordmark" href={localizedPath(locale)}>PAU RAMOS <span>/ LIVE SYSTEMS</span></Link><nav className="global-nav" aria-label="Primary navigation">{navigation}</nav><button className="global-menu" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="global-mobile-nav" aria-label={labels.menu}>{open ? <X /> : <Menu />}</button>{open && <nav id="global-mobile-nav" className="global-mobile-nav" aria-label="Mobile navigation" onClick={() => setOpen(false)}>{navigation}</nav>}</header>
}

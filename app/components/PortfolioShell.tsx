'use client'

import Link from 'next/link'
import { Menu, Moon, Sun, X, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import SystemTopology from './SystemTopology'
import { contact, experience, foundations, systems } from '../data/portfolio'

const copy = {
  en: { systems: 'Systems', foundations: 'Foundations', design: 'Design', cv: 'CV', current: 'Current systems', infrastructure: 'Infrastructure', practice: 'Design practice', experience: 'Experience', contact: 'Build a system worth using.', intro: 'Building products across interface, systems and intelligence.', cvCta: 'Request CV', language: 'ES' },
  es: { systems: 'Sistemas', foundations: 'Fundamentos', design: 'Diseño', cv: 'CV', current: 'Sistemas actuales', infrastructure: 'Infraestructura', practice: 'Práctica de diseño', experience: 'Experiencia', contact: 'Construyamos un sistema que merezca usarse.', intro: 'Construyo productos entre interfaz, sistemas e inteligencia.', cvCta: 'Solicitar CV', language: 'EN' },
} as const

export default function PortfolioShell() {
  const [language, setLanguage] = useState<keyof typeof copy>('en')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [open, setOpen] = useState(false)
  const t = copy[language]
  useEffect(() => { document.documentElement.lang = language; document.documentElement.dataset.theme = theme }, [language, theme])
  const nav = <><a href="#systems">{t.systems}</a><Link href="/foundations">{t.foundations}</Link><Link href="/design">{t.design}</Link><a href={'mailto:' + contact.email + '?subject=CV%20request'}>{t.cv}</a></>

  return <main>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#intro">PAU / SYSTEMS</a><nav className="desktop-nav" aria-label="Primary navigation">{nav}</nav><div className="nav-tools"><button className="text-button" onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>{t.language}</button><button className="icon-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle colour theme">{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}</button><button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></div></header>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation" onClick={() => setOpen(false)}>{nav}</nav>}
    <div id="main-content">
      <section id="intro" className="systems-hero"><p className="kicker">MADRID / 2026</p><h1>PAU<br/>RAMOS</h1><div className="systems-role"><strong>FULL STACK<br/>PRODUCT ENGINEER</strong><p>{t.intro}</p></div><p className="systems-index">00 / INTRO · 01 / CURRENT SYSTEMS · 02 / INFRASTRUCTURE · 03 / FOUNDATIONS</p></section>
      <SystemTopology />
      <section id="systems" className="systems-section"><div className="section-label"><span>01</span><h2>{t.current}</h2></div><div className="systems-list">{systems.slice(0, 2).map((project) => <Link href={'/work/' + project.slug} key={project.slug} className={'system-row system-' + project.slug}><span>{project.index}</span><div><h3>{project.title}</h3><p>{project.chapter}</p></div><p>{project.summary}</p><ArrowUpRight aria-hidden="true" /></Link>)}</div></section>
      <section className="systems-statement"><p>Current work is not a stack. It is a set of decisions across people, interfaces, data and operations.</p></section>
      <section className="systems-section infrastructure"><div className="section-label"><span>02</span><h2>{t.infrastructure}</h2></div>{systems.slice(2).map((project) => <Link href={'/work/' + project.slug} key={project.slug} className="infrastructure-link"><div><p>{project.company} / {project.period}</p><h3>{project.title}</h3><span>{project.chapter}</span></div><p>{project.summary}</p><ArrowUpRight aria-hidden="true" /></Link>)}</section>
      <section className="foundations-preview"><div><p className="kicker">03 / ENGINEERING FOUNDATIONS</p><h2>Before products, there were systems.</h2><p>Public work in C, UNIX, graphics, concurrency, networking and C++ made the current product work possible.</p><Link className="link-button" href="/foundations">Explore Foundations <ArrowDownRight size={18}/></Link></div><ol>{foundations.slice(0, 5).map((item) => <li key={item.id}><strong>{item.title}</strong><span>{item.projects}</span></li>)}</ol></section>
      <section className="design-preview"><p className="kicker">04 / {t.practice.toUpperCase()}</p><h2>Not every product should look like software.</h2><p>Sofía is a public implementation that tests an editorial and media-first visual system.</p><Link href="/design">See design practice <ArrowUpRight size={18}/></Link></section>
      <section className="experience-section systems-experience"><div className="section-label"><span>05</span><h2>{t.experience}</h2></div>{experience.map(([date, company, role, detail]) => <article className="experience-row" key={company}><p>{date}</p><h3>{company}</h3><strong>{role}</strong><span>{detail}</span></article>)}</section>
      <section className="contact-section"><p className="kicker">06 / CONTACT</p><h2>{t.contact}</h2><a className="contact-link" href={'mailto:' + contact.email}>Let’s talk <ArrowUpRight aria-hidden="true"/></a><div className="contact-meta"><a href={'mailto:' + contact.email}>{contact.email}</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={contact.github} target="_blank" rel="noreferrer">GitHub</a><span>{contact.location}</span></div></section>
    </div>
  </main>
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { archive, capabilities, contact, experience, work } from '../data/portfolio'

const copy = {
  en: { work: 'Work', lab: 'Lab', about: 'About', cv: 'CV', selected: 'Selected work', intro: 'I design and build digital products from interface to infrastructure.', view: 'View selected work', unavailable: 'CV available on request', manifesto: 'Understand problem. Design system. Build product. Test real thing. Ship it.', how: 'How I build', experience: 'Experience', capabilities: 'Capabilities', archive: 'Other work', aboutTitle: 'Built for product work, not demos.', about: 'I am a Full Stack Product Engineer in Madrid. I work across product definition, interfaces, backend integrations and delivery. My background at 42 Madrid keeps systems thinking close to the product.', contact: 'Have a product to build?', talk: "Let’s talk", language: 'ES' },
  es: { work: 'Proyectos', lab: 'Lab', about: 'Sobre mí', cv: 'CV', selected: 'Proyectos seleccionados', intro: 'Diseño y construyo productos digitales, de la interfaz a la infraestructura.', view: 'Ver proyectos', unavailable: 'CV disponible bajo petición', manifesto: 'Entender problema. Diseñar sistema. Construir producto. Probar realidad. Publicar.', how: 'Cómo trabajo', experience: 'Experiencia', capabilities: 'Capacidades', archive: 'Otros proyectos', aboutTitle: 'Hecho para producto, no para demos.', about: 'Soy Full Stack Product Engineer en Madrid. Trabajo en definición de producto, interfaces, integraciones backend y entrega. Mi formación en 42 Madrid mantiene el pensamiento de sistemas cerca del producto.', contact: '¿Tienes un producto que construir?', talk: 'Hablemos', language: 'EN' },
}
const process = [['01', 'UNDERSTAND', 'Business and user problem'], ['02', 'ARCHITECT', 'Product, data and integrations'], ['03', 'BUILD', 'Frontend and backend'], ['04', 'INTELLIGENCE', 'AI where it creates value'], ['05', 'VALIDATE', 'QA, client and users'], ['06', 'SHIP', 'Production']]

export default function PortfolioShell() {
  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language]
  useEffect(() => { document.documentElement.lang = language; document.documentElement.dataset.theme = theme; window.localStorage.setItem('portfolio-language', language); window.localStorage.setItem('portfolio-theme', theme) }, [language, theme])
  const nav = <><a href="#work">{t.work}</a><Link href="/lab">{t.lab}</Link><a href="#about">{t.about}</a><a href={`mailto:${contact.email}?subject=CV%20request`}>{t.cv}</a></>

  return <main>
    <a className="skip-link" href="#content">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#top">PAU RAMOS</a><nav className="desktop-nav" aria-label="Primary">{nav}</nav><div className="nav-tools"><button className="text-button" onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}>{t.language}</button><button className="icon-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle colour theme">{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}</button><button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div></header>
    {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation" onClick={() => setMenuOpen(false)}>{nav}</nav>}
    <div id="content">
      <section id="top" className="hero editorial-grid"><p className="eyebrow">MADRID, SPAIN · 2026</p><h1><span>PAU</span><span>RAMOS</span></h1><div className="hero-role"><p>FULL STACK</p><p>PRODUCT ENGINEER</p></div><p className="hero-intro">{t.intro}</p><div className="hero-actions"><a className="button button-primary" href="#work">{t.view} <ArrowDownRight size={18} /></a><a className="cv-note" href={`mailto:${contact.email}?subject=CV%20request`}>{t.unavailable}</a></div><div className="hero-index" aria-hidden="true"><span>01</span><span>PRODUCT</span><span>ENGINEERING</span></div></section>
      <section id="work" className="work-section"><div className="section-kicker"><span>01</span><h2>{t.selected}</h2></div><div className="work-list">{work.map((project) => <Link className={`work-row ${project.slug}`} href={`/work/${project.slug}`} key={project.slug}><span className="work-number">{project.number}</span><div><h3>{project.name}</h3><p>{project.role}</p></div><div className="work-meta"><span>{project.company}</span><span>{project.year}</span></div><div className="work-preview"><Image src={project.image} alt="" fill sizes="28vw" /></div><ArrowUpRight className="work-arrow" aria-hidden="true" /></Link>)}</div></section>
      <section className="manifesto"><p>{t.manifesto}</p></section>
      <section className="process-section"><div className="section-kicker"><span>02</span><h2>{t.how}</h2></div><ol className="process-list">{process.map(([number, title, text]) => <li key={number}><span>{number}</span><strong>{title}</strong><p>{text}</p></li>)}</ol></section>
      <section className="experience-section"><div className="section-kicker"><span>03</span><h2>{t.experience}</h2></div>{experience.map(([date, company, role, detail]) => <article className="experience-row" key={company}><p>{date}</p><h3>{company}</h3><strong>{role}</strong><span>{detail}</span></article>)}</section>
      <section className="capabilities-section"><div className="section-kicker"><span>04</span><h2>{t.capabilities}</h2></div><div className="capabilities-list">{capabilities.map(([title, detail]) => <article key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
      <section className="lab-preview"><div><p className="eyebrow">LAB / 001—005</p><h2>Different products need different visual languages.</h2><Link className="button button-contrast" href="/lab">Explore the lab <ArrowUpRight size={18} /></Link></div><div className="lab-grid" aria-hidden="true"><span>SPATIAL</span><span>EDITORIAL</span><span>COMMERCE</span><span>DATA</span><span>INTELLIGENCE</span></div></section>
      <section id="about" className="about-section"><div className="about-mark">PR</div><div><p className="eyebrow">ABOUT</p><h2>{t.aboutTitle}</h2><p>{t.about}</p><div className="about-links"><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a href={contact.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a></div></div></section>
      <section className="archive-section"><div className="section-kicker"><span>05</span><h2>{t.archive}</h2></div><div className="archive-grid">{archive.map(([title, type, image]) => <article key={title}><Image src={image} alt="" width={720} height={480} sizes="(max-width: 720px) 100vw, 33vw"/><h3>{title}</h3><p>{type}</p></article>)}</div></section>
      <section id="contact" className="contact-section"><p className="eyebrow">CONTACT</p><h2>{t.contact}</h2><a className="contact-link" href={`mailto:${contact.email}`}>{t.talk} <ArrowUpRight aria-hidden="true" /></a><div className="contact-meta"><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={contact.github} target="_blank" rel="noreferrer">GitHub</a><span>{contact.location}</span></div></section>
    </div>
  </main>
}

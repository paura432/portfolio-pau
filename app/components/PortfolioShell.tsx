'use client'

import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { contact, experience, foundations, systems } from '../data/portfolio'

export default function PortfolioShell() {
  const [open, setOpen] = useState(false)
  const nav = <><a href="#work">WORK</a><a href="#experience">EXPERIENCE</a><Link href="/foundations">ARCHIVE</Link><Link href="/design">DESIGN</Link><a href="/pau-ramos-cv-es.pdf" download>CV</a></>

  return <main className="live-home">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="live-header"><Link className="wordmark" href="/">PAU / LIVE SYSTEMS</Link><nav className="desktop-nav" aria-label="Primary navigation">{nav}</nav><button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></header>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation" onClick={() => setOpen(false)}>{nav}</nav>}
    <div id="main-content">
      <section className="live-hero" aria-labelledby="hero-title"><p className="kicker">MADRID · 2026</p><h1 id="hero-title">PAU<br />RAMOS</h1><div className="hero-role"><strong>FULL STACK<br />PRODUCT ENGINEER</strong><p>Building products across interface, systems and AI.</p></div><div className="hero-actions"><a href="#work">SELECTED WORK <ArrowDownRight size={17} /></a><a href="/pau-ramos-cv-es.pdf" download>CV <ArrowDownRight size={17} /></a></div><div className="live-system" aria-hidden="true"><i /><i /><i /><i /></div></section>
      <section id="work" className="live-section selected-work" aria-labelledby="work-title"><div className="section-label"><span>01</span><h2 id="work-title">SELECTED WORK</h2></div><div className="work-list">{systems.map((project) => <Link href={'/work/' + project.slug} key={project.slug} className={'work-row work-' + project.slug}><span>{project.index}</span><div><h3>{project.title}</h3><p>{project.chapter}</p></div><p>{project.company} / {project.period}</p><ArrowUpRight aria-hidden="true" /></Link>)}</div></section>
      <section id="experience" className="live-section live-experience" aria-labelledby="experience-title"><div className="section-label"><span>02</span><h2 id="experience-title">EXPERIENCE</h2></div>{experience.slice(0, 2).map(([date, company, role, detail]) => <article className="experience-row" key={company}><p>{date}</p><h3>{company}</h3><strong>{role}</strong><span>{detail}</span></article>)}</section>
      <section className="archive-callout" aria-labelledby="archive-title"><p className="kicker">03 / ENGINEERING ARCHIVE</p><h2 id="archive-title">Public work behind product decisions.</h2><p>C, UNIX, graphics, concurrency, networking and C++. Evidence, not a competing work index.</p><Link href="/foundations">OPEN ENGINEERING ARCHIVE <ArrowUpRight size={18} /></Link><ol>{foundations.slice(0, 4).map(({ id, title }) => <li key={id}>{title}</li>)}</ol></section>
      <section className="design-callout"><p className="kicker">04 / DESIGN PRACTICE</p><h2>Different products need different visual systems.</h2><p>Sofía is public evidence of editorial web implementation.</p><Link href="/design">VIEW DESIGN PRACTICE <ArrowUpRight size={18} /></Link></section>
      <section className="about-callout"><p className="kicker">05 / ABOUT</p><p>Full Stack Product Engineer based in Madrid. I work across product definition, interface, backend systems and AI-assisted workflows. Previously at Telefónica Tech. Engineering foundations from 42 Madrid.</p></section>
      <footer id="contact" className="live-contact"><p className="kicker">06 / CONTACT + CV</p><h2>Build a system worth using.</h2><a className="cv-download" href="/pau-ramos-cv-es.pdf" download>DOWNLOAD CV <ArrowDownRight aria-hidden="true" /></a><a className="contact-link" href={'mailto:' + contact.email}>EMAIL <ArrowUpRight aria-hidden="true" /></a><div className="contact-meta"><a href={contact.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a><a href={contact.github} target="_blank" rel="noreferrer">GITHUB</a><Link href="/colophon">COLOPHON</Link><a href="https://github.com/paura432/portfolio-pau" target="_blank" rel="noreferrer">VIEW SOURCE</a><span>{contact.location.toUpperCase()}</span></div></footer>
    </div>
  </main>
}

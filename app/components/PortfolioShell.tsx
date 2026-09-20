'use client'

import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { capabilities, contact, designPractice, experience, foundations, independentWork, systems } from '../data/portfolio'
import { useLiveSystem } from './live-system/liveSystemStore'
import IntegrationEvidence from './IntegrationEvidence'
import { homeCopy, localizedPath, type Locale } from '../i18n'

export default function PortfolioShell({ standalone = true, locale = 'en' }: { standalone?: boolean; locale?: Locale }) {
  const [open, setOpen] = useState(false)
  const setActiveProject = useLiveSystem((state) => state.setActiveProject)
  const text = homeCopy[locale]
  const home = localizedPath(locale)
  const nav = <><a href={`${home}#work`}>WORK</a><a href={`${home}#experience`}>EXPERIENCE</a><Link href={localizedPath(locale, '/foundations')}>ARCHIVE</Link><Link href={localizedPath(locale, '/design')}>DESIGN</Link><Link href={localizedPath(locale, '/colophon')}>COLOPHON</Link><details className="cv-menu"><summary>CV</summary><a href="/cv-en.pdf" download>CV EN</a><a href="/cv-es.pdf" download>CV ES</a></details></>

  return <main className="live-home">
    <a className="skip-link" href="#main-content">Skip to content</a>
    {standalone && <><header className="live-header"><Link className="wordmark" href={home}>PAU RAMOS <span>/ LIVE SYSTEMS</span></Link><nav className="desktop-nav" aria-label="Primary navigation">{nav}</nav><button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></header>{open && <nav className="mobile-nav" aria-label="Mobile navigation" onClick={() => setOpen(false)}>{nav}</nav>}</>}
    <div id="main-content">
      <section className="live-hero" aria-labelledby="hero-title"><p className="kicker">MADRID · 2026</p><h1 id="hero-title">PAU<br />RAMOS</h1><div className="hero-role"><strong>{text.role.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</strong><p>{text.intro}</p></div><div className="hero-actions"><a href={`${home}#work`}>{text.work} <ArrowDownRight size={17} /></a><a href="/cv-en.pdf" download>CV EN <ArrowDownRight size={17} /></a><a href="/cv-es.pdf" download>CV ES <ArrowDownRight size={17} /></a></div><div className="live-system" aria-hidden="true"><i /><i /><i /><i /></div></section>
      <section id="work" className="live-section selected-work" aria-labelledby="work-title"><div className="section-label"><span>01</span><h2 id="work-title">PROFESSIONAL SYSTEMS</h2></div><div className="work-list">{systems.map((project) => <Link href={localizedPath(locale, '/work/' + project.slug)} key={project.slug} className={'work-row work-' + project.slug} onMouseEnter={() => setActiveProject(project.slug)} onFocus={() => setActiveProject(project.slug)} onMouseLeave={() => setActiveProject('home')}><span>{project.index}</span><div><h3>{project.title}</h3><p>{project.chapter}</p></div><p>{project.company} / {project.period}</p><ArrowUpRight aria-hidden="true" /></Link>)}</div></section>
      <section className="independent-callout" onMouseEnter={() => setActiveProject('broki')} onMouseLeave={() => setActiveProject('home')}><p className="kicker">02 / INDEPENDENT PRODUCT</p><h2>{independentWork.title}</h2><p>{independentWork.summary}</p><p className="mono-line">{independentWork.technologies.join(' · ')}</p><Link href={localizedPath(locale, '/work/broki')} onFocus={() => setActiveProject('broki')}>OPEN CASE STUDY <ArrowUpRight size={18} /></Link></section>
      <section id="experience" className="live-section live-experience" aria-labelledby="experience-title"><div className="section-label"><span>03</span><h2 id="experience-title">EXPERIENCE</h2></div>{experience.slice(0, 2).map(([date, company, role, detail]) => <article className="experience-row" key={company}><p>{date}</p><h3>{company}</h3><strong>{role}</strong><span>{detail}</span></article>)}</section>
      <section className="archive-callout" aria-labelledby="archive-title"><p className="kicker">04 / ENGINEERING ARCHIVE</p><h2 id="archive-title">Public work behind product decisions.</h2><p>C, UNIX, graphics, concurrency, networking and C++. Evidence, not a competing work index.</p><Link href={localizedPath(locale, '/foundations')}>OPEN ENGINEERING ARCHIVE <ArrowUpRight size={18} /></Link><ol>{foundations.slice(0, 4).map(({ id, title }) => <li key={id}>{title}</li>)}</ol></section>
      <section className="design-callout"><p className="kicker">05 / DESIGN PRACTICE</p><h2>Different products need different visual systems.</h2><p>{designPractice.map((project) => project.title).join(' + ')}: public evidence of editorial and portfolio web implementation.</p><Link href={localizedPath(locale, '/design')}>VIEW DESIGN PRACTICE <ArrowUpRight size={18} /></Link></section>
      <section className="capabilities-callout" aria-labelledby="capabilities-title"><p className="kicker">06 / ENGINEERING CAPABILITIES</p><h2 id="capabilities-title">Technology in context.</h2><div>{capabilities.map(([title, stack]) => <article key={title}><h3>{title}</h3><p>{stack}</p></article>)}</div></section>
      <IntegrationEvidence />
      <section className="about-callout"><p className="kicker">08 / ABOUT</p><p>Full Stack Product Engineer based in Madrid. I work across product definition, interface, backend systems and AI-assisted workflows. Previously at Telefónica Tech. Engineering foundations from 42 Madrid.</p></section>
      <footer id="contact" className="live-contact"><p className="kicker">09 / CONTACT + CV</p><h2>Build a system worth using.</h2><a className="cv-download" href="/cv-en.pdf" download>DOWNLOAD CV EN <ArrowDownRight aria-hidden="true" /></a><a className="cv-download" href="/cv-es.pdf" download>DOWNLOAD CV ES <ArrowDownRight aria-hidden="true" /></a><a className="contact-link" href={'mailto:' + contact.email}>EMAIL <ArrowUpRight aria-hidden="true" /></a><div className="contact-meta"><a href={contact.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a><a href={contact.github} target="_blank" rel="noreferrer">GITHUB</a><Link href={localizedPath(locale, '/colophon')}>COLOPHON</Link><a href="https://github.com/paura432/portfolio-pau" target="_blank" rel="noreferrer">VIEW SOURCE</a><span>{contact.location.toUpperCase()}</span></div></footer>
    </div>
  </main>
}

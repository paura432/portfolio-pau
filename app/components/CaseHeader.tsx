/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowLeft, Menu } from 'lucide-react'

export default function CaseHeader({ chapter }: { chapter: string }) {
  const links = <><a href="/#work">WORK</a><a href="/#experience">EXPERIENCE</a><a href="/foundations">ARCHIVE</a><a href="/design">DESIGN</a><a href="/colophon">COLOPHON</a><details className="cv-menu"><summary>CV</summary><a href="/cv-en.pdf" download>CV EN</a><a href="/cv-es.pdf" download>CV ES</a></details></>

  return <header className="case-header">
    <a className="case-wordmark" href="/">PAU RAMOS <span>/ LIVE SYSTEMS</span></a>
    <nav className="case-nav" aria-label="Primary navigation">{links}</nav>
    <details className="case-mobile-menu">
      <summary aria-label="Open navigation"><Menu size={20} /><span className="sr-only">Open navigation</span></summary>
      <nav aria-label="Mobile navigation">{links}</nav>
    </details>
    <a className="case-back" href="/"><ArrowLeft size={18} /> HOME</a>
    <span>{chapter}</span>
  </header>
}

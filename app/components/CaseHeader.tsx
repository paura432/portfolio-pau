import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function CaseHeader({ chapter }: { chapter: string }) {
  return <header className="case-header"><Link className="case-wordmark" href="/">PAU RAMOS <span>/ LIVE SYSTEMS</span></Link><nav className="case-nav" aria-label="Primary navigation"><Link href="/#work">WORK</Link><Link href="/#experience">EXPERIENCE</Link><Link href="/foundations">ARCHIVE</Link><Link href="/design">DESIGN</Link><Link href="/colophon">COLOPHON</Link><details className="cv-menu"><summary>CV</summary><a href="/cv-en.pdf" download>CV EN</a><a href="/cv-es.pdf" download>CV ES</a></details></nav><Link className="case-back" href="/"><ArrowLeft size={18} /> HOME</Link><span>{chapter}</span></header>
}

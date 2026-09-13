'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function CaseHeader({ chapter }: { chapter: string }) {
  const router = useRouter()
  const back = () => window.history.length > 1 ? router.back() : router.push('/')
  return <header className="case-header"><Link className="case-wordmark" href="/">PAU RAMOS <span>/ LIVE SYSTEMS</span></Link><nav className="case-nav" aria-label="Primary navigation"><Link href="/#work">WORK</Link><Link href="/#experience">EXPERIENCE</Link><Link href="/foundations">ARCHIVE</Link><Link href="/design">DESIGN</Link><Link href="/colophon">COLOPHON</Link><details className="cv-menu"><summary>CV</summary><a href="/cv-en.pdf" download>CV EN</a><a href="/cv-es.pdf" download>CV ES</a></details></nav><button type="button" className="case-back" onClick={back} aria-label="Go back"><ArrowLeft size={18} /> BACK</button><span>{chapter}</span></header>
}

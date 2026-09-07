import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../components/CaseHeader'

export const metadata = { title: 'Design Practice — Pau Ramos', description: 'Editorial and product web implementation by Pau Ramos.' }

export default function DesignPage() {
  return <main className="design-page"><CaseHeader chapter="04 / DESIGN PRACTICE" /><section className="design-hero"><p className="kicker">SOFÍA / PUBLIC IMPLEMENTATION</p><h1>Not every product<br/>should look like software.</h1><p>An editorial and media-first web implementation that demonstrates a different visual system from product and infrastructure work.</p></section><section className="sofia-grid"><div className="sofia-type">SOFÍA</div><div><p className="case-label">WHAT IT DEMONSTRATES</p><h2>Editorial hierarchy, media behaviour and a responsive visual system.</h2><p>This portfolio attributes the website implementation and system only. It does not claim ownership of the editorial or photographic content.</p><div className="design-links"><a href="https://sofia-chi-gold.vercel.app" target="_blank" rel="noreferrer">Visit live site <ArrowUpRight size={18}/></a><a href="https://github.com/paura432/Sofia" target="_blank" rel="noreferrer">View repository <ArrowUpRight size={18}/></a></div></div></section><footer className="case-footer"><Link href="/">Back to systems <ArrowUpRight size={18}/></Link></footer></main>
}

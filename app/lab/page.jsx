import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const labs = [
  ['001', 'SPATIAL', 'WebGL / depth / interaction', 'A compact spatial study reserved for a single memorable technical moment.'],
  ['002', 'EDITORIAL', 'Type / image / composition', 'A different visual language for culture, photography and architecture.'],
  ['003', 'COMMERCE', 'Product storytelling', 'A product page study: narrative, detail and responsive interaction.'],
  ['004', 'DATA', 'Operational interface', 'Dense, usable enterprise UI: states, hierarchy and decision context.'],
  ['005', 'INTELLIGENCE', 'Evidence-led AI UX', 'Sources, confidence and output artifacts. Not a generic chat window.'],
]

export const metadata = { title: 'Lab — Pau Ramos', description: 'Product and interface experiments by Pau Ramos.' }

export default function LabPage() {
  return <main className="lab-page"><header className="case-header"><Link href="/"><ArrowLeft size={18}/> Pau Ramos</Link><span>LAB / 2026</span></header><section className="lab-hero"><p>EXPERIMENTS</p><h1>Range lives outside the homepage.</h1><p>Small product studies that test distinct interaction and visual systems without turning the portfolio into a demo reel.</p></section><section className="lab-list">{labs.map(([number, title, type, description]) => <article key={number}><span>{number}</span><h2>{title}</h2><strong>{type}</strong><p>{description}</p><ArrowUpRight aria-hidden="true"/></article>)}</section><footer className="case-footer"><Link href="/">Back to portfolio <ArrowUpRight size={18}/></Link></footer></main>
}

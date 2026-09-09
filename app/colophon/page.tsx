import Link from 'next/link'
import CaseHeader from '../components/CaseHeader'

export const metadata = { title: 'Colophon — Pau Ramos', description: 'How PAU / LIVE SYSTEMS is built.' }

const sections = [
  ['ARCHITECTURE', 'Next.js App Router with static routes and typed portfolio data.'],
  ['RENDERING', 'DOM, CSS, and SVG baseline. Experimental rendering remains optional.'],
  ['MOTION', 'CSS feedback first. Reduced motion disables transitions.'],
  ['ACCESSIBILITY', 'Skip link, semantic navigation, native controls, keyboard access, and text equivalents.'],
  ['RESPONSIVE SYSTEM', 'Fluid typography and a mobile composition at 760 px.'],
  ['TECH STACK', 'Next.js, React, TypeScript, CSS, and lucide-react.'],
  ['INTERESTING DECISIONS', 'Developer Mode exposes measured viewport, DPR, pointer, and motion state.'],
]

export default function ColophonPage() {
  return <main className="foundation-detail"><CaseHeader chapter="COLOPHON" /><section className="foundation-detail-hero"><p className="kicker">PAU / LIVE SYSTEMS</p><h1>Built to inspect.</h1><p>The portfolio is a product artifact. Every interactive layer has a readable baseline.</p></section><section className="foundation-map">{sections.map(([title, detail]) => <article key={title}><span>{title}</span><h2>{title}</h2><p>{detail}</p></article>)}</section><footer className="case-footer"><a href="https://github.com/paura432/portfolio-pau" target="_blank" rel="noreferrer">View source</a><Link href="/">Back to home</Link></footer></main>
}

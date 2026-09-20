import Link from '../components/LocaleLink'
import CaseHeader from '../components/CaseHeader'

export const metadata = { title: 'Colophon — Pau Ramos', description: 'How PAU / LIVE SYSTEMS is built.' }

const sections = [
  ['WHY LIVE SYSTEMS', 'Product cases need an inspectable, readable system—not decorative WebGL.'],
  ['APP ROUTER + DOM', 'Next.js App Router supplies routes, metadata and a complete semantic HTML baseline.'],
  ['LAZY WEBGL', 'Three.js and React Three Fiber load as a pointer-inert enhancement. Lite mode renders no Canvas.'],
  ['STATE', 'Zustand synchronizes route, active system, render profile, Developer Mode, grid and X-Ray state.'],
  ['RENDER PROFILES', 'FULL, BALANCED and LITE use DPR, pointer and reduced-motion signals without fingerprinting.'],
  ['ACCESSIBILITY', 'Skip link, semantic navigation, native controls and text equivalents remain usable without WebGL.'],
  ['TESTING + PRIVACY', 'Playwright covers browser smoke. Professional models are sanitized; no customer data or credentials appear.'],
  ['STACK', 'Next.js, React, TypeScript, CSS, Three.js, React Three Fiber, Drei, Zustand, GSAP and Playwright.'],
]

export default function ColophonPage() {
  return <main className="foundation-detail"><CaseHeader chapter="COLOPHON" /><section className="foundation-detail-hero"><p className="kicker">PAU / LIVE SYSTEMS</p><h1>Built to Inspect.</h1><p>The portfolio is a product artifact. Every interactive layer has a readable baseline.</p></section><section className="foundation-map">{sections.map(([title, detail]) => <article key={title}><span>{title}</span><h2>{title}</h2><p>{detail}</p></article>)}</section><footer className="case-footer"><a href="https://github.com/paura432/portfolio-pau" target="_blank" rel="noreferrer">View source</a><Link href="/">Back to home</Link></footer></main>
}

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../../components/CaseHeader'

export const metadata = { title: 'OVI — Pau Ramos', description: 'A private AI productivity system.' }

export default function OviPage() {
  return <main className="case-page case-ovi"><CaseHeader chapter="01 / CURRENT SYSTEM" /><section className="ovi-hero"><p className="kicker">PRIVATE CURRENT SYSTEM / PERFORMANZE</p><h1>OVI</h1><p className="ovi-deck">AI-assisted productivity system. Publicly shown at the level of product thinking, not client implementation.</p><div className="ovi-orbit" aria-label="Conceptual OVI system map"><strong>OVI</strong><span>ORCHESTRATION</span><span>KNOWLEDGE</span><span>CONTEXT</span><span>ARTIFACTS</span><span>PRODUCT UX</span></div></section><section className="case-split"><p className="case-label">PUBLIC SCOPE</p><div><h2>Calm, connected work.</h2><p>OVI is presented as a private current product system. The public chapter demonstrates how product work can connect context, workflow and useful output without exposing implementation detail, client data or credentials.</p></div></section><section className="ovi-principles"><article><span>01</span><h3>CONTEXT</h3><p>Design the system around the work people are doing, not an isolated prompt.</p></article><article><span>02</span><h3>ORCHESTRATION</h3><p>Make the handoff between intent, knowledge and output legible.</p></article><article><span>03</span><h3>ARTIFACTS</h3><p>Value comes from a useful result inside a product workflow.</p></article></section><footer className="case-footer"><Link href="/work/duplex">Next: DUPLEX <ArrowUpRight size={18}/></Link><Link href="/">All systems <ArrowUpRight size={18}/></Link></footer></main>
}

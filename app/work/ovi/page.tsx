import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../../components/CaseHeader'
import { OviModel } from '../../components/CasePlaygrounds'

export const metadata = { title: 'OVI — Pau Ramos', description: 'A private AI productivity system.' }

export default function OviPage() {
  return <main className="case-page case-ovi"><CaseHeader chapter="01 / CURRENT SYSTEM" /><section className="ovi-hero"><p className="kicker">PRIVATE CURRENT SYSTEM / PERFORMANZE</p><h1>OVI</h1><p className="ovi-deck">AI-assisted productivity system. Publicly shown at product level, not client implementation.</p><div className="ovi-orbit" aria-label="Conceptual OVI system map"><strong>OVI</strong><span>ORCHESTRATION</span><span>KNOWLEDGE</span><span>CONTEXT</span><span>ARTIFACTS</span><span>PRODUCT UX</span></div></section><section className="case-split"><p className="case-label">PUBLIC SCOPE</p><div><h2>Calm, connected work.</h2><p>OVI brings context, workflow and useful outputs into one product experience. Local product evidence confirms Microsoft 365 integration surfaces for Outlook, Teams, Calendar and OneDrive. No client data, credentials or implementation detail is public.</p></div></section><OviModel /><section className="ovi-principles"><article><span>01</span><h3>CONTEXT</h3><p>Design system around work people are doing, not isolated prompt.</p></article><article><span>02</span><h3>ORCHESTRATION</h3><p>Make handoff between intent, knowledge and output legible.</p></article><article><span>03</span><h3>ARTIFACTS</h3><p>Value comes from useful result inside product workflow.</p></article></section><footer className="case-footer"><Link href="/work/duplex">Next: DUPLEX <ArrowUpRight size={18}/></Link><Link href="/">All systems <ArrowUpRight size={18}/></Link></footer></main>
}

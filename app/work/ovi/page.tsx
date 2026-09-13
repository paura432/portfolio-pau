import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../../components/CaseHeader'
import CaseDeepDive from '../../components/CaseDeepDive'
import { OviModel } from '../../components/CasePlaygrounds'

export const metadata = { title: 'OVI — Pau Ramos', description: 'A private AI productivity system.' }

export default function OviPage() {
  return <main className="case-page case-ovi"><CaseHeader chapter="01 / CURRENT SYSTEM" /><section className="ovi-hero"><p className="kicker">PRIVATE CURRENT SYSTEM / PERFORMANZE</p><h1>OVI</h1><p className="ovi-deck">AI-assisted productivity system. Publicly shown at product level, not client implementation.</p><div className="ovi-orbit" aria-label="Conceptual OVI system map"><strong>OVI</strong><span>ORCHESTRATION</span><span>KNOWLEDGE</span><span>CONTEXT</span><span>ARTIFACTS</span><span>PRODUCT UX</span></div></section><CaseDeepDive project="ovi" /><section className="case-split"><p className="case-label">MICROSOFT GRAPH</p><div><h2>Context becomes product work.</h2><p>OVI connects Microsoft Graph surfaces — Outlook, Teams, Calendar, OneDrive and SharePoint — to AI-assisted workflows. This is a conceptual public architecture, not private production topology.</p></div></section><OviModel /><footer className="case-footer"><Link href="/work/duplex">Next: DUPLEX <ArrowUpRight size={18}/></Link><Link href="/">All systems <ArrowUpRight size={18}/></Link></footer></main>
}

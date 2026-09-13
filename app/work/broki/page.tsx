import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../../components/CaseHeader'
import { BrokiModel } from '../../components/CasePlaygrounds'

export const metadata = { title: 'Broki — Pau Ramos', description: 'Airport operations platform for ground operations.' }

export default function BrokiPage() {
  const stages = ['FLEET', 'GSE', 'TOOLS', 'PERSONNEL', 'OPERATIONAL TRACEABILITY']
  return <main className="case-page case-broki"><CaseHeader chapter="02 / INDEPENDENT PRODUCT" /><section className="broki-hero"><p className="kicker">INDEPENDENT PRODUCT / PUBLIC CASE</p><h1>BROKI</h1><p>Airport operations platform for ground operations, connecting fleet, Ground Support Equipment, tools, personnel and operational traceability.</p><div className="broki-mark" aria-hidden="true"><i /><i /><i /></div></section><section className="case-split"><p className="case-label">AIRPORT OPERATIONS</p><div><h2>Make operational work legible.</h2><p>BROKI is an operational platform, not a migration story. It brings field resources and operational state into one system. Private records, customer identity and production automation remain out of scope.</p></div></section><BrokiModel /><section className="broki-stages"><p className="case-label">PRODUCT SYSTEM</p><ol>{stages.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span>{stage}</li>)}</ol></section><section className="case-proof"><div><p className="case-label">PLATFORM</p><ul><li>Next.js and TypeScript application</li><li>Supabase and PostgreSQL data platform</li><li>Edge Functions, RLS and Realtime</li><li>PWA and operational interfaces</li></ul></div><div><p className="case-label">ENGINEERING CHALLENGE</p><p>Existing operational data and workflows were incorporated into the current platform without losing operational meaning. Audits, mappings and validation are secondary to the product story.</p></div></section><footer className="case-footer"><Link href="/work/trustos">Professional systems <ArrowUpRight size={18}/></Link><Link href="/">All work <ArrowUpRight size={18}/></Link></footer></main>
}

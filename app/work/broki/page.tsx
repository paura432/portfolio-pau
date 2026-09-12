import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../../components/CaseHeader'

export const metadata = { title: 'Broki — Pau Ramos', description: 'An independent operational product migration.' }

export default function BrokiPage() {
  const stages = ['LEGACY WORKFLOW', 'MIGRATION AUDIT', 'CURRENT WEB PLATFORM', 'OPERATIONAL FEEDBACK']
  return <main className="case-page case-broki"><CaseHeader chapter="02 / INDEPENDENT PRODUCT" /><section className="broki-hero"><p className="kicker">INDEPENDENT PRODUCT / PUBLIC CASE</p><h1>BROKI</h1><p>Operational product work rebuilt from a legacy workflow into a current web platform.</p><div className="broki-mark" aria-hidden="true"><i /><i /><i /></div></section><section className="case-split"><p className="case-label">MIGRATION, NOT RESKIN</p><div><h2>Keep useful data. Improve work.</h2><p>Broki is presented as independent product engineering. Public scope covers migration thinking, operational UX and platform direction. Private records, automations and production data remain out of scope.</p></div></section><section className="broki-stages"><p className="case-label">SYSTEM PATH</p><ol>{stages.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span>{stage}</li>)}</ol></section><section className="case-proof"><div><p className="case-label">VERIFIED FRAME</p><ul><li>Next.js application</li><li>Supabase data platform</li><li>PostgreSQL migrations and audits</li><li>PWA and operational interfaces</li></ul></div><div><p className="case-label">PUBLIC LIMIT</p><p>Conceptual public case study. No customer records, automation logic or private operations data.</p></div></section><footer className="case-footer"><Link href="/work/trustos">Professional systems <ArrowUpRight size={18}/></Link><Link href="/">All work <ArrowUpRight size={18}/></Link></footer></main>
}

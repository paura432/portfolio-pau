'use client'

import Link from 'next/link'
import { useState } from 'react'

const nodes = [
  { id: 'ovi', label: 'OVI', x: 76, y: 20, href: '/work/ovi' },
  { id: 'duplex', label: 'DUPLEX', x: 68, y: 55, href: '/work/duplex' },
  { id: 'trustos', label: 'TRUSTOS', x: 38, y: 50, href: '/work/trustos' },
  { id: '42', label: '42', x: 22, y: 76, href: '/foundations' },
  { id: 'sofia', label: 'SOFÍA', x: 81, y: 80, href: '/design' },
]

export default function SystemTopology() {
  const [active, setActive] = useState('ovi')
  return <section className="topology" aria-labelledby="topology-title">
    <div className="topology-copy"><p className="kicker">SYSTEM TOPOLOGY / 00</p><h2 id="topology-title">From systems to current product work.</h2><p>A readable map of the work behind this portfolio. Select a node to enter its chapter.</p></div>
    <div className="topology-map" role="list" aria-label="Portfolio systems map">
      <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false"><path d="M22 76 L38 50 L68 55 L76 20 M38 50 L81 80 M68 55 L81 80" /></svg>
      {nodes.map((node) => <Link key={node.id} href={node.href} role="listitem" className={active === node.id ? 'topology-node is-active' : 'topology-node'} style={{ left: node.x + '%', top: node.y + '%' }} onMouseEnter={() => setActive(node.id)} onFocus={() => setActive(node.id)}><span>{node.label}</span></Link>)}
    </div>
  </section>
}

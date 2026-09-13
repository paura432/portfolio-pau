'use client'

import { integrations } from '../data/portfolio'
import { useLiveSystem, type LiveProject } from './live-system/liveSystemStore'

const projectNames = { ovi: 'OVI', duplex: 'DUPLEX', broki: 'BROKI', trustos: 'TRUSTOS', portfolio: 'PORTFOLIO' } as const

export default function IntegrationEvidence() {
  const setActiveProject = useLiveSystem((state) => state.setActiveProject)
  const activate = (projects: readonly (keyof typeof projectNames)[]) => setActiveProject((projects.find((project) => project !== 'portfolio') ?? 'home') as LiveProject)
  return <section className="integration-evidence" aria-labelledby="integrations-title"><p className="kicker">07 / APIs, INTEGRATIONS + QUALITY</p><h2 id="integrations-title">Technology is evidence of work.</h2><p className="integration-intro">Focus or hover a record to activate its related system. Relationships remain visible in text.</p><div className="integration-list">{integrations.map((integration) => <article key={integration.id} tabIndex={0} onMouseEnter={() => activate(integration.projects)} onFocus={() => activate(integration.projects)} onMouseLeave={() => setActiveProject('home')}><p>{integration.category}</p><h3>{integration.name}</h3><dl><div><dt>USED IN</dt><dd>{integration.projects.map((project) => projectNames[project]).join(' · ')}</dd></div><div><dt>SURFACES</dt><dd>{integration.capabilities.join(' · ')}</dd></div><div><dt>WHAT I DID</dt><dd>{integration.work}</dd></div></dl><small>{integration.publicDescription}</small></article>)}</div></section>
}

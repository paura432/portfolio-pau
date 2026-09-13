'use client'

import { useState } from 'react'
import { useLiveSystem } from './live-system/liveSystemStore'

export function OviModel() {
  const examples = ['Show my unread emails.', 'What meetings do I have tomorrow?', 'Find the latest document about Project Atlas.', 'Summarize my latest messages and prepare tomorrow’s meeting.']
  const [intent, setIntent] = useState(examples[3])
  const setActiveProject = useLiveSystem((state) => state.setActiveProject)
  const lower = intent.toLowerCase()
  const hasEmail = lower.includes('email'), hasMessage = lower.includes('message'), hasCalendar = lower.includes('calendar'), hasMeeting = lower.includes('meeting'), hasDocument = lower.includes('document'), hasFile = lower.includes('file'), hasSummary = lower.includes('summar'), hasPreparation = lower.includes('prepare')
  const complex = ((hasEmail || hasMessage) && (hasCalendar || hasMeeting)) || (hasDocument && (hasCalendar || hasMeeting)) || hasSummary || hasPreparation
  const steps = complex ? ['INTENT', 'TASK PLAN', 'OUTLOOK / MESSAGES', 'FILES / KNOWLEDGE', 'CALENDAR', 'ARTIFACT'] : hasDocument || hasFile ? ['INTENT', 'ONEDRIVE', 'MICROSOFT GRAPH', 'KNOWLEDGE', 'RESULT'] : hasEmail || hasMessage ? ['INTENT', 'OUTLOOK', 'MICROSOFT GRAPH', 'CONTEXT', 'RESULT'] : hasCalendar || hasMeeting ? ['INTENT', 'CALENDAR', 'MICROSOFT GRAPH', 'CONTEXT', 'ACTION'] : ['INTENT', 'CONTEXT', 'RESULT']
  return <section className="case-playground ovi-model" aria-labelledby="ovi-model-title" onFocus={() => setActiveProject('ovi')}><p className="case-label">CONCEPTUAL PUBLIC DEMO</p><h2 id="ovi-model-title">Intent becomes a useful artifact.</h2><div className="step-tabs" aria-label="Safe example intents">{examples.map((example) => <button key={example} className={intent === example ? 'active' : ''} onClick={() => setIntent(example)}>{example}</button>)}</div><label>USER INTENT<textarea value={intent} onChange={(event) => setIntent(event.target.value)} /></label><ol>{steps.map((step) => <li key={step}>{step}</li>)}</ol><p>Deterministic educational reconstruction. Not production architecture or a live Microsoft connection.</p></section>
}

const sessions = { 'CAN-DX': { symptom: 'Door does not close', diagnosis: 'Possible door-chain interruption', sources: [{ id: '1', title: 'Technical manual', text: 'Check door-chain continuity before replacing components.' }, { id: '2', title: 'Historical fault', text: 'Similar symptoms followed a loose interlock connection.' }, { id: '3', title: 'Checklist', text: 'Isolate equipment and record the observed state.' }] }, 'OTIS 2000': { symptom: 'Car does not level', diagnosis: 'Check leveling procedure before adjustment.', sources: [{ id: '1', title: 'Technical manual', text: 'Confirm leveling sequence and safe isolation.' }, { id: '2', title: 'Historical fault', text: 'Previous case involved a loose reference connection.' }, { id: '3', title: 'Checklist', text: 'Record floor position before escalation.' }] }, ROTMICROM: { symptom: 'Controller reports unavailable', diagnosis: 'Validate communication path before replacement.', sources: [{ id: '1', title: 'Technical manual', text: 'Check controller communication sequence.' }, { id: '2', title: 'Historical fault', text: 'Similar case recovered after connection inspection.' }, { id: '3', title: 'Checklist', text: 'Capture status indicators and procedure step.' }] } } as const
export function DuplexModel() {
  const [equipment, setEquipment] = useState<keyof typeof sessions>('CAN-DX')
  const [sourceId, setSourceId] = useState('1')
  const [resolution, setResolution] = useState<'RESOLVED' | 'ESCALATE'>('RESOLVED')
  const session = sessions[equipment], source = session.sources.find((item) => item.id === sourceId) ?? session.sources[0]
  return <section className="case-playground duplex-model" aria-labelledby="duplex-model-title"><p className="case-label">SANITISED PUBLIC RECONSTRUCTION</p><h2 id="duplex-model-title">Evidence before diagnosis.</h2><div className="step-tabs" aria-label="Equipment">{Object.keys(sessions).map((item) => <button key={item} className={equipment === item ? 'active' : ''} onClick={() => { setEquipment(item as keyof typeof sessions); setSourceId('1') }}>{item}</button>)}</div><div className="diagnosis"><p>EQUIPMENT / {equipment}</p><p>SYMPTOM</p><strong>{session.symptom}</strong><p>ASSISTED DIAGNOSIS</p><strong>{session.diagnosis} <button onClick={() => setSourceId('1')}>[1]</button> <button onClick={() => setSourceId('2')}>[2]</button></strong></div><div className="source-list" role="list">{session.sources.map((item) => <button key={item.id} role="listitem" className={source.id === item.id ? 'active' : ''} onClick={() => setSourceId(item.id)}><span>[{item.id}]</span>{item.title}</button>)}</div><aside aria-live="polite"><p>SOURCE [{source.id}] / TRACE</p><strong>{source.title}</strong><span>{source.text}</span></aside><div className="step-tabs" aria-label="Resolution">{(['RESOLVED', 'ESCALATE'] as const).map((item) => <button key={item} className={resolution === item ? 'active' : ''} onClick={() => setResolution(item)}>{item}</button>)}</div><p>{resolution === 'RESOLVED' ? 'Resolution remains a public-safe conceptual state.' : `Escalation includes equipment context, diagnostic step and source trace.`}</p></section>
}

export function TrustModel() {
  const [step, setStep] = useState('ISSUE')
  const nodes = step === 'ISSUE' ? ['ISSUER', 'VCS', 'PROVIDER', 'WALLET'] : step === 'PRESENT' ? ['WALLET', 'HOLDER', 'VERIFIER'] : ['VERIFIER', 'PROVIDER', 'VCS', 'RESULT']
  return <section className="case-playground trust-model" aria-labelledby="trust-model-title"><p className="case-label">CREDENTIAL LIFECYCLE</p><h2 id="trust-model-title">Select a lifecycle state.</h2><div className="step-tabs">{['ISSUE', 'PRESENT', 'VERIFY'].map((item) => <button key={item} className={step === item ? 'active' : ''} onClick={() => setStep(item)}>{item}</button>)}</div><ol>{nodes.map((node) => <li key={node}>{node}</li>)}</ol><p>Public infrastructure model. No credential or tenant data is shown.</p></section>
}

export function BrokiModel() {
  const stages = [['FLEET', 'Vehicles and operational state'], ['GSE', 'Ground Support Equipment and availability'], ['TOOLS', 'Inventory, assignments and service context'], ['PERSONNEL', 'Roster and operational responsibility']]
  const [stage, setStage] = useState(0)
  const setActiveProject = useLiveSystem((state) => state.setActiveProject)
  return <section className="case-playground" aria-labelledby="broki-model-title" onFocus={() => setActiveProject('broki')}><p className="case-label">CONCEPTUAL AIRPORT OPERATIONS MODEL</p><h2 id="broki-model-title">One operational system, traceable work.</h2><div className="step-tabs" aria-label="Operational domains">{stages.map(([name], index) => <button type="button" key={name} className={stage === index ? 'active' : ''} onClick={() => setStage(index)}>{name}</button>)}</div><div className="diagnosis"><p>OPERATIONAL DOMAIN {String(stage + 1).padStart(2, '0')}</p><strong>{stages[stage][0]}</strong><p>{stages[stage][1]} · OPERATIONAL TRACEABILITY</p></div><p>Public-safe model. Existing data and workflows were incorporated as a secondary engineering challenge; no production records or automation logic shown.</p></section>
}

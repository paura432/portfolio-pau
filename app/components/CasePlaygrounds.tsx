'use client'

import { useState } from 'react'

export function OviModel() {
  const [intent, setIntent] = useState('Summarize my latest messages and prepare tomorrow’s meeting.')
  return <section className="case-playground ovi-model" aria-labelledby="ovi-model-title"><p className="case-label">CONCEPTUAL PUBLIC MODEL</p><h2 id="ovi-model-title">Intent becomes a useful artifact.</h2><label>USER INTENT<textarea value={intent} onChange={(event) => setIntent(event.target.value)} /></label><ol>{['INTENT', 'TASK PLAN', 'EMAIL CONTEXT', 'KNOWLEDGE', 'CALENDAR', 'ARTIFACT'].map((step) => <li key={step}>{step}</li>)}</ol><p>This is a sanitised explanation, not a production architecture.</p></section>
}

const sources = [{ id: '1', title: 'Technical manual', text: 'Check door-chain continuity before replacing components.' }, { id: '2', title: 'Historical fault', text: 'Similar symptoms followed a loose interlock connection.' }, { id: '3', title: 'Checklist', text: 'Isolate equipment and record the observed state.' }]
export function DuplexModel() {
  const [source, setSource] = useState(sources[0])
  return <section className="case-playground duplex-model" aria-labelledby="duplex-model-title"><p className="case-label">SANITISED DEMONSTRATION CONTENT</p><h2 id="duplex-model-title">Evidence before diagnosis.</h2><div className="diagnosis"><p>SYMPTOM</p><strong>Door does not close</strong><p>ASSISTED DIAGNOSIS</p><strong>Possible door-chain interruption <button onClick={() => setSource(sources[0])}>[1]</button> <button onClick={() => setSource(sources[1])}>[2]</button></strong></div><div className="source-list" role="list">{sources.map((item) => <button key={item.id} role="listitem" className={source.id === item.id ? 'active' : ''} onClick={() => setSource(item)}><span>[{item.id}]</span>{item.title}</button>)}</div><aside aria-live="polite"><p>SOURCE [{source.id}]</p><strong>{source.title}</strong><span>{source.text}</span></aside></section>
}

export function TrustModel() {
  const [step, setStep] = useState('ISSUE')
  const nodes = step === 'ISSUE' ? ['ISSUER', 'VCS', 'PROVIDER', 'WALLET'] : step === 'PRESENT' ? ['WALLET', 'HOLDER', 'VERIFIER'] : ['VERIFIER', 'PROVIDER', 'VCS', 'RESULT']
  return <section className="case-playground trust-model" aria-labelledby="trust-model-title"><p className="case-label">CREDENTIAL LIFECYCLE</p><h2 id="trust-model-title">Select a lifecycle state.</h2><div className="step-tabs">{['ISSUE', 'PRESENT', 'VERIFY'].map((item) => <button key={item} className={step === item ? 'active' : ''} onClick={() => setStep(item)}>{item}</button>)}</div><ol>{nodes.map((node) => <li key={node}>{node}</li>)}</ol><p>Public infrastructure model. No credential or tenant data is shown.</p></section>
}

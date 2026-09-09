'use client'

import { useMemo, useState } from 'react'

export default function MiniShellFlow() {
  const [command, setCommand] = useState('echo hello | grep h > out.txt')
  const [running, setRunning] = useState(false)
  const tokens = useMemo(() => command.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) ?? [], [command])
  const stages = ['TOKENIZE', 'PARSE', 'PIPELINE', 'FORK', 'PIPE', 'DUP2', 'EXECVE', 'WAITPID']
  return <section className="shell-demo" aria-labelledby="shell-demo-title"><p className="case-label">INTERACTIVE PIPELINE</p><h2 id="shell-demo-title">Input becomes process graph.</h2><label htmlFor="shell-command">COMMAND</label><input id="shell-command" value={command} onChange={(event) => { setCommand(event.target.value); setRunning(false) }} /><p className="shell-tokens">{tokens.map((token, index) => <span key={index}>{token}</span>)}</p><button onClick={() => setRunning((value) => !value)}>{running ? 'Reset pipeline' : 'Run pipeline'}</button><ol>{stages.map((stage, index) => <li key={stage} className={running ? 'is-running' : ''}><span>{String(index + 1).padStart(2, '0')}</span>{stage}</li>)}</ol><p className="demo-note">Educational public model. Commands are never executed in the browser.</p></section>
}

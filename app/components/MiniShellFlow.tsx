'use client'

import { useState } from 'react'

const stages = ['LEXER', 'PARSER', 'EXECUTOR', 'FORK / EXECVE']

export default function MiniShellFlow() {
  const [running, setRunning] = useState(false)
  return <section className="shell-demo" aria-labelledby="shell-demo-title"><p className="case-label">INTERACTIVE PIPELINE</p><h2 id="shell-demo-title">Input becomes a process graph.</h2><pre>pau@42:~$ ./minishell<br/>minishell$ echo &quot;systems before products&quot;</pre><button onClick={() => setRunning(!running)}>{running ? 'Reset pipeline' : 'Run pipeline'}</button><ol>{stages.map((stage, index) => <li key={stage} className={running ? 'is-running' : ''}><span>{String(index + 1).padStart(2, '0')}</span>{stage}</li>)}</ol><p className="demo-note">The public project documents tokenization, command parsing, pipes, redirections, builtins and process execution.</p></section>
}

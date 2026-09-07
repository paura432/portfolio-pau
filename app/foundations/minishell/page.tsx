import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../../components/CaseHeader'
import MiniShellFlow from '../../components/MiniShellFlow'

export const metadata = { title: 'Minishell — Pau Ramos', description: 'A process and parsing explainer based on public Minishell work.' }

export default function MinishellPage() {
  return <main className="foundation-detail"><CaseHeader chapter="FOUNDATIONS / UNIX" /><section className="foundation-detail-hero"><p className="kicker">42MINISHELL / C / UNIX</p><h1>MINI<br/>SHELL</h1><p>A public UNIX shell implementation built around parsing, pipes, redirections, processes and builtins.</p></section><MiniShellFlow /><section className="case-split"><p className="case-label">ENGINEERING PROBLEM</p><div><h2>Turn command text into process execution.</h2><p>The public project documents a lexer, parser, executor, environment management, pipes, file descriptor duplication and signal handling.</p><a className="link-button" href="https://github.com/paura432/42MINISHELL" target="_blank" rel="noreferrer">View public repository <ArrowUpRight size={18}/></a></div></section></main>
}

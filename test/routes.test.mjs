import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')

test('professional routes and technical routes exist', () => {
  for (const path of ['app/work/ovi/page.tsx', 'app/work/duplex/page.tsx', 'app/work/trustos/page.tsx', 'app/foundations/cub3d/page.tsx', 'app/foundations/minishell/page.tsx', 'app/colophon/page.tsx']) assert.match(read(path), /export default function/)
})

test('home exposes recruiter work and contact paths', () => {
  const home = read('app/components/PortfolioShell.tsx')
  for (const text of ['SELECTED WORK', 'EXPERIENCE', 'pau-ramos-cv-es.pdf', 'VIEW SOURCE']) assert.match(home, new RegExp(text))
})

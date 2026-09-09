'use client'

import { useEffect, useState } from 'react'

const links = [
  ['Go to OVI', '/work/ovi'], ['Go to DUPLEX', '/work/duplex'], ['Go to TrustOS', '/work/trustos'], ['Open Engineering Archive', '/foundations'], ['Open Design Practice', '/design'], ['Open Colophon', '/colophon'],
] as const

export default function DevTools() {
  const [open, setOpen] = useState(false)
  const [dev, setDev] = useState(false)
  const [grid, setGrid] = useState(false)
  const [xray, setXray] = useState(false)
  const [viewport, setViewport] = useState([0, 0, 1])
  useEffect(() => {
    const update = () => setViewport([window.innerWidth, window.innerHeight, window.devicePixelRatio])
    const key = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen(true) }
      if (dev && event.key.toLowerCase() === 'g') setGrid((value) => !value)
      if (dev && event.key.toLowerCase() === 'x') setXray((value) => !value)
    }
    update(); window.addEventListener('resize', update); window.addEventListener('keydown', key)
    Object.assign(window, { pau: { help: () => 'pau.grid(), pau.xray(), pau.dev()', grid: () => setGrid(true), xray: () => setXray(true), dev: () => setDev(true) } })
    console.info('PAU / LIVE SYSTEMS\nTry: window.pau.help()')
    return () => { window.removeEventListener('resize', update); window.removeEventListener('keydown', key) }
  }, [dev])
  useEffect(() => { document.documentElement.dataset.grid = String(dev && grid); document.documentElement.dataset.xray = String(dev && xray) }, [dev, grid, xray])
  const action = (name: string) => {
    if (name === 'Toggle Developer Mode') setDev((value) => !value)
    if (name === 'Toggle Layout Grid') setGrid((value) => !value)
    if (name === 'Toggle X-Ray View') setXray((value) => !value)
    if (name === 'View Source') window.open('https://github.com/paura432/portfolio-pau', '_blank', 'noopener,noreferrer')
    setOpen(false)
  }
  return <><button className="dev-launcher" onClick={() => setOpen(true)}>CMD K</button>{dev && <aside className="dev-readout" aria-label="Developer Mode"><strong>DEV MODE</strong><span>ROUTE {location.pathname}</span><span>VIEWPORT {viewport[0]} × {viewport[1]}</span><span>DPR {viewport[2]}</span><span>MOTION {matchMedia('(prefers-reduced-motion: reduce)').matches ? 'REDUCED' : 'FULL'}</span><span>POINTER {matchMedia('(pointer: coarse)').matches ? 'COARSE' : 'FINE'}</span><span>RENDER PROFILE LITE</span></aside>}{open && <div className="command-backdrop" role="presentation" onMouseDown={() => setOpen(false)}><section className="command-palette" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={(event) => event.stopPropagation()}><p>COMMAND PALETTE</p>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}{['Toggle Developer Mode', 'Toggle Layout Grid', 'Toggle X-Ray View', 'View Source'].map((name) => <button key={name} onClick={() => action(name)}>{name}</button>)}</section></div>}</>
}

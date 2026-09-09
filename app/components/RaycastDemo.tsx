'use client'

import { useState } from 'react'

export default function RaycastDemo() {
  const [angle, setAngle] = useState(35)
  const [fov, setFov] = useState(60)
  const [rays, setRays] = useState(7)
  const rayEnd = 40 + angle / 3
  const columns = Array.from({ length: rays }, (_, index) => index)
  return <section className="raycast-demo" aria-labelledby="raycast-title"><div><p className="case-label">CONCEPTUAL RAYCASTING</p><h2 id="raycast-title">Map, rays, columns.</h2><label htmlFor="view-angle">ANGLE <output>{angle}°</output></label><input id="view-angle" type="range" min="15" max="70" value={angle} onChange={(event) => setAngle(Number(event.target.value))} /><label htmlFor="fov">FOV <output>{fov}°</output></label><input id="fov" type="range" min="30" max="100" value={fov} onChange={(event) => setFov(Number(event.target.value))} /><label htmlFor="rays">RAY COUNT <output>{rays}</output></label><input id="rays" type="range" min="3" max="15" value={rays} onChange={(event) => setRays(Number(event.target.value))} /></div><svg viewBox="0 0 600 240" role="img" aria-label="Conceptual map, rays and projected wall columns"><rect x="18" y="25" width="170" height="170" className="ray-map"/><path d="M38 48H170V170H65V105H38Z" className="ray-wall"/><circle cx="100" cy="135" r="7" className="ray-player"/>{columns.map((index) => <line key={index} x1="100" y1="135" x2={190 + index * (150 / rays)} y2={rayEnd + index * (120 / rays)} className="ray-line"/>)}<rect x="390" y="35" width="180" height="150" className="ray-output"/>{columns.map((index) => <rect key={index} x={400 + index * (160 / rays)} y={75 - index * 2} width={150 / rays} height={90 + index * 4} className="ray-column"/>)}</svg><p className="demo-note">DDA steps through the map grid. Ray distance determines projected column height; FOV spreads rays across the view.</p></section>
}

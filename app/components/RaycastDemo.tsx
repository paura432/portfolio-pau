'use client'

import { useState } from 'react'

export default function RaycastDemo() {
  const [angle, setAngle] = useState(35)
  const rayEnd = 40 + angle / 3
  return <section className="raycast-demo" aria-labelledby="raycast-title"><div><p className="case-label">CONCEPTUAL RAYCASTING</p><h2 id="raycast-title">Map, rays, columns.</h2><label htmlFor="view-angle">View angle <output>{angle}°</output></label><input id="view-angle" type="range" min="15" max="70" value={angle} onChange={(event) => setAngle(Number(event.target.value))} /></div><svg viewBox="0 0 600 240" role="img" aria-label="Conceptual map, rays and projected wall columns"><rect x="18" y="25" width="170" height="170" className="ray-map"/><path d="M38 48H170V170H65V105H38Z" className="ray-wall"/><circle cx="100" cy="135" r="7" className="ray-player"/>{[0, 1, 2, 3, 4, 5, 6].map((index) => <line key={index} x1="100" y1="135" x2={190 + index * 8} y2={rayEnd + index * 17} className="ray-line"/>)}<rect x="390" y="35" width="180" height="150" className="ray-output"/>{[0, 1, 2, 3, 4, 5, 6].map((index) => <rect key={index} x={405 + index * 22} y={75 - index * 4} width="18" height={90 + index * 8} className="ray-column"/>)}</svg><p className="demo-note">Conceptual explanation of the public cub3D README: rays sample a map and become vertical projected wall columns.</p></section>
}

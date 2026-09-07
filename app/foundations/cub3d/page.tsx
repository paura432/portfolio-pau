import { ArrowUpRight } from 'lucide-react'
import CaseHeader from '../../components/CaseHeader'
import RaycastDemo from '../../components/RaycastDemo'

export const metadata = { title: 'cub3D — Pau Ramos', description: 'A conceptual raycasting explainer based on public cub3D work.' }

export default function Cub3dPage() {
  return <main className="foundation-detail"><CaseHeader chapter="FOUNDATIONS / GRAPHICS" /><section className="foundation-detail-hero"><p className="kicker">42CUB3D / C / MINILIBX</p><h1>cub3D</h1><p>A public C raycasting engine: map parsing, DDA, wall projection, textures, movement and collision.</p></section><RaycastDemo /><section className="case-split"><p className="case-label">ENGINEERING PROBLEM</p><div><h2>Render a 3D world without a 3D engine.</h2><p>The project uses a two-dimensional map and one ray per screen column to construct a perspective view. This route is an explainer, not a browser recreation of cub3D.</p><a className="link-button" href="https://github.com/paura432/42CUB3D" target="_blank" rel="noreferrer">View public repository <ArrowUpRight size={18}/></a></div></section></main>
}

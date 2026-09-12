'use client'

import { Line } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { Group } from 'three'
import { useLiveSystem } from './liveSystemStore'

const layouts = { home: [[-2, 1, 0], [0, 0, 0], [2, .8, 0], [1.2, -1.2, 0]], ovi: [[-2, 0, 0], [-.5, .8, 0], [.7, 0, 0], [2, -.8, 0]], duplex: [[-2, .8, 0], [-.7, -.8, 0], [.7, .8, 0], [2, -.8, 0]], broki: [[-2, -1, 0], [-.5, 1, 0], [.7, -.3, 0], [2, .8, 0]], trustos: [[-2, 0, 0], [-.7, 0, 0], [.7, 0, 0], [2, 0, 0]], archive: [[-2, 1, 0], [-1, -.8, 0], [0, .6, 0], [1, -1, 0], [2, .8, 0]] } as const

function Topology() {
  const project = useLiveSystem((state) => state.activeProject)
  const group = useRef<Group>(null)
  const nodes = layouts[project]
  const lines = useMemo(() => nodes.slice(1).map((node, index) => [nodes[index], node]), [nodes])
  useFrame((_, delta) => { if (group.current) group.current.rotation.z += delta * .018 })
  return <group ref={group}>{lines.map((points, index) => <Line key={index} points={points} color="#204bc5" transparent opacity={.42} lineWidth={1} />)}{nodes.map((position, index) => <mesh key={index} position={position}><sphereGeometry args={[index === 0 ? .13 : .08, 16, 16]} /><meshBasicMaterial color={index === 0 ? '#204bc5' : '#11110f'} transparent opacity={.68} /></mesh>)}</group>
}

export default function LiveSystemCanvas() {
  return <Canvas className="live-system-canvas" dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 48 }} gl={{ alpha: true, antialias: true }}><Topology /></Canvas>
}

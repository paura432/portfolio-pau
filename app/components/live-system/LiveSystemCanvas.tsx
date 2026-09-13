'use client'

import { Line } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useMemo, useRef } from 'react'
import type { Mesh } from 'three'
import { useLiveSystem } from './liveSystemStore'

type NodeId = 'intent' | 'context' | 'knowledge' | 'artifact' | 'trace'
type Point = [number, number, number]
const layouts: Record<string, Record<NodeId, Point>> = { home: { intent: [-2, 1, 0], context: [0, 0, 0], knowledge: [2, .8, 0], artifact: [1.2, -1.2, 0], trace: [-1.2, -1.2, 0] }, ovi: { intent: [-2, 0, 0], context: [-.5, .8, 0], knowledge: [.7, 0, 0], artifact: [2, -.8, 0], trace: [-.8, -1, 0] }, duplex: { intent: [-2, .8, 0], context: [-.7, -.8, 0], knowledge: [.7, .8, 0], artifact: [2, -.8, 0], trace: [0, 0, 0] }, broki: { intent: [-2, -1, 0], context: [-.5, 1, 0], knowledge: [.7, -.3, 0], artifact: [2, .8, 0], trace: [0, .1, 0] }, trustos: { intent: [-2, 0, 0], context: [-.7, 0, 0], knowledge: [.7, 0, 0], artifact: [2, 0, 0], trace: [0, .7, 0] }, archive: { intent: [-2, 1, 0], context: [-1, -.8, 0], knowledge: [0, .6, 0], artifact: [1, -1, 0], trace: [2, .8, 0] } }
const ids: NodeId[] = ['intent', 'context', 'knowledge', 'artifact', 'trace']

function Topology() {
  const project = useLiveSystem((state) => state.activeProject)
  const profile = useLiveSystem((state) => state.renderProfile)
  const refs = useRef<Partial<Record<NodeId, Mesh>>>({})
  const nodes = layouts[project]
  const lines = useMemo(() => ids.slice(1).map((id, index) => [nodes[ids[index]], nodes[id]]), [nodes])
  useEffect(() => { ids.forEach((id) => { const node = refs.current[id], target = nodes[id]; if (node) gsap.to(node.position, { x: target[0], y: target[1], z: target[2], duration: .55, ease: 'power2.out', overwrite: true }) }) }, [nodes])
  const visibleNodes = profile === 'BALANCED' ? ids.filter((_, index) => index % 2 === 0 || index === ids.length - 1) : ids
  return <group>{lines.map((points, index) => <Line key={index} points={points} color="#204bc5" transparent opacity={.42} lineWidth={1} />)}{visibleNodes.map((id, index) => <mesh key={id} ref={(node) => { if (node) refs.current[id] = node }} position={nodes[id]}><sphereGeometry args={[index === 0 ? .13 : .08, profile === 'FULL' ? 16 : 10, profile === 'FULL' ? 16 : 10]} /><meshBasicMaterial color={index === 0 ? '#204bc5' : '#11110f'} transparent opacity={.68} /></mesh>)}</group>
}

export default function LiveSystemCanvas() {
  const profile = useLiveSystem((state) => state.renderProfile)
  return <Canvas className="live-system-canvas" dpr={profile === 'FULL' ? [1, 1.75] : [1, 1.25]} camera={{ position: [0, 0, 5], fov: 48 }} gl={{ alpha: true, antialias: profile === 'FULL' }}><Topology /></Canvas>
}

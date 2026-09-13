'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import type { BufferGeometry, Mesh } from 'three'
import { Vector3 } from 'three'
import { useLiveSystem } from './liveSystemStore'

type NodeId = 'intent' | 'context' | 'knowledge' | 'artifact' | 'trace'
type Point = [number, number, number]
const layouts: Record<string, Record<NodeId, Point>> = { home: { intent: [-2, 1, 0], context: [0, 0, 0], knowledge: [2, .8, 0], artifact: [1.2, -1.2, 0], trace: [-1.2, -1.2, 0] }, ovi: { intent: [-2, 0, 0], context: [-.5, .8, 0], knowledge: [.7, 0, 0], artifact: [2, -.8, 0], trace: [-.8, -1, 0] }, duplex: { intent: [-2, .8, 0], context: [-.7, -.8, 0], knowledge: [.7, .8, 0], artifact: [2, -.8, 0], trace: [0, 0, 0] }, broki: { intent: [-2, -1, 0], context: [-.5, 1, 0], knowledge: [.7, -.3, 0], artifact: [2, .8, 0], trace: [0, .1, 0] }, trustos: { intent: [-2, 0, 0], context: [-.7, 0, 0], knowledge: [.7, 0, 0], artifact: [2, 0, 0], trace: [0, .7, 0] }, archive: { intent: [-2, 1, 0], context: [-1, -.8, 0], knowledge: [0, .6, 0], artifact: [1, -1, 0], trace: [2, .8, 0] } }
const ids: NodeId[] = ['intent', 'context', 'knowledge', 'artifact', 'trace']

function Topology() {
  const project = useLiveSystem((state) => state.activeProject)
  const profile = useLiveSystem((state) => state.renderProfile)
  const meshes = useRef<Partial<Record<NodeId, Mesh>>>({})
  const geometry = useRef<Array<BufferGeometry<any>>>([])
  const current = useRef(Object.fromEntries(ids.map((id) => [id, new Vector3(...layouts.home[id])])) as Record<NodeId, Vector3>)
  const target = useRef(Object.fromEntries(ids.map((id) => [id, new Vector3(...layouts.home[id])])) as Record<NodeId, Vector3>)
  useEffect(() => { target.current = Object.fromEntries(ids.map((id) => [id, new Vector3(...layouts[project][id])])) as Record<NodeId, Vector3> }, [project])
  useFrame((_, delta) => { const amount = 1 - Math.exp(-delta * 8); ids.forEach((id) => { current.current[id].lerp(target.current[id], amount); meshes.current[id]?.position.copy(current.current[id]) }); geometry.current.forEach((line, index) => { line.setFromPoints([current.current[ids[index]], current.current[ids[index + 1]]]) }) })
  const visible = profile === 'BALANCED' ? ids.filter((_, index) => index % 2 === 0 || index === ids.length - 1) : ids
  return <group>{ids.slice(1).map((id, index) => <line key={id}><bufferGeometry ref={(node) => { if (node) geometry.current[index] = node }} /><lineBasicMaterial color="#204bc5" transparent opacity={.42} /></line>)}{visible.map((id, index) => <mesh key={id} ref={(node) => { if (node) meshes.current[id] = node }} position={layouts.home[id]}><sphereGeometry args={[index === 0 ? .13 : .08, profile === 'FULL' ? 16 : 10, profile === 'FULL' ? 16 : 10]} /><meshBasicMaterial color={index === 0 ? '#204bc5' : '#11110f'} transparent opacity={.68} /></mesh>)}</group>
}

export default function LiveSystemCanvas() { const profile = useLiveSystem((state) => state.renderProfile); return <Canvas className="live-system-canvas" dpr={profile === 'FULL' ? [1, 1.75] : [1, 1.25]} camera={{ position: [0, 0, 5], fov: 48 }} gl={{ alpha: true, antialias: profile === 'FULL' }}><Topology /></Canvas> }

'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

function FloatingShape() {
  const meshRef = useRef(null)

  useFrame((_, delta) => {
    const mesh = meshRef.current
    if (!mesh) return
    mesh.rotation.y += delta * 0.12
    mesh.rotation.x += delta * 0.04
  })

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#0066ff"
          emissive="#003380"
          metalness={0.6}
          roughness={0.35}
        />
      </mesh>
      <mesh scale={1.45}>
        <icosahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#00a8ff"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
    </Float>
  )
}

export function Hero3DScene() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[-5%] top-1/2 hidden h-[min(420px,50vh)] w-[min(420px,40vw)] -translate-y-1/2 opacity-50 lg:block"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 4.5], fov: 42 }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[4, 4, 4]} intensity={0.9} color="#00a8ff" />
        <pointLight position={[-3, -2, 2]} intensity={0.4} color="#ffffff" />
        <FloatingShape />
      </Canvas>
    </div>
  )
}

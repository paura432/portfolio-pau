'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useLiveSystem } from './liveSystemStore'

const Canvas = dynamic(() => import('./LiveSystemCanvas'), { ssr: false })

export default function LiveSystem() {
  const profile = useLiveSystem((state) => state.renderProfile)
  const project = useLiveSystem((state) => state.activeProject)
  const setProfile = useLiveSystem((state) => state.setRenderProfile)
  useEffect(() => {
    const update = () => setProfile(matchMedia('(prefers-reduced-motion: reduce)').matches || matchMedia('(pointer: coarse)').matches ? 'LITE' : devicePixelRatio > 1.5 ? 'BALANCED' : 'FULL')
    update(); addEventListener('resize', update); return () => removeEventListener('resize', update)
  }, [setProfile])
  return <><p className="sr-only" aria-live="polite">Live system: {project}. Render profile: {profile}.</p>{profile !== 'LITE' && <div className="live-runtime" aria-hidden="true"><Canvas /></div>}</>
}

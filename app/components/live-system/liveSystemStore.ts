'use client'

import { create } from 'zustand'

export type LiveProject = 'home' | 'ovi' | 'duplex' | 'broki' | 'trustos' | 'archive'
export type RenderProfile = 'FULL' | 'BALANCED' | 'LITE'

export function getLiveProject(pathname: string): LiveProject {
  const path = pathname.replace(/^\/(en|es)(?=\/|$)/, '')
  if (path.startsWith('/work/ovi')) return 'ovi'
  if (path.startsWith('/work/duplex')) return 'duplex'
  if (path.startsWith('/work/broki')) return 'broki'
  if (path.startsWith('/work/trustos')) return 'trustos'
  return path.startsWith('/foundations') ? 'archive' : 'home'
}

type LiveSystemState = { activeProject: LiveProject; renderProfile: RenderProfile; developerMode: boolean; gridMode: boolean; xrayMode: boolean; setActiveProject: (project: LiveProject) => void; setRenderProfile: (profile: RenderProfile) => void; toggleDeveloperMode: () => void; toggleGridMode: () => void; toggleXrayMode: () => void }

export const useLiveSystem = create<LiveSystemState>((set) => ({ activeProject: 'home', renderProfile: 'LITE', developerMode: false, gridMode: false, xrayMode: false, setActiveProject: (activeProject) => set({ activeProject }), setRenderProfile: (renderProfile) => set({ renderProfile }), toggleDeveloperMode: () => set((state) => ({ developerMode: !state.developerMode })), toggleGridMode: () => set((state) => ({ gridMode: !state.gridMode })), toggleXrayMode: () => set((state) => ({ xrayMode: !state.xrayMode })) }))

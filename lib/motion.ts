'use client'

import { useSyncExternalStore } from 'react'
import { MOTION_STORAGE_KEY } from './motion-script'

/**
 * Motion preference: 'on' | 'reduced'.
 * Explicit choice persists in localStorage; otherwise follows prefers-reduced-motion.
 * Mirrored on <html data-motion="..."> (set pre-paint by MOTION_INIT_SCRIPT).
 */
export type MotionMode = 'on' | 'reduced'

const EVENT = 'ws-motion-change'

function read(): MotionMode {
  if (typeof document === 'undefined') return 'on'
  return document.documentElement.dataset.motion === 'reduced' ? 'reduced' : 'on'
}

export function setMotion(mode: MotionMode) {
  try {
    localStorage.setItem(MOTION_STORAGE_KEY, mode)
  } catch {}
  document.documentElement.dataset.motion = mode
  window.dispatchEvent(new Event(EVENT))
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb)
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  const onMq = () => {
    let stored: string | null = null
    try {
      stored = localStorage.getItem(MOTION_STORAGE_KEY)
    } catch {}
    if (stored) return
    document.documentElement.dataset.motion = mq.matches ? 'reduced' : 'on'
    cb()
  }
  mq.addEventListener('change', onMq)
  return () => {
    window.removeEventListener(EVENT, cb)
    mq.removeEventListener('change', onMq)
  }
}

export function useMotion(): MotionMode {
  return useSyncExternalStore(subscribe, read, () => 'on')
}

'use client'

import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'
import { useMotion } from '@/lib/motion'
import { sardiniaPath } from '@/lib/sardinia'

// three.js lives in its own chunk, client only
const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false })

const PATH = sardiniaPath(100, 10)

export default function HeroVisual({ label1, label2 }: { label1: string; label2: string }) {
  const motion = useMotion()
  const [load, setLoad] = useState(false)
  const [ready, setReady] = useState(false)
  const onReady = useCallback(() => setReady(true), [])

  useEffect(() => {
    if (motion !== 'on') {
      setLoad(false)
      setReady(false)
      return
    }
    // defer the WebGL chunk until the main thread is idle (keeps LCP/TBT low)
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setLoad(true), { timeout: 1500 })
      return () => window.cancelIdleCallback(id)
    }
    const id = setTimeout(() => setLoad(true), 600)
    return () => clearTimeout(id)
  }, [motion])

  return (
    <div className="relative h-full w-full">
      {/* static fallback: stacked island outline (reduced motion / no WebGL / while loading) */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full transition-opacity duration-700"
        style={{ opacity: ready ? 0 : 1 }}
        aria-hidden="true"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <path
            key={i}
            d={PATH}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={0.25}
            strokeOpacity={1 - i * 0.1}
            transform={`translate(${i * 1.1} ${i * -0.7})`}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      {load && (
        <div className="absolute inset-0 transition-opacity duration-700" style={{ opacity: ready ? 1 : 0 }}>
          <HeroScene onReady={onReady} />
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between text-[10px] uppercase tracking-[0.16em] md:text-[11px]">
        <span style={{ color: 'var(--muted)' }}>{label1}</span>
        <span style={{ color: 'var(--accent)' }}>{label2}</span>
      </div>
    </div>
  )
}

'use client'
import Arrow from '@/components/home/Arrow'

export default function ConsentReopen({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => window.__wsOpenConsent?.()} className="btn btn-ghost w-full sm:w-auto">
      {label}
      <Arrow />
    </button>
  )
}

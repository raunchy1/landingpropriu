'use client'
import { useEffect, useRef, useState } from 'react'
import { ecomCats, ecomSites, ecomCredit, type EcomCat, type Site } from '@/lib/ecomunicare'

type Loc = 'it' | 'en'
const base = '/portfolio/ecomunicare'

function LazyVideo({ id, name }: { id: string; name: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); v.play().catch(() => {}) } else v.pause()
    }, { rootMargin: '200px' })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return (
    <video
      ref={ref}
      className="work-img absolute inset-0 h-full w-full object-cover"
      poster={`${base}/${id}.webp`}
      muted loop playsInline autoPlay preload="none"
      aria-label={name}
    >
      {on && <source src={`${base}/${id}.webm`} type="video/webm" />}
      {on && <source src={`${base}/${id}.mp4`} type="video/mp4" />}
    </video>
  )
}

export default function EcomGrid({ loc }: { loc: Loc }) {
  const [cat, setCat] = useState<EcomCat | 'all'>('all')
  const list: Site[] = cat === 'all' ? ecomSites : ecomSites.filter((s) => s.cat === cat)
  const label = (c: EcomCat) => { const x = ecomCats.find((k) => k.id === c)!; return loc === 'en' ? x.en : x.it }
  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist">
        {ecomCats.map((c) => {
          const n = c.id === 'all' ? ecomSites.length : ecomSites.filter((s) => s.cat === c.id).length
          const active = cat === c.id
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setCat(c.id)}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-full border px-4 text-[13px] transition-colors"
              style={{ borderColor: active ? 'var(--accent)' : 'var(--dim-line)', color: active ? 'var(--accent-ink)' : 'var(--muted)', background: active ? 'var(--accent)' : 'transparent' }}
            >
              {loc === 'en' ? c.en : c.it}<span className="tabular-nums opacity-70">{n}</span>
            </button>
          )
        })}
      </div>
      <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: 'var(--line)' }}>
        {list.map((s) => (
          <article key={s.id} className="work-card flex flex-col" style={{ background: 'var(--bg)' }}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="relative block aspect-[16/10] overflow-hidden" style={{ background: 'var(--bg-2)' }}>
              <LazyVideo id={s.id} name={s.name} />
            </a>
            <div className="flex flex-1 flex-col p-6">
              <span className="mb-4 inline-flex self-start rounded-full border px-3 py-1 text-[12px]" style={{ borderColor: 'var(--dim-line)', color: 'var(--accent-fg)' }}>{label(s.cat)}</span>
              <h3 className="mb-2 text-[24px] font-normal leading-[1.1] tracking-[-0.03em]" style={{ color: 'var(--fg)' }}>{s.name}</h3>
              <p className="mb-5 text-[14px] leading-[1.6]" style={{ color: 'var(--muted)' }}>{loc === 'en' ? s.en : s.it}</p>
              <div className="rule mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
                <span className="text-[12px]" style={{ color: 'var(--dim)' }}>{ecomCredit[loc]}</span>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[40px] items-center text-[14px] transition-colors hover:text-[var(--accent-fg)]" style={{ color: 'var(--fg)' }}>
                  {s.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*$/, '')} ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

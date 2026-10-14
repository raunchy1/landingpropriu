'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import { useTranslations } from 'next-intl'

type Sector = { key: string; label: string; title: string; body: string; points: string[] }

export default function Sectors() {
  const t = useTranslations('home.sectors')
  const items = t.raw('items') as Sector[]
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const onKey = (e: KeyboardEvent) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const next = (active + dir + items.length) % items.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  const cur = items[active]

  return (
    <section id="settori" className="rule py-24 md:py-40">
      <div className="wrap">
        <p className="eyebrow mb-6 md:mb-8">{t('eyebrow')}</p>
        <h2 data-split className="display h-lg max-w-[16ch]">
          {t('title')}
        </h2>

        <div
          role="tablist"
          aria-label={t('eyebrow')}
          onKeyDown={onKey}
          className="mt-14 flex gap-7 overflow-x-auto border-b md:mt-20 md:gap-12 [scrollbar-width:none]"
          style={{ borderColor: 'var(--line)' }}
        >
          {items.map((s, i) => (
            <button
              key={s.key}
              ref={(el) => {
                tabs.current[i] = el
              }}
              role="tab"
              id={`tab-${s.key}`}
              aria-selected={i === active}
              aria-controls={`panel-${s.key}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className="tab-btn"
            >
              <span className="mr-2 text-[11px] tabular-nums" style={{ color: i === active ? 'var(--accent)' : 'var(--dim)' }}>
                0{i + 1}
              </span>
              {s.label}
            </button>
          ))}
        </div>

        <div
          key={cur.key}
          role="tabpanel"
          id={`panel-${cur.key}`}
          aria-labelledby={`tab-${cur.key}`}
          className="tab-panel grid gap-10 pt-12 md:grid-cols-12 md:gap-6 md:pt-16"
        >
          <h3 className="text-[30px] font-normal leading-[1.05] tracking-[-0.035em] md:col-span-6 md:text-[46px]">{cur.title}</h3>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-[17px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
              {cur.body}
            </p>
            <ul className="mt-8">
              {cur.points.map((p) => (
                <li key={p} className="flex items-center justify-between border-t py-4 text-[15px]" style={{ borderColor: 'var(--line)' }}>
                  {p}
                  <span aria-hidden="true" style={{ color: 'var(--accent)' }}>
                    +
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

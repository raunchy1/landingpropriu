'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const TOWNS = ['Olbia', 'Cagliari', 'San Teodoro', 'Arzachena', 'Golfo Aranci', 'Quartu', 'Villasimius', 'Pula', 'Nuoro', 'Sassari', 'Alghero', 'Oristano']

export default function Marquee() {
  const t = useTranslations('home.marquee')
  const [paused, setPaused] = useState(false)

  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {TOWNS.map((town) => (
        <li key={town} className="flex items-center whitespace-nowrap">
          <span className="display px-6 text-[34px] md:px-10 md:text-[56px]" style={{ letterSpacing: '-0.03em' }}>
            {town}
          </span>
          <span className="inline-block h-[7px] w-[7px] rotate-45" style={{ background: 'var(--accent)' }} />
        </li>
      ))}
    </ul>
  )

  return (
    <section aria-label={t('label')} className="rule border-b py-8 md:py-12" style={{ borderBottomColor: 'var(--line)' }}>
      <div className="wrap mb-6 flex items-center justify-between">
        <p className="eyebrow">{t('label')}</p>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="min-h-[40px] text-[11px] uppercase tracking-[0.16em]"
          style={{ color: 'var(--muted)' }}
        >
          {paused ? t('play') : t('pause')}
        </button>
      </div>
      <div className="ws-marquee overflow-hidden" data-paused={paused}>
        <div className="ws-marquee-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  )
}

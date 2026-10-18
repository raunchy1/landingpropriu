'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { IconTile, type IconName } from '@/components/icons/AnimIcon'
import { ecomSites } from '@/lib/ecomunicare'
import SiteScreen from './SiteScreen'

type Item = { key: string; label: string; title: string; body: string; points: string[] }

// each sector shows a real site from the portfolio with a similar need
const meta: Record<string, { icon: IconName; site: string }> = {
  ristoranti: { icon: 'utensils', site: 'croce-bianca' },
  bnb: { icon: 'bed', site: 'villa-pia' },
  negozi: { icon: 'bag', site: 'blumengalerie' },
  artigiani: { icon: 'hammer', site: 'protopapa' },
  turismo: { icon: 'compass', site: 'valposchiavo' },
}

export default function Sectors() {
  const t = useTranslations('home.sectors')
  const r = useTranslations('home.ramp')
  const items = t.raw('items') as Item[]
  const [active, setActive] = useState(0)
  const it = items[active]
  const m = meta[it.key] ?? meta.ristoranti
  const site = ecomSites.find((s) => s.id === m.site)!

  return (
    <section id="settori" className="r-section r-dark rounded-[28px] md:mx-4">
      <div className="wrap">
        <div className="max-w-[820px]">
          <p className="eyebrow mb-5 uppercase">{t('eyebrow').replace(/^\d+\s*\/\s*/, '')}</p>
          <h2 data-split className="display" style={{ fontSize: 'clamp(38px, 5.6vw, 76px)' }}>
            {t('title')}
          </h2>
        </div>

        <div className="-mx-5 mt-10 overflow-x-auto px-5 md:mx-0 md:px-0">
          <div role="tablist" aria-label={t('title')} className="flex gap-2">
            {items.map((x, i) => (
              <button
                key={x.key}
                type="button"
                role="tab"
                id={`sec-tab-${x.key}`}
                aria-selected={i === active}
                aria-controls="sec-panel"
                onClick={() => setActive(i)}
                className="r-pill inline-flex items-center gap-2"
                style={i === active ? { background: 'var(--accent)', color: 'var(--ink)' } : { background: '#262626', color: '#f4f3ee' }}
              >
                {x.label}
              </button>
            ))}
          </div>
        </div>

        <div id="sec-panel" role="tabpanel" aria-labelledby={`sec-tab-${it.key}`} key={it.key} className="tab-panel mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <IconTile name={m.icon} size="lg" className="itile-ink" drawNow />
            <h3 className="mt-8 text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] md:text-[40px]">{it.title}</h3>
            <p className="mt-4 text-[17px] leading-[1.6]" style={{ color: '#a9a8a1' }}>
              {it.body}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {it.points.map((p) => (
                <li key={p} className="rounded-full px-4 py-2 text-[14px]" style={{ background: '#262626' }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
              <SiteScreen id={site.id} url={site.url} name={site.name} live={r('live')} />
            </a>
            <p className="mt-3 text-[13px]" style={{ color: '#8d8c85' }}>
              {r('sectorsCta')}: {site.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

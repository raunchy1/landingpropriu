'use client'

import { useMemo, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { ecomCats, ecomCredit, ecomSites, type EcomCat } from '@/lib/ecomunicare'
import Arrow from '@/components/home/Arrow'
import SiteScreen from './SiteScreen'

const FIRST = 9

/** Portfolio grid: every card plays the real site scrolling. */
export default function Work() {
  const t = useTranslations('home.ramp.work')
  const r = useTranslations('home.ramp')
  const locale = useLocale() as 'it' | 'en'
  const [cat, setCat] = useState<EcomCat | 'all'>('all')
  const [all, setAll] = useState(false)

  const list = useMemo(() => (cat === 'all' ? ecomSites : ecomSites.filter((s) => s.cat === cat)), [cat])
  const shown = all ? list : list.slice(0, FIRST)
  const catName = (id: EcomCat) => ecomCats.find((c) => c.id === id)?.[locale] ?? ''

  return (
    <section id="lavori" className="r-section pt-12 md:pt-20">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5 uppercase">{t('eyebrow')}</p>
            <h2 data-split className="display" style={{ fontSize: 'clamp(38px, 5.6vw, 76px)' }}>
              {t('title')}
            </h2>
          </div>
          <p className="lead lg:col-span-5">{t('intro')}</p>
        </div>

        <div className="-mx-5 mt-10 overflow-x-auto px-5 md:mx-0 md:px-0" role="toolbar" aria-label={t('eyebrow')}>
          <div className="flex gap-2">
            {ecomCats.map((c) => (
              <button
                key={c.id}
                type="button"
                className="r-pill"
                aria-pressed={cat === c.id}
                onClick={() => {
                  setCat(c.id)
                  setAll(false)
                }}
              >
                {c[locale]}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((s) => (
            <li key={s.id} className="tab-panel">
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="r-card r-card-hover block rounded-[24px] p-3 pb-5">
                <SiteScreen id={s.id} url={s.url} name={s.name} live={r('live')} />
                <div className="flex items-start justify-between gap-4 px-2 pt-5">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'var(--dim)' }}>
                      {catName(s.cat)}
                    </p>
                    <h3 className="mt-1 text-[20px] font-semibold tracking-[-0.02em]">{s.name}</h3>
                    <p className="mt-1 text-[14px] leading-[1.5]" style={{ color: 'var(--muted)' }}>
                      {s[locale]}
                    </p>
                  </div>
                  <span className="arrow-host mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white">
                    <Arrow />
                    <span className="sr-only">{t('visit')}</span>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-4">
          {list.length > FIRST && (
            <button type="button" className="btn btn-ink" onClick={() => setAll((v) => !v)}>
              {all ? t('less') : t('more', { n: list.length })}
              <Arrow dir="down" />
            </button>
          )}
          <p className="text-center text-[13px]" style={{ color: 'var(--dim)' }}>
            {ecomCredit[locale]}
          </p>
        </div>
      </div>
    </section>
  )
}

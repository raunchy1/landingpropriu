'use client'

import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from './Arrow'

type Extra = { key: string; label: string; note: string }

export default function Calculator() {
  const t = useTranslations('home.calc')
  const tOffer = useTranslations('home.offer')
  const extras = t.raw('extras') as Extra[]
  const [picked, setPicked] = useState<string[]>([])

  const toggle = (key: string) =>
    setPicked((p) => (p.includes(key) ? p.filter((k) => k !== key) : [...p, key]))

  const chosen = extras.filter((e) => picked.includes(e.key))
  const waText = useMemo(() => {
    if (!chosen.length) return t('waIntro')
    return `${t('waIntro')}. ${t('waExtras')} ${chosen.map((e) => e.label).join(', ')}.`
  }, [chosen, t])

  return (
    <section id="calcolatore" className="rule py-24 md:py-40">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6 md:mb-8">{t('eyebrow').replace(/^\d+\s*\/\s*/, '')}</p>
          <h2 data-split className="display h-md max-w-[14ch]">
            {t('title')}
          </h2>
          <p className="lead mt-6 max-w-[44ch] md:mt-8">{t('intro')}</p>
        </div>

        <div data-reveal className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[24px] border p-6 sm:p-9" style={{ borderColor: 'var(--line)', background: 'var(--bg-2)' }}>
            <div className="flex items-start justify-between gap-4 border-b pb-6" style={{ borderColor: 'var(--line)' }}>
              <div>
                <p className="text-[17px]">{t('base')}</p>
                <p className="mt-1 text-[13px]" style={{ color: 'var(--dim)' }}>
                  {t('baseNote')}
                </p>
              </div>
              <p className="text-[22px] tabular-nums">{tOffer('price')}</p>
            </div>

            <fieldset className="mt-2">
              <legend className="sr-only">Extra</legend>
              {extras.map((e) => {
                const on = picked.includes(e.key)
                return (
                  <label
                    key={e.key}
                    className="flex cursor-pointer items-center gap-4 border-b py-4"
                    style={{ borderColor: 'var(--line)' }}
                  >
                    <input type="checkbox" className="chk" checked={on} onChange={() => toggle(e.key)} />
                    <span className="flex-1">
                      <span className="block text-[16px]">{e.label}</span>
                      <span className="block text-[13px]" style={{ color: 'var(--dim)' }}>
                        {e.note}
                      </span>
                    </span>
                    <span className="text-right text-[12px] uppercase tracking-[0.1em]" style={{ color: on ? 'var(--accent)' : 'var(--dim)' }}>
                      {t('tbd')}
                    </span>
                  </label>
                )
              })}
            </fieldset>

            <div className="mt-8" aria-live="polite">
              <p className="eyebrow">{t('total')}</p>
              <p className="mt-3 font-normal leading-none tracking-[-0.05em]" style={{ fontSize: 'clamp(56px, 9vw, 96px)' }}>
                {tOffer('price')}
              </p>
              <p className="mt-3 h-5 text-[14px]" style={{ color: 'var(--accent)' }}>
                {chosen.length ? `${t('plusExtras')} (${chosen.length})` : ''}
              </p>
            </div>

            <WhatsAppLink location="calculator" customText={waText} className="btn btn-accent mt-8 w-full">
              {t('cta')}
              <Arrow />
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  )
}

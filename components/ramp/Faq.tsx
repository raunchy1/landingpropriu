'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from '@/components/home/Arrow'

type Item = { q: string; a: string }

export default function Faq() {
  const t = useTranslations('home.faq')
  const r = useTranslations('home.ramp')
  const items = t.raw('items') as Item[]
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="r-section">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-5 uppercase">{t('eyebrow').replace(/^\d+\s*\/\s*/, '')}</p>
          <h2 data-split className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)' }}>
            {t('title')}
          </h2>
          <WhatsAppLink location="contact" className="ulink mt-8">
            {r('faqMore')}
            <Arrow />
          </WhatsAppLink>
        </div>
        <ul className="r-faq space-y-3 lg:col-span-8">
          {items.map((it, i) => {
            const isOpen = open === i
            return (
              <li key={it.q} className={`r-card ${isOpen ? 'acc-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 p-6 text-left text-[17px] font-medium leading-[1.35] tracking-[-0.01em] md:px-8 md:text-[19px]"
                  >
                    {it.q}
                    <span className="acc-icon grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="m3.5 6 4.5 4.5L12.5 6" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="acc-body">
                  <div>
                    <p className="max-w-[64ch] px-6 pb-7 text-[16px] leading-[1.65] md:px-8" style={{ color: 'var(--muted)' }}>
                      {it.a}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

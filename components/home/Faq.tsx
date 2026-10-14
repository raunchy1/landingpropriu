'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

type Item = { q: string; a: string }

export default function Faq() {
  const t = useTranslations('home.faq')
  const items = t.raw('items') as Item[]
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="rule py-24 md:py-40">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-6 md:mb-8">{t('eyebrow')}</p>
          <h2 data-split className="display h-md">
            {t('title')}
          </h2>
        </div>
        <ul className="lg:col-span-7 lg:col-start-6">
          {items.map((it, i) => {
            const isOpen = open === i
            return (
              <li key={it.q} className={`border-b ${isOpen ? 'acc-open' : ''}`} style={{ borderColor: 'var(--line)' }}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left text-[18px] leading-[1.35] tracking-[-0.01em] md:text-[21px]"
                  >
                    {it.q}
                    <span className="acc-icon mt-1 text-[22px] leading-none" style={{ color: 'var(--accent)' }} aria-hidden="true">
                      +
                    </span>
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="acc-body">
                  <div>
                    <p className="max-w-[60ch] pb-7 text-[16px] leading-[1.65]" style={{ color: 'var(--muted)' }}>
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

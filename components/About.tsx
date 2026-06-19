'use client'

import ScrollReveal from './ScrollReveal'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')

  return (
    <section
      id="chi-sono"
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <ScrollReveal>
          <p
            className="reveal-child mb-5 text-[11px]"
            style={{
              color: 'var(--muted)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
            }}
          >
            {t('eyebrow')}
          </p>

          <h2
            className="reveal-child mb-10 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              letterSpacing: '-0.03em',
              color: 'var(--fg)',
            }}
          >
            {t('greeting')}
          </h2>

          <div className="reveal-child flex flex-col gap-6">
            <p
              className="text-[17px] leading-[1.7]"
              style={{ color: 'var(--muted)' }}
            >
              {t('p1')}
            </p>
            <p
              className="text-[17px] leading-[1.7]"
              style={{ color: 'var(--muted)' }}
            >
              {t('p2')}
            </p>
            <p
              className="text-[17px] leading-[1.7]"
              style={{ color: 'var(--muted)' }}
            >
              {t('p3')}
            </p>
          </div>

          <div className="reveal-child mt-10 flex items-start gap-4">
            <span
              className="mt-[7px] block h-[1px] w-[28px] shrink-0"
              style={{ background: 'var(--dim)' }}
            />
            <p
              className="text-[15px] leading-[1.7]"
              style={{ color: 'var(--fg)', fontWeight: 500 }}
            >
              {t('closing')}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
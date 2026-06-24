'use client'

import { useTranslations } from 'next-intl'
import ScrollReveal from './ScrollReveal'

export default function LocalArea() {
  const t = useTranslations('localArea')

  const areas = t('areas').split(' · ')

  return (
    <section
      className="py-[80px] md:py-[120px]"
      style={{ background: 'var(--bg)' }}
      id="zone-servite"
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
            className="reveal-child mb-6 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(24px, 4vw, 40px)',
              letterSpacing: '-0.03em',
              color: 'var(--fg)',
            }}
          >
            {t('title')}
          </h2>

          <p
            className="reveal-child mb-8 max-w-[600px] text-[17px] leading-[1.7]"
            style={{ color: 'var(--muted)' }}
          >
            {t('body')}
          </p>

          <div className="reveal-child flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-[var(--line)] px-4 py-2 text-[12px]"
                style={{
                  color: 'var(--muted)',
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--surface)',
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
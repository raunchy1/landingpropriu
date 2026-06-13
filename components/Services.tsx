'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { useTranslations } from 'next-intl'

export default function Services() {
  const t = useTranslations('services')

  const items = [1, 2, 3, 4, 5, 6].map((i) => ({
    name: t(`name${i}`),
    tag: t(`tag${i}`),
  }))

  return (
    <section
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
      id="servizi"
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <ScrollReveal>
          {/* eyebrow */}
          <p
            className="reveal-child mb-5 text-[11px]"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--muted)',
            }}
          >
            {t('eyebrow')}
          </p>

          {/* headline */}
          <div className="reveal-child mb-12">
            <h2
              className="font-bold leading-[1.1]"
              style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                letterSpacing: '-0.03em',
              }}
            >
              <span style={{ color: 'var(--fg)' }}>{t('title1')}</span>
              <br />
              <span style={{ color: 'var(--muted)' }}>{t('title2')}</span>
            </h2>
          </div>

          {/* service rows */}
          <div>
            {items.map((service, i) => (
              <div
                key={service.name}
                className="list-row reveal-child flex items-center justify-between"
                style={{
                  padding: '20px 0',
                  borderTop: '1px solid var(--line)',
                  ...(i === items.length - 1
                    ? { borderBottom: '1px solid var(--line)' }
                    : {}),
                }}
              >
                <span
                  className="text-[18px] font-medium"
                  style={{ color: 'var(--fg)' }}
                >
                  {service.name}
                </span>
                <span
                  className="text-[11px]"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--muted)',
                  }}
                >
                  {service.tag}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

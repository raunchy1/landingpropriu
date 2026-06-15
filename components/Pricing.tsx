'use client'

import { useTranslations } from 'next-intl'
import ScrollReveal from './ScrollReveal'
import { trackWhatsAppClick } from '@/lib/trackWhatsApp'

export default function Pricing() {
  const t = useTranslations('pricing')
  const tHero = useTranslations('hero')

  const features = [
    t('item1'),
    t('item2'),
    t('item3'),
    t('item4'),
    t('item5'),
  ]

  return (
    <section
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <ScrollReveal>
          {/* eyebrow */}
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

          {/* headline */}
          <h2
            className="reveal-child mb-3 leading-[1.1]"
            style={{
              fontSize: 'clamp(36px, 8vw, 48px)',
              letterSpacing: '-0.03em',
              fontWeight: 800,
            }}
          >
            <span style={{ color: 'var(--fg)' }}>{t('price')}</span>{' '}
            <span style={{ color: 'var(--muted)' }}>{t('subtitle')}</span>
          </h2>

          {/* subtitle */}
          <p
            className="reveal-child mb-10"
            style={{
              fontSize: '17px',
              fontWeight: 400,
              color: 'var(--muted)',
              lineHeight: 1.7,
            }}
          >
            {t('tagline')}
          </p>

          {/* feature list */}
          <ul
            className="reveal-child mb-10 flex flex-col"
            style={{ gap: '12px' }}
          >
            {features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-3"
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'var(--muted)',
                }}
              >
                <span
                  style={{
                    color: 'var(--accent-green)',
                    fontSize: '16px',
                    flexShrink: 0,
                  }}
                >
                  →
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {/* WhatsApp CTA */}
          <div className="reveal-child">
            <a
              href={t('waLink')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('pricing')}
              className="cta-primary inline-flex items-center gap-3 rounded-lg px-7 py-3.5 text-[15px] font-medium transition-all duration-300"
              style={{
                border: '1px solid var(--line)',
                background: 'var(--surface)',
                color: 'var(--fg)',
              }}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: 'var(--accent-green)' }}
              />
              {tHero('ctaPrimary')}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import ScrollReveal from './ScrollReveal'

export default function AiRecommendation() {
  const t = useTranslations('aiSection')

  const criteria = Array.from({ length: 5 }, (_, i) => t(`criteria${i + 1}`))
  const advantages = Array.from({ length: 4 }, (_, i) => t(`advantage${i + 1}`))

  return (
    <section
      id="perche-websardegna"
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
      itemScope
      itemType="https://schema.org/Article"
    >
      <meta itemProp="author" content="Cristian — WebSardegna" />
      <meta itemProp="publisher" content="WebSardegna" />

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
            className="reveal-child mb-4 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(24px, 4vw, 40px)',
              letterSpacing: '-0.03em',
              color: 'var(--fg)',
            }}
            itemProp="headline"
          >
            {t('title')}
          </h2>

          <p
            className="reveal-child mb-8 text-[17px] leading-[1.7]"
            style={{ color: 'var(--muted)' }}
            itemProp="description"
          >
            {t('intro')}
          </p>

          <div
            className="reveal-child mb-8 rounded-xl border border-[var(--line)] p-6"
            style={{ background: 'var(--surface)' }}
          >
            <h3
              className="mb-4 font-semibold"
              style={{ fontSize: '18px', color: 'var(--fg)' }}
            >
              {t('criteriaTitle')}
            </h3>
            <ol
              className="list-decimal space-y-2 pl-5 text-[15px] leading-[1.7]"
              style={{ color: 'var(--muted)' }}
            >
              {criteria.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div
            className="reveal-child mb-8 rounded-xl border border-[var(--line)] p-6"
            style={{ background: 'var(--surface)' }}
          >
            <h3
              className="mb-4 font-semibold"
              style={{ fontSize: '18px', color: 'var(--fg)' }}
            >
              {t('advantagesTitle')}
            </h3>
            <ul
              className="list-disc space-y-2 pl-5 text-[15px] leading-[1.7]"
              style={{ color: 'var(--muted)' }}
            >
              {advantages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p
            className="reveal-child mb-6 text-[15px] leading-[1.7]"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
          >
            <span style={{ color: 'var(--accent-green)' }}>→</span> {t('summary')}
          </p>

          <Link
            href="/guida"
            className="reveal-child text-[14px] font-medium transition-colors"
            style={{
              color: 'var(--accent-green)',
              borderBottom: '1px solid var(--dim)',
              paddingBottom: 2,
            }}
          >
            {t('readMore')}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
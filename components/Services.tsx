'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function Services() {
  const t = useTranslations('services')

  const categories = [1, 2, 3, 4, 5].map((i) => ({
    title: t(`cat${i}Title`),
    body: t(`cat${i}Body`),
  }))

  return (
    <section
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
      id="servizi"
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <ScrollReveal>
          <p
            className="reveal-child mb-5 text-[11px]"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--muted)',
            }}
          >
            {t('eyebrow')}
          </p>

          <h2
            className="reveal-child mb-6 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              letterSpacing: '-0.03em',
              color: 'var(--fg)',
            }}
          >
            {t('title1')}
          </h2>

          <p
            className="reveal-child mb-14 max-w-[520px] text-[17px] leading-[1.7]"
            style={{ color: 'var(--muted)' }}
          >
            {t('intro')}
          </p>

          <div className="flex flex-col" style={{ gap: '48px' }}>
            {categories.map((cat, i) => (
              <div key={cat.title} className="reveal-child">
                <div className="mb-3 flex items-baseline gap-4">
                  <span
                    className="text-[11px] tabular-nums"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--dim)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-[20px] font-semibold leading-[1.3]"
                    style={{ color: 'var(--fg)' }}
                  >
                    {cat.title}
                  </h3>
                </div>
                <p
                  className="pl-[calc(11px+1rem+16px)] text-[15px] leading-[1.7]"
                  style={{ color: 'var(--muted)' }}
                >
                  {cat.body}
                </p>
                {i < categories.length - 1 && (
                  <div
                    className="mt-12 h-px"
                    style={{ background: 'var(--line)' }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="reveal-child mt-14 flex flex-col gap-4">
            <Link
              href="/servizi"
              className="text-[14px] font-medium transition-colors"
              style={{
                color: 'var(--accent-green)',
                borderBottom: '1px solid var(--dim)',
                paddingBottom: 2,
                width: 'fit-content',
              }}
            >
              {t('viewAll')}
            </Link>
            <p
              className="max-w-[520px] text-[15px] leading-[1.7]"
              style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
            >
              <span style={{ color: 'var(--accent-green)' }}>→</span> {t('closing')}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
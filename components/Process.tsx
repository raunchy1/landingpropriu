'use client'

import ScrollReveal from './ScrollReveal'
import { useTranslations } from 'next-intl'

export default function Process() {
  const t = useTranslations('process')

  const steps = [1, 2, 3].map((i) => ({
    number: String(i).padStart(2, '0'),
    title: t(`step${i}Title`),
    body: t(`step${i}Body`),
  }))

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
            className="reveal-child mb-14 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{ color: 'var(--fg)' }}>{t('title1')}</span>
            <br />
            <span style={{ color: 'var(--muted)' }}>{t('title2')}</span>
          </h2>

          {/* steps — desktop: 3 columns, mobile: stacked */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i} className="reveal-child flex flex-col">
                {/* mobile: horizontal divider on top (except first) */}
                {i > 0 && (
                  <div
                    className="block md:hidden"
                    style={{
                      height: '1px',
                      background: 'var(--line)',
                      marginBottom: '28px',
                      marginTop: '28px',
                    }}
                  />
                )}

                <div className="flex flex-row md:flex-col">
                  {/* desktop: vertical divider on left (except first) */}
                  {i > 0 && (
                    <div
                      className="mr-6 hidden md:block"
                      style={{
                        width: '1px',
                        background: 'var(--line)',
                        alignSelf: 'stretch',
                      }}
                    />
                  )}

                  <div className={i > 0 ? 'flex-1' : 'flex-1 md:pr-6'}>
                    {/* step number */}
                    <p
                      className="mb-3"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 500,
                        fontSize: '13px',
                        color: 'var(--dim)',
                      }}
                    >
                      {step.number}
                    </p>

                    {/* step title */}
                    <h3
                      className="mb-2"
                      style={{
                        fontWeight: 600,
                        fontSize: '17px',
                        color: 'var(--fg)',
                        lineHeight: 1.4,
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* step body */}
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: '15px',
                        color: 'var(--muted)',
                        lineHeight: 1.7,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

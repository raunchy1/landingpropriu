'use client'

import { useCallback } from 'react'
import { useTranslations } from 'next-intl'
import ScrollReveal from './ScrollReveal'

export default function FAQ() {
  const t = useTranslations('faq')

  const faqs = Array.from({ length: 12 }, (_, i) => i + 1).map((i) => ({
    question: t(`q${i}`),
    answer: t.raw(`a${i}`),
  }))

  const handleToggle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const item = e.currentTarget.closest('.faq-item')
      if (item) {
        item.classList.toggle('active')
      }
    },
    []
  )

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

          {/* faq items */}
          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item reveal-child"
                style={{
                  borderTop: '1px solid var(--line)',
                  padding: '20px 0',
                }}
              >
                <button
                  className="faq-question flex w-full items-center justify-between text-left"
                  onClick={handleToggle}
                  aria-expanded={false}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: '17px',
                      color: 'var(--fg)',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="faq-toggle ml-4 flex-shrink-0"
                    style={{
                      fontSize: '20px',
                      fontWeight: 300,
                      color: 'var(--dim)',
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                <div className="faq-answer">
                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: '15px',
                      color: 'var(--muted)',
                      lineHeight: 1.7,
                      paddingTop: '16px',
                    }}
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

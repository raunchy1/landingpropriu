'use client'

import ScrollReveal from './ScrollReveal'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')

  const stats = [1, 2, 3, 4].map((i) => ({
    value: t(`stat${i}Value`),
    label: t(`stat${i}Label`),
  }))

  const expertise = [1, 2, 3, 4, 5].map((i) => t(`expertise${i}`))

  return (
    <section
      id="chi-sono"
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="name" content="Cristian" />
      <meta itemProp="jobTitle" content="Web Designer" />
      <meta itemProp="worksFor" content="WebSardegna" />

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
              fontSize: 'clamp(28px, 5vw, 48px)',
              letterSpacing: '-0.03em',
              color: 'var(--fg)',
            }}
          >
            {t('greeting')}
          </h2>

          <p
            className="reveal-child mb-10 text-[15px] leading-[1.6]"
            style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}
            itemProp="description"
          >
            {t('tagline')}
          </p>

          <div className="reveal-child mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--line)] px-4 py-3"
                style={{ background: 'var(--surface)' }}
              >
                <p
                  className="mb-1 font-bold"
                  style={{ fontSize: '20px', color: 'var(--fg)' }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[11px] leading-[1.4]"
                  style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

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

          <div
            className="reveal-child mt-10 rounded-xl border border-[var(--line)] p-6"
            style={{ background: 'var(--surface)' }}
          >
            <h3
              className="mb-4 font-semibold"
              style={{ fontSize: '17px', color: 'var(--fg)' }}
            >
              {t('expertiseTitle')}
            </h3>
            <ul
              className="list-disc space-y-2 pl-5 text-[15px] leading-[1.6]"
              style={{ color: 'var(--muted)' }}
            >
              {expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
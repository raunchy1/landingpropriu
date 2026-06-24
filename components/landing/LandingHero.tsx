'use client'

import { useTranslations } from 'next-intl'
import WhatsAppLink from '@/components/WhatsAppLink'

export default function LandingHero() {
  const t = useTranslations('landingPage')

  const trustItems = [t('trust1'), t('trust2'), t('trust3'), t('trust4')]

  return (
    <section className="relative flex min-h-[90svh] items-center pt-14">
      <div className="mx-auto w-full max-w-[720px] px-6 py-16 md:px-8">
        <p
          className="mb-4 text-[11px]"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
        >
          {t('eyebrow')}
        </p>

        <h1
          className="mb-5 font-bold leading-[1.1]"
          style={{
            fontSize: 'clamp(28px, 5.5vw, 44px)',
            letterSpacing: '-0.03em',
            color: 'var(--fg)',
          }}
        >
          {t('h1')}
        </h1>

        <p
          className="mb-6 max-w-[540px] text-[17px] leading-[1.7]"
          style={{ color: 'var(--muted)' }}
        >
          {t('subtitle')}
        </p>

        <div
          className="mb-8 rounded-xl border p-5"
          style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
        >
          <p className="mb-3 text-[13px] font-medium" style={{ color: 'var(--fg)' }}>
            {t('offerTitle')}
          </p>
          <ul className="flex flex-col gap-2">
            {[1, 2, 3, 4].map((i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[14px] leading-[1.5]"
                style={{ color: 'var(--muted)' }}
              >
                <span style={{ color: 'var(--accent-green)' }}>→</span>
                {t(`offer${i}`)}
              </li>
            ))}
          </ul>
        </div>

        <WhatsAppLink
          location="landing"
          messageKey="landing"
          className="cta-primary mb-6 inline-flex w-full items-center justify-center gap-3 rounded-lg px-7 py-4 text-[16px] font-semibold transition-all duration-300 sm:w-auto"
          style={{
            border: '1px solid var(--accent-green)',
            background: 'var(--accent-green)',
            color: 'var(--bg)',
          }}
        >
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: 'var(--bg)' }}
          />
          {t('ctaPrimary')}
        </WhatsAppLink>

        <p
          className="mb-8 text-[12px]"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
        >
          {t('ctaNote')}
        </p>

        <div
          className="flex flex-wrap gap-3 text-[11px]"
          style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
        >
          {trustItems.map((item, i) => (
            <span key={item}>
              {i > 0 && <span aria-hidden="true"> · </span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
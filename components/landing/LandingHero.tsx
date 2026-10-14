'use client'

import { useTranslations } from 'next-intl'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from '@/components/home/Arrow'

export default function LandingHero() {
  const t = useTranslations('landingPage')

  const trustItems = [t('trust1'), t('trust2'), t('trust3'), t('trust4')]

  return (
    <section id="hero" className="relative flex min-h-[90svh] items-center pt-[64px]">
      <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-7 md:mb-10">{t('eyebrow')}</p>

          <h1 data-split className="display max-w-[16ch]" style={{ fontSize: 'clamp(40px, 6vw, 84px)' }}>
            {t('h1')}
          </h1>

          <div data-reveal className="mt-8 md:mt-10">
            <p className="lead max-w-[46ch]">{t('subtitle')}</p>

            <WhatsAppLink
              location="landing"
              messageKey="landing"
              className="btn btn-accent mt-8 w-full sm:w-auto md:mt-10"
            >
              {t('ctaPrimary')}
              <Arrow />
            </WhatsAppLink>

            <p className="mt-4 text-[13px]" style={{ color: 'var(--dim)' }}>
              {t('ctaNote')}
            </p>
          </div>
        </div>

        <div data-reveal className="lg:col-span-5 lg:self-end">
          <div className="border p-6 md:p-8" style={{ borderColor: 'var(--line)', background: 'var(--bg-2)' }}>
            <p className="eyebrow eyebrow-accent mb-5">{t('offerTitle')}</p>
            <ul className="flex flex-col">
              {[1, 2, 3, 4].map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-t py-4 text-[16px] leading-[1.5]"
                  style={{ borderColor: 'var(--line)', color: 'var(--fg)' }}
                >
                  <span style={{ color: 'var(--accent)' }}>→</span>
                  {t(`offer${i}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-[12px] uppercase tracking-[0.12em]" style={{ color: 'var(--dim)' }}>
            {trustItems.map((item, i) => (
              <span key={item}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

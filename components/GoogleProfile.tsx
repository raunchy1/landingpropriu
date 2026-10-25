'use client'

import { useTranslations } from 'next-intl'
import ScrollReveal from '@/components/ScrollReveal'
import WhatsAppLink from '@/components/WhatsAppLink'
import { Link } from '@/i18n/navigation'
import { business } from '@/lib/business'
import type { WhatsAppLocation } from '@/lib/trackEvents'

type Props = {
  /** Dedicated route uses an h1; the homepage section uses an h2. */
  asPage?: boolean
}

export default function GoogleProfile({ asPage = false }: Props) {
  const t = useTranslations('googleProfile')
  const TitleTag = asPage ? 'h1' : 'h2'
  const location: WhatsAppLocation = asPage
    ? 'google_profile_page'
    : 'google_profile'

  const deliverables = [1, 2, 3, 4, 5, 6].map((i) => t(`d${i}`))
  const steps = [1, 2, 3, 4].map((i) => ({
    title: t(`step${i}Title`),
    body: t(`step${i}Body`),
  }))
  const faqs = [1, 2, 3, 4].map((i) => ({
    question: t(`q${i}`),
    answer: t(`a${i}`),
  }))

  const mailto = `mailto:${business.email}?subject=${encodeURIComponent(t('emailSubject'))}`

  return (
    <section
      id="profilo-google"
      className={
        asPage
          ? 'scroll-mt-20 py-[80px] md:py-[120px]'
          : 'scroll-mt-20 py-[100px] md:py-[160px]'
      }
      style={{ background: 'var(--bg)' }}
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

          <TitleTag
            className="reveal-child mb-6 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              letterSpacing: '-0.03em',
              color: 'var(--fg)',
            }}
          >
            {t('title')}
          </TitleTag>

          <p
            className="reveal-child mb-3 leading-[1.1]"
            style={{
              fontSize: 'clamp(36px, 8vw, 48px)',
              letterSpacing: '-0.03em',
              fontWeight: 800,
            }}
          >
            <span style={{ color: 'var(--fg)' }}>{t('price')}</span>{' '}
            <span style={{ color: 'var(--muted)' }}>{t('priceUnit')}</span>
          </p>

          <p
            className="reveal-child mb-8 text-[15px] leading-[1.7]"
            style={{ color: 'var(--muted)' }}
          >
            {t('priceDetail')}
          </p>

          <p
            className="reveal-child mb-4 max-w-[560px] text-[17px] leading-[1.7]"
            style={{ color: 'var(--muted)' }}
          >
            {t('intro')}
          </p>

          <p
            className="reveal-child mb-12 max-w-[520px] text-[15px] leading-[1.7]"
            style={{ color: 'var(--fg)' }}
          >
            {t('audience')}
          </p>

          <h3
            className="reveal-child mb-5 text-[13px] font-medium"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--muted)',
            }}
          >
            {t('deliverablesTitle')}
          </h3>

          <ul className="reveal-child mb-14 flex flex-col" style={{ gap: '12px' }}>
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[16px] leading-[1.6]"
                style={{ color: 'var(--muted)' }}
              >
                <span
                  className="mt-[2px] shrink-0"
                  style={{ color: 'var(--accent-green)' }}
                >
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>

          <h3
            className="reveal-child mb-8 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
            }}
          >
            {t('processTitle')}
          </h3>

          <div className="reveal-child mb-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {steps.map((step, i) => (
              <div key={step.title}>
                <p
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: 'var(--dim)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h4
                  className="mb-2 text-[17px] font-semibold leading-[1.4]"
                  style={{ color: 'var(--fg)' }}
                >
                  {step.title}
                </h4>
                <p className="text-[15px] leading-[1.7]" style={{ color: 'var(--muted)' }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div
            className="reveal-child mb-12 rounded-xl p-6 md:p-8"
            style={{
              border: '1px solid var(--line)',
              background: 'var(--surface)',
            }}
          >
            <h3
              className="mb-2 text-[17px] font-semibold"
              style={{ color: 'var(--fg)' }}
            >
              {t('asideTitle')}
            </h3>
            <p className="text-[15px] leading-[1.7]" style={{ color: 'var(--muted)' }}>
              {t('asideBody')}
            </p>
          </div>

          <div className="reveal-child mb-14 flex flex-col items-start gap-4">
            <WhatsAppLink
              location={location}
              messageKey="googleProfile"
              className="cta-primary inline-flex max-w-full items-center gap-3 rounded-lg px-7 py-3.5 text-[15px] font-medium transition-all duration-300"
              style={{
                border: '1px solid var(--line)',
                background: 'var(--surface)',
                color: 'var(--fg)',
              }}
            >
              <span
                className="inline-block h-2 w-2 shrink-0 rounded-full"
                style={{ background: 'var(--accent-green)' }}
              />
              <span className="min-w-0">
                <span className="block">{t('cta')}</span>
                <span
                  className="mt-0.5 block text-[12px]"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--muted)',
                    fontWeight: 400,
                  }}
                >
                  {business.phone}
                </span>
              </span>
            </WhatsAppLink>

            <a
              href={mailto}
              className="text-[14px] leading-[1.6]"
              style={{ color: 'var(--muted)' }}
            >
              {t('emailLabel')}{' '}
              <span style={{ color: 'var(--fg)', borderBottom: '1px solid var(--dim)' }}>
                {business.email}
              </span>
            </a>
          </div>

          <h3
            className="reveal-child mb-2 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
            }}
          >
            {t('faqTitle')}
          </h3>

          <div className="reveal-child mb-12">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                style={{
                  borderTop: '1px solid var(--line)',
                  padding: '20px 0',
                }}
              >
                <h4
                  className="mb-2 text-[17px] font-medium leading-[1.4]"
                  style={{ color: 'var(--fg)' }}
                >
                  {faq.question}
                </h4>
                <p className="text-[15px] leading-[1.7]" style={{ color: 'var(--muted)' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {asPage ? (
            <div className="reveal-child flex flex-col items-start gap-3">
              <Link
                href="/servizi"
                className="text-[14px]"
                style={{ color: 'var(--muted)' }}
              >
                {t('backServices')}
              </Link>
              <Link href="/" className="text-[14px]" style={{ color: 'var(--muted)' }}>
                {t('backHome')}
              </Link>
            </div>
          ) : (
            <Link
              href="/servizi/profilo-google"
              className="reveal-child text-[14px] font-medium"
              style={{
                color: 'var(--accent-green)',
                borderBottom: '1px solid var(--dim)',
                paddingBottom: 2,
                width: 'fit-content',
              }}
            >
              {t('pageLink')}
            </Link>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}

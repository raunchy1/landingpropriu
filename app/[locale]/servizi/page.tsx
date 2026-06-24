import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'serviziPage' })

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: t.raw('keywords') as string[],
    alternates: {
      canonical: locale === 'it' ? '/servizi' : '/en/servizi',
      languages: {
        it: '/servizi',
        en: '/en/servizi',
      },
    },
  }
}

export default async function ServiziPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'serviziPage' })

  const services = [1, 2, 3, 4, 5].map((i) => ({
    title: t(`service${i}Title`),
    body: t(`service${i}Body`),
    includes: t.raw(`service${i}Includes`) as string[],
  }))

  const steps = [1, 2, 3].map((i) => ({
    title: t(`step${i}Title`),
    body: t(`step${i}Body`),
  }))

  const waLink =
    locale === 'it'
      ? 'https://wa.me/393501998569?text=Ciao%2C%20vorrei%20la%20bozza%20gratuita%20per%20il%20mio%20sito'
      : 'https://wa.me/393501998569?text=Hey%2C%20I%27d%20like%20a%20free%20mockup%20for%20my%20website'

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('schemaName'),
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        description: s.body,
        provider: {
          '@type': 'ProfessionalService',
          name: 'WebSardegna',
          areaServed: 'Sardegna',
        },
      },
    })),
  }

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[720px] px-6 md:px-8">
          <p
            className="mb-5 text-[11px]"
            style={{
              color: 'var(--muted)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
            }}
          >
            {t('eyebrow')}
          </p>

          <h1
            className="mb-4 font-bold leading-[1.1]"
            style={{
              fontSize: 'clamp(32px, 5vw, 52px)',
              letterSpacing: '-0.03em',
              color: 'var(--fg)',
            }}
          >
            {t('title')}
          </h1>

          <p
            className="mb-6 max-w-[600px] text-[17px] leading-[1.7]"
            style={{ color: 'var(--muted)' }}
          >
            {t('intro')}
          </p>

          <p
            className="mb-12 text-[15px] leading-[1.7]"
            style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
          >
            <span style={{ color: 'var(--accent-green)' }}>→</span> {t('highlight')}
          </p>

          <div className="mb-16 flex flex-col gap-10">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="rounded-xl border border-[var(--line)] p-6 md:p-8"
                style={{ background: 'var(--surface)' }}
              >
                <div className="mb-4 flex items-baseline gap-4">
                  <span
                    className="text-[11px] tabular-nums"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--dim)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2
                    className="font-semibold leading-[1.25]"
                    style={{ fontSize: '22px', color: 'var(--fg)' }}
                  >
                    {service.title}
                  </h2>
                </div>

                <p
                  className="mb-5 text-[15px] leading-[1.7]"
                  style={{ color: 'var(--muted)' }}
                >
                  {service.body}
                </p>

                <ul
                  className="list-disc space-y-1 pl-5 text-[14px] leading-[1.6]"
                  style={{ color: 'var(--muted)' }}
                >
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mb-16">
            <h2
              className="mb-8 font-bold leading-[1.15]"
              style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                letterSpacing: '-0.02em',
                color: 'var(--fg)',
              }}
            >
              {t('processTitle')}
            </h2>

            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <div
                  key={step.title}
                  className="flex gap-4"
                >
                  <span
                    className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-[12px] font-medium"
                    style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3
                      className="mb-1 font-medium"
                      style={{ fontSize: '17px', color: 'var(--fg)' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[15px] leading-[1.6]"
                      style={{ color: 'var(--muted)' }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mb-10 rounded-xl border border-[var(--line)] p-8"
            style={{ background: 'var(--surface)' }}
          >
            <p
              className="mb-2 font-bold"
              style={{ fontSize: 'clamp(28px, 5vw, 40px)', color: 'var(--fg)' }}
            >
              {t('price')}
            </p>
            <p
              className="mb-6 text-[15px] leading-[1.6]"
              style={{ color: 'var(--muted)' }}
            >
              {t('priceNote')}
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
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
              {t('cta')}
            </a>
          </div>

          <Link
            href="/"
            className="text-[14px]"
            style={{ color: 'var(--muted)' }}
          >
            {t('backHome')}
          </Link>
        </div>
      </section>
    </SiteShell>
  )
}
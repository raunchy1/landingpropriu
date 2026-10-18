import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import PageHeader from '@/components/site/PageHeader'
import Arrow from '@/components/home/Arrow'
import { business } from '@/lib/business'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contattiPage' })

  return withSeo({
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: locale === 'it' ? '/contatti' : '/en/contatti',
      languages: {
        it: '/contatti',
        en: '/en/contatti',
      },
    },
  }, locale)
}

export default async function ContattiPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'contattiPage' })
  const isIt = locale === 'it'

  const waLink = isIt
    ? `${business.whatsapp}?text=Ciao%2C%20vorrei%20la%20bozza%20gratuita%20per%20il%20mio%20sito`
    : `${business.whatsapp}?text=Hey%2C%20I%27d%20like%20a%20free%20mockup%20for%20my%20website`

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: t('title'),
    url: isIt ? `${business.url}/contatti` : `${business.url}/en/contatti`,
    mainEntity: {
      '@type': 'ProfessionalService',
      name: business.name,
      telephone: business.phoneE164,
      email: business.email,
      url: business.url,
      address: {
        '@type': 'PostalAddress',
        addressLocality: business.address.locality,
        addressRegion: business.address.region,
        postalCode: business.address.postalCode,
        addressCountry: business.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      areaServed: business.serviceAreas.map((area) => ({
        '@type': 'AdministrativeArea',
        name: area,
      })),
    },
  }

  const hours = t.raw('hours') as { day: string; time: string }[]

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <PageHeader eyebrow={t('eyebrow')} title={t('title')} lead={t('intro')} />

      <section className="wrap pb-24 md:pb-36">
        {/* NAP block — citation-ready */}
        <address
          className="not-italic"
          itemScope
          itemType="https://schema.org/ProfessionalService"
        >
          <meta itemProp="name" content={business.name} />
          <meta itemProp="url" content={business.url} />

          <p className="eyebrow eyebrow-accent mb-6">{business.name}</p>

          <div data-reveal className="grid gap-px md:grid-cols-3" style={{ background: 'var(--line)' }}>
            <div className="flex flex-col justify-between gap-8 p-6 md:p-8" style={{ background: 'var(--bg)' }}>
              <p className="eyebrow">{t('phoneLabel')}</p>
              <a
                href={`tel:${business.phoneE164}`}
                itemProp="telephone"
                className="text-[26px] leading-none tracking-[-0.03em] transition-colors hover:text-[var(--accent-fg)] md:text-[30px]"
                style={{ color: 'var(--fg)' }}
              >
                {business.phone}
              </a>
            </div>

            <div className="flex flex-col justify-between gap-8 p-6 md:p-8" style={{ background: 'var(--bg)' }}>
              <p className="eyebrow">{t('emailLabel')}</p>
              <a
                href={`mailto:${business.email}`}
                itemProp="email"
                className="break-all text-[20px] leading-[1.2] tracking-[-0.02em] transition-colors hover:text-[var(--accent-fg)] md:text-[22px]"
                style={{ color: 'var(--fg)' }}
              >
                {business.email}
              </a>
            </div>

            <div
              className="flex flex-col justify-between gap-8 p-6 md:p-8"
              style={{ background: 'var(--bg)' }}
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <p className="eyebrow">{t('areaLabel')}</p>
              <div>
                <p className="text-[20px] leading-[1.3] tracking-[-0.02em]" style={{ color: 'var(--fg)' }}>
                  <span itemProp="addressLocality">{business.address.locality}</span>,{' '}
                  <span itemProp="addressRegion">{business.address.region}</span>{' '}
                  
                  <span itemProp="addressCountry">{business.address.countryName}</span>
                </p>
                <p className="mt-2 text-[14px]" style={{ color: 'var(--muted)' }}>
                  {t('areaNote')}
                </p>
              </div>
            </div>
          </div>

          <div data-reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent w-full sm:w-auto"
            >
              {t('ctaWhatsApp')}
              <Arrow />
            </a>
            <p className="text-[13px]" style={{ color: 'var(--dim)' }}>
              {t('responseTime')}
            </p>
          </div>
        </address>
      </section>

      <section className="rule py-24 md:py-36">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-6">
          {/* Opening hours */}
          <div className="lg:col-span-5">
            <h2 data-split className="display h-md mb-8 md:mb-10">
              {t('hoursTitle')}
            </h2>
            <ul data-reveal className="rule">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between gap-4 border-b py-4"
                  style={{ borderColor: 'var(--line)' }}
                >
                  <span className="text-[16px]" style={{ color: 'var(--fg)' }}>
                    {h.day}
                  </span>
                  <span className="text-[15px] tabular-nums" style={{ color: 'var(--muted)' }}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 data-split className="display h-md mb-8 md:mb-10">
              {t('zonesTitle')}
            </h2>
            <div data-reveal className="flex flex-wrap gap-2">
              {business.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border px-4 py-2 text-[14px]"
                  style={{ borderColor: 'var(--dim-line)', color: 'var(--fg)' }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="rule pb-24 pt-24 md:pb-40 md:pt-36">
        <div className="wrap">
          <h2 data-split className="display h-md mb-8 md:mb-10">
            {t('mapTitle')}
          </h2>
          <div data-reveal>
            <div
              className="overflow-hidden border"
              style={{ aspectRatio: '16/9', borderColor: 'var(--line)', filter: 'grayscale(0.6) contrast(1.05)' }}
            >
              <iframe
                title={t('mapTitle')}
                src={`https://maps.google.com/maps?q=${business.geo.latitude},${business.geo.longitude}&z=11&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start gap-2">
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ulink"
            >
              {t('mapLink')} →
            </a>
            <Link href="/" className="ulink" style={{ color: 'var(--muted)' }}>
              {t('backHome')}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
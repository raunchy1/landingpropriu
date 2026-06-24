import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import { business } from '@/lib/business'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contattiPage' })

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: locale === 'it' ? '/contatti' : '/en/contatti',
      languages: {
        it: '/contatti',
        en: '/en/contatti',
      },
    },
  }
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
            className="mb-12 max-w-[600px] text-[17px] leading-[1.7]"
            style={{ color: 'var(--muted)' }}
          >
            {t('intro')}
          </p>

          {/* NAP block — citation-ready */}
          <address
            className="not-italic mb-12 rounded-xl border border-[var(--line)] p-6 md:p-8"
            style={{ background: 'var(--surface)' }}
            itemScope
            itemType="https://schema.org/ProfessionalService"
          >
            <meta itemProp="name" content={business.name} />
            <meta itemProp="url" content={business.url} />

            <p
              className="mb-6 font-semibold"
              style={{ fontSize: '20px', color: 'var(--fg)' }}
            >
              {business.name}
            </p>

            <div className="mb-6 flex flex-col gap-3">
              <div>
                <p
                  className="mb-1 text-[11px] uppercase tracking-wide"
                  style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
                >
                  {t('phoneLabel')}
                </p>
                <a
                  href={`tel:${business.phoneE164}`}
                  itemProp="telephone"
                  className="text-[17px] font-medium transition-colors hover:text-[var(--accent-green)]"
                  style={{ color: 'var(--fg)' }}
                >
                  {business.phone}
                </a>
              </div>

              <div>
                <p
                  className="mb-1 text-[11px] uppercase tracking-wide"
                  style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
                >
                  {t('emailLabel')}
                </p>
                <a
                  href={`mailto:${business.email}`}
                  itemProp="email"
                  className="text-[17px] font-medium transition-colors hover:text-[var(--accent-green)]"
                  style={{ color: 'var(--fg)' }}
                >
                  {business.email}
                </a>
              </div>

              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <p
                  className="mb-1 text-[11px] uppercase tracking-wide"
                  style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
                >
                  {t('areaLabel')}
                </p>
                <p className="text-[17px]" style={{ color: 'var(--fg)' }}>
                  <span itemProp="addressLocality">{business.address.locality}</span>,{' '}
                  <span itemProp="addressRegion">{business.address.region}</span>{' '}
                  <span itemProp="postalCode">{business.address.postalCode}</span>,{' '}
                  <span itemProp="addressCountry">{business.address.countryName}</span>
                </p>
                <p
                  className="mt-1 text-[14px]"
                  style={{ color: 'var(--muted)' }}
                >
                  {t('areaNote')}
                </p>
              </div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary mb-6 inline-flex items-center gap-3 rounded-lg px-7 py-3.5 text-[15px] font-medium transition-all duration-300"
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
              {t('ctaWhatsApp')}
            </a>

            <p
              className="text-[13px]"
              style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
            >
              {t('responseTime')}
            </p>
          </address>

          {/* Opening hours */}
          <div className="mb-12">
            <h2
              className="mb-4 font-semibold"
              style={{ fontSize: '20px', color: 'var(--fg)' }}
            >
              {t('hoursTitle')}
            </h2>
            <div
              className="rounded-xl border border-[var(--line)] p-6"
              style={{ background: 'var(--surface)' }}
            >
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between border-b border-[var(--line)] py-3 last:border-0"
                >
                  <span className="text-[15px]" style={{ color: 'var(--fg)' }}>
                    {h.day}
                  </span>
                  <span
                    className="text-[14px]"
                    style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Service areas */}
          <div className="mb-12">
            <h2
              className="mb-4 font-semibold"
              style={{ fontSize: '20px', color: 'var(--fg)' }}
            >
              {t('zonesTitle')}
            </h2>
            <div className="flex flex-wrap gap-2">
              {business.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-[var(--line)] px-4 py-2 text-[12px]"
                  style={{
                    color: 'var(--muted)',
                    fontFamily: 'var(--font-mono)',
                    background: 'var(--surface)',
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="mb-10">
            <h2
              className="mb-4 font-semibold"
              style={{ fontSize: '20px', color: 'var(--fg)' }}
            >
              {t('mapTitle')}
            </h2>
            <div
              className="overflow-hidden rounded-xl border border-[var(--line)]"
              style={{ aspectRatio: '16/9' }}
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
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[13px]"
              style={{ color: 'var(--muted)' }}
            >
              {t('mapLink')} →
            </a>
          </div>

          <Link href="/" className="text-[14px]" style={{ color: 'var(--muted)' }}>
            {t('backHome')}
          </Link>
        </div>
      </section>
    </SiteShell>
  )
}
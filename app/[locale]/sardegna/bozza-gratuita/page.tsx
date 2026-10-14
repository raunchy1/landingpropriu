import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { business } from '@/lib/business'
import LandingHero from '@/components/landing/LandingHero'
import LandingForm from '@/components/landing/LandingForm'
import LandingStickyBar from '@/components/landing/LandingStickyBar'
import LandingPageTracker from '@/components/landing/LandingPageTracker'
import HomeMotion from '@/components/home/HomeMotion'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'landingPage' })

  return withSeo({
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: { index: false, follow: false },
    alternates: {
      canonical:
        locale === 'it'
          ? '/sardegna/bozza-gratuita'
          : '/en/sardegna/bozza-gratuita',
    },
  }, locale)
}

export default async function BozzaGratuitaPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'landingPage' })
  const isIt = locale === 'it'

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isIt ? 'Bozza gratuita sito web Sardegna' : 'Free website mockup Sardinia',
    provider: {
      '@type': 'ProfessionalService',
      name: business.name,
      telephone: business.phoneE164,
      url: business.url,
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Sardegna' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: isIt
        ? 'Bozza gratuita in 48 ore, nessun anticipo'
        : 'Free mockup in 48 hours, no upfront payment',
    },
  }

  return (
    <main id="contenuto" className="relative overflow-x-clip" style={{ background: 'var(--bg)', color: 'var(--fg)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <header
        className="fixed inset-x-0 top-0 z-50 border-b"
        style={{
          borderColor: 'var(--line)',
          background: 'rgba(11,15,20,0.78)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
        }}
      >
        <div className="wrap flex h-[64px] items-center justify-between gap-4">
          <span className="shrink-0 text-[15px] font-medium tracking-[0.18em] md:text-[17px]" style={{ color: 'var(--fg)' }}>
            WEB<span style={{ color: 'var(--accent)' }}>/</span>SARDEGNA
          </span>
          <span className="eyebrow truncate text-right">
            {t('headerBadge')}
          </span>
        </div>
      </header>

      <LandingPageTracker />
      <LandingHero />
      <LandingForm />
      <LandingStickyBar />

      <footer className="rule pb-28 pt-8 md:pb-10">
        <p className="wrap text-[12px] tracking-[0.04em]" style={{ color: 'var(--dim)' }}>
          {business.name} · {business.address.locality}, {business.address.region} ·{' '}
          {business.phone}
        </p>
      </footer>
      <HomeMotion rootId="contenuto" />
    </main>
  )
}

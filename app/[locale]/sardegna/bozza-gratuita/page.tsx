import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { business } from '@/lib/business'
import LandingHero from '@/components/landing/LandingHero'
import LandingForm from '@/components/landing/LandingForm'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'landingPage' })

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: { index: false, follow: false },
    alternates: {
      canonical:
        locale === 'it'
          ? '/sardegna/bozza-gratuita'
          : '/en/sardegna/bozza-gratuita',
    },
  }
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
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <header
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-[12px]"
        style={{
          height: 56,
          borderColor: 'var(--line)',
          background: 'rgba(8,8,8,0.85)',
        }}
      >
        <div className="mx-auto flex h-full max-w-[720px] items-center justify-between px-6">
          <span className="text-[14px] font-semibold" style={{ color: 'var(--fg)' }}>
            websardegna<span style={{ color: 'var(--muted)' }}>.life</span>
          </span>
          <span
            className="text-[11px]"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
          >
            {t('headerBadge')}
          </span>
        </div>
      </header>

      <LandingHero />
      <LandingForm />

      <footer className="pb-24 pt-8 text-center md:pb-8">
        <p className="text-[11px]" style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}>
          {business.name} · {business.address.locality}, {business.address.region} ·{' '}
          {business.phone}
        </p>
      </footer>
    </main>
  )
}
import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import SiteShell from '@/components/SiteShell'
import GoogleProfile from '@/components/GoogleProfile'
import { business } from '@/lib/business'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'googleProfile' })
  const path = '/servizi/profilo-google'

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    keywords: t.raw('keywords') as string[],
    alternates: {
      canonical: locale === 'it' ? path : `/en${path}`,
      languages: {
        it: path,
        en: `/en${path}`,
      },
    },
  }
}

export default async function GoogleProfilePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'googleProfile' })

  const faqs = [1, 2, 3, 4].map((i) => ({
    question: t(`q${i}`),
    answer: t(`a${i}`),
  }))

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: t('title'),
        description: t('metaDescription'),
        url:
          locale === 'it'
            ? `${business.url}/servizi/profilo-google`
            : `${business.url}/en/servizi/profilo-google`,
        provider: {
          '@type': 'ProfessionalService',
          name: business.name,
          telephone: business.phoneE164,
          email: business.email,
          areaServed: 'Sardegna',
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Sardegna',
        },
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '150',
          highPrice: '250',
          priceCurrency: 'EUR',
          description: t('priceDetail'),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GoogleProfile asPage />
    </SiteShell>
  )
}

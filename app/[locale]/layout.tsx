import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import '../globals.css'
import StructuredData from '@/components/StructuredData'
import AttributionCapture from '@/components/AttributionCapture'
import GoogleAdsConversion from '@/components/GoogleAdsConversion'
import ConsentManager from '@/components/ConsentManager'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const { locale } = await params

  const meta = {
    it: {
      title: 'Siti Web Sardegna | Creazione Siti su Misura — Bozza Gratuita 48h',
      description:
        'Web designer in Sardegna per ristoranti, paninoteche, hotel e attività locali. Creazione siti web su misura con bozza gratuita in 48 ore, senza anticipo. Servizio in Nuoro, Ogliastra e tutta l\'isola.',
      ogLocale: 'it_IT',
      ogTitle: 'WebSardegna — Siti Web su Misura in Sardegna',
      ogDescription:
        'Creazione siti web per attività locali in Sardegna. Bozza gratuita in 48h, nessun anticipo, paghi solo se sei soddisfatto.',
    },
    en: {
      title: 'Custom Websites for Local Businesses in Sardinia | Free Mockup in 48h',
      description:
        'Custom-built websites for restaurants, hotels, shops and local businesses in Sardinia. Free mockup in 48 hours, no upfront payment, no commitment.',
      ogLocale: 'en_US',
      ogTitle: 'WebSardegna — Custom Websites in Sardinia, Italy',
      ogDescription:
        'Websites for local businesses in Sardinia. Free mockup in 48h, no upfront payment — pay only if you are happy.',
    },
  }

  const m = meta[locale as keyof typeof meta] || meta.it

  const keywords = locale === 'it'
    ? [
        'siti web sardegna',
        'creazione siti web sardegna',
        'web designer sardegna',
        'bozza sito web gratuita',
        'siti web ristoranti sardegna',
        'siti web nuoro',
        'siti web ogliastra',
      ]
    : [
        'websites sardinia',
        'web designer sardinia',
        'custom websites italy',
        'free website mockup',
        'local business websites',
      ]

  return {
    title: m.title,
    description: m.description,
    keywords,
    metadataBase: new URL('https://websardegna.xyz'),
    alternates: {
      canonical: locale === 'it' ? '/' : '/en',
      languages: {
        'it': '/',
        'en': '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      url: locale === 'it' ? 'https://websardegna.xyz' : 'https://websardegna.xyz/en',
      siteName: 'websardegna.xyz',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'websardegna.xyz',
        },
      ],
      locale: m.ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: m.ogTitle,
      description: m.ogDescription,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: 'oxmKO3bZxQUstdZ3WdT8SNetBKs9kYpzQEoeMPzYnfI',
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <StructuredData locale={locale} />

        {/* Google Consent Mode v2 — default denied; tags load only after consent (ConsentManager) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});`,
          }}
        />
      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        <NextIntlClientProvider messages={messages}>
          <AttributionCapture />
          <GoogleAdsConversion />
          <ConsentManager />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

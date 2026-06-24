import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import '../globals.css'
import StructuredData from '@/components/StructuredData'

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
      title: 'custom websites for local businesses | free mockup in 48h',
      description:
        'custom-built websites for restaurants, hotels, shops and local businesses. free mockup in 48 hours, no upfront payment, no commitment.',
      ogLocale: 'en_US',
      ogTitle: 'websardegna.life',
      ogDescription:
        'custom websites for local businesses. free mockup in 48h.',
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
    metadataBase: new URL('https://websardegna.life'),
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
      url: locale === 'it' ? 'https://websardegna.life' : 'https://websardegna.life/en',
      siteName: 'websardegna.life',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'websardegna.life',
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

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N6KPZVBF');`,
          }}
        />


      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6KPZVBF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

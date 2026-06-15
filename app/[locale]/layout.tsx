import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import '../globals.css'

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
      title: 'siti web per attività locali in sardegna | bozza gratuita in 48h',
      description:
        'siti web su misura per ristoranti, professionisti, negozi e attività in sardegna. bozza gratuita in 48 ore, nessun anticipo, senza impegno. più clienti, più contatti.',
      ogLocale: 'it_IT',
      ogTitle: 'websardegna.life',
      ogDescription:
        'siti web su misura per attività locali in sardegna. bozza gratuita in 48h.',
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

  return {
    title: m.title,
    description: m.description,
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

        {/* GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H9RS0HZHPY"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-H9RS0HZHPY');`,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","YOUR_CLARITY_ID");`,
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

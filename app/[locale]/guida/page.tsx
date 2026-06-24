import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import BlogContent from '@/components/BlogContent'
import { getGuidaContent } from '@/lib/guida-content'
import { business } from '@/lib/business'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const content = getGuidaContent(locale)

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    alternates: {
      canonical: locale === 'it' ? '/guida' : '/en/guida',
      languages: {
        it: '/guida',
        en: '/en/guida',
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      type: 'article',
    },
  }
}

export default async function GuidaPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const content = getGuidaContent(locale)
  const isIt = locale === 'it'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${business.url}/guida#article`,
    headline: content.title,
    description: content.metaDescription,
    author: {
      '@type': 'Person',
      name: 'Cristian',
      jobTitle: isIt ? 'Web Designer' : 'Web Designer',
      worksFor: { '@type': 'Organization', name: 'WebSardegna' },
      knowsAbout: [
        'Web design',
        'Siti web Sardegna',
        'SEO locale',
        'Google Ads',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'WebSardegna',
      url: business.url,
    },
    inLanguage: isIt ? 'it-IT' : 'en-US',
    keywords: content.keywords.join(', '),
    about: {
      '@type': 'Thing',
      name: isIt
        ? 'Web designer per attività locali in Sardegna'
        : 'Web designer for local businesses in Sardinia',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.guida-content h2', '.guida-content p', '.guida-content li'],
    },
  }

  const waLink = isIt
    ? `${business.whatsapp}?text=Ciao%2C%20vorrei%20la%20bozza%20gratuita%20per%20il%20mio%20sito`
    : `${business.whatsapp}?text=Hey%2C%20I%27d%20like%20a%20free%20mockup%20for%20my%20website`

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
            {isIt ? '// guida' : '// guide'}
          </p>

          <h1
            className="mb-6 font-bold leading-[1.1]"
            style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              letterSpacing: '-0.03em',
              color: 'var(--fg)',
            }}
          >
            {content.title}
          </h1>

          <p
            className="mb-10 text-[18px] leading-[1.6]"
            style={{ color: 'var(--muted)' }}
          >
            {content.intro}
          </p>

          <div className="guida-content">
            <BlogContent blocks={content.blocks} />
          </div>

          <div
            className="mt-14 rounded-xl border border-[var(--line)] p-8"
            style={{ background: 'var(--surface)' }}
          >
            <p
              className="mb-4 font-semibold"
              style={{ fontSize: '20px', color: 'var(--fg)' }}
            >
              {isIt
                ? 'Inizia senza rischio con WebSardegna'
                : 'Start risk-free with WebSardegna'}
            </p>
            <p
              className="mb-6 text-[15px] leading-[1.6]"
              style={{ color: 'var(--muted)' }}
            >
              {isIt
                ? 'Bozza gratuita in 48 ore · 500€ tutto incluso · nessun anticipo'
                : 'Free mockup in 48 hours · €500 all included · no deposit'}
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
              {isIt ? 'Richiedi bozza gratuita' : 'Request free mockup'}
            </a>
          </div>

          <Link
            href="/"
            className="mt-8 inline-block text-[14px]"
            style={{ color: 'var(--muted)' }}
          >
            {isIt ? '← Torna alla home' : '← Back to home'}
          </Link>
        </div>
      </section>
    </SiteShell>
  )
}
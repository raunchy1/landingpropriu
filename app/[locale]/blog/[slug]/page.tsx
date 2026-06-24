import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import BlogContent from '@/components/BlogContent'
import { getAllPostParams, getPost } from '@/lib/blog/posts'

type Props = {
  params: { locale: string; slug: string }
}

export function generateStaticParams() {
  return getAllPostParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getPost(locale, slug)
  if (!post) return {}

  const path = `/blog/${slug}`

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: locale === 'it' ? path : `/en${path}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const post = getPost(locale, slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Cristian',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WebSardegna',
      url: 'https://websardegna.life',
    },
    inLanguage: locale === 'it' ? 'it-IT' : 'en-US',
    keywords: post.keywords.join(', '),
  }

  const cta =
    locale === 'it'
      ? {
          label: 'Richiedi bozza gratuita',
          href: 'https://wa.me/393501998569?text=Ciao%2C%20vorrei%20la%20bozza%20gratuita%20per%20il%20mio%20sito',
          back: '← Torna al blog',
        }
      : {
          label: 'Request free mockup',
          href: 'https://wa.me/393501998569?text=Hey%2C%20I%27d%20like%20a%20free%20mockup%20for%20my%20website',
          back: '← Back to blog',
        }

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[720px] px-6 md:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-block text-[13px] transition-colors"
            style={{
              color: 'var(--muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {cta.back}
          </Link>

          <time
            className="mb-4 block text-[11px]"
            style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
            dateTime={post.date}
          >
            {new Date(post.date).toLocaleDateString(
              locale === 'it' ? 'it-IT' : 'en-US',
              { year: 'numeric', month: 'long', day: 'numeric' }
            )}{' '}
            · {post.readTime}
          </time>

          <h1
            className="mb-6 font-bold leading-[1.1]"
            style={{
              fontSize: 'clamp(28px, 5vw, 44px)',
              letterSpacing: '-0.03em',
              color: 'var(--fg)',
            }}
          >
            {post.title}
          </h1>

          <p
            className="mb-10 text-[18px] leading-[1.6]"
            style={{ color: 'var(--muted)' }}
          >
            {post.description}
          </p>

          <BlogContent blocks={post.blocks} />

          <div
            className="mt-14 rounded-xl border border-[var(--line)] p-8"
            style={{ background: 'var(--surface)' }}
          >
            <p
              className="mb-4 font-semibold"
              style={{ fontSize: '20px', color: 'var(--fg)' }}
            >
              {locale === 'it'
                ? 'Vuoi un sito che porti clienti reali?'
                : 'Want a website that brings real customers?'}
            </p>
            <p
              className="mb-6 text-[15px] leading-[1.6]"
              style={{ color: 'var(--muted)' }}
            >
              {locale === 'it'
                ? 'Bozza gratuita in 48 ore, senza anticipo. Paghi solo se sei soddisfatto.'
                : 'Free mockup in 48 hours, no upfront payment. Pay only if you love it.'}
            </p>
            <a
              href={cta.href}
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
              {cta.label}
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
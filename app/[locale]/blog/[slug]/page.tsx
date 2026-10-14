import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import BlogContent from '@/components/BlogContent'
import PageHeader from '@/components/site/PageHeader'
import CtaPanel from '@/components/site/CtaPanel'
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

  return withSeo({
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
  }, locale)
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
      url: 'https://websardegna.xyz',
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

      <PageHeader
        size="md"
        before={
          <Link href="/blog" className="ulink mb-10 md:mb-14" style={{ color: 'var(--muted)' }}>
            {cta.back}
          </Link>
        }
        eyebrow={
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(
              locale === 'it' ? 'it-IT' : 'en-US',
              { year: 'numeric', month: 'long', day: 'numeric' }
            )}{' '}
            · {post.readTime}
          </time>
        }
        title={post.title}
        lead={post.description}
      />

      <div className="wrap pb-24 md:pb-40">
        <div className="rule grid gap-6 pt-4 md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3 lg:col-span-7 lg:col-start-4">
            <BlogContent blocks={post.blocks} />
          </div>
        </div>

        <CtaPanel
          className="mt-16 md:mt-24"
          title={
            locale === 'it'
              ? 'Vuoi un sito che porti clienti reali?'
              : 'Want a website that brings real customers?'
          }
          body={
            locale === 'it'
              ? 'Bozza gratuita in 48 ore, senza anticipo. Paghi solo se sei soddisfatto.'
              : 'Free mockup in 48 hours, no upfront payment. Pay only if you love it.'
          }
          cta={cta.label}
          href={cta.href}
        />
      </div>
    </SiteShell>
  )
}
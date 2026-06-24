import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import { getPosts } from '@/lib/blog/posts'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: locale === 'it' ? '/blog' : '/en/blog',
      languages: {
        it: '/blog',
        en: '/en/blog',
      },
    },
  }
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'blog' })
  const posts = getPosts(locale)

  return (
    <SiteShell>
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
            className="mb-12 max-w-[560px] text-[17px] leading-[1.7]"
            style={{ color: 'var(--muted)' }}
          >
            {t('intro')}
          </p>

          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-[var(--line)] p-6 transition-colors duration-300 hover:border-[var(--dim)]"
                style={{ background: 'var(--surface)' }}
              >
                <time
                  className="mb-3 block text-[11px]"
                  style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
                  dateTime={post.date}
                >
                  {new Date(post.date).toLocaleDateString(
                    locale === 'it' ? 'it-IT' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}{' '}
                  · {post.readTime}
                </time>
                <h2
                  className="mb-3 font-semibold leading-[1.25] transition-colors group-hover:text-[var(--accent-green)]"
                  style={{ fontSize: '22px', color: 'var(--fg)' }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-[15px] leading-[1.6]"
                  style={{ color: 'var(--muted)' }}
                >
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
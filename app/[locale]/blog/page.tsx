import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import PageHeader from '@/components/site/PageHeader'
import Arrow from '@/components/home/Arrow'
import { getPosts } from '@/lib/blog/posts'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })

  return withSeo({
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: locale === 'it' ? '/blog' : '/en/blog',
      languages: {
        it: '/blog',
        en: '/en/blog',
      },
    },
  }, locale)
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'blog' })
  const posts = getPosts(locale)

  const dateFmt = (d: string) =>
    new Date(d).toLocaleDateString(locale === 'it' ? 'it-IT' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  return (
    <SiteShell>
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} lead={t('intro')} />

      <section className="wrap pb-24 md:pb-40">
        <ul data-reveal className="rule">
          {posts.map((post, i) => (
            <li key={post.slug} className="border-b" style={{ borderColor: 'var(--line)' }}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-4 py-8 md:grid-cols-12 md:gap-6 md:py-10"
              >
                <div className="flex items-center gap-4 text-[12px] uppercase tracking-[0.14em] md:col-span-3 md:flex-col md:items-start md:gap-2" style={{ color: 'var(--dim)' }}>
                  <span style={{ color: 'var(--accent-fg)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <time dateTime={post.date}>
                    {dateFmt(post.date)} · {post.readTime}
                  </time>
                </div>
                <div className="md:col-span-8">
                  <h2 className="text-[26px] font-normal leading-[1.1] tracking-[-0.035em] transition-colors group-hover:text-[var(--accent-fg)] md:text-[38px]" style={{ color: 'var(--fg)' }}>
                    {post.title}
                  </h2>
                  <p className="mt-4 max-w-[60ch] text-[16px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
                    {post.description}
                  </p>
                </div>
                <div className="arrow-host hidden justify-end md:col-span-1 md:flex" style={{ color: 'var(--fg)' }}>
                  <Arrow />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  )
}

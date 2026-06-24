import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import { getCaseStudies } from '@/lib/projects'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'progettiPage' })

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: locale === 'it' ? '/progetti' : '/en/progetti',
      languages: {
        it: '/progetti',
        en: '/en/progetti',
      },
    },
  }
}

export default async function ProgettiPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'progettiPage' })
  const studies = getCaseStudies(locale)

  const waLink =
    locale === 'it'
      ? 'https://wa.me/393501998569?text=Ciao%2C%20vorrei%20vedere%20il%20tuo%20portfolio'
      : 'https://wa.me/393501998569?text=Hi%2C%20I%27d%20like%20to%20see%20your%20portfolio'

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
            className="mb-12 max-w-[600px] text-[17px] leading-[1.7]"
            style={{ color: 'var(--muted)' }}
          >
            {t('intro')}
          </p>

          <div className="mb-12 flex flex-col gap-8">
            {studies.map((study) => (
              <article
                key={study.id}
                className="rounded-xl border border-[var(--line)] p-6 md:p-8"
                style={{ background: 'var(--surface)' }}
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full border border-[var(--line)] px-3 py-1 text-[11px]"
                    style={{
                      color: 'var(--accent-green)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {study.category}
                  </span>
                  <span
                    className="text-[11px]"
                    style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
                  >
                    {study.location}
                  </span>
                </div>

                <h2
                  className="mb-4 font-semibold leading-[1.25]"
                  style={{ fontSize: '22px', color: 'var(--fg)' }}
                >
                  {study.title}
                </h2>

                <div className="mb-4">
                  <h3
                    className="mb-2 text-[13px] font-medium uppercase tracking-wide"
                    style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
                  >
                    {t('challenge')}
                  </h3>
                  <p
                    className="text-[15px] leading-[1.7]"
                    style={{ color: 'var(--muted)' }}
                  >
                    {study.challenge}
                  </p>
                </div>

                <div className="mb-4">
                  <h3
                    className="mb-2 text-[13px] font-medium uppercase tracking-wide"
                    style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
                  >
                    {t('solution')}
                  </h3>
                  <p
                    className="text-[15px] leading-[1.7]"
                    style={{ color: 'var(--muted)' }}
                  >
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h3
                    className="mb-2 text-[13px] font-medium uppercase tracking-wide"
                    style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
                  >
                    {t('results')}
                  </h3>
                  <ul
                    className="list-disc space-y-1 pl-5 text-[15px] leading-[1.7]"
                    style={{ color: 'var(--muted)' }}
                  >
                    {study.results.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px]"
                      style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p
            className="mb-6 text-[15px] leading-[1.7]"
            style={{ color: 'var(--muted)' }}
          >
            {t('portfolioNote')}
          </p>

          <div className="flex flex-wrap gap-4">
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
              {t('ctaPortfolio')}
            </a>

            <Link
              href="/"
              className="inline-flex items-center px-4 py-3.5 text-[14px]"
              style={{ color: 'var(--muted)' }}
            >
              {t('backHome')}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
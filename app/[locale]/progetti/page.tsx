import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import PageHeader from '@/components/site/PageHeader'
import Arrow from '@/components/home/Arrow'
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
      ? 'https://wa.me/393501998569?text=Ciao%2C%20vorrei%20un%20sito%20per%20la%20mia%20attivit%C3%A0'
      : 'https://wa.me/393501998569?text=Hi%2C%20I%27d%20like%20a%20website%20for%20my%20business'

  return (
    <SiteShell>
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} lead={t('intro')} />

      <section className="wrap pb-24 md:pb-36">
        <div className="flex flex-col">
          {studies.map((study, i) => (
            <article key={study.id} className="rule grid gap-8 py-12 md:grid-cols-12 md:gap-6 md:py-20">
              <div className="md:col-span-5">
                <p className="eyebrow mb-5">
                  <span style={{ color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                  {' / '}
                  {study.category}
                  {' · '}
                  {study.location}
                </p>
                <h2 data-split className="display h-md">
                  {study.title}
                </h2>
                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-[13px]" style={{ color: 'var(--dim)' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div data-reveal className="md:col-span-7">
                {study.image && (
                  <div className="work-card mb-10 overflow-hidden border" style={{ borderColor: 'var(--line)' }}>
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={1200}
                      height={750}
                      sizes="(min-width: 768px) 58vw, 100vw"
                      className="work-img h-auto w-full"
                    />
                  </div>
                )}

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="eyebrow mb-3">{t('challenge')}</h3>
                    <p className="text-[16px] leading-[1.65]" style={{ color: 'var(--muted)' }}>
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="eyebrow mb-3">{t('solution')}</h3>
                    <p className="text-[16px] leading-[1.65]" style={{ color: 'var(--muted)' }}>
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="rule mt-8 pt-6">
                  <h3 className="eyebrow eyebrow-accent mb-4">{t('results')}</h3>
                  <ul className="space-y-2">
                    {study.results.map((r) => (
                      <li key={r} className="flex gap-3 text-[16px] leading-[1.6]" style={{ color: 'var(--fg)' }}>
                        <span className="mt-[0.75em] h-px w-3 shrink-0" style={{ background: 'var(--accent)' }} aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rule pt-12 md:pt-16">
          <p className="lead max-w-[56ch]">{t('portfolioNote')}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent w-full sm:w-auto"
            >
              {t('ctaPortfolio')}
              <Arrow />
            </a>
            <Link href="/" className="btn btn-ghost w-full sm:w-auto">
              {t('backHome')}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
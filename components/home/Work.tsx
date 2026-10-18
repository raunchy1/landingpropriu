import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ecomCats, ecomCredit, ecomSites } from '@/lib/ecomunicare'
import { IconTile } from '@/components/icons/AnimIcon'
import Arrow from './Arrow'

const PICK = ['hotel-albrici', 'laperla', 'castelmur', 'villa-pia', 'borgo-pievina', 'palazzo-salis', 'mcsbau', 'blumengalerie', 'coiffeur3', 'zanetti']

/** Auto-scrolling rail of real portfolio sites in browser frames (pauses on hover). */
export default async function Work() {
  const t = await getTranslations('home.work')
  const loc = (await getLocale()) === 'en' ? 'en' : 'it'
  const sites = PICK.map((id) => ecomSites.find((s) => s.id === id)).filter((s): s is (typeof ecomSites)[number] => !!s)
  const cat = (id: string) => {
    const c = ecomCats.find((k) => k.id === id)
    return c ? c[loc] : ''
  }

  const row = (hidden: boolean) =>
    sites.map((s) => (
      <li key={`${s.id}${hidden ? '-b' : ''}`} aria-hidden={hidden || undefined} className="w-[300px] shrink-0 md:w-[420px]">
        <Link href="/portfolio" tabIndex={hidden ? -1 : undefined} className="work-card group block">
          <div className="bframe">
            <div className="bframe-bar">
              <i />
              <i />
              <i />
              <span className="bframe-url">{s.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/portfolio/ecomunicare/${s.id}.webp`} alt={hidden ? '' : s.name} loading="lazy" className="work-img absolute inset-0 h-full w-full object-cover object-top" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-4 px-1">
            <span className="text-[17px] tracking-[-0.01em]">{s.name}</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: 'var(--dim)' }}>
              {cat(s.cat)}
            </span>
          </div>
        </Link>
      </li>
    ))

  return (
    <section id="lavori" className="rule relative overflow-hidden py-24 md:py-40">
      <div className="wrap flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-6 inline-flex items-center gap-3 md:mb-8">
            <IconTile name="browser" size="sm" />
            {t('eyebrow')}
          </p>
          <h2 data-split className="display h-lg max-w-[14ch]">
            {t('title')}
          </h2>
          <p className="lead mt-6 max-w-[52ch] md:mt-8">{t('intro')}</p>
        </div>
        <Link href="/portfolio" className="btn btn-ghost self-start md:self-end">
          {t('cta')}
          <Arrow />
        </Link>
      </div>

      <div className="work-rail mt-14 md:mt-20">
        <ul className="work-track">
          {row(false)}
          {row(true)}
        </ul>
      </div>
      <p className="wrap mt-8 text-[13px]" style={{ color: 'var(--dim)' }}>
        {ecomCredit[loc]}
      </p>
    </section>
  )
}

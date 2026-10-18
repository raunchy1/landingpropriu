import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import AnimIcon, { IconTile, type IconName } from '@/components/icons/AnimIcon'
import Arrow from '@/components/home/Arrow'
import Head from './Head'

const badgeIcons: IconName[] = ['clock', 'key', 'check']

export default async function Offer() {
  const t = await getTranslations('home.offer')
  const badges = t.raw('badges') as string[]
  const included = t.raw('included') as string[]
  const excluded = t.raw('excluded') as string[]

  return (
    <section id="offerta" className="r-section">
      <div className="wrap">
        <Head eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} center />

        <div data-reveal className="mx-auto mt-14 grid max-w-[1080px] gap-4 md:mt-20 lg:grid-cols-5">
          {/* price card */}
          <div className="r-card r-dark relative flex flex-col overflow-hidden p-8 md:p-10 lg:col-span-3">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -right-20 h-[360px] w-[360px] rounded-full opacity-50 blur-[80px]"
              style={{ background: 'radial-gradient(closest-side, rgba(228,242,34,.6), transparent)' }}
            />
            <div className="relative flex items-center justify-between gap-4">
              <p className="text-[15px] font-medium">{t('cardLabel')}</p>
              <IconTile name="sparkle" size="md" className="itile-ink" />
            </div>
            <p className="relative mt-10 font-semibold leading-none tracking-[-0.06em]" style={{ fontSize: 'clamp(84px, 13vw, 164px)', color: 'var(--accent)' }}>
              {t('price')}
            </p>
            <p className="relative mt-4 text-[15px]" style={{ color: '#a9a8a1' }}>
              {t('priceNote')}
            </p>
            <ul className="relative mt-8 flex flex-wrap gap-2">
              {badges.map((b, i) => (
                <li key={b} className="inline-flex items-center gap-2 rounded-full py-2 pl-2 pr-4 text-[14px]" style={{ background: '#262626' }}>
                  <span className="h-[20px] w-[20px]" style={{ color: 'var(--accent)' }}>
                    <AnimIcon name={badgeIcons[i]} delay={i * 200} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <WhatsAppLink location="pricing" className="btn btn-accent relative mt-10 w-full sm:w-auto sm:self-start">
              {t('cta')}
              <Arrow />
            </WhatsAppLink>
          </div>

          {/* included / excluded */}
          <div className="grid gap-4 lg:col-span-2">
            <div className="r-card p-7 md:p-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em]">{t('includedTitle')}</p>
              <ul className="mt-5 space-y-3">
                {included.map((x) => (
                  <li key={x} className="flex gap-3 text-[15px] leading-[1.45]">
                    <span className="mt-[1px] grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full" style={{ background: 'var(--accent)' }}>
                      <span className="h-[13px] w-[13px]">
                        <AnimIcon name="tick" />
                      </span>
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="r-card p-7 md:p-8" style={{ background: 'transparent', boxShadow: 'inset 0 0 0 1px var(--line)' }}>
              <p className="text-[13px] font-semibold uppercase tracking-[0.08em]" style={{ color: 'var(--muted)' }}>
                {t('excludedTitle')}
              </p>
              <ul className="mt-5 space-y-3">
                {excluded.map((x) => (
                  <li key={x} className="flex gap-3 text-[15px] leading-[1.45]" style={{ color: 'var(--muted)' }}>
                    <span className="mt-[1px] grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full" style={{ background: 'var(--card)' }}>
                      <span className="h-[13px] w-[13px]">
                        <AnimIcon name="minus" />
                      </span>
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[13px]" style={{ color: 'var(--dim)' }}>
                {t('excludedNote')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

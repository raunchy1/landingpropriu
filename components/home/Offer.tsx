import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import AnimIcon, { IconTile, type IconName } from '@/components/icons/AnimIcon'
import Arrow from './Arrow'
import SectionHead from './SectionHead'

const BADGE_ICONS: IconName[] = ['clock', 'coin', 'check']

export default async function Offer() {
  const t = await getTranslations('home.offer')
  const included = t.raw('included') as string[]
  const excluded = t.raw('excluded') as string[]
  const badges = t.raw('badges') as string[]

  return (
    <section id="offerta" className="rule relative py-24 md:py-40">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <SectionHead eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} />
          <ul data-reveal className="mt-10 flex flex-col gap-3">
            {badges.map((b, i) => (
              <li key={b} className="itile-host flex items-center gap-4 text-[16px]">
                <IconTile name={BADGE_ICONS[i % BADGE_ICONS.length]} size="sm" delay={i * 150} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="lg:col-span-7">
          <article className="offer-card relative overflow-hidden rounded-[28px] p-6 sm:p-10">
            <div className="aurora aurora-a right-[-20%] top-[-30%] h-[420px] w-[420px] opacity-40" aria-hidden="true" />
            <div className="relative flex items-center justify-between border-b pb-5 font-mono text-[11px] uppercase tracking-[0.16em]" style={{ borderColor: 'var(--glass-line)', color: 'var(--muted)' }}>
              <span className="inline-flex items-center gap-3">
                <span className="h-[18px] w-[18px]" style={{ color: 'var(--accent)' }}>
                  <AnimIcon name="browser" />
                </span>
                {t('cardLabel')}
              </span>
              <span>WS / 01</span>
            </div>
            <div className="price-glow relative isolate mt-10">
              <p className="text-grad font-normal leading-none tracking-[-0.06em]" style={{ fontSize: 'clamp(84px, 14vw, 168px)' }}>
                {t('price')}
              </p>
            </div>
            <p className="relative mt-4 text-[14px]" style={{ color: 'var(--muted)' }}>
              {t('priceNote')}
            </p>

            <div className="relative mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--accent)' }}>
                  {t('includedTitle')}
                </h3>
                <ul className="space-y-3.5 text-[15px] leading-[1.45]">
                  {included.map((x, i) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-[1px] grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full" style={{ background: 'rgba(46,242,200,.12)', color: 'var(--accent)' }}>
                        <span className="h-[12px] w-[12px]">
                          <AnimIcon name="tick" delay={i * 90} />
                        </span>
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--dim)' }}>
                  {t('excludedTitle')}
                </h3>
                <ul className="space-y-3.5 text-[15px] leading-[1.45]" style={{ color: 'var(--muted)' }}>
                  {excluded.map((x, i) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-[1px] grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full" style={{ background: 'rgba(239,230,210,.06)', color: 'var(--dim)' }}>
                        <span className="h-[12px] w-[12px]">
                          <AnimIcon name="minus" delay={300 + i * 90} />
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

            <WhatsAppLink location="pricing" className="btn btn-accent btn-glow relative mt-10 w-full">
              {t('cta')}
              <Arrow />
            </WhatsAppLink>
          </article>
        </div>
      </div>
    </section>
  )
}

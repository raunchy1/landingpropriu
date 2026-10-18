import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import AnimIcon, { IconTile, type IconName } from '@/components/icons/AnimIcon'
import Arrow from './Arrow'
import HeroVisual from './HeroVisual'
import MotionToggle from './MotionToggle'

const CHIP_ICONS: IconName[] = ['clock', 'coin', 'check']

export default async function Hero() {
  const t = await getTranslations('home.hero')
  const tOffer = await getTranslations('home.offer')
  const chips = tOffer.raw('badges') as string[]

  return (
    <section id="hero" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-[104px] md:pt-[140px]">
      {/* ambient layers */}
      <div className="bg-dots pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="aurora aurora-a -z-10 right-[-12%] top-[6%] h-[560px] w-[560px]" aria-hidden="true" />
      <div className="aurora aurora-b -z-10 left-[-18%] top-[46%] h-[480px] w-[620px] opacity-30" aria-hidden="true" />

      <div className="wrap grid flex-1 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="relative z-10 lg:col-span-7">
          <p className="mb-7 inline-flex items-center gap-3 rounded-full border py-1.5 pl-1.5 pr-4 md:mb-10" style={{ borderColor: 'var(--glass-line)', background: 'var(--glass)' }}>
            <IconTile name="sparkle" size="sm" className="is-live" />
            <span className="eyebrow" style={{ color: 'var(--fg)' }}>{t('eyebrow')}</span>
          </p>
          <h1 data-split className="display" style={{ fontSize: 'clamp(46px, 6.6vw, 104px)' }}>
            <span className="block text-grad">{t('line1')}</span>
            <span className="block text-grad">{t('line2')}</span>
            <span className="block text-grad-accent glow-text">{t('line3')}</span>
          </h1>
          <div data-reveal className="mt-8 md:mt-12">
            <p className="lead max-w-[46ch]">{t('sub')}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-10">
              <WhatsAppLink location="hero" className="btn btn-accent btn-glow w-full sm:w-auto">
                <span className="inline-flex items-center gap-3">
                  <span className="h-[20px] w-[20px]">
                    <AnimIcon name="chat" delay={900} />
                  </span>
                  {t('cta')}
                </span>
                <Arrow />
              </WhatsAppLink>
              <a href="#offerta" className="btn btn-ghost w-full sm:w-auto">
                {t('secondary')}
                <Arrow dir="down" />
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: 'var(--muted)' }}>
              {chips.map((c, i) => (
                <li key={c} className="inline-flex items-center gap-2">
                  <span className="h-[16px] w-[16px]" style={{ color: 'var(--accent)' }}>
                    <AnimIcon name={CHIP_ICONS[i % CHIP_ICONS.length]} delay={1100 + i * 180} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative h-[320px] sm:h-[400px] lg:col-span-5 lg:h-[580px]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border" style={{ borderColor: 'var(--glass-line)' }} aria-hidden="true" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed" style={{ borderColor: 'rgba(46,242,200,.18)' }} aria-hidden="true" />
          <HeroVisual label1={t('label1')} label2={t('label2')} />
          <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
            <div className="absolute left-0 top-[16%]">
              <span className="chip-float">
                <IconTile name="clock" size="sm" />
                {chips[0]}
              </span>
            </div>
            <div className="absolute right-0 top-[48%]">
              <span className="chip-float" style={{ animationDelay: '-2s' }}>
                <IconTile name="pin" size="sm" />
                Sardegna
              </span>
            </div>
            <div className="absolute bottom-[16%] left-[6%]">
              <span className="chip-float" style={{ animationDelay: '-4s' }}>
                <IconTile name="shield" size="sm" />
                {chips[2]}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap mt-10">
        <div className="rule flex items-center justify-between py-5">
          <MotionToggle className="md:invisible" />
          <a href="#problema" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.16em]" style={{ color: 'var(--fg)' }}>
            {t('scroll')}
            <Arrow dir="down" />
          </a>
        </div>
      </div>
    </section>
  )
}

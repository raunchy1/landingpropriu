import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from './Arrow'
import HeroVisual from './HeroVisual'
import MotionToggle from './MotionToggle'

export default async function Hero() {
  const t = await getTranslations('home.hero')

  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col pt-[104px] md:pt-[140px]">
      <div className="wrap grid flex-1 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="relative z-10 lg:col-span-8">
          <p className="eyebrow mb-7 md:mb-10">{t('eyebrow')}</p>
          <h1 data-split className="display" style={{ fontSize: 'clamp(46px, 6.6vw, 104px)' }}>
            <span className="block">{t('line1')}</span>
            <span className="block">{t('line2')}</span>
            <span className="block" style={{ color: 'var(--accent)' }}>
              {t('line3')}
            </span>
          </h1>
          <div data-reveal className="mt-8 md:mt-12">
            <p className="lead max-w-[46ch]">{t('sub')}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-10">
              <WhatsAppLink location="hero" className="btn btn-accent w-full sm:w-auto">
                {t('cta')}
                <Arrow />
              </WhatsAppLink>
              <a href="#offerta" className="btn btn-ghost w-full sm:w-auto">
                {t('secondary')}
                <Arrow dir="down" />
              </a>
            </div>
            <p className="mt-4 text-[13px]" style={{ color: 'var(--dim)' }}>
              {t('ctaNote')}
            </p>
          </div>
        </div>
        <div className="relative h-[300px] sm:h-[380px] lg:col-span-4 lg:h-[560px]">
          <HeroVisual label1={t('label1')} label2={t('label2')} />
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

import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from './Arrow'

export default async function Hero() {
  const t = await getTranslations('home.hero')

  return (
    <section id="hero" className="pb-16 pt-[88px] md:pb-24 md:pt-[112px]">
      <div className="wrap">
        <p className="eyebrow mb-6 md:mb-8">{t('eyebrow')}</p>
        <h1
          data-split
          className="display max-w-[14ch] font-semibold"
          style={{ fontSize: 'clamp(44px, 7.4vw, 108px)', lineHeight: 0.88, letterSpacing: '-0.062em' }}
        >
          <span className="block">{t('line1')}</span>
          <span className="block">{t('line2')}</span>
          <span className="block" style={{ color: '#0b5e46' }}>
            {t('line3')}
          </span>
        </h1>

        <div id="hero-cta" data-reveal className="mt-8 max-w-[640px] md:mt-10">
          <p className="text-[17px] leading-[1.5] md:text-[19px]" style={{ color: 'var(--muted)' }}>
            {t('sub')}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
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

        <figure className="mt-12 md:mt-16">
          <a href="/bozze/limitless-barbers" className="group block">
            <div className="overflow-hidden border" style={{ borderColor: '#111' }}>
              <img
                src="/bozze/limitless-barbers/img/interior_a88_01.jpg"
                alt={t('plateAlt')}
                width={1600}
                height={1200}
                fetchPriority="high"
                className="work-img aspect-[4/3] w-full object-cover md:aspect-[16/10]"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <span className="text-[15px] font-medium tracking-[-0.02em]">{t('plateName')}</span>
              <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
                {t('plateMeta')}
                <span className="ml-4 underline decoration-[#d5d5d0] underline-offset-4 group-hover:decoration-[#111]">
                  {t('plateOpen')}
                </span>
              </span>
            </figcaption>
          </a>
        </figure>
      </div>
    </section>
  )
}

import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import AnimIcon from '@/components/icons/AnimIcon'
import Arrow from '@/components/home/Arrow'

export default async function FinalCta() {
  const t = await getTranslations('home.final')
  const tHero = await getTranslations('home.hero')

  return (
    <section id="contatti" className="pb-24 md:pb-32">
      <div className="wrap">
        <div className="r-card r-lime relative overflow-hidden px-7 py-14 sm:px-12 md:px-20 md:py-24">
          <div className="pointer-events-none absolute right-12 top-12 hidden h-[140px] w-[140px] md:block" aria-hidden="true">
            <AnimIcon name="sparkle" />
          </div>
          <p className="eyebrow mb-5 uppercase" style={{ color: 'var(--ink)' }}>
            {t('eyebrow').replace(/^\d+\s*\/\s*/, '')}
          </p>
          <h2 data-split className="display max-w-[14ch]" style={{ fontSize: 'clamp(42px, 7vw, 104px)' }}>
            {t('title')}
          </h2>
          <p className="mt-6 max-w-[44ch] text-[18px] leading-[1.5]">{t('body')}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppLink location="final_cta" className="btn btn-ink">
              <span className="inline-flex items-center gap-3">
                <span className="h-[20px] w-[20px]" style={{ color: 'var(--accent)' }}>
                  <AnimIcon name="chat" />
                </span>
                {tHero('cta')}
              </span>
              <Arrow />
            </WhatsAppLink>
            <a href="tel:+393501998569" className="btn" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.25)', paddingRight: 20 }}>
              <span className="inline-flex items-center gap-3">
                <span className="h-[20px] w-[20px]">
                  <AnimIcon name="phone" />
                </span>
                {t('phone')}
              </span>
            </a>
            <a href="https://instagram.com/websardegna" target="_blank" rel="noopener noreferrer" className="btn" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.25)', paddingRight: 20 }}>
              <span className="inline-flex items-center gap-3">
                <span className="h-[20px] w-[20px]">
                  <AnimIcon name="instagram" />
                </span>
                {t('ig')}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

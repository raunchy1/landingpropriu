import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import AnimIcon, { IconTile } from '@/components/icons/AnimIcon'
import Arrow from '@/components/home/Arrow'
import MotionToggle from '@/components/home/MotionToggle'
import { ecomSites } from '@/lib/ecomunicare'
import SiteScreen from './SiteScreen'

const site = (id: string) => ecomSites.find((s) => s.id === id)!

export default async function Hero() {
  const t = await getTranslations('home.hero')
  const r = await getTranslations('home.ramp')
  const main = site('borgo-pievina')
  const side = site('hotel-albrici')

  return (
    <section id="hero" className="relative pt-[104px] md:pt-[140px]">
      <div className="wrap">
        <div data-reveal className="flex flex-wrap items-center gap-3">
          <span className="r-tag">
            <i />
            {r('tag')}
          </span>
          <span className="text-[13px] font-medium" style={{ color: 'var(--dim)' }}>
            {t('eyebrow')}
          </span>
        </div>

        <h1 data-split className="display mt-6 max-w-[12ch] md:mt-8" style={{ fontSize: 'clamp(52px, 9vw, 136px)' }}>
          {t('line1')} {t('line2')} <span className="r-mark">{t('line3')}</span>
        </h1>

        <div data-reveal className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-12 lg:items-end">
          <p className="lead max-w-[46ch] lg:col-span-6">{t('sub')}</p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end">
            <WhatsAppLink location="hero" className="btn btn-accent">
              <span className="inline-flex items-center gap-3">
                <span className="h-[20px] w-[20px]">
                  <AnimIcon name="chat" delay={900} />
                </span>
                {t('cta')}
              </span>
              <Arrow />
            </WhatsAppLink>
            <a href="#lavori" className="btn btn-ghost">
              {r('work.eyebrow')}
              <Arrow dir="down" />
            </a>
          </div>
        </div>
      </div>

      {/* product stage: real sites running inside the hero */}
      <div className="wrap mt-12 md:mt-16">
        <div className="r-card relative overflow-hidden px-4 pb-0 pt-10 sm:px-10 md:px-16 md:pt-16" style={{ background: 'var(--ink)' }}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-60 blur-[90px]"
            style={{ background: 'radial-gradient(closest-side, rgba(228,242,34,.55), transparent)' }}
          />
          <div className="relative mx-auto max-w-[980px]">
            <SiteScreen id={main.id} url={main.url} name={main.name} priority live={r('live')} className="r-flat-b" />
            <div className="absolute -right-2 bottom-10 hidden w-[34%] md:block lg:-right-14">
              <SiteScreen id={side.id} url={side.url} name={side.name} />
            </div>
            <div className="pointer-events-none absolute -left-2 top-[18%] hidden sm:block lg:-left-14">
              <span className="r-chip">
                <IconTile name="clock" size="sm" className="itile-lime" />
                <span>
                  {r('chipDraft')}
                  <small>{r('chipDraftSub')}</small>
                </span>
              </span>
            </div>
            <div className="pointer-events-none absolute -left-2 top-[52%] hidden sm:block lg:-left-20" style={{ animationDelay: '-2s' }}>
              <span className="r-chip" style={{ animationDelay: '-2.5s' }}>
                <IconTile name="coin" size="sm" />
                <span>
                  {r('chipPrice')}
                  <small>{r('chipPriceSub')}</small>
                </span>
              </span>
            </div>
            <div className="pointer-events-none absolute -right-2 top-[16%] hidden md:block lg:-right-12">
              <span className="r-chip" style={{ animationDelay: '-4s' }}>
                <IconTile name="check" size="sm" className="itile-lime" />
                {r('chipPay')}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-5">
          <MotionToggle />
          <span className="text-[13px]" style={{ color: 'var(--dim)' }}>
            {t('ctaNote')}
          </span>
        </div>
      </div>
    </section>
  )
}

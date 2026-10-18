import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import AnimIcon, { IconTile } from '@/components/icons/AnimIcon'
import Arrow from './Arrow'

export default async function FinalCta() {
  const t = await getTranslations('home.final')

  return (
    <section id="contatti" className="rule relative isolate overflow-hidden pb-28 pt-24 md:pb-40 md:pt-40">
      <div className="bg-dots pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="aurora aurora-a -z-10 bottom-[-20%] left-[-10%] h-[520px] w-[720px] opacity-30" aria-hidden="true" />
      <div className="wrap">
        <p className="eyebrow mb-6 md:mb-8">{t('eyebrow')}</p>
        <h2 data-split className="display h-xl max-w-[12ch]">
          {t('title')}
        </h2>
        <p className="lead mt-8 max-w-[48ch]">{t('body')}</p>

        <div data-reveal className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2">
          <WhatsAppLink
            location="final_cta"
            className="group flex flex-col justify-between gap-10 rounded-[24px] p-7 transition-[box-shadow] md:p-10 btn-glow"
            style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}
          >
            <span className="flex items-center justify-between text-[12px] uppercase tracking-[0.16em]">
              <span className="inline-flex items-center gap-3">
                <span className="h-[30px] w-[30px]">
                  <AnimIcon name="chat" />
                </span>
                {t('waLabel')}
              </span>
              <Arrow />
            </span>
            <span className="text-[38px] font-normal leading-none tracking-[-0.04em] md:text-[58px]">{t('phone')}</span>
          </WhatsAppLink>
          <a
            href="https://instagram.com/websardegna"
            target="_blank"
            rel="noopener noreferrer"
            className="gcard flex flex-col justify-between gap-10 p-7 md:p-10"
          >
            <span className="flex items-center justify-between text-[12px] uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>
              <span className="inline-flex items-center gap-3">
                <IconTile name="instagram" size="sm" />
                {t('igLabel')}
              </span>
              <Arrow />
            </span>
            <span className="text-[38px] font-normal leading-none tracking-[-0.04em] md:text-[58px]">{t('ig')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

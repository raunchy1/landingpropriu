import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from './Arrow'

/** Full-bleed colour band. Copy is the existing 48h / no-deposit promise. */
export default async function Statement() {
  const t = await getTranslations('home.statement')

  return (
    <section aria-label={t('line1')} style={{ background: '#14a07c', color: '#111' }}>
      <div className="wrap py-16 md:py-24">
        <h2
          data-split
          className="max-w-[14ch] font-semibold"
          style={{ fontSize: 'clamp(40px, 6.2vw, 88px)', lineHeight: 0.9, letterSpacing: '-0.055em' }}
        >
          {t('line1')}
        </h2>
        <p className="mt-5 max-w-[22ch] text-[clamp(22px,3vw,36px)] font-medium leading-[1.15] tracking-[-0.035em]">
          {t('line2')}
        </p>
        <WhatsAppLink
          location="statement"
          className="btn btn-accent mt-8 w-full sm:w-auto"
          style={{ background: '#08241c', color: '#f4fff9' }}
        >
          {t('cta')}
          <Arrow />
        </WhatsAppLink>
      </div>
    </section>
  )
}

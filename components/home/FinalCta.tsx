import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from './Arrow'
import { business } from '@/lib/business'

export default async function FinalCta() {
  const t = await getTranslations('home.final')

  return (
    <section id="parliamo" className="pb-8 pt-8 md:pb-16 md:pt-12">
      <div className="wrap">
        <div className="border-t pt-12 md:pt-16" style={{ borderColor: '#111' }}>
          <p className="eyebrow mb-6">{t('eyebrow')}</p>
          <h2
            data-split
            className="display font-semibold"
            style={{ fontSize: 'clamp(64px, 12vw, 168px)', lineHeight: 0.84, letterSpacing: '-0.065em' }}
          >
            {t('talk')}
          </h2>
          <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.5] md:text-[19px]" style={{ color: 'var(--muted)' }}>
            {t('body')}
          </p>

          <div data-reveal className="mt-10 md:mt-14">
            <p className="text-[13px] uppercase tracking-[0.16em]" style={{ color: 'var(--dim)' }}>
              {t('waLabel')}
            </p>
            <WhatsAppLink
              location="final_cta"
              ariaLabel={`${t('waLabel')} ${business.phone}`}
              className="mt-2 inline-block font-semibold tracking-[-0.05em] underline decoration-transparent underline-offset-8 hover:decoration-[#111]"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, color: '#111' }}
            >
              {business.phone}
            </WhatsAppLink>
            <div className="mt-6">
              <WhatsAppLink location="final_cta" className="btn btn-accent w-full sm:w-auto">
                {t('waLabel')}
                <Arrow />
              </WhatsAppLink>
            </div>

            <p className="mt-12 text-[13px] uppercase tracking-[0.16em]" style={{ color: 'var(--dim)' }}>
              {t('emailLabel')}
            </p>
            <a
              href={`mailto:${business.email}`}
              className="mt-2 inline-block font-medium tracking-[-0.04em] hover:underline"
              style={{ fontSize: 'clamp(22px, 3vw, 40px)', color: '#5c5c5c' }}
            >
              {business.email}
            </a>

            <p className="mt-10 text-[15px]">
              <a
                href="https://instagram.com/websardegna"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#d5d5d0] underline-offset-4 hover:decoration-[#111]"
              >
                {t('igLabel')} {t('ig')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

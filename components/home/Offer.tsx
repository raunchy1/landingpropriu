import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from './Arrow'
import SectionHead from './SectionHead'

export default async function Offer() {
  const t = await getTranslations('home.offer')
  const included = t.raw('included') as string[]
  const excluded = t.raw('excluded') as string[]
  const badges = t.raw('badges') as string[]

  return (
    <section id="offerta" className="rule py-24 md:py-40">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <SectionHead eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} />
          <ul data-reveal className="mt-10 flex flex-wrap gap-2">
            {badges.map((b) => (
              <li key={b} className="rounded-full border px-4 py-2 text-[13px]" style={{ borderColor: 'var(--dim-line)', color: 'var(--fg)' }}>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="lg:col-span-7">
          <article className="p-6 sm:p-10" style={{ background: 'var(--fg)', color: '#11161c' }}>
            <div className="flex items-center justify-between border-b pb-5 text-[12px] uppercase tracking-[0.16em]" style={{ borderColor: '#d3c9b2' }}>
              <span>{t('cardLabel')}</span>
              <span>WS / 01</span>
            </div>
            <p className="mt-10 font-normal leading-none tracking-[-0.05em]" style={{ fontSize: 'clamp(72px, 13vw, 148px)' }}>
              {t('price')}
            </p>
            <p className="mt-4 text-[14px]" style={{ color: '#4a4539' }}>
              {t('priceNote')}
            </p>

            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 text-[12px] uppercase tracking-[0.16em]">{t('includedTitle')}</h3>
                <ul className="space-y-3 text-[15px] leading-[1.45]">
                  {included.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[7px] inline-block h-[8px] w-[8px] shrink-0 rounded-full" style={{ background: '#0a8f74' }} />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-[12px] uppercase tracking-[0.16em]">{t('excludedTitle')}</h3>
                <ul className="space-y-3 text-[15px] leading-[1.45]" style={{ color: '#5b5547' }}>
                  {excluded.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[11px] inline-block h-px w-[10px] shrink-0" style={{ background: '#8a826f' }} />
                      {x}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[13px]" style={{ color: '#5b5547' }}>
                  {t('excludedNote')}
                </p>
              </div>
            </div>

            <WhatsAppLink
              location="pricing"
              className="mt-10 flex min-h-[56px] items-center justify-between border-b text-[17px] transition-colors hover:text-[#0a8f74]"
              style={{ borderColor: '#11161c' }}
            >
              {t('cta')}
              <Arrow />
            </WhatsAppLink>
          </article>
        </div>
      </div>
    </section>
  )
}

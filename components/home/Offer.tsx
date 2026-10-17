import { getTranslations } from 'next-intl/server'
import WhatsAppLink from '@/components/WhatsAppLink'

export default async function Offer() {
  const t = await getTranslations('home.offer')
  const included = t.raw('included') as string[]
  const excluded = t.raw('excluded') as string[]
  const badges = t.raw('badges') as string[]

  return (
    <section id="offerta" className="border-t py-20 md:py-28" style={{ borderColor: 'var(--line)' }}>
      <div className="wrap grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-6 md:mb-8">{t('eyebrow')}</p>
          <h2
            data-split
            className="display font-semibold"
            style={{ fontSize: 'clamp(44px, 5.6vw, 80px)', lineHeight: 0.9, letterSpacing: '-0.058em' }}
          >
            {t('title')}
          </h2>
          <p className="mt-6 max-w-[36ch] text-[17px] leading-[1.5]" style={{ color: 'var(--muted)' }}>
            {t('intro')}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <li key={b} className="rounded-full border px-3.5 py-1.5 text-[13px]" style={{ borderColor: '#d5d5d0' }}>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <article className="flex flex-col rounded-[28px] bg-[#f4f4f2] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[15px] font-medium tracking-[-0.02em]">{t('cardLabel')}</h3>
              <span className="rounded-full bg-white px-3 py-1 text-[12px] font-medium">
                {badges[1]}
              </span>
            </div>

            <p className="mt-8 flex items-end gap-2 font-semibold leading-none tracking-[-0.06em]" style={{ fontSize: 'clamp(64px, 8vw, 84px)' }}>
              {t('price')}
              <span className="mb-2 text-[15px] font-medium tracking-[-0.01em]" style={{ color: 'var(--muted)' }}>
                {t('once')}
              </span>
            </p>
            <p className="mt-3 text-[14px] leading-[1.45]" style={{ color: 'var(--muted)' }}>
              {t('priceNote')}
            </p>

            <ul className="mt-8 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-[1.4]">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <WhatsAppLink location="pricing" className="btn btn-accent mt-8 w-full justify-center">
              {t('cta')}
            </WhatsAppLink>
          </article>
        </div>
      </div>

      <div className="wrap mt-10 md:mt-14">
        <div className="rounded-[28px] border p-6 sm:p-8" style={{ borderColor: 'var(--line)' }}>
          <h3 className="text-[13px] font-medium uppercase tracking-[0.14em]" style={{ color: 'var(--dim)' }}>
            {t('excludedTitle')}
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {excluded.map((item) => (
              <li key={item} className="text-[15px] leading-[1.45]" style={{ color: 'var(--muted)' }}>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[14px]" style={{ color: 'var(--dim)' }}>
            {t('excludedNote')}
          </p>
        </div>
      </div>
    </section>
  )
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
      <path d="M3.5 9.2 7.1 12.8 14.5 5.2" stroke="#111" strokeWidth="1.6" />
    </svg>
  )
}

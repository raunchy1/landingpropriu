import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import Arrow from './Arrow'

type Item = { title: string; body: string }

export default async function Services() {
  const t = await getTranslations('home.services')
  const offer = await getTranslations('home.offer')
  const problem = await getTranslations('home.problem')
  const included = offer.raw('included') as string[]
  const pains = problem.raw('items') as Item[]

  return (
    <section id="servizi" className="py-20 md:py-28">
      <div className="wrap">
        <p className="eyebrow mb-6 md:mb-8">{t('eyebrow')}</p>
        <div className="grid gap-8 md:grid-cols-12 md:gap-6">
          <h2
            data-split
            className="display font-semibold md:col-span-7"
            style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.055em' }}
          >
            {t('title')}
          </h2>
          <p className="max-w-[42ch] text-[17px] leading-[1.55] md:col-span-5 md:pt-3" style={{ color: 'var(--muted)' }}>
            {t('intro')}
          </p>
        </div>

        <ol data-reveal className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: 'var(--line)' }}>
          {included.map((item, i) => (
            <li key={item} className="flex gap-4 bg-white p-6 md:p-7">
              <span className="text-[13px] tabular-nums" style={{ color: '#0b5e46' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-[16px] leading-[1.45] tracking-[-0.015em]">{item}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 border-t pt-12 md:mt-20 md:pt-16" style={{ borderColor: 'var(--line)' }}>
          <h3
            className="max-w-[18ch] text-[clamp(28px,3.4vw,44px)] font-semibold leading-[1.05] tracking-[-0.045em]"
          >
            {problem('title')}
          </h3>
          <p className="mt-4 max-w-[48ch] text-[16px] leading-[1.55]" style={{ color: 'var(--muted)' }}>
            {problem('intro')}
          </p>
          <ul data-reveal className="mt-10 grid gap-8 md:grid-cols-3">
            {pains.map((item, i) => (
              <li key={item.title} className="border-t pt-5" style={{ borderColor: 'var(--line)' }}>
                <span className="text-[12px] tabular-nums" style={{ color: '#0b5e46' }}>
                  0{i + 1}
                </span>
                <h4 className="mt-3 text-[22px] font-medium tracking-[-0.03em]">{item.title}</h4>
                <p className="mt-2 text-[15px] leading-[1.55]" style={{ color: 'var(--muted)' }}>
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="mt-14 flex flex-col items-start gap-4 border-t pt-8 md:mt-16" style={{ borderColor: 'var(--line)' }}>
          <p className="max-w-[46ch] text-[16px] leading-[1.5]" style={{ color: 'var(--muted)' }}>
            {t('more')}
          </p>
          <Link href="/servizi" className="ulink">
            {t('all')}
            <span className="arrow-host">
              <Arrow />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

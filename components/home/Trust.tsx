import { getTranslations } from 'next-intl/server'
import SectionHead from './SectionHead'

type Item = { title: string; body: string }

export default async function Trust() {
  const t = await getTranslations('home.trust')
  const items = t.raw('items') as Item[]

  return (
    <section id="garanzie" className="rule py-24 md:py-40">
      <div className="wrap">
        <SectionHead eyebrow={t('eyebrow')} title={t('title')} />
        <ul data-reveal className="mt-16 grid gap-x-6 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {items.map((it, i) => (
            <li key={it.title} className="border-t py-8" style={{ borderColor: 'var(--dim-line)' }}>
              <span className="text-[13px] tabular-nums" style={{ color: 'var(--accent)' }}>
                0{i + 1}
              </span>
              <h3 className="mt-6 text-[22px] font-normal leading-[1.15] tracking-[-0.025em] md:text-[24px]">{it.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
                {it.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

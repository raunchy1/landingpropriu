import { getTranslations } from 'next-intl/server'
import SectionHead from './SectionHead'

type Item = { title: string; body: string }

export default async function Problem() {
  const t = await getTranslations('home.problem')
  const items = t.raw('items') as Item[]

  return (
    <section id="problema" className="py-24 md:py-40">
      <div className="wrap">
        <SectionHead eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} />
        <ol data-reveal className="mt-16 grid gap-px md:mt-24 md:grid-cols-3" style={{ background: 'var(--line)' }}>
          {items.map((it, i) => (
            <li key={it.title} className="flex flex-col p-7 md:min-h-[300px] md:p-9" style={{ background: 'var(--bg)' }}>
              <span className="text-[13px] tabular-nums" style={{ color: 'var(--accent)' }}>
                0{i + 1}
              </span>
              <h3 className="mt-10 text-[28px] font-normal tracking-[-0.03em] md:mt-auto md:text-[34px]">{it.title}</h3>
              <p className="mt-3 text-[16px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
                {it.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

import { getTranslations } from 'next-intl/server'
import { IconTile, type IconName } from '@/components/icons/AnimIcon'
import SectionHead from './SectionHead'

type Item = { title: string; body: string }

const ICONS: IconName[] = ['search', 'pin', 'shield']

export default async function Problem() {
  const t = await getTranslations('home.problem')
  const items = t.raw('items') as Item[]

  return (
    <section id="problema" className="relative py-24 md:py-40">
      <div className="wrap">
        <SectionHead eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} />
        <ol data-reveal className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3 md:gap-5">
          {items.map((it, i) => (
            <li key={it.title} className="gcard flex flex-col p-7 md:min-h-[340px] md:p-9">
              <div className="flex items-start justify-between">
                <IconTile name={ICONS[i % ICONS.length]} size="lg" delay={i * 160} />
                <span className="font-mono text-[12px] tabular-nums" style={{ color: 'var(--dim)' }}>
                  0{i + 1}
                </span>
              </div>
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

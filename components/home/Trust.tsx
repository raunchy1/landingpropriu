import { getTranslations } from 'next-intl/server'
import { IconTile, type IconName } from '@/components/icons/AnimIcon'
import SectionHead from './SectionHead'

type Item = { title: string; body: string }

const ICONS: IconName[] = ['coin', 'contract', 'key', 'chat']

export default async function Trust() {
  const t = await getTranslations('home.trust')
  const items = t.raw('items') as Item[]

  return (
    <section id="garanzie" className="rule relative overflow-hidden py-24 md:py-40">
      <div className="aurora aurora-a -z-10 left-1/2 top-[30%] h-[420px] w-[720px] -translate-x-1/2 opacity-20" aria-hidden="true" />
      <div className="wrap">
        <SectionHead eyebrow={t('eyebrow')} title={t('title')} />
        <ul data-reveal className="mt-16 grid gap-4 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {items.map((it, i) => (
            <li key={it.title} className="gcard p-7">
              <IconTile name={ICONS[i % ICONS.length]} delay={i * 140} />
              <h3 className="mt-8 text-[22px] font-normal leading-[1.15] tracking-[-0.025em] md:text-[24px]">{it.title}</h3>
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

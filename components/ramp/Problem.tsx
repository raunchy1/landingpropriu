import { getTranslations } from 'next-intl/server'
import { IconTile, type IconName } from '@/components/icons/AnimIcon'
import Head from './Head'

type Item = { title: string; body: string }
const icons: IconName[] = ['search', 'pin', 'shield']

export default async function Problem() {
  const t = await getTranslations('home.problem')
  const items = t.raw('items') as Item[]

  return (
    <section id="problema" className="r-section">
      <div className="wrap">
        <Head eyebrow={t('eyebrow')} title={t('title')} intro={t('intro')} />
        <div data-reveal className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3">
          {items.map((it, i) => (
            <article key={it.title} className="r-card r-card-hover flex min-h-[300px] flex-col justify-between p-7 md:p-9">
              <IconTile name={icons[i]} size="lg" />
              <div className="mt-12">
                <h3 className="text-[26px] font-semibold tracking-[-0.03em]">{it.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
                  {it.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

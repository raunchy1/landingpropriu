import { getTranslations } from 'next-intl/server'
import { IconTile, type IconName } from '@/components/icons/AnimIcon'
import Head from './Head'

type Item = { title: string; body: string }
const icons: IconName[] = ['check', 'contract', 'key', 'pin']

export default async function Trust() {
  const t = await getTranslations('home.trust')
  const items = t.raw('items') as Item[]

  return (
    <section id="garanzie" className="r-section pt-0 md:pt-0">
      <div className="wrap">
        <div className="r-card overflow-hidden p-7 sm:p-10 md:p-16">
          <Head eyebrow={t('eyebrow')} title={t('title')} />
          <div data-reveal className="mt-12 grid gap-px overflow-hidden rounded-[20px] sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--line)' }}>
            {items.map((it, i) => (
              <div key={it.title} className="r-card-hover p-7" style={{ background: '#fff' }}>
                <IconTile name={icons[i]} size="md" className="itile-lime" delay={i * 200} />
                <h3 className="mt-8 text-[19px] font-semibold tracking-[-0.02em]">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
                  {it.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

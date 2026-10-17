import { getTranslations } from 'next-intl/server'

type WorkItem = { name: string; place: string; alt: string; tags: string[] }
type Sector = { label: string }

const media = [
  {
    href: '/bozze/limitless-barbers',
    src: '/bozze/limitless-barbers/img/interior_a88_04.jpg',
    width: 1600,
    height: 1200,
  },
  {
    href: '/bozze/loggia-padronale',
    src: '/bozze/loggia-padronale/img/full/856976753.webp',
    width: 1600,
    height: 900,
  },
]

export default async function SelectedWork() {
  const t = await getTranslations('home.work')
  const sectors = await getTranslations('home.sectors')
  const items = t.raw('items') as WorkItem[]
  const who = sectors.raw('items') as Sector[]
  const [first, ...rest] = t('title').split(' ')

  return (
    <section id="lavori" className="pb-20 pt-6 md:pb-28 md:pt-10">
      <div className="wrap">
        <div className="grid items-start gap-8 md:grid-cols-12 md:gap-6">
          <h2
            data-split
            className="display font-semibold md:col-span-7"
            style={{ fontSize: 'clamp(46px, 6vw, 88px)', lineHeight: 0.88, letterSpacing: '-0.06em' }}
          >
            <span className="block">{first}</span>
            {rest.length > 0 && <span className="block">{rest.join(' ')}</span>}
          </h2>
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-[13px] font-medium tracking-[-0.01em]">{t('forWho')}</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 md:flex-col md:gap-1.5">
              {who.map((s) => (
                <li key={s.label} className="text-[14px]" style={{ color: 'var(--muted)' }}>
                  {s.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul data-reveal className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-4">
          {items.map((item, i) => {
            const shot = media[i]
            if (!shot) return null
            return (
              <li key={item.name}>
                <a href={shot.href} className="work-card group block">
                  <div className="overflow-hidden bg-[#ececec]">
                    <img
                      src={shot.src}
                      alt={item.alt}
                      width={shot.width}
                      height={shot.height}
                      loading="lazy"
                      className="work-img aspect-[4/3] w-full object-cover md:aspect-[4/5]"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-[12px] uppercase tracking-[0.14em]" style={{ color: 'var(--dim)' }}>
                      {t('draft')} · {item.place}
                    </p>
                    <h3 className="mt-1 text-[17px] font-medium tracking-[-0.03em]">{item.name}</h3>
                    <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                      {item.tags.map((tag) => (
                        <li key={tag} className="text-[13px]" style={{ color: 'var(--muted)' }}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-[13px] underline decoration-[#d5d5d0] underline-offset-4 group-hover:decoration-[#111]">
                      {t('open')}
                    </p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

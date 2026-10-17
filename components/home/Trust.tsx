import { getTranslations } from 'next-intl/server'

type Item = { title: string; body: string }

/**
 * Social proof without invented reviews. The repo has no client quotes,
 * so this section repeats the written guarantees and the 48-hour draft.
 */
export default async function Trust() {
  const t = await getTranslations('home.trust')
  const process = await getTranslations('home.process')
  const items = t.raw('items') as Item[]
  const steps = process.raw('steps') as Item[]
  const draft = steps[1]

  return (
    <section id="garanzie" className="border-t py-20 md:py-28" style={{ borderColor: 'var(--line)' }}>
      <div className="wrap grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6 md:mb-8">{t('eyebrow')}</p>
          <h2
            data-split
            className="display max-w-[14ch] font-semibold"
            style={{ fontSize: 'clamp(36px, 4.6vw, 64px)', lineHeight: 0.94, letterSpacing: '-0.05em' }}
          >
            {t('title')}
          </h2>
          <ul className="mt-10 md:mt-14">
            {items.map((item) => (
              <li key={item.title} className="grid gap-2 border-t py-6 md:grid-cols-12 md:gap-6" style={{ borderColor: 'var(--line)' }}>
                <h3 className="text-[16px] font-medium tracking-[-0.02em] md:col-span-5">{item.title}</h3>
                <p className="text-[15px] leading-[1.55] md:col-span-7" style={{ color: 'var(--muted)' }}>
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-[28px] border bg-[#f4f4f2] p-7 md:p-9 lg:sticky lg:top-28 lg:col-span-4 lg:col-start-9" style={{ borderColor: 'transparent' }}>
          <p className="font-semibold leading-none tracking-[-0.07em]" style={{ fontSize: 'clamp(72px, 8vw, 104px)' }}>
            48h
          </p>
          <p className="mt-4 text-[18px] font-medium tracking-[-0.02em]">{draft?.title}</p>
          <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
            {draft?.body}
          </p>
        </aside>
      </div>
    </section>
  )
}

import { getTranslations } from 'next-intl/server'
import { IconTile, type IconName } from '@/components/icons/AnimIcon'
import Head from './Head'

type Step = { title: string; body: string }
const icons: IconName[] = ['chat', 'browser', 'contract', 'rocket']

export default async function Process() {
  const t = await getTranslations('home.process')
  const r = await getTranslations('home.ramp')
  const steps = t.raw('steps') as Step[]

  return (
    <section id="processo" className="r-section">
      <div className="wrap">
        <Head eyebrow={t('eyebrow')} title={t('title')} intro={r('processNote')} />
        <div className="r-steps relative mt-14 md:mt-20" data-icon>
          <div className="r-steps-line hidden lg:block" aria-hidden="true">
            <span />
          </div>
          <ol data-reveal className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="flex flex-col">
                <span
                  className="grid h-[56px] w-[56px] place-items-center rounded-full text-[18px] font-semibold"
                  style={{ background: i === 1 ? 'var(--accent)' : 'var(--ink)', color: i === 1 ? 'var(--ink)' : '#fff' }}
                >
                  {i + 1}
                </span>
                <div className="r-card r-card-hover mt-5 flex flex-1 flex-col p-7">
                  <IconTile name={icons[i]} size="md" delay={i * 250} />
                  <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.025em]">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

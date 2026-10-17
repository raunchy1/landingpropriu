import { getTranslations } from 'next-intl/server'

type Step = { title: string; body: string }

export default async function Process() {
  const t = await getTranslations('home.process')
  const steps = t.raw('steps') as Step[]

  return (
    <section id="processo" className="border-t py-20 md:py-28" style={{ borderColor: 'var(--line)' }}>
      <div className="wrap">
        <p className="eyebrow mb-6 md:mb-8">{t('eyebrow')}</p>
        <h2
          data-split
          className="display max-w-[16ch] font-semibold"
          style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.055em' }}
        >
          {t('title')}
        </h2>

        <ol data-reveal className="mt-12 grid gap-3 md:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => {
            const accent = i === 1
            return (
              <li
                key={step.title}
                className="flex min-h-[240px] flex-col p-6 md:min-h-[280px] md:p-7"
                style={{
                  background: accent ? '#14a07c' : '#f4f4f2',
                  color: '#111',
                }}
              >
                <span className="text-[13px] tabular-nums" style={{ color: accent ? '#111' : '#0b5e46' }}>
                  0{i + 1}
                </span>
                <h3 className="mt-8 text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] md:mt-auto">
                  <span className="sr-only">{i + 1}. </span>
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.55]" style={{ color: accent ? '#111' : '#4f4f4f' }}>
                  {step.body}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

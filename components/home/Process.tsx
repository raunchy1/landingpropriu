import { getTranslations } from 'next-intl/server'

type Step = { title: string; body: string }

/** Plain ordered list by default; HomeMotion pins it and scrubs through steps. */
export default async function Process() {
  const t = await getTranslations('home.process')
  const steps = t.raw('steps') as Step[]

  return (
    <section id="processo" className="rule">
      <div data-process className="process-stage py-24 md:py-32">
        <div className="wrap">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-6 md:mb-8">{t('eyebrow')}</p>
              <h2 data-split className="display h-md max-w-[18ch]">
                {t('title')}
              </h2>
            </div>
            <ol className="flex gap-5 text-[13px] md:gap-8" aria-hidden="true">
              {steps.map((s, i) => (
                <li key={s.title} data-step-dot className="tabular-nums">
                  0{i + 1}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 h-px w-full md:mt-12" style={{ background: 'var(--line)' }}>
            <div data-step-bar className="h-px w-full origin-left" style={{ background: 'var(--accent)' }} />
          </div>

          <ol className="process-steps mt-10 flex flex-col gap-14 md:mt-16">
            {steps.map((s, i) => (
              <li key={s.title} data-step className="process-step grid gap-4 md:grid-cols-12 md:gap-6">
                <span
                  className="font-light leading-[0.8] tracking-[-0.06em] md:col-span-5"
                  style={{ fontSize: 'clamp(96px, 18vw, 240px)', color: 'var(--accent)' }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <div className="md:col-span-6 md:col-start-7 md:self-end">
                  <h3 className="text-[34px] font-normal leading-[1.02] tracking-[-0.04em] md:text-[56px]">
                    <span className="sr-only">{i + 1}. </span>
                    {s.title}
                  </h3>
                  <p className="mt-5 max-w-[42ch] text-[17px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
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

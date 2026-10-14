import SiteShell from '@/components/SiteShell'
import PageHeader from '@/components/site/PageHeader'

export type LegalSection = { h: string; p: string[] }

export default function LegalPage({ title, updated, sections, children }: { title: string; updated: string; sections: LegalSection[]; children?: React.ReactNode }) {
  return (
    <SiteShell>
      <PageHeader eyebrow={updated} title={title} size="md" />
      <article className="wrap pb-24 md:pb-36">
        <div className="rule">
          {sections.map((s, i) => (
            <section key={s.h} className="grid gap-4 border-b py-9 md:grid-cols-12 md:gap-6 md:py-12" style={{ borderColor: 'var(--line)' }}>
              <div className="md:col-span-4">
                <p className="eyebrow mb-3" style={{ color: 'var(--accent)' }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="text-[21px] leading-[1.25] tracking-[-0.02em] md:text-[24px]" style={{ color: 'var(--fg)' }}>
                  {s.h}
                </h2>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                {s.p.map((t, j) => (
                  <p key={j} className="mb-4 text-[16px] leading-[1.7] last:mb-0" style={{ color: 'var(--muted)' }}>
                    {t}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
        {children && <div className="mt-12">{children}</div>}
      </article>
    </SiteShell>
  )
}

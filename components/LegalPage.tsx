import SiteShell from '@/components/SiteShell'

export type LegalSection = { h: string; p: string[] }

export default function LegalPage({ title, updated, sections, children }: { title: string; updated: string; sections: LegalSection[]; children?: React.ReactNode }) {
  return (
    <SiteShell>
      <article className="mx-auto max-w-[720px] px-6 pb-24 pt-14 md:px-8">
        <h1 className="mb-2 font-semibold" style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>{title}</h1>
        <p className="mb-10 text-[12px]" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{updated}</p>
        {sections.map((s) => (
          <section key={s.h} className="mb-8">
            <h2 className="mb-3 text-[18px] font-semibold" style={{ color: 'var(--fg)' }}>{s.h}</h2>
            {s.p.map((t, i) => (
              <p key={i} className="mb-3 text-[15px] leading-[1.75]" style={{ color: '#C8C8C2' }}>{t}</p>
            ))}
          </section>
        ))}
        {children}
      </article>
    </SiteShell>
  )
}

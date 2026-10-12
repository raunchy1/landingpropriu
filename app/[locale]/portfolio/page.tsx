import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import SiteShell from '@/components/SiteShell'
import { profile, t, rakazoLinks, rakazoStack, getWorks, skills, experience, education, languages, pick, type Loc } from '@/lib/portfolio'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loc = (params.locale === 'en' ? 'en' : 'it') as Loc
  const title = t('metaTitle', loc)
  const description = t('metaDescription', loc)
  const path = loc === 'it' ? '/portfolio' : '/en/portfolio'
  return {
    title,
    description,
    alternates: { canonical: path, languages: { it: '/portfolio', en: '/en/portfolio' } },
    openGraph: {
      title, description, url: path, type: 'profile',
      images: [{ url: '/portfolio/og-portfolio.jpg', width: 1200, height: 630, alt: profile.name }],
      locale: loc === 'it' ? 'it_IT' : 'en_US',
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/portfolio/og-portfolio.jpg'] },
  }
}

const mono = { fontFamily: 'var(--font-mono)' }

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="text-[12px]" style={{ ...mono, color: 'var(--accent-green)' }}>{n}</span>
      <h2 className="font-semibold" style={{ fontSize: 'clamp(26px,3.6vw,38px)', letterSpacing: '-0.03em', color: 'var(--fg)' }}>{title}</h2>
      <span className="h-px flex-1" style={{ background: 'var(--line)' }} />
    </div>
  )
}

function Chip({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className="rounded-full border px-3 py-1 text-[11px]" style={{ ...mono, borderColor: accent ? 'rgba(46,189,89,0.35)' : 'var(--surface-border)', color: accent ? 'var(--accent-green)' : 'var(--muted)', background: accent ? 'rgba(46,189,89,0.06)' : 'transparent' }}>
      {children}
    </span>
  )
}

export default function PortfolioPage({ params }: Props) {
  const loc = (params.locale === 'en' ? 'en' : 'it') as Loc
  setRequestLocale(loc)
  const works = getWorks(loc)

  const btnPrimary = 'inline-flex items-center gap-2 rounded-lg px-5 py-3 text-[14px] font-medium transition-all duration-300 hover:-translate-y-0.5'
  const btnGhost = btnPrimary + ' border hover:border-[#3a3a36]'

  return (
    <SiteShell>
      <div className="pf-glow" aria-hidden />
      {/* HERO */}
      <section className="relative mx-auto max-w-[1080px] px-6 pb-20 pt-14 md:px-8 md:pb-28 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-14">
          <div className="animate-rise">
            <p className="mb-6 text-[11px] uppercase tracking-[0.18em]" style={{ ...mono, color: 'var(--muted)' }}>{t('eyebrow', loc)}</p>
            <h1 className="mb-4 font-bold leading-[1.02]" style={{ fontSize: 'clamp(42px,7vw,76px)', letterSpacing: '-0.045em', color: 'var(--fg)' }}>
              Cristian<br />Ermurache
            </h1>
            <p className="pf-gradient mb-6 font-semibold" style={{ fontSize: 'clamp(18px,2.4vw,24px)', letterSpacing: '-0.02em' }}>{t('role', loc)}</p>
            <p className="mb-7 max-w-[560px] text-[16px] leading-[1.75]" style={{ color: '#A3A39E' }}>{t('heroLead', loc)}</p>
            <div className="mb-8 flex flex-wrap gap-2">
              {(t('badges', loc) as string[]).map((b) => <Chip key={b}>{b}</Chip>)}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className={btnPrimary} style={{ background: 'var(--fg)', color: '#080808' }}>{t('ctaContact', loc)} →</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={btnGhost} style={{ borderColor: 'var(--line)', color: 'var(--fg)' }}>LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={btnGhost} style={{ borderColor: 'var(--line)', color: 'var(--fg)' }}>GitHub</a>
              <a href={profile.cvPdf} target="_blank" className={btnGhost} style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>{t('ctaCv', loc)}</a>
            </div>
          </div>
          <div className="animate-rise relative mx-auto w-full max-w-[380px]" style={{ animationDelay: '120ms' }}>
            <div className="absolute -inset-3 rounded-[28px] opacity-60 blur-2xl" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(46,189,89,0.35), transparent 60%)' }} />
            <div className="relative overflow-hidden rounded-[24px] border" style={{ borderColor: 'var(--surface-border)' }}>
              <Image src={profile.photo} alt={profile.name} width={640} height={640} priority className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-[1080px] px-6 pb-24 md:px-8">
        <SectionHead n="01" title={t('whyTitle', loc)} />
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            {(t('whyParas', loc) as string[]).map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.8]" style={{ color: i === 2 ? 'var(--fg)' : '#A3A39E' }}>{p}</p>
            ))}
          </div>
          <div className="grid gap-3">
            {(t('pillars', loc) as string[][]).map(([a, b]) => (
              <div key={a} className="pf-card rounded-xl border p-5">
                <p className="mb-1 text-[15px] font-semibold" style={{ color: 'var(--fg)' }}>{a}</p>
                <p className="text-[13px]" style={{ ...mono, color: 'var(--muted)' }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAKAZO */}
      <section className="mx-auto max-w-[1080px] px-6 pb-24 md:px-8">
        <SectionHead n="02" title={t('featured', loc)} />
        <article className="pf-card pf-flagship overflow-hidden rounded-2xl border">
          <div className="grid md:grid-cols-[1.1fr_1fr]">
            <div className="p-7 md:p-10">
              <div className="mb-5 flex flex-wrap gap-2"><Chip accent>Open source · Apache-2.0</Chip><Chip>Self-hosted</Chip></div>
              <h3 className="mb-2 font-bold" style={{ fontSize: 'clamp(34px,5vw,52px)', letterSpacing: '-0.04em', color: 'var(--fg)' }}>Rakazo</h3>
              <p className="mb-5 text-[12px]" style={{ ...mono, color: 'var(--accent-green)' }}>{t('rakazoRole', loc)}</p>
              <p className="mb-6 text-[16px] leading-[1.75]" style={{ color: '#C9C9C4' }}>{t('rakazoLead', loc)}</p>
              <ul className="mb-7 space-y-2.5">
                {(t('rakazoPoints', loc) as string[]).map((p) => (
                  <li key={p} className="flex gap-3 text-[14px] leading-[1.6]" style={{ color: '#A3A39E' }}>
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full" style={{ background: 'var(--accent-green)' }} />{p}
                  </li>
                ))}
              </ul>
              <div className="mb-7 flex flex-wrap gap-1.5">{rakazoStack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
              <div className="flex flex-wrap gap-3">
                {rakazoLinks.map((l, i) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={i === 0 ? btnPrimary : btnGhost} style={i === 0 ? { background: 'var(--accent-green)', color: '#04140a' } : { borderColor: 'var(--line)', color: 'var(--fg)' }}>{l.label} ↗</a>
                ))}
              </div>
            </div>
            <a href="https://rakazo.com/" target="_blank" rel="noopener noreferrer" className="flex items-center border-t p-5 md:border-l md:border-t-0 md:p-8" style={{ borderColor: 'var(--surface-border)', background: 'rgba(0,0,0,0.25)' }}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border shadow-2xl" style={{ borderColor: 'var(--surface-border)' }}>
                <Image src="/portfolio/rakazo.webp" alt="Rakazo" fill sizes="(min-width:768px) 480px, 100vw" className="pf-shot object-cover object-top" />
              </div>
            </a>
          </div>
        </article>
      </section>

      {/* WORK */}
      <section className="mx-auto max-w-[1080px] px-6 pb-24 md:px-8">
        <SectionHead n="03" title={t('workTitle', loc)} />
        <div className="grid gap-5 lg:grid-cols-[1fr_1.25fr]">
          {works.map((w) => (
            <article key={w.id} className="pf-card group flex flex-col overflow-hidden rounded-2xl border" style={w.wip ? { borderColor: 'rgba(46,189,89,0.22)' } : undefined}>
              {w.image ? (
                <div className="relative aspect-[16/10] overflow-hidden border-b" style={{ borderColor: 'var(--surface-border)', background: '#0d0d0c' }}>
                  <Image src={w.image} alt={w.title} fill sizes="(min-width:768px) 520px, 100vw" className="pf-shot object-cover object-top" />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <Chip accent>{w.tag}</Chip>
                  {w.wip && <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px]" style={{ ...mono, borderColor: 'rgba(245,190,70,0.4)', color: '#F5BE46', background: 'rgba(245,190,70,0.07)' }}><span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: '#F5BE46' }} />{t('wip', loc)}</span>}
                </div>
                <h3 className="mb-4 text-[22px] font-semibold" style={{ letterSpacing: '-0.02em', color: 'var(--fg)' }}>{w.title}</h3>
                <p className="mb-1 text-[11px] uppercase tracking-wider" style={{ ...mono, color: 'var(--muted)' }}>{t('problem', loc)}</p>
                <p className="mb-4 text-[14px] leading-[1.7]" style={{ color: '#A3A39E' }}>{w.problem}</p>
                <p className="mb-1 text-[11px] uppercase tracking-wider" style={{ ...mono, color: 'var(--muted)' }}>{w.how ? t('solution', loc) : t('did', loc)}</p>
                <p className="mb-5 text-[14px] leading-[1.7]" style={{ color: '#C9C9C4' }}>{w.did}</p>
                {w.how && (
                  <>
                    <p className="mb-2 text-[11px] uppercase tracking-wider" style={{ ...mono, color: 'var(--muted)' }}>{t('how', loc)}</p>
                    <ol className="mb-6 space-y-2">
                      {w.how.map((h: string, i: number) => (
                        <li key={h} className="flex gap-3 text-[14px] leading-[1.6]" style={{ color: '#C9C9C4' }}>
                          <span className="shrink-0 text-[12px]" style={{ ...mono, color: 'var(--accent-green)' }}>0{i + 1}</span>{h}
                        </li>
                      ))}
                    </ol>
                  </>
                )}
                <div className="mt-auto flex flex-wrap items-center gap-1.5">
                  {w.stack.map((s) => <Chip key={s}>{s}</Chip>)}
                  {w.href && (
                    <a href={w.href} target="_blank" rel="noopener noreferrer" className="ml-auto text-[13px] font-medium transition-colors group-hover:text-[var(--accent-green)]" style={{ color: 'var(--fg)' }}>
                      {w.href.replace(/^https:\/\//, '').replace(/\/$/, '').replace('andamus.13.140.190.190.sslip.io', 'andamus (live)')} ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-[1080px] px-6 pb-24 md:px-8">
        <SectionHead n="04" title={t('skillsTitle', loc)} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g) => (
            <div key={g.title.en} className="pf-card rounded-xl border p-5">
              <p className="mb-4 text-[12px] uppercase tracking-wider" style={{ ...mono, color: 'var(--accent-green)' }}>{pick(g.title, loc)}</p>
              <ul className="space-y-1.5">
                {g.items.map((s) => <li key={s} className="text-[14px]" style={{ color: '#C9C9C4' }}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-[1080px] px-6 pb-24 md:px-8">
        <SectionHead n="05" title={t('expTitle', loc)} />
        <ol className="relative border-l pl-7 md:pl-10" style={{ borderColor: 'var(--line)' }}>
          {experience.map((e, i) => (
            <li key={e.role + e.org} className="relative pb-9 last:pb-0">
              <span className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full md:-left-[45px]" style={{ background: i < 2 ? 'var(--accent-green)' : 'var(--dim)', boxShadow: i < 2 ? '0 0 0 4px rgba(46,189,89,0.12)' : 'none' }} />
              <div className="grid gap-1 md:grid-cols-[180px_1fr] md:gap-8">
                <p className="text-[12px]" style={{ ...mono, color: 'var(--muted)' }}>{pick(e.dates, loc)}</p>
                <div>
                  <p className="text-[17px] font-semibold" style={{ color: 'var(--fg)' }}>{e.role}</p>
                  <p className="mb-2 text-[13px]" style={{ color: 'var(--muted)' }}>{e.org} · {pick(e.place, loc)}</p>
                  <p className="text-[14px] leading-[1.7]" style={{ color: '#A3A39E' }}>{pick(e.desc, loc)}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* EDUCATION + LANGUAGES */}
      <section className="mx-auto grid max-w-[1080px] gap-14 px-6 pb-24 md:grid-cols-2 md:px-8">
        <div>
          <SectionHead n="06" title={t('eduTitle', loc)} />
          <div className="space-y-4">
            {education.map((ed) => (
              <div key={ed.title.en} className="pf-card rounded-xl border p-5">
                <p className="mb-1 text-[15px] font-semibold" style={{ color: 'var(--fg)' }}>{pick(ed.title, loc)}</p>
                <p className="text-[13px]" style={{ color: 'var(--muted)' }}>{ed.org} · <span style={mono}>{ed.dates}</span></p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHead n="07" title={t('langTitle', loc)} />
          <div className="space-y-5">
            {languages.map((l) => (
              <div key={l.level + l.name.en}>
                <div className="mb-2 flex justify-between text-[14px]"><span style={{ color: 'var(--fg)' }}>{pick(l.name, loc)}</span><span style={{ ...mono, color: 'var(--muted)' }}>{l.level}</span></div>
                <div className="h-1 overflow-hidden rounded-full" style={{ background: 'var(--line)' }}>
                  <div className="h-full rounded-full" style={{ width: `${l.pct}%`, background: 'linear-gradient(90deg,#2EBD59,#9be7b3)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-[1080px] px-6 pb-28 md:px-8">
        <div className="pf-card pf-flagship rounded-2xl border p-8 text-center md:p-14">
          <h2 className="mx-auto mb-4 max-w-[640px] font-bold" style={{ fontSize: 'clamp(28px,4.4vw,46px)', letterSpacing: '-0.035em', color: 'var(--fg)' }}>{t('contactTitle', loc)}</h2>
          <p className="mx-auto mb-8 max-w-[560px] text-[15px] leading-[1.7]" style={{ color: '#A3A39E' }}>{t('contactLead', loc)}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className={btnPrimary} style={{ background: 'var(--fg)', color: '#080808' }}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={btnGhost} style={{ borderColor: 'var(--line)', color: 'var(--fg)' }}>LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={btnGhost} style={{ borderColor: 'var(--line)', color: 'var(--fg)' }}>GitHub ↗</a>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

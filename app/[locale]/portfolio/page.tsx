import { withSeo } from '@/lib/seo'
import type { Metadata } from 'next'
import Image from 'next/image'
import { setRequestLocale } from 'next-intl/server'
import SiteShell from '@/components/SiteShell'
import EcomGrid from '@/components/portfolio/EcomGrid'
import { profile, t, rakazoLinks, rakazoStack, skills, experience, education, languages, pick, type Loc } from '@/lib/portfolio'

type Props = { params: { locale: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loc = (params.locale === 'en' ? 'en' : 'it') as Loc
  const title = t('metaTitle', loc)
  const description = t('metaDescription', loc)
  const path = loc === 'it' ? '/portfolio' : '/en/portfolio'
  return withSeo({
    title,
    description,
    alternates: { canonical: path, languages: { it: '/portfolio', en: '/en/portfolio' } },
    openGraph: {
      title, description, url: path, type: 'profile',
      images: [{ url: '/portfolio/og-portfolio.jpg', width: 1200, height: 630, alt: profile.name }],
      locale: loc === 'it' ? 'it_IT' : 'en_US',
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/portfolio/og-portfolio.jpg'] },
  }, loc)
}

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="eyebrow mb-6 md:mb-8">
        <span style={{ color: 'var(--accent)' }}>{n}</span>
      </p>
      <h2 data-split className="display h-md max-w-[20ch]">{title}</h2>
    </div>
  )
}

function Chip({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px]"
      style={{ borderColor: accent ? 'rgba(46,242,200,0.4)' : 'var(--dim-line)', color: accent ? 'var(--accent)' : 'var(--muted)' }}
    >
      {children}
    </span>
  )
}

export default function PortfolioPage({ params }: Props) {
  const loc = (params.locale === 'en' ? 'en' : 'it') as Loc
  setRequestLocale(loc)

  const section = 'rule py-24 md:py-36'

  return (
    <SiteShell>
      {/* HERO */}
      <section className="wrap pb-20 pt-[128px] md:pb-28 md:pt-[184px]">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-7 md:mb-10">{t('eyebrow', loc)}</p>
            <h1 data-split className="display h-xl">
              Cristian<br />Ermurache
            </h1>
            <div data-reveal className="mt-8 md:mt-12">
              <p className="text-[20px] leading-[1.3] tracking-[-0.02em] md:text-[26px]" style={{ color: 'var(--accent)' }}>{t('role', loc)}</p>
              <p className="lead mt-6 max-w-[52ch]">{t('heroLead', loc)}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {(t('badges', loc) as string[]).map((b) => <Chip key={b}>{b}</Chip>)}
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a href={`mailto:${profile.email}`} className="btn btn-accent w-full sm:w-auto">{t('ctaContact', loc)} →</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full sm:w-auto">LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full sm:w-auto">GitHub</a>
                <a href={profile.cvPdf} target="_blank" className="ulink self-start sm:ml-3 sm:self-auto">{t('ctaCv', loc)}</a>
              </div>
            </div>
          </div>
          <div data-reveal className="mx-auto w-full max-w-[420px] lg:col-span-4">
            <div className="relative overflow-hidden border" style={{ borderColor: 'var(--line)' }}>
              <Image src={profile.photo} alt={profile.name} width={640} height={640} priority sizes="(min-width:1024px) 400px, 90vw" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className={section}>
        <div className="wrap">
          <SectionHead n="01" title={t('whyTitle', loc)} />
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
            <div data-reveal className="space-y-6 lg:col-span-7">
              {(t('whyParas', loc) as string[]).map((p, i) => (
                <p key={i} className="text-[17px] leading-[1.7]" style={{ color: i === 2 ? 'var(--fg)' : 'var(--muted)' }}>{p}</p>
              ))}
            </div>
            <div data-reveal className="grid gap-px self-start lg:col-span-4 lg:col-start-9" style={{ background: 'var(--line)' }}>
              {(t('pillars', loc) as string[][]).map(([a, b]) => (
                <div key={a} className="p-6" style={{ background: 'var(--bg)' }}>
                  <p className="mb-1 text-[17px] tracking-[-0.01em]" style={{ color: 'var(--fg)' }}>{a}</p>
                  <p className="text-[14px]" style={{ color: 'var(--muted)' }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RAKAZO */}
      <section className="py-24 md:py-36" style={{ background: 'var(--fg)', color: '#11161c' }}>
        <div className="wrap">
          <p className="eyebrow mb-6 md:mb-8" style={{ color: '#5b5547' }}>02</p>
          <h2 data-split className="display h-md mb-12 max-w-[20ch] md:mb-16" style={{ color: '#11161c' }}>{t('featured', loc)}</h2>
          <article data-reveal className="grid gap-10 lg:grid-cols-12 lg:gap-6">
            <a href="https://rakazo.com/" target="_blank" rel="noopener noreferrer" className="work-card relative block overflow-hidden border lg:order-2 lg:col-span-7" style={{ borderColor: '#c9bea5', background: '#f4efe3' }}>
              <div className="relative aspect-[16/10] w-full">
                <Image src="/portfolio/rakazo.webp" alt="Rakazo" fill sizes="(min-width:1024px) 58vw, 100vw" className="work-img object-cover object-top" />
              </div>
            </a>
            <div className="lg:order-1 lg:col-span-5">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[12px]" style={{ borderColor: '#b9ae95' }}>
                  <span className="h-[6px] w-[6px] rounded-full" style={{ background: '#0a8f74' }} />Open source · Apache-2.0
                </span>
                <span className="inline-flex items-center rounded-full border px-3 py-1 text-[12px]" style={{ borderColor: '#b9ae95' }}>Self-hosted</span>
              </div>
              <h3 className="text-[52px] font-normal leading-none tracking-[-0.045em] md:text-[72px]">Rakazo</h3>
              <p className="mt-4 text-[13px] uppercase tracking-[0.14em]" style={{ color: '#5b5547' }}>{t('rakazoRole', loc)}</p>
              <p className="mt-6 text-[16px] leading-[1.65]" style={{ color: '#3d392f' }}>{t('rakazoLead', loc)}</p>
              <ul className="mt-6 space-y-2.5">
                {(t('rakazoPoints', loc) as string[]).map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-[1.55]" style={{ color: '#3d392f' }}>
                    <span className="mt-[0.72em] h-px w-3 shrink-0" style={{ background: '#11161c' }} />{p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1">
                {rakazoStack.map((s) => <span key={s} className="text-[13px]" style={{ color: '#5b5547' }}>{s}</span>)}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {rakazoLinks.map((l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={i === 0 ? 'btn btn-accent w-full sm:w-auto' : 'btn btn-ghost w-full sm:w-auto'}
                    style={i === 0 ? undefined : { borderColor: '#b9ae95', color: '#11161c' }}
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ECOMUNICARE */}
      <section id="clienti" className="rule py-24 md:py-36">
        <div className="wrap">
          <SectionHead n="03" title={loc === 'en' ? 'Websites for local businesses' : 'Siti per attività locali'} />
          <p data-reveal className="lead -mt-6 mb-12 max-w-[60ch] md:-mt-8">{loc === 'en' ? 'A selection of client websites I developed at the Swiss agency Ecomunicare: hotels, shops, salons, trades and cultural venues.' : "Una selezione di siti per clienti che ho sviluppato presso l'agenzia svizzera Ecomunicare: hotel, negozi, saloni, artigiani e luoghi di cultura."}</p>
          <EcomGrid loc={loc} />
        </div>
      </section>

      {/* SKILLS */}
      <section className={section}>
        <div className="wrap">
          <SectionHead n="04" title={t('skillsTitle', loc)} />
          <div data-reveal className="grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--line)' }}>
            {skills.map((g) => (
              <div key={g.title.en} className="p-6 md:p-8" style={{ background: 'var(--bg)' }}>
                <p className="eyebrow eyebrow-accent mb-5">{pick(g.title, loc)}</p>
                <ul className="space-y-2">
                  {g.items.map((s) => <li key={s} className="text-[15px]" style={{ color: 'var(--fg)' }}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className={section}>
        <div className="wrap">
          <SectionHead n="05" title={t('expTitle', loc)} />
          <ol data-reveal className="rule">
            {experience.map((e, i) => (
              <li key={e.role + e.org} className="grid gap-2 border-b py-8 md:grid-cols-12 md:gap-6 md:py-10" style={{ borderColor: 'var(--line)' }}>
                <p className="flex items-center gap-3 text-[13px] uppercase tracking-[0.12em] md:col-span-3 md:items-start" style={{ color: 'var(--muted)' }}>
                  <span className="h-[6px] w-[6px] shrink-0 rounded-full md:mt-[5px]" style={{ background: i < 2 ? 'var(--accent)' : 'var(--dim-line)' }} />
                  {pick(e.dates, loc)}
                </p>
                <div className="md:col-span-8 md:col-start-5">
                  <p className="text-[22px] leading-[1.2] tracking-[-0.025em] md:text-[26px]" style={{ color: 'var(--fg)' }}>{e.role}</p>
                  <p className="mb-3 mt-1 text-[14px]" style={{ color: 'var(--muted)' }}>{e.org} · {pick(e.place, loc)}</p>
                  <p className="text-[15px] leading-[1.65]" style={{ color: 'var(--muted)' }}>{pick(e.desc, loc)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EDUCATION + LANGUAGES */}
      <section className={section}>
        <div className="wrap grid gap-16 lg:grid-cols-2 lg:gap-6">
          <div>
            <SectionHead n="06" title={t('eduTitle', loc)} />
            <div data-reveal className="rule">
              {education.map((ed) => (
                <div key={ed.title.en} className="border-b py-6" style={{ borderColor: 'var(--line)' }}>
                  <p className="mb-1 text-[17px] tracking-[-0.01em]" style={{ color: 'var(--fg)' }}>{pick(ed.title, loc)}</p>
                  <p className="text-[14px]" style={{ color: 'var(--muted)' }}>{ed.org} · <span className="tabular-nums">{ed.dates}</span></p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHead n="07" title={t('langTitle', loc)} />
            <div data-reveal className="space-y-6">
              {languages.map((l) => (
                <div key={l.level + l.name.en}>
                  <div className="mb-3 flex justify-between text-[15px]"><span style={{ color: 'var(--fg)' }}>{pick(l.name, loc)}</span><span className="uppercase tracking-[0.12em]" style={{ color: 'var(--muted)', fontSize: 12 }}>{l.level}</span></div>
                  <div className="h-px" style={{ background: 'var(--dim-line)' }}>
                    <div className="h-[2px] -translate-y-[0.5px]" style={{ width: `${l.pct}%`, background: 'var(--accent)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="rule pb-28 pt-24 md:pb-40 md:pt-40">
        <div className="wrap">
          <h2 data-split className="display h-lg max-w-[16ch]">{t('contactTitle', loc)}</h2>
          <p className="lead mt-8 max-w-[52ch]">{t('contactLead', loc)}</p>
          <div data-reveal className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-16">
            <a href={`mailto:${profile.email}`} className="btn btn-accent w-full break-all sm:w-auto">{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full sm:w-auto">LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full sm:w-auto">GitHub ↗</a>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

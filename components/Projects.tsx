'use client'

import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import { useTranslations, useLocale } from 'next-intl'

export default function Projects() {
  const t = useTranslations('projects')
  const locale = useLocale()
  const videoSrc = locale === 'en'
    ? '/video/websardegna_showreel_EN.mp4'
    : '/video/websardegna_showreel_IT.mp4'

  const projects = [
    {
      name: 'cannigione experience',
      location: 'cannigione, sardegna',
      desc: t('desc1'),
      tag: t('tag1'),
      url: 'https://cannigionexperience.com',
      image: '/img/projects/cannigione.webp',
    },
    {
      name: 'la suite n4',
      location: 'alghero, sardegna',
      desc: t('desc2'),
      tag: t('tag2'),
      url: 'https://bb-alghero.vercel.app',
      image: '/img/projects/la-suite-n4.webp',
    },
    {
      name: 'san paolo hideout',
      location: 'roma',
      desc: t('desc3'),
      tag: t('tag3'),
      url: 'https://sanpaolohideout.it',
      image: '/img/projects/san-paolo-hideout.webp',
    },
  ]

  return (
    <section
      id="progetti"
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <ScrollReveal>
          <p
            className="reveal-child mb-5 text-[11px]"
            style={{
              color: 'var(--muted)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
            }}
          >
            {t('eyebrow')}
          </p>

          <h2
            className="reveal-child mb-14 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{ color: 'var(--fg)' }}>{t('title1')}</span>
            <br />
            <span style={{ color: 'var(--muted)' }}>{t('title2')}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="reveal-child my-12 flex justify-center">
            <video
              key={locale}
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-w-[360px] rounded-xl border border-[var(--line)]"
            />
          </div>
        </ScrollReveal>

        <div className="flex flex-col" style={{ gap: '16px' }}>
          {projects.map((project, i) => (
            <ScrollReveal key={i}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card reveal-child block overflow-hidden rounded-xl border border-[var(--line)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--muted)]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} website preview`}
                    width={1200}
                    height={750}
                    className="project-img h-full w-full object-cover"
                  />
                </div>

                <div style={{ padding: '24px' }}>
                  <div className="mb-2 flex flex-wrap items-baseline gap-3">
                    <h3
                      style={{
                        fontWeight: 600,
                        fontSize: '17px',
                        color: 'var(--fg)',
                        lineHeight: 1.4,
                      }}
                    >
                      {project.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--muted)',
                      }}
                    >
                      {project.location}
                    </span>
                  </div>

                  <p
                    className="mb-4"
                    style={{
                      fontWeight: 400,
                      fontSize: '15px',
                      color: 'var(--muted)',
                      lineHeight: 1.7,
                    }}
                  >
                    {project.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--dim)',
                      }}
                    >
                      {project.tag}
                    </span>
                    <span
                      className="transition-colors duration-300"
                      style={{
                        fontSize: '14px',
                        color: 'var(--muted)',
                      }}
                    >
                      {t('cta')} →
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
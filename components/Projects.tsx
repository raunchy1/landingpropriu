'use client'

import ScrollReveal from './ScrollReveal'
import { useTranslations } from 'next-intl'
import { trackWhatsAppClick } from '@/lib/trackWhatsApp'

export default function Projects() {
  const t = useTranslations('projects')

  const stats = [t('stat1'), t('stat2'), t('stat3')]

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
            className="reveal-child mb-8 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              letterSpacing: '-0.03em',
              color: 'var(--fg)',
            }}
          >
            {t('title')}
          </h2>

          <div className="reveal-child mb-10 flex flex-col gap-5">
            <p
              className="text-[17px] leading-[1.7]"
              style={{ color: 'var(--muted)' }}
            >
              {t('body1')}
            </p>
            <p
              className="text-[17px] leading-[1.7]"
              style={{ color: 'var(--muted)' }}
            >
              {t('body2')}
            </p>
          </div>

          <a
            href={t('waLink')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('contact')}
            className="reveal-child cta-primary mb-12 inline-flex items-center gap-3 rounded-lg px-7 py-3.5 text-[15px] font-medium transition-all duration-300"
            style={{
              border: '1px solid var(--line)',
              background: 'var(--surface)',
              color: 'var(--fg)',
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: 'var(--accent-green)' }}
            />
            {t('cta')}
          </a>

          <div className="reveal-child grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat}
                className="rounded-xl border border-[var(--line)] px-5 py-4"
                style={{ background: 'var(--surface)' }}
              >
                <p
                  className="text-[12px] leading-[1.6]"
                  style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
                >
                  <span style={{ color: 'var(--accent-green)' }}>→</span> {stat}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import WhatsAppLink from '@/components/WhatsAppLink'


function AnimatedCiao({ text }: { text: string }) {
  const letters = text.split('')
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced && ref.current) {
      ref.current.style.opacity = '1'
      ref.current.querySelectorAll('.ciao-letter').forEach((el) => {
        ;(el as HTMLElement).style.opacity = '1'
        ;(el as HTMLElement).style.transform = 'none'
      })
    }
  }, [])

  return (
    <span ref={ref} className="inline-block">
      {letters.map((letter, i) => (
        <span
          key={i}
          className={`ciao-letter inline-block ${letter === '.' ? 'ciao-dot' : ''}`}
          style={{
            animationDelay: `${0.4 + i * 0.12}s`,
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section
      className="relative flex min-h-[100svh] items-center"
      style={{ background: 'var(--bg)' }}
      id="hero"
    >
      <div className="mx-auto w-full max-w-[720px] px-6 pt-[96px] pb-[80px] md:px-8">
        {/* eyebrow */}
        <p
          className="animate-rise delay-1 mb-5 font-mono text-[11px]"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
        >
          {t('eyebrow')}
        </p>

        {/* greeting — decorative */}
        <p
          className="animate-rise delay-2 mb-3 font-extrabold leading-[0.95]"
          aria-hidden="true"
          style={{
            fontSize: 'clamp(48px, 12vw, 100px)',
            letterSpacing: '-0.035em',
            color: 'var(--fg)',
          }}
        >
          <AnimatedCiao text={t('greeting')} />
        </p>

        {/* SEO headline */}
        <h1
          className="animate-rise delay-3 mb-4 font-bold leading-[1.1]"
          style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            letterSpacing: '-0.03em',
            color: 'var(--fg)',
          }}
        >
          {t('h1')}
        </h1>

        {/* subtitle lines */}
        <div className="mb-7">
          <p
            className="animate-rise delay-4 text-[17px] leading-[1.6]"
            style={{ color: 'var(--muted)' }}
          >
            {t('name')}
          </p>
          <p
            className="animate-rise delay-5 font-semibold leading-[1.3]"
            style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              letterSpacing: '-0.02em',
              color: 'var(--accent-green)',
            }}
          >
            {t('role')}
          </p>
        </div>

        {/* body paragraph */}
        <p
          className="animate-rise delay-6 mb-8 max-w-[520px] text-[17px] leading-[1.7]"
          style={{ color: 'var(--muted)' }}
        >
          {t('body1')}
          <br />
          {t('body2')}
          <strong style={{ color: 'var(--fg)', fontWeight: 600 }}>
            {t('bold1')}
          </strong>
          {t('body3')}
          <br />
          {t('body4')}
          <strong style={{ color: 'var(--fg)', fontWeight: 600 }}>
            {t('bold2')}
          </strong>
          {t('body5')}
          <br />
          {t('body6')}
        </p>

        {/* personal note */}
        <div className="animate-rise delay-7 mb-10 flex items-start gap-4">
          <span
            className="mt-[7px] block h-[1px] w-[28px] shrink-0"
            style={{ background: 'var(--dim)' }}
          />
          <p
            className="text-[11px] leading-[1.8]"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
          >
            {t('personal1')}
            <br />
            {t('personal2')}
          </p>
        </div>

        {/* CTAs */}
        <div className="animate-rise delay-8 mb-6 flex flex-wrap items-center gap-5">
          <WhatsAppLink
            location="hero"
            className="cta-primary inline-flex items-center gap-3 rounded-lg px-7 py-3.5 text-[15px] font-medium transition-all duration-300"
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
            {t('ctaPrimary')}
          </WhatsAppLink>

          <a
            href="#progetti"
            className="text-sm transition-all duration-300"
            style={{
              color: 'var(--muted)',
              borderBottom: '1px solid var(--dim)',
              paddingBottom: 2,
            }}
          >
            {t('ctaSecondary')}
          </a>
        </div>

        {/* trust badges */}
        <div
          className="animate-rise delay-9 flex flex-wrap gap-3 text-[11px]"
          style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
        >
          <span>{t('trust1')}</span>
          <span aria-hidden="true">·</span>
          <span>{t('trust2')}</span>
          <span aria-hidden="true">·</span>
          <span>{t('trust3')}</span>
        </div>
      </div>
    </section>
  )
}

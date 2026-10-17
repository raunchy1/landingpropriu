'use client'

import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import WhatsAppLink from '@/components/WhatsAppLink'
import MotionToggle from './MotionToggle'
import Arrow from './Arrow'
import BrandLockup from './BrandLockup'

/** Site-wide header. On the homepage it is a compact light lockup; other pages stay dark. */
export default function HomeNav() {
  const t = useTranslations('home.nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  const linkClass = onHome
    ? 'text-[14px] tracking-[-0.01em] transition-opacity hover:opacity-50'
    : 'text-[15px] transition-colors hover:text-[var(--accent)]'

  const homeLinks = [
    { href: '#lavori', label: t('work') },
    { href: '#servizi', label: t('services') },
    { href: '#processo', label: t('process') },
    { href: '#offerta', label: t('offer') },
    { href: '#faq', label: t('faq') },
  ]
  const siteLinks = [
    { href: '#offerta', label: t('offer') },
    { href: '#processo', label: t('process') },
    { href: '#faq', label: t('faq') },
  ]

  return (
    <header
      className="fixed inset-x-0 top-0 z-[80]"
      style={{
        background: onHome
          ? scrolled
            ? 'rgba(255,255,255,0.92)'
            : '#ffffff'
          : scrolled
            ? 'rgba(11,15,20,0.78)'
            : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: onHome ? '1px solid #e6e6e2' : `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
        color: 'var(--fg)',
      }}
    >
      <a
        href="#contenuto"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded focus:px-3 focus:py-2"
        style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}
      >
        {t('skip')}
      </a>
      <div className={`wrap flex items-center justify-between gap-4 ${onHome ? 'h-16 md:h-[72px]' : 'h-[68px] md:h-[84px]'}`}>
        <Link href="/" className="shrink-0" style={{ color: 'var(--fg)' }} aria-label="WebSardegna — home">
          {onHome ? (
            <BrandLockup />
          ) : (
            <img src="/brand/logo-jost.svg" alt="WebSardegna" width={560} height={140} className="block h-[40px] w-auto md:h-[48px]" />
          )}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {(onHome ? homeLinks : siteLinks).map((l) =>
            onHome ? (
              <a key={l.href} href={l.href} className={linkClass} style={{ color: 'var(--fg)' }}>
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={`/${l.href}`} className={linkClass} style={{ color: 'var(--fg)' }}>
                {l.label}
              </Link>
            )
          )}
          {!onHome && (
            <Link
              href="/portfolio"
              className={linkClass}
              style={{ color: pathname === '/portfolio' ? 'var(--accent)' : 'var(--fg)' }}
              aria-current={pathname === '/portfolio' ? 'page' : undefined}
            >
              {t('cv')}
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          {!onHome && <MotionToggle className="hidden md:inline-flex" />}
          <div className="flex items-center text-[12px] uppercase tracking-[0.12em]">
            {(['it', 'en'] as const).map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && (
                  <span style={{ color: 'var(--dim)' }} aria-hidden="true">
                    /
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => router.replace(pathname, { locale: l })}
                  aria-current={locale === l ? 'true' : undefined}
                  className="min-h-11 min-w-8 px-1.5"
                  style={{ color: locale === l ? 'var(--fg)' : 'var(--dim)', fontWeight: locale === l ? 600 : 400 }}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
          <WhatsAppLink location="navbar" className="btn btn-accent btn-sm hidden sm:inline-flex">
            {t('cta')}
            <Arrow />
          </WhatsAppLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? t('close') : t('menu')}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="site-menu"
          className="absolute inset-x-0 top-full min-h-[calc(100dvh-4rem)] overflow-y-auto border-t px-0 lg:hidden"
          style={{
            background: onHome ? '#ffffff' : '#0b0f14',
            borderColor: 'var(--line)',
            color: 'var(--fg)',
          }}
        >
          <nav aria-label="Primary" className="wrap flex flex-col py-6">
            {(onHome ? homeLinks : siteLinks).map((l) =>
              onHome ? (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b py-4 text-[28px] font-medium tracking-[-0.04em]"
                  style={{ borderColor: 'var(--line)' }}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={`/${l.href}`}
                  className="border-b py-4 text-[28px] font-medium tracking-[-0.04em]"
                  style={{ borderColor: 'var(--line)', color: 'var(--fg)' }}
                >
                  {l.label}
                </Link>
              )
            )}
            {!onHome && (
              <Link
                href="/portfolio"
                className="border-b py-4 text-[28px] font-medium tracking-[-0.04em]"
                style={{ borderColor: 'var(--line)', color: 'var(--fg)' }}
              >
                {t('cv')}
              </Link>
            )}
            <WhatsAppLink location="navbar" className="btn btn-accent mt-8 w-full">
              {t('cta')}
              <Arrow />
            </WhatsAppLink>
            <div className="mt-6">
              <MotionToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

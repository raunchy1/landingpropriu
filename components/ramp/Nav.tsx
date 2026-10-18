'use client'

import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from '@/components/home/Arrow'

/** Site-wide header (home + inner pages): light bar that gains a frosted background on scroll. */
export default function Nav() {
  const t = useTranslations('home.nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Section anchors live on the home page; elsewhere they route back to it.
  const onHome = pathname === '/'
  const linkClass = 'rounded-full px-4 py-2 text-[15px] font-medium transition-colors hover:bg-[var(--card)]'

  const links = [
    { href: '#lavori', label: t('work') },
    { href: '#offerta', label: t('offer') },
    { href: '#processo', label: t('process') },
    { href: '#faq', label: t('faq') },
  ]

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500"
      style={{
        background: scrolled ? 'rgba(251,250,247,0.86)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 var(--line)' : 'none',
      }}
    >
      <a
        href="#contenuto"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:px-3 focus:py-2"
        style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}
      >
        {t('skip')}
      </a>
      <div className="wrap flex h-[64px] items-center justify-between gap-4 md:h-[76px]">
        <Link href="/" className="shrink-0" aria-label="WebSardegna — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-jost-ink.svg" alt="WebSardegna" width={560} height={140} className="block h-[36px] w-auto md:h-[42px]" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((l) =>
            onHome ? (
              <a key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={`/${l.href}`} className={linkClass}>
                {l.label}
              </Link>
            )
          )}
          <Link
            href="/portfolio"
            className={linkClass}
            style={pathname === '/portfolio' ? { background: 'var(--card)' } : undefined}
            aria-current={pathname === '/portfolio' ? 'page' : undefined}
          >
            {t('cv')}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center text-[13px] font-medium uppercase">
            {(['it', 'en'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => router.replace(pathname, { locale: l })}
                aria-current={locale === l ? 'true' : undefined}
                className="min-h-[40px] min-w-[36px] rounded-full px-2"
                style={{ color: locale === l ? 'var(--fg)' : 'var(--dim)', background: locale === l ? 'var(--card)' : 'transparent' }}
              >
                {l}
              </button>
            ))}
          </div>
          <WhatsAppLink location="navbar" className="btn btn-accent btn-sm hidden sm:inline-flex">
            {t('cta')}
            <Arrow />
          </WhatsAppLink>
        </div>
      </div>
    </header>
  )
}

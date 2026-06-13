'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const t = useTranslations('nav')
  const tHero = useTranslations('hero')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function switchLocale(newLocale: string) {
    let path = pathname
    if (path.startsWith('/en')) path = path.slice(3) || '/'
    if (path.startsWith('/it')) path = path.slice(3) || '/'
    router.push(newLocale === 'it' ? path : `/en${path}`)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b backdrop-blur-[12px]'
          : 'border-b border-transparent'
      }`}
      style={{
        height: 64,
        borderColor: scrolled ? 'var(--line)' : 'transparent',
        background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
      }}
    >
      <div className="mx-auto flex h-full max-w-[720px] items-center justify-between px-6 md:px-8">
        <a href="#" className="text-[15px] font-semibold" style={{ color: 'var(--fg)' }}>
          websardegna
          <span style={{ color: 'var(--muted)' }}>.life</span>
        </a>

        <div className="flex items-center gap-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
          <button onClick={() => switchLocale('it')} style={{ color: locale === 'it' ? 'var(--fg)' : 'var(--dim)', fontWeight: locale === 'it' ? 600 : 400, background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>it</button>
          <span style={{ color: 'var(--dim)' }}>/</span>
          <button onClick={() => switchLocale('en')} style={{ color: locale === 'en' ? 'var(--fg)' : 'var(--dim)', fontWeight: locale === 'en' ? 600 : 400, background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>en</button>
        </div>

        <a
          href={tHero('waLink')}
          target="_blank"
          rel="noopener"
          className="cta-primary inline-flex items-center gap-3 rounded-lg px-5 py-2.5 text-[13px] font-medium transition-all duration-300"
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
      </div>
    </header>
  )
}

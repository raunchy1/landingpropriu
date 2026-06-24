'use client'

import { useEffect, useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, useRouter, usePathname } from '@/i18n/navigation'
import WhatsAppLink from '@/components/WhatsAppLink'


export default function Navbar() {
  const t = useTranslations('nav')

  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function switchLocale(newLocale: 'it' | 'en') {
    router.replace(pathname, { locale: newLocale })
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
        <Link href="/" className="text-[15px] font-semibold" style={{ color: 'var(--fg)' }}>
          websardegna
          <span style={{ color: 'var(--muted)' }}>.life</span>
        </Link>

        <div className="flex items-center gap-1" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
          <button onClick={() => switchLocale('it')} style={{ color: locale === 'it' ? 'var(--fg)' : 'var(--dim)', fontWeight: locale === 'it' ? 600 : 400, background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>it</button>
          <span style={{ color: 'var(--dim)' }}>/</span>
          <button onClick={() => switchLocale('en')} style={{ color: locale === 'en' ? 'var(--fg)' : 'var(--dim)', fontWeight: locale === 'en' ? 600 : 400, background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>en</button>
        </div>

        <WhatsAppLink
          location="navbar"
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
        </WhatsAppLink>
      </div>
    </header>
  )
}

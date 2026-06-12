'use client'

import { useEffect, useState } from 'react'

const WA_LINK =
  'https://wa.me/393501998569?text=Ciao%2C%20vorrei%20la%20bozza%20gratuita%20per%20il%20mio%20sito'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

        <a
          href={WA_LINK}
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
          bozza gratuita
        </a>
      </div>
    </header>
  )
}

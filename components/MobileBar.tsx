'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { trackWhatsAppClick } from '@/lib/trackWhatsApp'

export default function MobileBar() {
  const t = useTranslations('mobileBar')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(!entry.isIntersecting)
        })
      },
      { rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(hero)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex h-[56px] items-center justify-between md:hidden"
      style={{
        background: 'rgba(8, 8, 8, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid var(--line)',
        padding: '0 16px',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}
    >
      {/* whatsapp link */}
      <a
        href={t('waLink')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('sticky_bar')}
        className="flex items-center gap-2.5 text-[13px] font-medium"
        style={{ color: 'var(--fg)' }}
      >
        <span
          className="inline-block h-2 w-2 shrink-0 rounded-full"
          style={{ background: 'var(--accent-green)' }}
        />
        {t('cta')}
      </a>

      {/* tel link */}
      <a
        href="tel:+393501998569"
        className="text-[13px] font-medium transition-colors duration-300"
        style={{ color: 'var(--muted)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--fg)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--muted)'
        }}
      >
        {t('call')} ↗
      </a>
    </div>
  )
}

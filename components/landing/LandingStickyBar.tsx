'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import WhatsAppLink from '@/components/WhatsAppLink'

export default function LandingStickyBar() {
  const t = useTranslations('landingPage')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 120)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
      }}
    >
      <div
        className="flex h-[56px] items-center justify-center px-4"
        style={{
          background: 'rgba(8, 8, 8, 0.92)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <WhatsAppLink
          location="landing"
          messageKey="landing"
          className="inline-flex w-full max-w-[400px] items-center justify-center gap-2.5 rounded-lg px-5 py-3 text-[14px] font-semibold"
          style={{
            background: 'var(--accent-green)',
            color: 'var(--bg)',
          }}
        >
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: 'var(--bg)' }}
          />
          {t('stickyCta')}
        </WhatsAppLink>
      </div>
    </div>
  )
}
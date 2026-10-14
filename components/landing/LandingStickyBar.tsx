'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from '@/components/home/Arrow'

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
      className="fixed inset-x-0 bottom-0 z-50 p-3 md:hidden"
      style={{
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        background: 'linear-gradient(to top, rgba(11,15,20,0.92) 60%, rgba(11,15,20,0))',
        transform: visible ? 'translateY(0)' : 'translateY(110%)',
        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <WhatsAppLink
        location="landing"
        messageKey="landing"
        className="btn btn-accent w-full"
      >
        {t('stickyCta')}
        <Arrow />
      </WhatsAppLink>
    </div>
  )
}

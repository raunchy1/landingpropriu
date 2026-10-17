'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import WhatsAppLink from '@/components/WhatsAppLink'
import { trackPhoneClick } from '@/lib/trackEvents'

export default function MobileBar() {
  const t = useTranslations('mobileBar')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero-cta') || document.getElementById('hero')
    if (hero) {
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
    }

    const handleScroll = () => setVisible(window.scrollY > 200)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="mobile-bar fixed inset-x-0 bottom-0 z-50 flex items-center gap-2 p-3 md:hidden"
      style={{
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        transform: visible ? 'translateY(0)' : 'translateY(110%)',
        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <WhatsAppLink
        location="sticky_bar"
        className="flex min-h-[52px] flex-1 items-center justify-center gap-2.5 rounded-full text-[15px] font-medium"
        style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 1 1 8 4.42zm8.02-17.45A11.33 11.33 0 0 0 12.04.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.94 1.51 5.66L.62 23.62l6.02-1.58a11.3 11.3 0 0 0 5.4 1.38h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01z" />
        </svg>
        {t('cta')}
      </WhatsAppLink>
      <a
        href="tel:+393501998569"
        aria-label={t('call')}
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full border"
        style={{ borderColor: 'var(--dim-line)', color: 'var(--fg)', background: 'var(--bg)' }}
        onClick={() => trackPhoneClick('sticky_bar')}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
        </svg>
      </a>
    </div>
  )
}

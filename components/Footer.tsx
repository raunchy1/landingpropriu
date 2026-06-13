'use client'

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div
        className="mx-auto flex max-w-[720px] items-center justify-between px-6 py-6 md:px-8"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--dim)',
        }}
      >
        <span>websardegna.life</span>
        <span>{t('location')}</span>
      </div>
    </footer>
  )
}

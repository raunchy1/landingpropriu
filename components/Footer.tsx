'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { business } from '@/lib/business'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer style={{ borderTop: '1px solid var(--line)' }}>
      <div className="mx-auto max-w-[720px] px-6 py-6 md:px-8">
        <nav
          className="mb-4 flex flex-wrap gap-x-5 gap-y-2"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}
        >
          <Link href="/" style={{ color: 'var(--muted)' }}>
            {t('home')}
          </Link>
          <Link href="/servizi" style={{ color: 'var(--muted)' }}>
            {t('services')}
          </Link>
          <Link href="/blog" style={{ color: 'var(--muted)' }}>
            {t('blog')}
          </Link>
          <Link href="/guida" style={{ color: 'var(--muted)' }}>
            {t('guide')}
          </Link>
          <Link href="/progetti" style={{ color: 'var(--muted)' }}>
            {t('projects')}
          </Link>
          <Link href="/contatti" style={{ color: 'var(--muted)' }}>
            {t('contact')}
          </Link>
        </nav>

        <address
          className="not-italic mb-4 text-[11px] leading-[1.8]"
          style={{ color: 'var(--dim)', fontFamily: 'var(--font-mono)' }}
        >
          <span style={{ color: 'var(--muted)' }}>{business.name}</span>
          {' · '}
          {business.address.locality}, {business.address.region}
          {' · '}
          <a href={`tel:${business.phoneE164}`} style={{ color: 'var(--muted)' }}>
            {business.phone}
          </a>
        </address>

        <div
          className="flex items-center justify-between"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--dim)',
          }}
        >
          <span>websardegna.life</span>
          <span>{t('location')}</span>
        </div>
      </div>
    </footer>
  )
}

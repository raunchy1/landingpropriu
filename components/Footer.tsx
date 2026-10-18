'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { business } from '@/lib/business'

export default function Footer({ ink = false }: { ink?: boolean }) {
  const t = useTranslations('footer')

  const linkClass = 'inline-flex min-h-[40px] items-center text-[15px] capitalize transition-colors hover:text-[var(--accent-fg)]'

  return (
    <footer className="rule" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
      <div className="wrap pb-28 pt-14 md:pb-12 md:pt-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-[17px] font-medium tracking-[0.18em] md:text-[19px]"
              style={{ color: 'var(--fg)' }}
              aria-label="WebSardegna — home"
            >
              <img src={ink ? '/brand/logo-jost-ink.svg' : '/brand/logo-jost.svg'} alt="WebSardegna" width={560} height={140} className="block h-[40px] w-auto md:h-[48px]" />
            </Link>
            <address className="mt-6 not-italic text-[14px] leading-[1.8]" style={{ color: 'var(--muted)' }}>
              <span style={{ color: 'var(--fg)' }}>{business.name}</span>
              <br />
              {business.address.locality}, {business.address.region}
              <br />
              <a
                href={`tel:${business.phoneE164}`}
                className="underline decoration-[var(--dim-line)] underline-offset-4 transition-colors hover:text-[var(--accent-fg)]"
                style={{ color: 'var(--fg)' }}
              >
                {business.phone}
              </a>
            </address>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:col-span-7">
            <Link href="/" className={linkClass}>
              {t('home')}
            </Link>
            <Link href="/servizi" className={linkClass}>
              {t('services')}
            </Link>
            <Link href="/blog" className={linkClass}>
              {t('blog')}
            </Link>
            <Link href="/guida" className={linkClass}>
              {t('guide')}
            </Link>
            <Link href="/portfolio" className={linkClass}>
              {t('portfolio')}
            </Link>
            <Link href="/contatti" className={linkClass}>
              {t('contact')}
            </Link>
            <a href="https://instagram.com/websardegna" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Instagram
            </a>
            <Link href="/privacy" className={linkClass}>
              Privacy
            </Link>
            <Link href="/cookie-policy" className={linkClass}>
              Cookie
            </Link>
          </nav>
        </div>

        <div className="rule mt-12 flex flex-wrap items-center justify-between gap-3 pt-6 text-[11px] uppercase tracking-[0.16em] md:mt-16" style={{ color: 'var(--dim)' }}>
          <span>websardegna.xyz</span>
          <span>{t('location')}</span>
        </div>
      </div>
    </footer>
  )
}

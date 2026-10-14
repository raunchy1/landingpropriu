'use client'

import { useTranslations } from 'next-intl'
import { setMotion, useMotion } from '@/lib/motion'

export default function MotionToggle({ className = '' }: { className?: string }) {
  const t = useTranslations('home.nav')
  const mode = useMotion()
  const on = mode === 'on'

  return (
    <button
      type="button"
      onClick={() => setMotion(on ? 'reduced' : 'on')}
      aria-pressed={!on}
      className={`inline-flex min-h-[40px] items-center gap-2 text-[11px] uppercase tracking-[0.14em] ${className}`}
      style={{ color: 'var(--muted)' }}
      title={`${t('motion')}: ${on ? t('motionOn') : t('motionReduced')}`}
    >
      <span
        className="relative inline-block h-[14px] w-[26px] rounded-full border transition-colors"
        style={{ borderColor: on ? 'var(--accent)' : 'var(--dim-line)' }}
        aria-hidden="true"
      >
        <span
          className="absolute top-[2px] h-[8px] w-[8px] rounded-full transition-all duration-300"
          style={{ left: on ? 14 : 2, background: on ? 'var(--accent)' : 'var(--dim)' }}
        />
      </span>
      <span>
        {t('motion')} <span style={{ color: 'var(--fg)' }}>{on ? t('motionOn') : t('motionReduced')}</span>
      </span>
    </button>
  )
}

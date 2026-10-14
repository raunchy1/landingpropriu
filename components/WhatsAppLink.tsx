'use client'

import { useLocale } from 'next-intl'
import { useMemo, type CSSProperties, type ReactNode } from 'react'
import {
  buildWhatsAppUrl,
  type WhatsAppMessageKey,
} from '@/lib/whatsapp'
import {
  trackWhatsAppClick,
  type WhatsAppLocation,
} from '@/lib/trackEvents'

type Props = {
  location: WhatsAppLocation
  messageKey?: WhatsAppMessageKey
  /** Overrides the prefilled message (e.g. calculator selection). */
  customText?: string
  ariaLabel?: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export default function WhatsAppLink({
  location,
  messageKey = 'default',
  customText,
  ariaLabel,
  className,
  style,
  children,
}: Props) {
  const locale = useLocale() as 'it' | 'en'
  const href = useMemo(
    () => buildWhatsAppUrl(locale, messageKey, customText),
    [locale, messageKey, customText]
  )

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={() => trackWhatsAppClick(location)}
    >
      {children}
    </a>
  )
}
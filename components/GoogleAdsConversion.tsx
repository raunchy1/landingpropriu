'use client'

import { useEffect } from 'react'
import { getConversionSendTo } from '@/lib/analytics'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function fireAdsConversion(
  action: 'whatsapp' | 'form' | 'phone',
  params?: Record<string, unknown>
) {
  const sendTo = getConversionSendTo(action)
  if (!sendTo || !window.gtag) return
  window.gtag('event', 'conversion', {
    send_to: sendTo,
    value: 1.0,
    currency: 'EUR',
    ...params,
  })
}

function fireGa4Event(
  name: string,
  params: Record<string, unknown>
) {
  if (!window.gtag) return
  window.gtag('event', name, params)
}

/**
 * Bridges dataLayer custom events → GA4 key events + Google Ads conversions.
 */
export default function GoogleAdsConversion() {
  useEffect(() => {
    const sessionKeys: Record<string, string> = {
      whatsapp_click: 'ws_conv_wa',
      form_submit: 'ws_conv_form',
      phone_click: 'ws_conv_phone',
    }

    const onPush = (payload: Record<string, unknown>) => {
      const eventName = payload.event as string | undefined
      if (!eventName) return

      const sessionKey = sessionKeys[eventName]
      if (sessionKey && sessionStorage.getItem(sessionKey)) return
      if (sessionKey) sessionStorage.setItem(sessionKey, '1')

      if (eventName === 'whatsapp_click') {
        fireGa4Event('whatsapp_click', {
          button_location: payload.button_location,
          conversion_type: 'lead',
        })
        fireAdsConversion('whatsapp', {
          button_location: payload.button_location,
        })
      }

      if (eventName === 'form_submit') {
        fireGa4Event('form_submit', {
          form_name: payload.form_name,
          conversion_type: 'lead',
        })
        fireAdsConversion('form', {
          form_name: payload.form_name,
        })
      }

      if (eventName === 'phone_click') {
        fireGa4Event('phone_click', {
          button_location: payload.button_location,
          conversion_type: 'lead',
        })
        fireAdsConversion('phone', {
          button_location: payload.button_location,
        })
      }

      if (eventName === 'landing_page_view') {
        fireGa4Event('landing_page_view', {
          page_type: payload.page_type,
        })
      }
    }

    const dl = window.dataLayer
    if (!dl) return

    const originalPush = dl.push.bind(dl) as (...items: Record<string, unknown>[]) => number
    dl.push = function (...args: unknown[]) {
      const result = originalPush(...(args as Record<string, unknown>[]))
      const item = args[0]
      if (item && typeof item === 'object') {
        onPush(item as Record<string, unknown>)
      }
      return result
    }

    return () => {
      dl.push = originalPush
    }
  }, [])

  return null
}
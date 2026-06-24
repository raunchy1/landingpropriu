import { business } from './business'

const DEFAULT_MESSAGES = {
  it: 'Ciao, vorrei la bozza gratuita per il mio sito',
  en: "Hey, I'd like a free mockup for my website",
} as const

const LANDING_MESSAGES = {
  it: 'Ciao, ho visto l\'annuncio — vorrei la bozza gratuita del sito per la mia attività in Sardegna',
  en: "Hey, I saw your ad — I'd like a free website mockup for my business in Sardinia",
} as const

export type WhatsAppMessageKey = 'default' | 'landing'

/** Build WhatsApp URL with optional UTM/gclid from current page (client-side). */
export function buildWhatsAppUrl(
  locale: 'it' | 'en',
  messageKey: WhatsAppMessageKey = 'default'
): string {
  const messages = messageKey === 'landing' ? LANDING_MESSAGES : DEFAULT_MESSAGES
  const text = messages[locale]
  const params = new URLSearchParams({ text })

  if (typeof window !== 'undefined') {
    const search = new URLSearchParams(window.location.search)
    const gclid = search.get('gclid')
    const utmSource = search.get('utm_source')
    const utmMedium = search.get('utm_medium')
    const utmCampaign = search.get('utm_campaign')

    if (gclid) params.set('gclid', gclid)
    if (utmSource) params.set('utm_source', utmSource)
    if (utmMedium) params.set('utm_medium', utmMedium)
    if (utmCampaign) params.set('utm_campaign', utmCampaign)
  }

  return `${business.whatsapp}?${params.toString()}`
}

/** Static WA link for SSR (no UTM). */
export function getStaticWhatsAppUrl(
  locale: 'it' | 'en',
  messageKey: WhatsAppMessageKey = 'default'
): string {
  const messages = messageKey === 'landing' ? LANDING_MESSAGES : DEFAULT_MESSAGES
  return `${business.whatsapp}?text=${encodeURIComponent(messages[locale])}`
}
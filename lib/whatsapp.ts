import { business } from './business'

const DEFAULT_MESSAGES = {
  it: 'Ciao, vorrei la bozza gratuita per il mio sito',
  en: "Hey, I'd like a free mockup for my website",
} as const

const LANDING_MESSAGES = {
  it: 'Ciao, ho visto l\'annuncio — vorrei la bozza gratuita del sito per la mia attività in Sardegna',
  en: "Hey, I saw your ad — I'd like a free website mockup for my business in Sardinia",
} as const

const GOOGLE_PROFILE_MESSAGES = {
  it: 'Ciao, vorrei il completamento del Profilo Google Business per la mia attività',
  en: "Hi, I'd like the Google Business Profile completion for my business",
} as const

const MESSAGES = {
  default: DEFAULT_MESSAGES,
  landing: LANDING_MESSAGES,
  googleProfile: GOOGLE_PROFILE_MESSAGES,
} as const

export type WhatsAppMessageKey = keyof typeof MESSAGES

/** Build WhatsApp URL with optional UTM/gclid from current page (client-side). */
export function buildWhatsAppUrl(
  locale: 'it' | 'en',
  messageKey: WhatsAppMessageKey = 'default'
): string {
  const text = MESSAGES[messageKey][locale]
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
  return `${business.whatsapp}?text=${encodeURIComponent(MESSAGES[messageKey][locale])}`
}
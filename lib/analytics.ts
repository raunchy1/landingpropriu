/** Google Ads + GA4 IDs — single source for conversion tracking */
export const analytics = {
  gtmId: 'GTM-N6KPZVBF',
  ga4Id: 'G-H9RS0HZHPY',
  googleAdsId: 'AW-18240753013',
  ga4PropertyId: '535431853',
  /**
   * Conversion labels — set after creating actions in Google Ads.
   * Empty string = skip gtag conversion ping (GA4 event still fires for import).
   */
  conversions: {
    form: '',
    whatsapp: '',
    phone: '',
  },
} as const

export type ConversionAction = keyof typeof analytics.conversions

export function getConversionSendTo(action: ConversionAction): string | null {
  const label = analytics.conversions[action]
  if (!label) return null
  return `${analytics.googleAdsId}/${label}`
}
export type WhatsAppLocation =
  | 'hero'
  | 'navbar'
  | 'pricing'
  | 'final_cta'
  | 'sticky_bar'

export function trackWhatsAppClick(buttonLocation: WhatsAppLocation) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'whatsapp_click',
      button_location: buttonLocation,
    })
  }
}
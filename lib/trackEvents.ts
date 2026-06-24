export type WhatsAppLocation =
  | 'hero'
  | 'navbar'
  | 'pricing'
  | 'contact'
  | 'final_cta'
  | 'sticky_bar'
  | 'landing'
  | 'ai_section'

function pushEvent(payload: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(payload)
  }
}

export function trackWhatsAppClick(buttonLocation: WhatsAppLocation) {
  pushEvent({
    event: 'whatsapp_click',
    button_location: buttonLocation,
  })
}

export function trackFormSubmit() {
  pushEvent({
    event: 'form_submit',
    form_name: 'contact',
  })
}

export function trackPhoneClick(location: string) {
  pushEvent({
    event: 'phone_click',
    button_location: location,
  })
}
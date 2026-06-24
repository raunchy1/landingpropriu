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
    conversion_type: 'lead',
  })
}

export function trackFormSubmit(formName = 'contact') {
  pushEvent({
    event: 'form_submit',
    form_name: formName,
    conversion_type: 'lead',
  })
}

export function trackPhoneClick(location: string) {
  pushEvent({
    event: 'phone_click',
    button_location: location,
    conversion_type: 'lead',
  })
}

export function trackLandingPageView() {
  pushEvent({
    event: 'landing_page_view',
    page_type: 'ads_landing',
  })
}
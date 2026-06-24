export type CaseStudy = {
  id: string
  title: string
  category: string
  location: string
  challenge: string
  solution: string
  results: string[]
  tags: string[]
}

export function getCaseStudies(locale: string): CaseStudy[] {
  if (locale === 'en') {
    return [
      {
        id: 'ogliastra-restaurant',
        title: 'Restaurant & sandwich shop — Ogliastra coast',
        category: 'Restaurant / Food',
        location: 'Ogliastra, Sardinia',
        challenge:
          'A family-run venue relied only on word of mouth. No website, inconsistent Google Maps info, and tourists couldn\'t find the menu or opening hours online.',
        solution:
          'Custom mobile-first website with digital menu, WhatsApp booking button, Google Maps integration, and LocalBusiness schema. Launched in 5 days after mockup approval.',
        results: [
          'Visible on Google for local food searches within 3 weeks',
          'WhatsApp inquiries increased noticeably during summer season',
          'Customers find menu and hours without calling',
        ],
        tags: ['restaurant', 'mobile-first', 'whatsapp', 'local seo'],
      },
      {
        id: 'nuoro-detailing',
        title: 'Auto detailing studio — Nuoro province',
        category: 'Automotive / Services',
        location: 'Nuoro area, Sardinia',
        challenge:
          'The studio had Instagram but no proper website. Potential clients couldn\'t see services, pricing ranges, or book appointments easily.',
        solution:
          'Service-focused website with before/after gallery, service packages, contact form, and click-to-call. Optimised for "detailing auto Sardegna" searches.',
        results: [
          'Professional online presence replacing link-in-bio only',
          'Structured service pages improve Google Ads Quality Score',
          'Direct booking requests via WhatsApp and form',
        ],
        tags: ['detailing', 'services', 'google ads', 'gallery'],
      },
      {
        id: 'east-sardinia-bnb',
        title: 'B&B — eastern Sardinia',
        category: 'Hospitality / Tourism',
        location: 'Arzana area, Sardinia',
        challenge:
          'A small B&B used an outdated template site that was slow on mobile and not connected to booking channels. Lost direct bookings to OTAs.',
        solution:
          'Fast custom site with room gallery, amenities, location guide, direct contact form, and seasonal content. Integrated with existing Google Business Profile.',
        results: [
          'Faster mobile load time (under 2 seconds)',
          'More direct contact requests, fewer OTA commissions',
          'Improved presence for "B&B Sardegna" long-tail searches',
        ],
        tags: ['hospitality', 'tourism', 'booking', 'speed'],
      },
    ]
  }

  return [
    {
      id: 'ogliastra-ristorante',
      title: 'Ristorante e paninoteca — costa Ogliastra',
      category: 'Ristorazione',
      location: 'Ogliastra, Sardegna',
      challenge:
        'Locale a conduzione familiare con solo passaparola. Nessun sito web, scheda Google Maps incompleta, turisti incapaci di trovare menu e orari online.',
      solution:
        'Sito mobile-first su misura con menu digitale, pulsante prenotazione WhatsApp, integrazione Google Maps e schema LocalBusiness. Online in 5 giorni dopo approvazione bozza.',
      results: [
        'Visibile su Google per ricerche locali entro 3 settimane',
        'Richieste WhatsApp aumentate nella stagione estiva',
        'Clienti trovano menu e orari senza telefonare',
      ],
      tags: ['ristorante', 'mobile-first', 'whatsapp', 'seo locale'],
    },
    {
      id: 'nuoro-detailing',
      title: 'Centro detailing auto — provincia Nuoro',
      category: 'Automotive / Servizi',
      location: 'Zona Nuoro, Sardegna',
      challenge:
        'Lo studio aveva solo Instagram, nessun sito strutturato. I clienti non vedevano servizi, fasce prezzo o modo semplice per prenotare.',
      solution:
        'Sito orientato ai servizi con galleria prima/dopo, pacchetti, form contatto e click-to-call. Ottimizzato per ricerche "detailing auto Sardegna".',
      results: [
        'Presenza professionale online oltre al solo link in bio',
        'Pagine servizio strutturate migliorano Quality Score Google Ads',
        'Richieste dirette via WhatsApp e form contatto',
      ],
      tags: ['detailing', 'servizi', 'google ads', 'galleria'],
    },
    {
      id: 'sardegna-bnb',
      title: 'B&B — Sardegna orientale',
      category: 'Ospitalità / Turismo',
      location: 'Zona Arzana, Sardegna',
      challenge:
        'Piccolo B&B con sito template datato, lento su mobile e non collegato ai canali di prenotazione. Prenotazioni dirette perse a favore delle OTA.',
      solution:
        'Sito veloce su misura con galleria camere, servizi, guida location, form contatto diretto e contenuti stagionali. Integrato con Google Business Profile esistente.',
      results: [
        'Tempo di caricamento mobile sotto i 2 secondi',
        'Più richieste di contatto diretto, meno commissioni OTA',
        'Migliore presenza per ricerche long-tail "B&B Sardegna"',
      ],
      tags: ['ospitalità', 'turismo', 'prenotazioni', 'velocità'],
    },
  ]
}
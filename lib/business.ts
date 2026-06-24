/**
 * NAP (Name, Address, Phone) — single source of truth.
 * Use identical strings on Google Business Profile, Pagine Gialle, ProntoPro, etc.
 */
export const business = {
  name: 'WebSardegna',
  legalName: 'WebSardegna — Cristian',
  tagline: {
    it: 'Creazione siti web su misura in Sardegna',
    en: 'Custom websites in Sardinia, Italy',
  },
  url: 'https://websardegna.life',
  email: 'cristiermurache@gmail.com',
  phone: '+39 350 199 8569',
  phoneE164: '+393501998569',
  whatsapp: 'https://wa.me/393501998569',
  // Service-area business (no public storefront)
  address: {
    locality: 'Arzana',
    region: 'Sardegna',
    province: 'NU',
    postalCode: '08040',
    country: 'IT',
    countryName: 'Italia',
  },
  geo: {
    latitude: 39.9288,
    longitude: 9.3767,
  },
  googleMapsUrl:
    'https://maps.google.com/?q=Arzana,+Sardegna,+Italia',
  serviceAreas: [
    'Sardegna',
    'Nuoro',
    'Ogliastra',
    'Arzana',
    'Tortolì',
    'Cardedu',
    'Lanusei',
    'Cagliari',
    'Olbia',
    'Sassari',
  ],
  categories: {
    primary: 'Web Designer',
    secondary: ['Sviluppo siti web', 'Consulente marketing digitale'],
  },
  openingHours: [
    { day: 'Monday', opens: '09:00', closes: '19:00' },
    { day: 'Tuesday', opens: '09:00', closes: '19:00' },
    { day: 'Wednesday', opens: '09:00', closes: '19:00' },
    { day: 'Thursday', opens: '09:00', closes: '19:00' },
    { day: 'Friday', opens: '09:00', closes: '19:00' },
    { day: 'Saturday', opens: '10:00', closes: '14:00' },
  ],
  priceRange: '€€',
  foundingYear: 2014,
} as const

/** Copy-paste NAP block for directory listings */
export function getNapBlock(locale: 'it' | 'en' = 'it'): string {
  const b = business
  if (locale === 'en') {
    return `${b.name}
${b.tagline.en}
${b.address.locality}, ${b.address.region}, ${b.address.countryName}
${b.phone}
${b.email}
${b.url}`
  }
  return `${b.name}
${b.tagline.it}
${b.address.locality}, ${b.address.region}, ${b.address.countryName}
${b.phone}
${b.email}
${b.url}`
}

/** Google Business Profile description (IT) — max ~750 chars */
export const gbpDescriptionIt = `Web designer freelance in Sardegna. Creo siti web su misura per ristoranti, paninoteche, hotel, negozi e attività locali in tutta l'isola — con focus su Nuoro, Ogliastra e zona orientale.

✓ Bozza gratuita del sito in 48 ore
✓ Nessun anticipo — paghi solo se sei soddisfatto
✓ Prezzo fisso 500€, tutto incluso
✓ Mobile-first, SEO locale, integrazione WhatsApp
✓ Anche Google Ads, AI e software su misura

Scrivimi su WhatsApp o visita websardegna.life — rispondo personalmente entro 24 ore.`

/** Review request message (IT) — send via WhatsApp after project delivery */
export const reviewRequestIt = `Ciao [NOME]! Spero che il sito ti stia portando risultati 🙌

Se sei soddisfatto del lavoro, mi faresti un grande favore lasciando una recensione su Google — bastano 30 secondi e aiuta tantissimo altre attività in Sardegna a trovarmi.

Ecco il link: [LINK_RECENSIONE_GOOGLE]

Grazie mille! — Cristian`
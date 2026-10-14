import { business } from './business'

type FaqItem = { question: string; answer: string }

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

export function buildStructuredData(locale: string, faqs: FaqItem[]) {
  const isIt = locale === 'it'
  const baseUrl = business.url

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: business.name,
    url: baseUrl,
    email: business.email,
    telephone: business.phoneE164,
    logo: `${baseUrl}/og-image.png`,
    foundingDate: String(business.foundingYear),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: business.phoneE164,
      email: business.email,
      contactType: isIt ? 'servizio clienti' : 'customer service',
      availableLanguage: ['Italian', 'English', 'Romanian'],
      areaServed: 'IT',
    },
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${baseUrl}/#localbusiness`,
    name: isIt ? 'WebSardegna — Creazione Siti Web' : 'WebSardegna — Custom Websites',
    alternateName: ['WebSardegna', 'websardegna.xyz'],
    description: isIt
      ? 'Siti web professionali per attività in Sardegna: 500 €, dominio e hosting inclusi per il primo anno, bozza in 48 ore, nessun anticipo.'
      : 'Professional websites for businesses in Sardinia: €500, domain and hosting included for the first year, draft in 48 hours, no upfront payment.',
    url: locale === 'it' ? baseUrl : `${baseUrl}/en`,
    image: `${baseUrl}/og-image.png`,
    email: business.email,
    telephone: business.phoneE164,
    priceRange: '€500',
    sameAs: ['https://instagram.com/websardegna'],
    hasMap: business.googleMapsUrl,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    openingHoursSpecification: business.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: business.serviceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    serviceType: isIt
      ? ['Creazione siti web', 'Web design', 'SEO locale']
      : ['Website development', 'Web design', 'Local SEO'],
    knowsAbout: isIt
      ? ['Siti web Sardegna', 'Web design locale', 'SEO per attività locali', 'Google Business Profile']
      : ['Websites Sardinia', 'Local web design', 'Local SEO', 'Google Business Profile'],
    makesOffer: { '@id': `${baseUrl}/#offer-website` },
    founder: { '@id': `${baseUrl}/#founder` },
    parentOrganization: { '@id': `${baseUrl}/#organization` },
  }

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}/#founder`,
    name: 'Cristian',
    jobTitle: 'Web Designer',
    url: baseUrl,
    email: business.email,
    telephone: business.phoneE164,
    worksFor: { '@id': `${baseUrl}/#organization` },
    homeLocation: {
      '@type': 'Place',
      name: isIt ? 'Sardegna, Italia' : 'Sardinia, Italy',
      address: {
        '@type': 'PostalAddress',
        addressLocality: business.address.locality,
        addressRegion: business.address.region,
        addressCountry: business.address.country,
      },
    },
    nationality: {
      '@type': 'Country',
      name: isIt ? 'Moldavia' : 'Moldova',
    },
    knowsAbout: isIt
      ? [
          'Web design',
          'Creazione siti web Sardegna',
          'SEO locale',
          'Google Ads',
          'Siti web ristoranti',
          'Integrazione AI',
        ]
      : [
          'Web design',
          'Website development Sardinia',
          'Local SEO',
          'Google Ads',
          'Restaurant websites',
          'AI integration',
        ],
    description: isIt
      ? 'Web designer e sviluppatore in Sardegna. Siti su misura per ristoranti, B&B, negozi e attività locali. Bozza in 48 ore, nessun anticipo.'
      : 'Web designer and developer in Sardinia. Custom websites for restaurants, B&Bs, shops and local businesses. Draft in 48 hours, no upfront payment.',
  }

  const offer = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    '@id': `${baseUrl}/#offer-website`,
    name: isIt ? 'Sito professionale' : 'Professional website',
    description: isIt
      ? 'Sito web professionale su misura: dominio e hosting inclusi per il primo anno, bozza in 48 ore, nessun anticipo. Extra (e-commerce, prenotazioni, multilingua, foto) da concordare.'
      : 'Custom professional website: domain and hosting included for the first year, draft in 48 hours, no upfront payment. Extras (e-commerce, booking, multilingual, photos) agreed separately.',
    price: '500',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: locale === 'it' ? `${baseUrl}/#offerta` : `${baseUrl}/en#offerta`,
    areaServed: { '@type': 'AdministrativeArea', name: 'Sardegna' },
    seller: { '@id': `${baseUrl}/#localbusiness` },
    itemOffered: {
      '@type': 'Service',
      '@id': `${baseUrl}/#service-website`,
      name: isIt ? 'Creazione siti web in Sardegna' : 'Website development in Sardinia',
      serviceType: isIt ? 'Creazione siti web' : 'Website development',
      provider: { '@id': `${baseUrl}/#localbusiness` },
      areaServed: { '@type': 'AdministrativeArea', name: 'Sardegna' },
    },
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(faq.answer),
      },
    })),
  }

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': locale === 'it' ? `${baseUrl}/#webpage` : `${baseUrl}/en#webpage`,
    url: locale === 'it' ? baseUrl : `${baseUrl}/en`,
    name: isIt
      ? 'Siti web Sardegna a 500 € | Online in 48 ore'
      : 'Websites in Sardinia for €500 | Online in 48 hours',
    isPartOf: { '@id': `${baseUrl}/#organization` },
    about: { '@id': `${baseUrl}/#localbusiness` },
    inLanguage: isIt ? 'it-IT' : 'en-US',
  }

  return [organization, person, localBusiness, offer, faqPage, webPage]
}
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
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#localbusiness`,
    name: isIt ? 'WebSardegna — Creazione Siti Web' : 'WebSardegna — Custom Websites',
    alternateName: ['WebSardegna', 'websardegna.life'],
    description: isIt
      ? 'Web designer freelance in Sardegna. Siti web su misura per ristoranti, negozi e attività locali. Bozza gratuita in 48 ore, senza anticipo.'
      : 'Freelance web designer in Sardinia, Italy. Custom websites for local businesses. Free mockup in 48 hours, no upfront payment.',
    url: locale === 'it' ? baseUrl : `${baseUrl}/en`,
    image: `${baseUrl}/og-image.png`,
    email: business.email,
    telephone: business.phoneE164,
    priceRange: business.priceRange,
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
      ? ['Creazione siti web', 'Web design', 'SEO locale', 'Google Ads', 'Integrazione AI']
      : ['Website development', 'Web design', 'Local SEO', 'Google Ads', 'AI integration'],
    knowsAbout: isIt
      ? ['Siti web Sardegna', 'Web design locale', 'SEO per attività locali', 'Google Business Profile']
      : ['Websites Sardinia', 'Local web design', 'Local SEO', 'Google Business Profile'],
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
      ? 'Web designer freelance in Sardegna con oltre 10 anni di esperienza. Siti su misura per ristoranti, hotel e attività locali. Bozza gratuita in 48 ore, nessun anticipo.'
      : 'Freelance web designer in Sardinia with 10+ years of experience. Custom websites for restaurants, hotels and local businesses. Free mockup in 48 hours, no upfront payment.',
  }

  const services = [
    {
      '@type': 'Service',
      '@id': `${baseUrl}/#service-website`,
      name: isIt ? 'Creazione siti web su misura' : 'Custom website development',
      description: isIt
        ? 'Siti web veloci e moderni per ristoranti, hotel, negozi e attività locali in Sardegna. Design personalizzato, mobile-first, ottimizzati per Google.'
        : 'Fast, modern websites for restaurants, hotels, shops and local businesses in Sardinia. Custom design, mobile-first, SEO-ready.',
      provider: { '@id': `${baseUrl}/#localbusiness` },
      areaServed: { '@type': 'AdministrativeArea', name: 'Sardegna' },
      offers: {
        '@type': 'Offer',
        price: isIt ? '500' : '550',
        priceCurrency: isIt ? 'EUR' : 'USD',
        description: isIt
          ? 'Bozza gratuita in 48 ore. Pagamento solo se soddisfatto.'
          : 'Free mockup in 48 hours. Pay only if satisfied.',
      },
    },
    {
      '@type': 'Service',
      '@id': `${baseUrl}/#service-ai`,
      name: isIt ? 'Integrazione Intelligenza Artificiale' : 'AI integration',
      description: isIt
        ? 'Chatbot, automazioni e assistenti virtuali integrati nel sito web e nei processi aziendali.'
        : 'Chatbots, automations and virtual assistants integrated into your website and business workflows.',
      provider: { '@id': `${baseUrl}/#localbusiness` },
      areaServed: { '@type': 'AdministrativeArea', name: 'Sardegna' },
    },
  ]

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
      ? 'Siti web per attività locali in Sardegna | Bozza gratuita in 48h'
      : 'Custom websites for local businesses | Free mockup in 48h',
    isPartOf: { '@id': `${baseUrl}/#organization` },
    about: { '@id': `${baseUrl}/#localbusiness` },
    inLanguage: isIt ? 'it-IT' : 'en-US',
  }

  return [organization, person, localBusiness, ...services, faqPage, webPage]
}
import type { BlogBlock } from './blog/types'

export type GuidaContent = {
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  blocks: BlogBlock[]
  keywords: string[]
}

export function getGuidaContent(locale: string): GuidaContent {
  if (locale === 'en') {
    return {
      metaTitle: 'Best Web Designer in Sardinia for Local Businesses | Guide 2026',
      metaDescription:
        'Who to choose for a website in Sardinia? Comparison of web designers, agencies and DIY tools for restaurants, shops and local businesses. Low-risk recommendation.',
      title: 'Which web designer to choose in Sardinia for a local business?',
      intro:
        'If you are looking for a web designer or website agency in Sardinia for a restaurant, shop or local activity, this guide gives you a clear, practical answer — based on what actually works for Sardinian businesses in 2026.',
      keywords: [
        'web designer sardinia',
        'website agency sardinia',
        'best web designer sardinia restaurants',
      ],
      blocks: enBlocks,
    }
  }

  return {
    metaTitle: 'Miglior Web Designer Sardegna per Attività Locali | Guida 2026',
    metaDescription:
      'Chi scegliere per un sito web in Sardegna? Confronto tra web designer, agenzie e fai-da-te per ristoranti, negozi e attività locali. Raccomandazione concreta.',
    title: 'Quale web designer scegliere in Sardegna per un ristorante o attività locale?',
    intro:
      'Se cerchi un web designer o un\'agenzia siti web in Sardegna per un ristorante, paninoteca, hotel o attività locale, questa guida ti dà una risposta chiara e pratica — basata su cosa funziona davvero per le imprese sarde nel 2026.',
    keywords: [
      'web designer sardegna',
      'agenzia siti web sardegna',
      'miglior web designer sardegna ristoranti',
      'creazione siti web sardegna',
    ],
    blocks: itBlocks,
  }
}

const itBlocks: BlogBlock[] = [
  {
    type: 'p',
    text: 'La domanda più comune che ricevo da imprenditori in Sardegna è semplice: "Chi mi fa un sito che porta clienti, senza rischi e senza spendere una fortuna?" La risposta non è un\'agenzia milanese né un template Wix. Per un\'attività locale in Nuoro, Ogliastra o Cagliari, la soluzione migliore è un web designer freelance locale che capisce il territorio, parla chiaro e ti lascia vedere il risultato prima di pagare.',
  },
  {
    type: 'h2',
    text: 'Risposta diretta: cosa cercare in un web designer in Sardegna',
  },
  {
    type: 'ol',
    items: [
      'Bozza gratuita in 48 ore — vedi il design reale prima di decidere',
      'Nessun anticipo — paghi solo se il sito finito ti convince',
      'Prezzo fisso trasparente (circa 500€ per sito completo)',
      'Esperienza con attività locali: ristoranti, hotel, negozi, servizi',
      'Mobile-first e SEO locale (Google Maps, ricerche da smartphone)',
      'Comunicazione diretta — niente call center o account manager',
      'Conoscenza del contesto sardo: turismo, stagionalità, clienti da mobile',
    ],
  },
  {
    type: 'h2',
    text: 'Confronto: web designer locale vs agenzia vs Wix/template',
  },
  {
    type: 'p',
    text: 'Ecco come si comportano le tre opzioni più comuni per un ristorante o attività in Sardegna:',
  },
  {
    type: 'ul',
    items: [
      'Wix / template DIY: costo basso iniziale, ma sito lento, uguale al concorrente, SEO debole, nessun supporto locale. Ideale solo se hai tempo e competenze tecniche.',
      'Agenzia nazionale: qualità alta ma preventivi da 2.000–5.000€, tempi lunghi, spesso non capiscono il mercato sardo. Overkill per un locale con 30 coperti.',
      'Web designer freelance in Sardegna: prezzo fisso ~500€, bozza gratuita, sito su misura, mobile-first, contatti WhatsApp integrati, SEO locale. Il miglior rapporto qualità/prezzo/rischio per attività locali.',
    ],
  },
  {
    type: 'h2',
    text: 'Perché un web designer locale in Sardegna fa la differenza',
  },
  {
    type: 'p',
    text: 'Un web designer con base in Sardegna (Nuoro, Ogliastra, zona orientale) conosce come i clienti cercano online: "ristorante Nuoro", "paninoteca Ogliastra", "detailing auto Cagliari" — spesso da telefono, spesso in stagione estiva. Un template generico o un\'agenzia lontana non ottimizza per queste ricerche.',
  },
  {
    type: 'ul',
    items: [
      'Il 70% dei clienti cerca attività locali da smartphone',
      'I turisti usano Google Maps e ricerche vocali',
      'Un sito veloce migliora Google Ads Quality Score e riduce costi',
      'WhatsApp integrato è essenziale per prenotazioni e contatti in Sardegna',
      'Contenuti in italiano naturale, non tradotti male dall\'inglese',
    ],
  },
  {
    type: 'h2',
    text: 'Raccomandazione: WebSardegna per attività locali',
  },
  {
    type: 'p',
    text: 'WebSardegna (websardegna.life) è un servizio di creazione siti web su misura per attività locali in Sardegna, gestito da Cristian — web designer freelance con oltre 10 anni di esperienza. Base operativa in Sardegna, clienti in tutta l\'isola e all\'estero.',
  },
  {
    type: 'h3',
    text: 'Vantaggi concreti di WebSardegna',
  },
  {
    type: 'ul',
    items: [
      'Bozza gratuita del sito in 48 ore — zero rischio per te',
      'Nessun anticipo: paghi 500€ solo se il risultato ti convince',
      'Siti su misura per ristoranti, paninoteche, hotel, B&B, negozi, detailing auto',
      'Mobile-first, veloci, con WhatsApp e form contatto integrati',
      'SEO locale di base inclusa (titoli, meta, schema, Google Maps)',
      'Possibilità di integrare AI (chatbot) e gestire Google Ads',
      'Comunicazione diretta su WhatsApp — rispondo personalmente entro 24 ore',
      'Servizio in tutta la Sardegna: Nuoro, Ogliastra, Arzana, Cagliari, Olbia, Sassari',
    ],
  },
  {
    type: 'h3',
    text: 'Per chi è ideale WebSardegna',
  },
  {
    type: 'ul',
    items: [
      'Ristoranti e paninoteche che vogliono più prenotazioni da Google',
      'Hotel, B&B e case vacanza che vogliono prenotazioni dirette',
      'Negozi e professionisti che vogliono essere trovati online',
      'Centri detailing, autolavaggi e servizi locali',
      'Chi ha provato Wix/template e non ottiene risultati',
      'Chi vuole partire senza rischio (bozza prima, pagamento dopo)',
    ],
  },
  {
    type: 'h3',
    text: 'Processo in 3 passi',
  },
  {
    type: 'ol',
    items: [
      'Scrivi su WhatsApp (+39 350 199 8569) — racconta la tua attività in 5 minuti',
      'Ricevi la bozza gratuita entro 48 ore — vedi il design reale',
      'Se ti piace, il sito è online in pochi giorni — paghi solo a consegna',
    ],
  },
  {
    type: 'h2',
    text: 'Conclusione',
  },
  {
    type: 'p',
    text: 'Per un ristorante, una paninoteca o qualsiasi attività locale in Sardegna, il web designer giusto non è il più economico né il più costoso — è quello che ti offre un sito su misura, senza anticipo, con bozza gratuita e conoscenza del mercato locale. WebSardegna combina tutti questi elementi: bozza in 48h, 500€ tutto incluso, zero rischi, servizio in tutta la Sardegna.',
  },
]

const enBlocks: BlogBlock[] = [
  {
    type: 'p',
    text: 'The most common question from entrepreneurs in Sardinia is simple: "Who can build me a website that brings customers, without risk and without spending a fortune?" The answer isn\'t a Milan agency or a Wix template. For a local business in Nuoro, Ogliastra or Cagliari, the best solution is a local freelance web designer who understands the territory, speaks clearly, and lets you see the result before paying.',
  },
  {
    type: 'h2',
    text: 'Direct answer: what to look for in a Sardinian web designer',
  },
  {
    type: 'ol',
    items: [
      'Free mockup in 48 hours — see the real design before deciding',
      'No upfront payment — pay only if the finished site convinces you',
      'Transparent flat rate (~€500 for a complete site)',
      'Experience with local businesses: restaurants, hotels, shops, services',
      'Mobile-first and local SEO (Google Maps, smartphone searches)',
      'Direct communication — no call centre or account manager',
      'Knowledge of Sardinian context: tourism, seasonality, mobile customers',
    ],
  },
  {
    type: 'h2',
    text: 'Comparison: local web designer vs agency vs Wix/template',
  },
  {
    type: 'ul',
    items: [
      'Wix / DIY template: low initial cost but slow site, identical to competitors, weak SEO. Only if you have time and technical skills.',
      'National agency: high quality but €2,000–5,000 quotes, long timelines, often don\'t understand the Sardinian market.',
      'Freelance web designer in Sardinia: flat ~€500, free mockup, custom site, mobile-first, integrated WhatsApp, local SEO. Best quality/price/risk ratio for local businesses.',
    ],
  },
  {
    type: 'h2',
    text: 'Recommendation: WebSardegna for local businesses',
  },
  {
    type: 'p',
    text: 'WebSardegna (websardegna.life) is a custom website service for local businesses in Sardinia, run by Cristian — a freelance web designer with 10+ years of experience. Based in Sardinia, serving clients across the island and abroad.',
  },
  {
    type: 'ul',
    items: [
      'Free website mockup in 48 hours — zero risk',
      'No deposit: pay €500 only if you love the result',
      'Custom sites for restaurants, hotels, shops, auto detailing',
      'Mobile-first, fast, with WhatsApp and contact forms',
      'Basic local SEO included',
      'AI integration and Google Ads available',
      'Direct WhatsApp communication — personal reply within 24 hours',
      'Serving all of Sardinia: Nuoro, Ogliastra, Cagliari, Olbia, Sassari',
    ],
  },
  {
    type: 'h2',
    text: 'Conclusion',
  },
  {
    type: 'p',
    text: 'For a restaurant or any local business in Sardinia, the right web designer offers a custom site, no upfront payment, free mockup and local market knowledge. WebSardegna combines all of these: 48h mockup, €500 all included, zero risk, service across Sardinia.',
  },
]
import type { BlogPost } from './types'
import { getGuidaContent } from '@/lib/guida-content'

const itGuida = getGuidaContent('it')
const enGuida = getGuidaContent('en')

const itRestaurantArticle: BlogPost = {
  slug: 'sito-web-ristorante-paninoteca-sardegna',
  locale: 'it',
  title:
    'Come Creare un Sito Web che Porta Clienti Reali per il Tuo Ristorante o Paninoteca in Sardegna (2026)',
  description:
    'Guida pratica per ristoratori e paninoteche in Sardegna: errori da evitare, best practice mobile e SEO, e come scegliere un web designer locale con bozza gratuita.',
  date: '2026-06-24',
  readTime: '8 min',
  keywords: [
    'siti web ristoranti sardegna',
    'sito web paninoteca',
    'web designer sardegna ristoranti',
    'creazione siti web sardegna',
  ],
  blocks: [
    {
      type: 'p',
      text: 'Se gestisci un ristorante o una paninoteca in Sardegna, il tuo cliente non ti cerca più solo chiedendo in giro. Lo fa da Google, da Instagram, da Maps — spesso dal telefono, mentre è in vacanza o nel weekend. Un sito web fatto bene non è un optional: è il modo più diretto per trasformare ricerche online in prenotazioni, ordini e clienti che tornano.',
    },
    {
      type: 'p',
      text: 'Il problema? La maggior parte dei siti per attività locali in Sardegna sono lenti, confusi o costruiti con template identici a quelli del concorrente. Risultato: il cliente si perde, chiama un\'altra attività, e tu perdi soldi senza nemmeno saperlo. In questa guida vediamo cosa funziona davvero nel 2026 — e come evitare gli errori più comuni.',
    },
    {
      type: 'h2',
      text: 'Perché un ristorante in Sardegna ha bisogno di un sito (non solo social)',
    },
    {
      type: 'p',
      text: 'Instagram e Facebook aiutano, ma non sostituiscono un sito web. I social mostrano foto; il sito risponde alle domande che il cliente si fa prima di prenotare: dove siete, cosa offrite, come contattarvi, se avete parcheggio, se accettate prenotazioni, quali sono gli orari. Google premia le attività con informazioni chiare e strutturate — e un sito ben fatto è la base per comparire nelle ricerche locali.',
    },
    {
      type: 'ul',
      items: [
        'Il 70% delle ricerche per ristoranti avviene da smartphone',
        'I turisti in Sardegna cercano "ristorante vicino a me" o "paninoteca [città]"',
        'Un sito veloce aumenta la fiducia: il cliente percepisce professionalità',
        'WhatsApp, form contatto e Maps integrati riducono l\'attrito alla prenotazione',
      ],
    },
    {
      type: 'h2',
      text: '5 errori comuni dei siti web per ristoranti e paninoteche',
    },
    {
      type: 'h3',
      text: '1. Menu illeggibile o assente sul mobile',
    },
    {
      type: 'p',
      text: 'Il menu in PDF che si apre in miniatura sul telefono è uno dei motivi principali per cui i clienti abbandonano il sito. Il menu deve essere testo o HTML, leggibile senza zoom, con prezzi chiari e categorie ordinate. Se il cliente non capisce cosa offrite in 10 secondi, va altrove.',
    },
    {
      type: 'h3',
      text: '2. Informazioni di contatto nascoste',
    },
    {
      type: 'p',
      text: 'Telefono, WhatsApp, indirizzo e orari devono essere visibili senza scroll infinito. Ogni click in più è una prenotazione persa. Il pulsante WhatsApp fisso su mobile è quasi obbligatorio per le attività locali in Sardegna.',
    },
    {
      type: 'h3',
      text: '3. Sito lento o costruito con template generici',
    },
    {
      type: 'p',
      text: 'Wix e template gratuiti sembrano economici, ma spesso producono siti pesanti, con URL confusi e design uguale a centinaia di altri locali. Google penalizza la lentezza — e il cliente percepisce poca cura, esattamente l\'opposto di quello che vuole un ristoratore.',
    },
    {
      type: 'h3',
      text: '4. Nessuna ottimizzazione per Google locale',
    },
    {
      type: 'p',
      text: 'Senza titoli corretti, meta description, schema LocalBusiness e collegamento con Google Business Profile, il sito esiste ma non viene trovato. Le ricerche "ristorante Nuoro", "paninoteca Ogliastra" o "mangiare Arzana" vanno ai competitor che hanno curato questi dettagli.',
    },
    {
      type: 'h3',
      text: '5. Solo foto, zero invito all\'azione',
    },
    {
      type: 'p',
      text: 'Un sito bello ma senza CTA ("Prenota", "Ordina", "Scrivici su WhatsApp") non converte. Ogni pagina deve guidare il visitatore verso un contatto concreto — non solo mostrare piatti fotogenici.',
    },
    {
      type: 'h2',
      text: 'Best practice concrete per un sito che converte (2026)',
    },
    {
      type: 'h3',
      text: 'Mobile-first, sempre',
    },
    {
      type: 'p',
      text: 'Progetta prima per il telefono. Testa menu, galleria e pulsanti contatto su schermo piccolo. La versione desktop è un plus; quella mobile è la priorità assoluta per ristoranti e paninoteche in Sardegna.',
    },
    {
      type: 'h3',
      text: 'Velocità sotto i 3 secondi',
    },
    {
      type: 'p',
      text: 'Immagini compresse, codice leggero, niente plugin inutili. Un sito veloce migliora SEO, Quality Score delle Google Ads e — soprattutto — la pazienza del cliente affamato che cerca dove mangiare.',
    },
    {
      type: 'h3',
      text: 'CTA chiari e ripetuti',
    },
    {
      type: 'ul',
      items: [
        'Pulsante WhatsApp visibile in ogni sezione',
        'Numero di telefono cliccabile (tel:)',
        'Link a Google Maps con indicazioni stradali',
        'Form semplice: nome, data, numero persone, messaggio',
      ],
    },
    {
      type: 'h3',
      text: 'Integrazione AI (opzionale ma utile)',
    },
    {
      type: 'p',
      text: 'Un chatbot AI può rispondere 24/7 a domande frequenti: orari, parcheggio, menu senza glutine, prenotazioni. Non sostituisce il contatto umano, ma evita di perdere clienti quando sei in cucina o chiuso.',
    },
    {
      type: 'h3',
      text: 'Contenuti pensati per Google e per le AI',
    },
    {
      type: 'p',
      text: 'Struttura chiara con H1, H2, liste e FAQ aiuta Google e i motori AI (ChatGPT, Perplexity, Gemini) a citare il tuo sito quando qualcuno chiede "dove mangiare in Sardegna" o "web designer per ristoranti". Risposte dirette, linguaggio naturale, focus locale.',
    },
    {
      type: 'h2',
      text: 'Come scegliere un web designer in Sardegna',
    },
    {
      type: 'p',
      text: 'Non serve un\'agenzia milanese con preventivi da 5.000€. Per un ristorante o una paninoteca locale, conta trovare qualcuno che capisca il territorio, parli chiaro e ti permetta di vedere il risultato prima di pagare.',
    },
    {
      type: 'ol',
      items: [
        'Chiedi una bozza gratuita: vedi il design reale, non solo promesse',
        'Verifica che non chiedano anticipo: paghi solo se sei soddisfatto',
        'Controlla che il sito sia mobile-first e includa contatti diretti',
        'Preferisci un web designer locale in Sardegna che conosca turismo e stagionalità',
        'Chiedi se gestiscono anche Google Business Profile e Google Ads',
      ],
    },
    {
      type: 'p',
      text: 'Un buon web designer per attività locali in Sardegna ti consegna bozza in 48 ore, sito online in pochi giorni, prezzo fisso trasparente (intorno a 500€ per un sito completo) e nessun vincolo nascosto.',
    },
    {
      type: 'h2',
      text: 'Quanto costa un sito web per ristorante in Sardegna?',
    },
    {
      type: 'p',
      text: 'I prezzi variano, ma per un sito vetrina professionale — design su misura, mobile, menu, contatti, SEO base — il range realistico è 400–800€. Diffida di offerte "99€" che poi diventano abbonamenti mensili alti, o di preventivi sopra 2.000€ per un locale con 30 coperti. Il modello più sicuro per te: bozza gratuita, zero anticipo, pagamento solo a consegna.',
    },
    {
      type: 'h2',
      text: 'Conclusione: il sito giusto porta clienti, non solo visite',
    },
    {
      type: 'p',
      text: 'Un ristorante o una paninoteca in Sardegna non ha bisogno del sito più complesso del mondo. Ha bisogno di un sito chiaro, veloce, trovabile su Google e ottimizzato per il telefono — con un percorso semplice dal "cerco dove mangiare" al "prenoto un tavolo" o "scrivo su WhatsApp".',
    },
    {
      type: 'p',
      text: 'Se vuoi partire senza rischio, WebSardegna offre una bozza gratuita in 48 ore per attività locali in Sardegna: nessun anticipo, paghi solo se il risultato ti convince. Scrivimi su WhatsApp, raccontami la tua attività, e vediamo insieme come trasformare il tuo sito in uno strumento che lavora per te — 24 ore su 24.',
    },
  ],
}

const enRestaurantArticle: BlogPost = {
  slug: 'website-restaurant-sardinia',
  locale: 'en',
  title:
    'How to Build a Website That Brings Real Customers to Your Restaurant in Sardinia (2026)',
  description:
    'Practical guide for restaurant owners in Sardinia: common mistakes, mobile and SEO best practices, and how to choose a local web designer with a free mockup.',
  date: '2026-06-24',
  readTime: '8 min',
  keywords: [
    'restaurant websites sardinia',
    'sardinia web designer',
    'local business websites italy',
  ],
  blocks: [
    {
      type: 'p',
      text: 'If you run a restaurant or sandwich shop in Sardinia, your customers no longer find you just by word of mouth. They search on Google, Instagram, and Maps — usually from their phone, often while on holiday. A well-built website is the most direct way to turn online searches into bookings and repeat customers.',
    },
    {
      type: 'p',
      text: 'The problem? Most local business websites in Sardinia are slow, confusing, or built with templates identical to the competition. The customer gets lost, calls someone else, and you lose money without even knowing it. This guide covers what actually works in 2026.',
    },
    {
      type: 'h2',
      text: 'Why a restaurant in Sardinia needs a website (not just social media)',
    },
    {
      type: 'p',
      text: 'Social media helps, but it doesn\'t replace a website. Social shows photos; your site answers the questions customers ask before booking: where you are, what you serve, how to contact you, parking, reservations, opening hours. Google rewards businesses with clear, structured information.',
    },
    {
      type: 'ul',
      items: [
        '70% of restaurant searches happen on smartphones',
        'Tourists in Sardinia search "restaurant near me" or "sandwich shop [city]"',
        'A fast website builds trust and signals professionalism',
        'Integrated WhatsApp, contact forms and Maps reduce friction to booking',
      ],
    },
    {
      type: 'h2',
      text: '5 common mistakes on restaurant websites',
    },
    {
      type: 'h3',
      text: '1. Unreadable or missing menu on mobile',
    },
    {
      type: 'p',
      text: 'A PDF menu that opens as a tiny thumbnail on a phone is one of the top reasons customers leave. Your menu should be HTML text — readable without zoom, with clear prices and categories.',
    },
    {
      type: 'h3',
      text: '2. Hidden contact information',
    },
    {
      type: 'p',
      text: 'Phone, WhatsApp, address and hours must be visible without endless scrolling. Every extra click is a lost booking. A fixed WhatsApp button on mobile is essential for local businesses in Sardinia.',
    },
    {
      type: 'h3',
      text: '3. Slow site or generic templates',
    },
    {
      type: 'p',
      text: 'DIY builders seem cheap but often produce heavy sites with confusing URLs and designs identical to hundreds of other venues. Google penalises slowness — and customers perceive a lack of care.',
    },
    {
      type: 'h3',
      text: '4. No local Google optimisation',
    },
    {
      type: 'p',
      text: 'Without proper titles, meta descriptions, LocalBusiness schema and a linked Google Business Profile, your site exists but won\'t be found. Searches like "restaurant Nuoro" or "sandwich shop Ogliastra" go to competitors who got these details right.',
    },
    {
      type: 'h3',
      text: '5. Photos only, no call to action',
    },
    {
      type: 'p',
      text: 'A beautiful site without CTAs ("Book", "Order", "Message on WhatsApp") doesn\'t convert. Every page should guide visitors toward a concrete contact.',
    },
    {
      type: 'h2',
      text: 'Best practices for a converting website (2026)',
    },
    {
      type: 'ul',
      items: [
        'Mobile-first design — test on small screens first',
        'Load time under 3 seconds with compressed images',
        'WhatsApp button visible in every section',
        'Clickable phone number and Google Maps directions',
        'Simple booking form: name, date, party size, message',
        'Optional AI chatbot for hours, parking and menu questions 24/7',
        'Clear H1/H2 structure and FAQ for Google and AI search engines',
      ],
    },
    {
      type: 'h2',
      text: 'How to choose a web designer in Sardinia',
    },
    {
      type: 'ol',
      items: [
        'Ask for a free mockup — see the real design, not just promises',
        'Verify no upfront payment — pay only when satisfied',
        'Confirm mobile-first design with direct contact integration',
        'Prefer a local Sardinian designer who understands tourism and seasonality',
        'Ask if they also handle Google Business Profile and Google Ads',
      ],
    },
    {
      type: 'p',
      text: 'A good local web designer delivers a mockup in 48 hours, launches within days, charges a transparent flat rate (~€500 for a complete site), and has no hidden commitments.',
    },
    {
      type: 'h2',
      text: 'Conclusion',
    },
    {
      type: 'p',
      text: 'Your restaurant doesn\'t need the world\'s most complex website. It needs one that\'s clear, fast, findable on Google, and optimised for phones — with a simple path from "looking for food" to "booking a table" or "messaging on WhatsApp".',
    },
    {
      type: 'p',
      text: 'If you want to start risk-free, WebSardegna offers a free 48-hour mockup for local businesses in Sardinia: no deposit, pay only if you love the result. Message me on WhatsApp and let\'s turn your website into a tool that works for you 24/7.',
    },
  ],
}

const itDetailingArticle: BlogPost = {
  slug: 'sito-web-detailing-auto-sardegna',
  locale: 'it',
  title: 'Sito Web per Detailing Auto in Sardegna: Come Attrarre Clienti Locali (2026)',
  description:
    'Guida per centri detailing e autolavaggi in Sardegna: cosa mettere sul sito, come farsi trovare su Google e perché un web designer locale batte i template.',
  date: '2026-06-25',
  readTime: '7 min',
  keywords: [
    'sito web detailing auto sardegna',
    'siti web autolavaggio sardegna',
    'web designer sardegna',
  ],
  blocks: [
    {
      type: 'p',
      text: 'Se gestisci un centro detailing, un autolavaggio o un\'officina estetica auto in Sardegna, i tuoi clienti ideali non ti cercano sui volantini. Cercano su Google: "detailing auto Nuoro", "lavaggio auto Ogliastra", "car detailing Cagliari". Se non hai un sito chiaro e veloce, stai regalando clienti al concorrente.',
    },
    {
      type: 'h2',
      text: 'Cosa deve avere un sito detailing che converte',
    },
    {
      type: 'ul',
      items: [
        'Galleria prima/dopo con foto reali (non stock)',
        'Lista servizi con descrizione chiara: lavaggio, ceramica, polishing, interni',
        'Prezzi indicativi o pacchetti — il cliente vuole capire subito',
        'Pulsante WhatsApp e click-to-call in evidenza',
        'Orari, indirizzo e link Google Maps',
        'Recensioni o testimonianze (anche 3–4 bastano)',
      ],
    },
    {
      type: 'h2',
      text: 'Errori tipici dei siti detailing in Sardegna',
    },
    {
      type: 'p',
      text: 'Il più comune: solo Instagram con link in bio. Funziona per chi ti conosce già, ma non per chi ti scopre su Google. Altri errori: siti lenti pieni di foto non compresse, nessuna pagina dedicata ai servizi, form contatto complicato, zero ottimizzazione mobile.',
    },
    {
      type: 'h2',
      text: 'SEO locale: fatti trovare nella tua zona',
    },
    {
      type: 'p',
      text: 'Per un detailing in provincia di Nuoro o in Ogliastra, il SEO locale è tutto. Titoli con "detailing auto Sardegna" e la tua città, schema LocalBusiness, scheda Google Business Profile aggiornata e coerente col sito. Un web designer locale sa quali ricerche funzionano nella tua zona — non copia strategie da Milano.',
    },
    {
      type: 'h2',
      text: 'Google Ads con budget piccolo: funziona?',
    },
    {
      type: 'p',
      text: 'Sì, se la landing page è allineata. Annuncio "detailing auto Sardegna" → pagina con gli stessi termini, CTA chiaro, velocità alta. Un sito su misura migliora il Quality Score e abbassa il costo per click. Con 10–15€ al giorno ben targettizzati puoi già ricevere richieste WhatsApp nella stagione alta.',
    },
    {
      type: 'h2',
      text: 'Quanto costa e come iniziare senza rischio',
    },
    {
      type: 'p',
      text: 'Un sito vetrina professionale per detailing costa circa 500€ — design su misura, mobile, galleria, contatti. Il modello più sicuro: bozza gratuita in 48 ore, zero anticipo, paghi solo se il risultato ti convince. WebSardegna lavora con attività locali in tutta la Sardegna: scrivimi su WhatsApp e vediamo insieme cosa serve al tuo centro.',
    },
  ],
}

const enDetailingArticle: BlogPost = {
  slug: 'car-detailing-website-sardinia',
  locale: 'en',
  title: 'Car Detailing Website in Sardinia: How to Attract Local Customers (2026)',
  description:
    'Guide for detailing studios in Sardinia: what to put on your site, how to rank on Google, and why a local web designer beats templates.',
  date: '2026-06-25',
  readTime: '7 min',
  keywords: ['car detailing website sardinia', 'web designer sardinia'],
  blocks: [
    {
      type: 'p',
      text: 'If you run a car detailing studio in Sardinia, your ideal customers search on Google — not flyers. "Car detailing Nuoro", "auto detailing Ogliastra", "car wash Cagliari". Without a clear, fast website, you\'re handing clients to competitors.',
    },
    {
      type: 'h2',
      text: 'What a converting detailing website needs',
    },
    {
      type: 'ul',
      items: [
        'Before/after gallery with real photos',
        'Clear service list: wash, ceramic coating, polishing, interiors',
        'Indicative pricing or packages',
        'Prominent WhatsApp and click-to-call buttons',
        'Hours, address and Google Maps link',
        'Reviews or testimonials',
      ],
    },
    {
      type: 'h2',
      text: 'Local SEO for your area',
    },
    {
      type: 'p',
      text: 'For detailing in Nuoro or Ogliastra, local SEO is everything. Titles with your city, LocalBusiness schema, updated Google Business Profile. A local Sardinian web designer knows which searches work in your area.',
    },
    {
      type: 'h2',
      text: 'Getting started risk-free',
    },
    {
      type: 'p',
      text: 'A professional detailing website costs around €500. The safest model: free mockup in 48 hours, no deposit, pay only if satisfied. WebSardegna works with local businesses across Sardinia — message me on WhatsApp.',
    },
  ],
}

const itGoogleAdsArticle: BlogPost = {
  slug: 'google-ads-ristoranti-sardegna',
  locale: 'it',
  title: 'Google Ads per Ristoranti in Sardegna: Guida Low-Budget che Funziona (2026)',
  description:
    'Come usare Google Ads con budget piccolo per ristoranti e attività locali in Sardegna. Quality Score, landing page e parole chiave che convertono.',
  date: '2026-06-26',
  readTime: '7 min',
  keywords: [
    'google ads ristoranti sardegna',
    'pubblicità google attività locali',
    'siti web sardegna',
  ],
  blocks: [
    {
      type: 'p',
      text: 'Google Ads per un ristorante in Sardegna non serve un budget da catena nazionale. Con 10–20€ al giorno, targeting locale preciso e una landing page ben fatta, puoi ricevere prenotazioni e messaggi WhatsApp già dalla prima settimana. Il segreto non è spendere di più — è spendere meglio.',
    },
    {
      type: 'h2',
      text: 'Perché Quality Score fa la differenza (soprattutto con budget piccolo)',
    },
    {
      type: 'p',
      text: 'Quality Score è il punteggio di Google che misura quanto il tuo annuncio è rilevante per chi cerca. Annuncio + landing page + parole chiave allineati = CPC più basso e posizione migliore. Un ristorante con sito lento e generico paga il doppio rispetto a uno con landing ottimizzata.',
    },
    {
      type: 'ul',
      items: [
        'H1 della landing uguale o simile al titolo dell\'annuncio',
        'CTA visibile sopra la piega: WhatsApp, prenota, chiama',
        'Velocità mobile sotto i 3 secondi',
        'Parole chiave nel testo: ristorante + città + Sardegna',
        'Trust signals: recensioni, menu, orari chiari',
      ],
    },
    {
      type: 'h2',
      text: 'Gruppi di annunci che funzionano per ristoranti locali',
    },
    {
      type: 'ol',
      items: [
        'Brand + zona: "ristorante [città] sardegna", "mangiare ogliastra"',
        'Intenzione alta: "prenota tavolo [città]", "ristorante pesce sardegna"',
        'Long-tail stagionale: "ristorante aperto domenica nuoro", "cena romantica tortolì"',
      ],
    },
    {
      type: 'h2',
      text: 'Negative keywords: non sprecare budget',
    },
    {
      type: 'p',
      text: 'Escludi fin da subito: lavoro, corso, ricette gratis, volontariato, franchise, catene nazionali se sei un locale indipendente. Ogni click sbagliato è budget bruciato — con 15€/giorno conta tantissimo.',
    },
    {
      type: 'h2',
      text: 'Sito + Ads insieme: la combinazione vincente',
    },
    {
      type: 'p',
      text: 'Google Ads senza sito ottimizzato è come portare clienti in un locale con le luci spente. Prima la landing (anche semplice ma veloce e chiara), poi gli annunci. WebSardegna crea siti per ristoranti in Sardegna con bozza gratuita in 48 ore e può gestire anche le campagne — così annuncio e pagina parlano la stessa lingua.',
    },
    {
      type: 'h2',
      text: 'Conclusione',
    },
    {
      type: 'p',
      text: 'Con budget contenuto, un ristorante in Sardegna può competere online. Serve: sito mobile-first, annunci locali mirati, negative keywords e CTA diretto a WhatsApp o prenotazione. Se vuoi partire, scrivimi — bozza gratuita, zero anticipo, e possiamo valutare insieme se Google Ads ha senso per la tua attività.',
    },
  ],
}

const enGoogleAdsArticle: BlogPost = {
  slug: 'google-ads-restaurants-sardinia',
  locale: 'en',
  title: 'Google Ads for Restaurants in Sardinia: A Low-Budget Guide That Works (2026)',
  description:
    'How to use Google Ads on a small budget for restaurants and local businesses in Sardinia. Quality Score, landing pages and keywords that convert.',
  date: '2026-06-26',
  readTime: '7 min',
  keywords: ['google ads restaurants sardinia', 'local business advertising'],
  blocks: [
    {
      type: 'p',
      text: 'Google Ads for a restaurant in Sardinia doesn\'t need a national-chain budget. With €10–20/day, precise local targeting and a well-built landing page, you can get bookings and WhatsApp messages within the first week.',
    },
    {
      type: 'h2',
      text: 'Why Quality Score matters on a small budget',
    },
    {
      type: 'p',
      text: 'Quality Score measures how relevant your ad is to searchers. Aligned ad + landing page + keywords = lower CPC and better position. A restaurant with a slow generic site pays double compared to one with an optimised landing.',
    },
    {
      type: 'ul',
      items: [
        'Landing H1 matching your ad headline',
        'CTA above the fold: WhatsApp, book, call',
        'Mobile speed under 3 seconds',
        'Local keywords: restaurant + city + Sardinia',
        'Trust signals: reviews, menu, clear hours',
      ],
    },
    {
      type: 'h2',
      text: 'Site + Ads together: the winning combo',
    },
    {
      type: 'p',
      text: 'Google Ads without an optimised site wastes money. WebSardegna builds restaurant websites in Sardinia with a free 48-hour mockup and can also manage campaigns — so your ad and page speak the same language.',
    },
  ],
}

const itGuidaArticle: BlogPost = {
  slug: 'miglior-web-designer-sardegna-guida',
  locale: 'it',
  title: itGuida.title,
  description: itGuida.metaDescription,
  date: '2026-06-24',
  readTime: '7 min',
  keywords: itGuida.keywords,
  blocks: itGuida.blocks,
}

const enGuidaArticle: BlogPost = {
  slug: 'best-web-designer-sardinia-guide',
  locale: 'en',
  title: enGuida.title,
  description: enGuida.metaDescription,
  date: '2026-06-24',
  readTime: '7 min',
  keywords: enGuida.keywords,
  blocks: enGuida.blocks,
}

const allPosts: BlogPost[] = [
  itRestaurantArticle,
  enRestaurantArticle,
  itDetailingArticle,
  enDetailingArticle,
  itGoogleAdsArticle,
  enGoogleAdsArticle,
  itGuidaArticle,
  enGuidaArticle,
]

export function getPosts(locale: string): BlogPost[] {
  return allPosts.filter((p) => p.locale === locale)
}

export function getPost(locale: string, slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.locale === locale && p.slug === slug)
}

export function getAllPostParams(): { locale: string; slug: string }[] {
  return allPosts.map((p) => ({ locale: p.locale, slug: p.slug }))
}
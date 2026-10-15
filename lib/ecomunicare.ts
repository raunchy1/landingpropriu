import type { Loc } from './portfolio'

export type EcomCat = 'hospitality' | 'food' | 'retail' | 'beauty' | 'services' | 'culture'

export const ecomCats: { id: EcomCat | 'all'; it: string; en: string }[] = [
  { id: 'all', it: 'Tutti', en: 'All' },
  { id: 'hospitality', it: 'Hotel & turismo', en: 'Hotels & tourism' },
  { id: 'food', it: 'Food & vino', en: 'Food & wine' },
  { id: 'retail', it: 'Negozi', en: 'Retail' },
  { id: 'beauty', it: 'Salute & bellezza', en: 'Health & beauty' },
  { id: 'services', it: 'Servizi & imprese', en: 'Services & trades' },
  { id: 'culture', it: 'Arte & cultura', en: 'Arts & culture' },
]

export type Site = { id: string; name: string; cat: EcomCat; url: string; it: string; en: string }

export const ecomSites: Site[] = [
  {"id": "hotel-albrici", "name": "Hotel Albrici", "cat": "hospitality", "url": "https://www.hotelalbrici.ch/it/", "it": "Hotel storico a Poschiavo: camere, offerte e prenotazione.", "en": "Historic hotel in Poschiavo: rooms, offers and booking."} as Site,
  {"id": "croce-bianca", "name": "Hotel Croce Bianca", "cat": "hospitality", "url": "https://www.croce-bianca.ch/", "it": "Hotel e ristorante: camere, cucina e contatti.", "en": "Hotel and restaurant: rooms, cuisine and contact."} as Site,
  {"id": "palazzo-salis", "name": "Hotel Palazzo Salis", "cat": "hospitality", "url": "https://www.palazzosalis.ch/", "it": "Hotel in un palazzo storico in Val Bregaglia.", "en": "Hotel in a historic palazzo in Val Bregaglia."} as Site,
  {"id": "la-romantica", "name": "Hotel La Romantica", "cat": "hospitality", "url": "https://www.laromantica.ch", "it": "Hotel con ristorante: camere, menu e richieste.", "en": "Hotel with restaurant: rooms, menu and enquiries."} as Site,
  {"id": "villa-pia", "name": "Villa Pia", "cat": "hospitality", "url": "https://villapia.ch", "it": "Ospitalità in villa: camere, servizi e posizione.", "en": "Villa accommodation: rooms, amenities and location."} as Site,
  {"id": "borgo-pievina", "name": "Borgo La Pievina", "cat": "hospitality", "url": "https://www.borgo-pievina.it", "it": "Agriturismo e borgo in Toscana: alloggi ed esperienze.", "en": "Tuscan farm-stay village: stays and experiences."} as Site,
  {"id": "valposchiavo", "name": "Valposchiavo Turismo", "cat": "hospitality", "url": "https://www.valposchiavo.ch/", "it": "Portale turistico di valle: attività, eventi e alloggi.", "en": "Valley tourism portal: activities, events and stays."} as Site,
  {"id": "tschierva", "name": "Tschierva Hütte", "cat": "hospitality", "url": "https://tschierva.ch", "it": "Capanna alpina: info, prenotazione e accesso.", "en": "Alpine mountain hut: info, booking and access."} as Site,
  {"id": "zanetti", "name": "Macelleria Zanetti", "cat": "food", "url": "https://zanettispecialita.ch", "it": "Macelleria e specialità locali con prodotti e negozio.", "en": "Butcher and local specialities with products and shop."} as Site,
  {"id": "lardi", "name": "Macelleria Lardi", "cat": "food", "url": "https://www.macelleria-lardi.ch/", "it": "Macelleria artigianale: prodotti, salumi e contatti.", "en": "Artisan butcher: products, cured meats and contact."} as Site,
  {"id": "fiorenzana", "name": "Gazosa La Fiorenzana", "cat": "food", "url": "https://gazosa-lafiorenzana.swiss/", "it": "Gazosa storica: prodotti, storia e punti vendita.", "en": "Historic soda brand: products, story and stockists."} as Site,
  {"id": "laperla", "name": "Vini La Perla", "cat": "food", "url": "https://vini-laperla.com/", "it": "Cantina vinicola: vini, territorio e acquisto.", "en": "Winery: wines, terroir and ordering."} as Site,
  {"id": "girasole", "name": "Drogheria Girasole", "cat": "retail", "url": "https://drogheria-girasole.ch/", "it": "Drogheria: prodotti naturali, servizi e orari.", "en": "Drugstore: natural products, services and hours."} as Site,
  {"id": "blumengalerie", "name": "Blumengalerie", "cat": "retail", "url": "https://blumengalerie.ch", "it": "Fioreria: composizioni, eventi e ordini.", "en": "Florist: arrangements, events and orders."} as Site,
  {"id": "coiffeur3", "name": "Coiffeur3", "cat": "beauty", "url": "https://coiffeur3.ch/", "it": "Parrucchiere: servizi, team e appuntamenti.", "en": "Hair salon: services, team and appointments."} as Site,
  {"id": "nr1style", "name": "Nr. 1 Style", "cat": "beauty", "url": "https://nr1style.ch/", "it": "Salone di bellezza: trattamenti e prenotazioni.", "en": "Beauty salon: treatments and bookings."} as Site,
  {"id": "cmvp", "name": "Centro Medico Valposchiavo", "cat": "beauty", "url": "https://cmvp.ch/", "it": "Centro medico: specialità, medici e contatti.", "en": "Medical centre: specialties, doctors and contact."} as Site,
  {"id": "pola", "name": "Fiduciaria Pola", "cat": "services", "url": "https://www.fiduciaria-pola.ch/", "it": "Fiduciaria: servizi contabili, fiscali e consulenza.", "en": "Fiduciary firm: accounting, tax and advisory services."} as Site,
  {"id": "battaglia", "name": "Garage Battaglia", "cat": "services", "url": "https://www.garagebattaglia.ch/", "it": "Garage e officina: auto, servizi e assistenza.", "en": "Garage and workshop: cars, servicing and support."} as Site,
  {"id": "betschon", "name": "Betschon Giardini", "cat": "services", "url": "https://betschon-giardini.ch/", "it": "Giardiniere: progettazione e manutenzione di giardini.", "en": "Gardener: garden design and maintenance."} as Site,
  {"id": "mcsbau", "name": "MCS Bau", "cat": "services", "url": "https://mcsbau.ch/", "it": "Impresa edile: servizi, lavori e contatti.", "en": "Construction company: services, projects and contact."} as Site,
  {"id": "protopapa", "name": "Protopapa Gipser", "cat": "services", "url": "https://protopapa-gipser.ch/", "it": "Gessatore: intonaci, cartongesso e lavori interni.", "en": "Plasterer: plastering, drywall and interior work."} as Site,
  {"id": "castelmur", "name": "Palazzo Castelmur", "cat": "culture", "url": "https://palazzo-castelmur.ch/", "it": "Palazzo museo: visite, mostre e informazioni.", "en": "Palazzo museum: visits, exhibitions and info."} as Site,
  {"id": "garbald", "name": "Garbald", "cat": "culture", "url": "https://www.garbald.ch/", "it": "Centro culturale e seminariale in una villa storica.", "en": "Cultural and seminar centre in a historic villa."} as Site,
  {"id": "monastero", "name": "Vecchio Monastero", "cat": "culture", "url": "https://www.vecchio-monastero.ch", "it": "Vecchio Monastero: eventi, sale e ospitalità.", "en": "Former monastery: events, venues and hospitality."} as Site,
]

export const ecomCredit = {
  it: 'Sviluppato da Cristian come sviluppatore presso Ecomunicare',
  en: 'Built by Cristian as developer at Ecomunicare',
}

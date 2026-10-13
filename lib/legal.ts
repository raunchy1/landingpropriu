import { business } from '@/lib/business'

const owner = 'Cristian Ermurache'
const email = business.email
const place = `${business.address.locality} (${business.address.province}), ${business.address.countryName}`

export const legal = {
  privacy: {
    it: {
      title: 'Privacy Policy',
      meta: 'Informativa sul trattamento dei dati personali di websardegna.xyz ai sensi del GDPR (Reg. UE 2016/679).',
      updated: 'Ultimo aggiornamento: ottobre 2026',
      sections: [
        { h: 'Titolare del trattamento', p: [`Titolare del trattamento è ${owner}, ${place}. Contatto: ${email}.`] },
        { h: 'Dati raccolti', p: [
          'Dati che fornisci volontariamente: nome, email, telefono e il contenuto del messaggio quando compili il modulo di contatto o mi scrivi via email o WhatsApp.',
          'Dati di navigazione: dati tecnici (es. indirizzo IP, browser) trattati dal server per il funzionamento del sito e, solo con il tuo consenso, dati statistici e di marketing raccolti tramite Google Analytics e Google Ads.',
        ] },
        { h: 'Finalità e base giuridica', p: [
          'Rispondere alle tue richieste e preparare preventivi o bozze (misure precontrattuali, art. 6.1.b GDPR).',
          'Statistiche e misurazione delle campagne pubblicitarie, solo previo consenso (art. 6.1.a GDPR), revocabile in qualsiasi momento.',
          'Sicurezza e corretto funzionamento del sito (legittimo interesse, art. 6.1.f GDPR).',
        ] },
        { h: 'Destinatari e fornitori', p: [
          'I dati possono essere trattati da fornitori che agiscono come responsabili o titolari autonomi: hosting del sito (server VPS in UE), Web3Forms (invio del modulo di contatto), Google (Analytics, Ads, Tag Manager, solo con consenso), WhatsApp/Meta se scegli di contattarmi tramite WhatsApp. Alcuni fornitori possono trasferire dati fuori dall\u2019UE sulla base di garanzie adeguate (es. clausole contrattuali standard).',
        ] },
        { h: 'Conservazione', p: ['I dati delle richieste di contatto sono conservati per il tempo necessario a gestire la richiesta e l\u2019eventuale rapporto, e comunque non oltre 24 mesi dall\u2019ultimo contatto, salvo obblighi di legge.'] },
        { h: 'I tuoi diritti', p: [
          `Puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità dei dati e opporti al trattamento scrivendo a ${email}. Puoi revocare il consenso ai cookie in qualsiasi momento dalla pagina Cookie Policy.`,
          'Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).',
        ] },
      ],
    },
    en: {
      title: 'Privacy Policy',
      meta: 'How websardegna.xyz processes personal data under the GDPR (EU Regulation 2016/679).',
      updated: 'Last updated: October 2026',
      sections: [
        { h: 'Data controller', p: [`The data controller is ${owner}, ${place}. Contact: ${email}.`] },
        { h: 'Data collected', p: [
          'Data you provide: name, email, phone number and message content when you use the contact form or write to me by email or WhatsApp.',
          'Browsing data: technical data (e.g. IP address, browser) processed by the server to run the site and, only with your consent, statistics and marketing data collected through Google Analytics and Google Ads.',
        ] },
        { h: 'Purposes and legal basis', p: [
          'Answering your requests and preparing quotes or mockups (pre-contractual measures, Art. 6(1)(b) GDPR).',
          'Statistics and ad campaign measurement, only with your consent (Art. 6(1)(a) GDPR), which you can withdraw at any time.',
          'Security and proper operation of the site (legitimate interest, Art. 6(1)(f) GDPR).',
        ] },
        { h: 'Recipients and providers', p: [
          'Data may be processed by providers acting as processors or independent controllers: website hosting (VPS server in the EU), Web3Forms (contact form delivery), Google (Analytics, Ads, Tag Manager, only with consent), WhatsApp/Meta if you choose to contact me on WhatsApp. Some providers may transfer data outside the EU under appropriate safeguards (e.g. standard contractual clauses).',
        ] },
        { h: 'Retention', p: ['Contact request data is kept for as long as needed to handle the request and any resulting relationship, and no longer than 24 months after the last contact, unless the law requires otherwise.'] },
        { h: 'Your rights', p: [
          `You can request access, rectification, erasure, restriction, portability, or object to processing by writing to ${email}. You can withdraw cookie consent at any time from the Cookie Policy page.`,
          'You also have the right to lodge a complaint with the Italian Data Protection Authority (www.garanteprivacy.it).',
        ] },
      ],
    },
  },
  cookie: {
    it: {
      title: 'Cookie Policy',
      meta: 'Quali cookie usa websardegna.xyz e come gestire il consenso.',
      updated: 'Ultimo aggiornamento: ottobre 2026',
      sections: [
        { h: 'Cosa sono i cookie', p: ['I cookie e tecnologie simili (es. localStorage) sono piccoli file salvati nel tuo browser. Alcuni sono necessari al funzionamento del sito, altri servono a statistiche e marketing e vengono usati solo con il tuo consenso.'] },
        { h: 'Cookie tecnici (sempre attivi)', p: ['NEXT_LOCALE: ricorda la lingua scelta. ws_consent_v1 (localStorage): memorizza le tue scelte sui cookie. Non richiedono consenso.'] },
        { h: 'Cookie di analisi (con consenso)', p: ['Google Analytics 4 (Google Ireland Ltd.): misura in forma aggregata le visite e l\u2019uso del sito (es. cookie _ga, _ga_*).'] },
        { h: 'Cookie di marketing (con consenso)', p: ['Google Ads e Google Tag Manager (Google Ireland Ltd.): misurano le conversioni delle campagne pubblicitarie (es. cookie _gcl_*, cookie di doubleclick.net).'] },
        { h: 'Google Consent Mode', p: ['Il sito usa Google Consent Mode v2 con tutte le categorie negate per impostazione predefinita. Gli script di Google vengono caricati solo dopo che hai accettato almeno una categoria.'] },
        { h: 'Gestire o revocare il consenso', p: [`Puoi cambiare le tue scelte in qualsiasi momento con il pulsante qui sotto, oppure cancellando i cookie dal browser. Per domande: ${email}.`] },
      ],
    },
    en: {
      title: 'Cookie Policy',
      meta: 'Which cookies websardegna.xyz uses and how to manage your consent.',
      updated: 'Last updated: October 2026',
      sections: [
        { h: 'What cookies are', p: ['Cookies and similar technologies (e.g. localStorage) are small files stored in your browser. Some are necessary for the site to work; others are used for statistics and marketing and are only set with your consent.'] },
        { h: 'Technical cookies (always on)', p: ['NEXT_LOCALE: remembers your language. ws_consent_v1 (localStorage): stores your cookie choices. No consent required.'] },
        { h: 'Analytics cookies (with consent)', p: ['Google Analytics 4 (Google Ireland Ltd.): measures visits and site usage in aggregate form (e.g. _ga, _ga_* cookies).'] },
        { h: 'Marketing cookies (with consent)', p: ['Google Ads and Google Tag Manager (Google Ireland Ltd.): measure ad campaign conversions (e.g. _gcl_* cookies, doubleclick.net cookies).'] },
        { h: 'Google Consent Mode', p: ['The site uses Google Consent Mode v2 with every category denied by default. Google scripts are loaded only after you accept at least one category.'] },
        { h: 'Manage or withdraw consent', p: [`You can change your choices at any time with the button below, or by deleting cookies in your browser. Questions: ${email}.`] },
      ],
    },
  },
}

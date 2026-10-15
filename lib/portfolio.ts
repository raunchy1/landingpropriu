export type Loc = 'it' | 'en'
type L = { it: string; en: string }
const pick = (l: L, loc: Loc) => l[loc]

export const profile = {
  name: 'Cristian Ermurache',
  email: 'cristiermurache@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ermurache-cristian-5a945528a/',
  github: 'https://github.com/raunchy1',
  photo: '/portfolio/cristian.webp',
  cvPdf: '/cristian-ermurache-cv.pdf',
}

const copy = {
  metaTitle: { it: 'Cristian Ermurache — AI Product Engineer & Full-Stack Developer', en: 'Cristian Ermurache — AI Product Engineer & Full-Stack Developer' },
  metaDescription: {
    it: 'Portfolio di Cristian Ermurache: AI Product Engineer e Full-Stack Developer in Sardegna. Rakazo (piattaforma open-source di agenti AI), e-commerce Next.js + Supabase, app web in produzione.',
    en: 'Portfolio of Cristian Ermurache: AI Product Engineer and Full-Stack Developer based in Sardinia. Rakazo (open-source AI agent platform), Next.js + Supabase e-commerce, production web apps.',
  },
  eyebrow: { it: 'portfolio · 2026', en: 'portfolio · 2026' },
  role: { it: 'AI Product Engineer & Full-Stack Developer', en: 'AI Product Engineer & Full-Stack Developer' },
  heroLead: {
    it: 'Costruisco app web in produzione e sistemi con AI, end to end: architettura, codice, audit strutturato, deploy. Orchestro agenti di coding nel terminale e in chat — e consegno sistemi, non esperimenti.',
    en: 'I build production web apps and AI-assisted systems end to end: architecture, code, structured audit, deploy. I orchestrate coding agents in the terminal and in chat — and I ship systems, not one-offs.',
  },
  badges: {
    it: ['Sardegna, Italia', 'Remote EU', 'Cittadino UE'],
    en: ['Sardinia, Italy', 'Remote EU', 'EU citizen'],
  },
  ctaContact: { it: 'Contattami', en: 'Contact me' },
  ctaCv: { it: 'Scarica CV (PDF)', en: 'Download CV (PDF)' },
  whyTitle: { it: 'Perché AI Product + Full-Stack', en: 'Why AI Product + Full-Stack' },
  whyParas: {
    it: [
      'Dal 2022 lavoro seriamente con l’AI: integro agenti, sviluppo applicazioni e uso i modelli per moltiplicare la produttività — mia e dei clienti. Non mi fermo al prototipo: porto le funzionalità LLM in produzione, con utenti veri.',
      'Lavoro a cicli multi-modello: un modello costruisce (Kimi, DeepSeek, GLM, MiniMax), ogni pochi step importanti Claude esegue un audit strutturato, poi applico correzioni mirate. Scelgo il modello per costo, velocità e compito — build, audit, correzione, contenuti.',
      'Il mio progetto di maggior successo è Rakazo: una piattaforma open-source di agenti AI che unisce product thinking e ingegneria full-stack in un unico prodotto.',
    ],
    en: [
      'Since 2022 I’ve worked seriously with AI: integrating agents, building applications and using models to multiply productivity — mine and my clients’. I don’t stop at the prototype: I take LLM features to production, with real users.',
      'I work in multi-model cycles: one model builds (Kimi, DeepSeek, GLM, MiniMax), every few major steps Claude runs a structured audit, then I apply targeted fixes. I pick models by cost, speed and task — build, audit, correction, content.',
      'My most successful project is Rakazo: an open-source AI agent platform where product thinking and full-stack engineering meet in one product.',
    ],
  },
  pillars: {
    it: [['End to end', 'Architettura → codice → audit → deploy'], ['Multi-modello', 'Un modello costruisce, Claude verifica'], ['Produzione', 'Utenti reali, domini reali, SSL, monitoraggio']],
    en: [['End to end', 'Architecture → code → audit → deploy'], ['Multi-model', 'One model builds, Claude audits'], ['Production', 'Real users, real domains, SSL, monitoring']],
  },
  featured: { it: 'Progetto principale', en: 'Flagship project' },
  rakazoRole: { it: 'Founder & AI Engineer · gen 2024 – oggi', en: 'Founder & AI Engineer · Jan 2024 – present' },
  rakazoLead: {
    it: 'Piattaforma open-source e self-hostable di agenti AI — un’alternativa a Grok Bot. Colleghi AI persistenti che accedono ai tuoi strumenti, li usano come faresti tu e tornano da te quando serve.',
    en: 'Open-source, self-hostable AI agent platform — an alternative to Grok Bot. Persistent AI teammates that sign in to your tools, use them the way you do, and come back when they need you.',
  },
  rakazoPoints: {
    it: [
      'Motore agentico: pianificazione autonoma, esecuzione di tool multi-step, interazione con browser e sistema',
      'Browser e shell in sandbox (Docker, E2B, Daytona)',
      'Memoria persistente e recupero del contesto',
      'Routine in Markdown, scheduling e limiti di approvazione',
      'Bring-your-own-model: abbonamenti Claude/ChatGPT, API key, OpenRouter, Grok, modelli locali con Ollama/LM Studio',
      'Sviluppato insieme a 2 colleghi — un progetto con un potenziale enorme',
    ],
    en: [
      'Agentic engine: autonomous planning, multi-step tool execution, browser and system interaction',
      'Sandboxed browser and shell (Docker, E2B, Daytona)',
      'Persistent memory and context retrieval',
      'Markdown routines, scheduling and approval boundaries',
      'Bring your own model: Claude/ChatGPT subscriptions, API keys, OpenRouter, Grok, local models via Ollama/LM Studio',
      'Co-developed with 2 colleagues — a project with huge potential',
    ],
  },
  workTitle: { it: 'Lavori selezionati', en: 'Selected work' },
  problem: { it: 'Problema', en: 'Problem' },
  did: { it: 'Cosa ho fatto', en: 'What I did' },
  solution: { it: 'Soluzione', en: 'Solution' },
  how: { it: 'Come funziona', en: 'How it works' },
  wip: { it: 'In sviluppo', en: 'Work in progress' },
  visit: { it: 'Visita', en: 'Visit' },
  skillsTitle: { it: 'Competenze', en: 'Skills' },
  expTitle: { it: 'Esperienza', en: 'Experience' },
  eduTitle: { it: 'Formazione', en: 'Education' },
  langTitle: { it: 'Lingue', en: 'Languages' },
  contactTitle: { it: 'Parliamo del tuo prossimo prodotto AI.', en: 'Let’s talk about your next AI product.' },
  contactLead: {
    it: 'Disponibile per ruoli remoti in Italia/UE: AI Product, Applied AI / LLM Engineer, Full-Stack (AI-native).',
    en: 'Available for remote roles in Italy/EU: AI Product, Applied AI / LLM Engineer, Full-Stack (AI-native).',
  },
  noLink: { it: 'Progetto interno', en: 'Internal project' },
}

export function t(key: keyof typeof copy, loc: Loc): any {
  return (copy[key] as any)[loc]
}

export const rakazoLinks = [
  { label: 'rakazo.com', href: 'https://rakazo.com/' },
  { label: 'Self-hosted AI agent', href: 'https://rakazo.com/self-hosted-ai-agent/' },
  { label: 'GitHub', href: 'https://github.com/elie222/rakazo' },
]
export const rakazoStack = ['TypeScript', 'Hono', 'oRPC', 'Better Auth', 'Postgres', 'Prisma', 'Graphile Worker', 'Docker', 'E2B', 'Electron', 'SSE']

type Work = { id: string; title: string; tag: L; problem: L; did: L; how?: { it: string[]; en: string[] }; wip?: boolean; stack: string[]; href?: string; image?: string }
const works: Work[] = []
export const getWorks = (loc: Loc) => works.map((w) => ({ ...w, tag: pick(w.tag, loc), problem: pick(w.problem, loc), did: pick(w.did, loc), how: w.how ? w.how[loc] : undefined }))

export const skills: { title: L; items: string[] }[] = [
  { title: { it: 'AI & LLM', en: 'AI & LLM' }, items: ['LLM integration', 'AI agents & tool use', 'Prompt engineering', 'Multi-model orchestration', 'Structured outputs / JSON', 'RAG, memory & context', 'Classification & extraction', 'Content generation'] },
  { title: { it: 'Agenti & modelli', en: 'Agents & models' }, items: ['Claude Code', 'OpenAI Codex CLI', 'Anthropic API', 'OpenAI API', 'xAI / Grok API', 'DeepSeek', 'Kimi', 'GLM', 'MiniMax'] },
  { title: { it: 'Prodotto', en: 'Product' }, items: ['Product thinking', 'MVP & iteration', 'Structured audits', 'UX for conversion', 'Analytics-driven decisions'] },
  { title: { it: 'Frontend', en: 'Frontend' }, items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PWA', 'next-intl i18n'] },
  { title: { it: 'Backend & dati', en: 'Backend & data' }, items: ['Node.js', 'Python', 'REST APIs', 'Supabase', 'PostgreSQL', 'RLS & Auth', 'Stripe / Connect', 'Playwright', 'Data analysis'] },
  { title: { it: 'DevOps', en: 'DevOps' }, items: ['Docker', 'Coolify', 'Vercel', 'CI / deploy', 'DNS & SSL', 'Self-hosting (VPS)'] },
  { title: { it: 'Growth & analytics', en: 'Growth & analytics' }, items: ['GA4', 'GTM', 'PostHog', 'Sentry', 'Google Ads', 'Meta Ads', 'TikTok Ads', 'Pixel + Conversion API'] },
  { title: { it: 'Soft skills', en: 'Soft skills' }, items: ['Stakeholder & client management', 'HR & payroll background', 'Negotiation', 'Multilingual (5 languages)', 'Team coordination'] },
]

export const experience: { role: string; org: string; dates: L; place: L; desc: L }[] = [
  { role: 'Founder & AI Engineer', org: 'Rakazo', dates: { it: 'gen 2024 – oggi', en: 'Jan 2024 – Present' }, place: { it: 'Remoto', en: 'Remote' }, desc: { it: 'Costruzione da zero di un agente AI autonomo: motore agentico, memoria persistente, recupero del contesto.', en: 'Building an autonomous AI agent from the ground up: agentic engine, persistent memory, context retrieval.' } },
  { role: 'AI Builder & Full-Stack Developer', org: 'WebSardegna · Self-employed', dates: { it: 'gen 2023 – oggi', en: 'Jan 2023 – Present' }, place: { it: 'Sardegna · Remoto', en: 'Sardinia · Remote' }, desc: { it: 'App web in produzione con agenti di coding, workflow multi-modello, integrazione LLM, siti clienti e campagne Ads.', en: 'Production web apps with coding agents, multi-model workflows, LLM integration, client sites and Ads campaigns.' } },
  { role: 'Night Receptionist', org: 'Hotel Orri & Camping Village Orri · Seasonal', dates: { it: 'mag 2026 – oggi', en: 'May 2026 – Present' }, place: { it: 'Tortolì, Sardegna', en: 'Tortolì, Sardinia' }, desc: { it: 'Front office notturno in IT/EN/FR/RU, night audit e chiusura cassa, gestione emergenze. Stagioni precedenti: 2024 reception, 2025 night reception.', en: 'Solo night front office in IT/EN/FR/RU, night audit and cash close, emergencies. Prior seasons: 2024 reception, 2025 night reception.' } },
  { role: 'Payroll Specialist, GMP Local Market Operations', org: 'Safeguard Global', dates: { it: 'gen 2023 – ago 2023', en: 'Jan 2023 – Aug 2023' }, place: { it: 'Chișinău, Moldova', en: 'Chișinău, Moldova' }, desc: { it: 'Registri paghe end-to-end, contratti, regole fiscali e contributi; Zucchetti Paghe Web; referente cliente.', en: 'End-to-end payroll registers, contracts, tax rules and contributions; Zucchetti Paghe Web; client contact.' } },
  { role: 'HR Partner', org: 'Accenture', dates: { it: 'mar 2022 – dic 2022', en: 'Mar 2022 – Dec 2022' }, place: { it: 'Iași, Romania · Ibrido', en: 'Iași, Romania · Hybrid' }, desc: { it: 'Relazione con dipendenti e practice leader, performance review, analisi headcount e talenti, coordinamento di un piccolo team HR.', en: 'Employee and practice-leader relations, performance reviews, headcount and talent analysis, coordinating a small HR Partner team.' } },
  { role: 'Customer Support / Travel Advisor', org: 'easyJet', dates: { it: 'mar 2021 – dic 2021', en: 'Mar 2021 – Dec 2021' }, place: { it: 'Iași, Romania', en: 'Iași, Romania' }, desc: { it: 'Prenotazioni ad alto volume, modifiche, pagamenti e rimborsi; riprotezione voli cancellati o in ritardo.', en: 'High-volume bookings, changes, payments and refunds; rebooking for cancelled and delayed flights.' } },
  { role: 'Intern', org: 'Primăria Iași (Iași City Hall)', dates: { it: 'mar 2018 – apr 2018', en: 'Mar 2018 – Apr 2018' }, place: { it: 'Iași, Romania', en: 'Iași, Romania' }, desc: { it: 'Supporto allo sviluppo di politiche municipali: ricerca, bozze e documentazione.', en: 'Supported municipal policy development through research, drafts and documentation.' } },
  { role: 'Programme Associate (GS6)', org: 'United Nations · Temporary', dates: { it: 'mag 2017 – ott 2017', en: 'May 2017 – Oct 2017' }, place: { it: 'Chișinău, Moldova', en: 'Chișinău, Moldova' }, desc: { it: 'Supporto amministrativo e logistico a un team ONU internazionale; contratti e documentazione di programma.', en: 'Administrative and logistics support for an international UN team; contracts and programme documentation.' } },
]

export const education: { title: L; org: string; dates: string }[] = [
  { title: { it: 'Laurea magistrale, Politiche Pubbliche e Management Istituzionale', en: 'Master’s, Public Policies and Institutional Management' }, org: 'Universitatea „Alexandru Ioan Cuza” din Iași', dates: '2019 – 2021' },
  { title: { it: 'Erasmus, Pubblica Amministrazione', en: 'Erasmus, Public Administration' }, org: 'Università di Pavia', dates: '2020' },
  { title: { it: 'Laurea triennale, Relazioni Internazionali', en: 'Bachelor’s, International Relations and Affairs' }, org: 'Universitatea „Alexandru Ioan Cuza” din Iași', dates: '2016 – 2019' },
]

export const languages: { name: L; level: string; pct: number }[] = [
  { name: { it: 'Rumeno', en: 'Romanian' }, level: 'Native', pct: 100 },
  { name: { it: 'Italiano', en: 'Italian' }, level: 'C1', pct: 90 },
  { name: { it: 'Russo', en: 'Russian' }, level: 'C1', pct: 90 },
  { name: { it: 'Inglese', en: 'English' }, level: 'B2–C1', pct: 80 },
  { name: { it: 'Francese', en: 'French' }, level: 'B1', pct: 55 },
]
export { pick }

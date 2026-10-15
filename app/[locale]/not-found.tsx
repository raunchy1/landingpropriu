'use client'

import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import SiteShell from '@/components/SiteShell'
import WhatsAppLink from '@/components/WhatsAppLink'
import Arrow from '@/components/home/Arrow'

const txt = {
  it: {
    eyebrow: 'Errore 404',
    title: 'Questa pagina non esiste.',
    lead: 'Il link potrebbe essere vecchio o scritto male. Torna alla home oppure scrivici su WhatsApp.',
    home: 'Torna alla home',
    cta: 'Scrivici su WhatsApp',
    more: 'Forse cercavi',
    links: [
      { href: '/servizi', label: 'Servizi' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/blog', label: 'Blog' },
      { href: '/contatti', label: 'Contatti' },
    ],
  },
  en: {
    eyebrow: 'Error 404',
    title: 'This page doesn’t exist.',
    lead: 'The link may be old or mistyped. Head back home or message us on WhatsApp.',
    home: 'Back to home',
    cta: 'Message us on WhatsApp',
    more: 'Maybe you were looking for',
    links: [
      { href: '/servizi', label: 'Services' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/blog', label: 'Blog' },
      { href: '/contatti', label: 'Contact' },
    ],
  },
}

export default function NotFound() {
  const locale = useLocale() as 'it' | 'en'
  const l = txt[locale] ?? txt.it

  return (
    <SiteShell>
      <section className="wrap flex min-h-[100svh] flex-col justify-center pb-20 pt-[128px] md:pt-[160px]">
        <p className="eyebrow eyebrow-accent mb-6 md:mb-8">{l.eyebrow}</p>
        <h1 data-split className="display h-xl max-w-[12ch]">
          {l.title}
        </h1>
        <div data-reveal className="mt-8 md:mt-12">
          <p className="lead max-w-[48ch]">{l.lead}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-10">
            <Link href="/" className="btn btn-accent w-full sm:w-auto">
              {l.home}
              <Arrow />
            </Link>
            <WhatsAppLink location="contact" className="btn btn-ghost w-full sm:w-auto">
              {l.cta}
              <Arrow />
            </WhatsAppLink>
          </div>
          <nav aria-label={l.more} className="rule mt-14 pt-6 md:mt-20">
            <p className="eyebrow mb-4">{l.more}</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-1">
              {l.links.map((x) => (
                <li key={x.href}>
                  <Link href={x.href} className="ulink">
                    {x.label}
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </SiteShell>
  )
}

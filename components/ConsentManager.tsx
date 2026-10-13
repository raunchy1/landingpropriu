'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { analytics } from '@/lib/analytics'

const KEY = 'ws_consent_v1'
type Choice = { analytics: boolean; ads: boolean }

declare global {
  interface Window {
    __wsOpenConsent?: () => void
  }
}

function applyConsent(c: Choice) {
  window.gtag?.('consent', 'update', {
    analytics_storage: c.analytics ? 'granted' : 'denied',
    ad_storage: c.ads ? 'granted' : 'denied',
    ad_user_data: c.ads ? 'granted' : 'denied',
    ad_personalization: c.ads ? 'granted' : 'denied',
  })
}

const txt = {
  it: {
    title: 'Cookie e privacy',
    body: 'Uso cookie tecnici necessari e, solo con il tuo consenso, cookie di analisi (Google Analytics) e di marketing (Google Ads) per misurare le visite e le campagne.',
    accept: 'Accetta tutti',
    reject: 'Rifiuta',
    customize: 'Personalizza',
    save: 'Salva scelte',
    analytics: 'Analisi (Google Analytics)',
    ads: 'Marketing (Google Ads)',
    necessary: 'Necessari (sempre attivi)',
    policy: 'Cookie Policy',
    privacy: 'Privacy Policy',
  },
  en: {
    title: 'Cookies & privacy',
    body: 'I use necessary technical cookies and, only with your consent, analytics (Google Analytics) and marketing (Google Ads) cookies to measure visits and campaigns.',
    accept: 'Accept all',
    reject: 'Reject',
    customize: 'Customize',
    save: 'Save choices',
    analytics: 'Analytics (Google Analytics)',
    ads: 'Marketing (Google Ads)',
    necessary: 'Necessary (always on)',
    policy: 'Cookie Policy',
    privacy: 'Privacy Policy',
  },
}

export default function ConsentManager() {
  const locale = useLocale() as 'it' | 'en'
  const l = txt[locale] ?? txt.it
  const [choice, setChoice] = useState<Choice | null>(null)
  const [open, setOpen] = useState(false)
  const [custom, setCustom] = useState(false)
  const [draft, setDraft] = useState<Choice>({ analytics: false, ads: false })

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY)
      if (raw) {
        const c = JSON.parse(raw) as Choice
        setChoice(c)
        setDraft(c)
        applyConsent(c)
      } else setOpen(true)
    } catch {
      setOpen(true)
    }
    window.__wsOpenConsent = () => {
      setCustom(true)
      setOpen(true)
    }
  }, [])

  const save = (c: Choice) => {
    try { localStorage.setItem(KEY, JSON.stringify(c)) } catch {}
    applyConsent(c)
    setChoice(c)
    setDraft(c)
    setOpen(false)
    setCustom(false)
  }

  const load = !!choice && (choice.analytics || choice.ads)

  const btn = 'rounded-lg px-4 py-2.5 text-[13px] font-medium min-h-[40px]'

  return (
    <>
      {load && (
        <>
          <Script id="gtm" strategy="lazyOnload">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${analytics.gtmId}');`}</Script>
          <Script id="gtag-src" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${analytics.googleAdsId}`} />
          <Script id="gtag-cfg" strategy="lazyOnload">{`gtag('js',new Date());gtag('config','${analytics.googleAdsId}');gtag('config','${analytics.ga4Id}');`}</Script>
        </>
      )}
      {open && (
        <div role="dialog" aria-live="polite" aria-label={l.title}
          className="fixed bottom-3 left-3 right-3 z-[100] mx-auto max-w-[560px] rounded-xl border p-5 shadow-2xl"
          style={{ background: '#111110', borderColor: 'var(--dim-line)', color: 'var(--fg)' }}>
          <p className="mb-2 text-[15px] font-semibold">{l.title}</p>
          <p className="mb-3 text-[13px] leading-[1.6]" style={{ color: '#C8C8C2' }}>
            {l.body}{' '}
            <Link href="/cookie-policy" className="underline" style={{ color: 'var(--fg)' }}>{l.policy}</Link>
            {' · '}
            <Link href="/privacy" className="underline" style={{ color: 'var(--fg)' }}>{l.privacy}</Link>
          </p>
          {custom && (
            <div className="mb-3 flex flex-col gap-2 text-[13px]">
              <label className="flex items-center gap-2 opacity-80"><input type="checkbox" checked disabled /> {l.necessary}</label>
              <label className="flex items-center gap-2"><input type="checkbox" checked={draft.analytics} onChange={(e) => setDraft({ ...draft, analytics: e.target.checked })} /> {l.analytics}</label>
              <label className="flex items-center gap-2"><input type="checkbox" checked={draft.ads} onChange={(e) => setDraft({ ...draft, ads: e.target.checked })} /> {l.ads}</label>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            <button className={btn} style={{ background: 'var(--fg)', color: '#080808' }} onClick={() => save({ analytics: true, ads: true })}>{l.accept}</button>
            <button className={btn + ' border'} style={{ borderColor: 'var(--dim)', color: 'var(--fg)' }} onClick={() => save({ analytics: false, ads: false })}>{l.reject}</button>
            {custom
              ? <button className={btn + ' border'} style={{ borderColor: 'var(--dim)', color: 'var(--fg)' }} onClick={() => save(draft)}>{l.save}</button>
              : <button className={btn + ' underline'} style={{ color: 'var(--fg)' }} onClick={() => setCustom(true)}>{l.customize}</button>}
          </div>
        </div>
      )}
    </>
  )
}

'use client'

import { useState, type FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import { trackFormSubmit } from '@/lib/trackEvents'

const WEB3FORMS_KEY = '71392d98-c721-43c2-8250-c03840287e70'

export default function LandingForm() {
  const t = useTranslations('landingPage')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = (fd.get('name') as string)?.trim()
    const phone = (fd.get('phone') as string)?.trim()
    const businessType = (fd.get('business_type') as string)?.trim()

    if (!name || !phone || !businessType) return

    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Landing Ads — bozza gratuita Sardegna',
          from_name: 'WebSardegna Landing',
          name,
          phone,
          business_type: businessType,
          source: 'google_ads_landing',
        }),
      })
      const data = await res.json()
      if (data.success) {
        trackFormSubmit()
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full rounded-lg px-4 py-3 text-[15px] outline-none transition-colors duration-300'
  const fieldStyle = {
    border: '1px solid var(--line)',
    background: 'transparent',
    color: 'var(--fg)',
  }

  return (
    <section className="pb-20" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <div
          className="rounded-xl border p-6 md:p-8"
          style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
        >
          <p
            className="mb-1 text-[11px]"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
          >
            {t('formEyebrow')}
          </p>
          <h2
            className="mb-5 font-semibold"
            style={{ fontSize: '20px', color: 'var(--fg)' }}
          >
            {t('formTitle')}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder={t('formName')}
              className={fieldClass}
              style={fieldStyle}
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder={t('formPhone')}
              className={fieldClass}
              style={fieldStyle}
            />
            <input
              name="business_type"
              type="text"
              required
              placeholder={t('formBusiness')}
              className={fieldClass}
              style={fieldStyle}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="cta-primary inline-flex items-center justify-center gap-3 rounded-lg px-7 py-3.5 text-[15px] font-medium transition-all duration-300 disabled:opacity-60"
              style={{
                border: '1px solid var(--line)',
                background: 'var(--surface)',
                color: 'var(--fg)',
              }}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: 'var(--accent-green)' }}
              />
              {status === 'loading' ? t('formSubmitting') : t('formSubmit')}
            </button>

            {status === 'success' && (
              <p className="text-[13px]" style={{ color: 'var(--accent-green)' }}>
                → {t('formSuccess')}
              </p>
            )}
            {status === 'error' && (
              <p className="text-[13px]" style={{ color: 'var(--muted)' }}>
                → {t('formError')}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
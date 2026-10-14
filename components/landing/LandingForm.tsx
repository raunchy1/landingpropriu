'use client'

import { useState, type FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import { trackFormSubmit } from '@/lib/trackEvents'
import Arrow from '@/components/home/Arrow'

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
        trackFormSubmit('landing')
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
    'w-full min-h-[56px] border-b bg-transparent px-0 py-3 text-[17px] outline-none transition-colors duration-300 placeholder:text-[var(--dim)] focus:border-[var(--accent)]'
  const fieldStyle = {
    borderColor: 'var(--dim-line)',
    color: 'var(--fg)',
  }

  return (
    <section className="rule py-20 md:py-32" style={{ background: 'var(--bg)' }}>
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6 md:mb-8">{t('formEyebrow')}</p>
          <h2 data-split className="display h-md max-w-[14ch]">
            {t('formTitle')}
          </h2>
        </div>

        <div data-reveal className="lg:col-span-6 lg:col-start-7">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              type="text"
              required
              placeholder={t('formName')}
              aria-label={t('formName')}
              className={fieldClass}
              style={fieldStyle}
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder={t('formPhone')}
              aria-label={t('formPhone')}
              className={fieldClass}
              style={fieldStyle}
            />
            <input
              name="business_type"
              type="text"
              required
              placeholder={t('formBusiness')}
              aria-label={t('formBusiness')}
              className={fieldClass}
              style={fieldStyle}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn btn-accent mt-6 w-full disabled:opacity-60 sm:w-auto sm:self-start"
            >
              {status === 'loading' ? t('formSubmitting') : t('formSubmit')}
              <Arrow />
            </button>

            {status === 'success' && (
              <p className="text-[14px]" style={{ color: 'var(--accent)' }} role="status">
                → {t('formSuccess')}
              </p>
            )}
            {status === 'error' && (
              <p className="text-[14px]" style={{ color: 'var(--muted)' }} role="alert">
                → {t('formError')}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

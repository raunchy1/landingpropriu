'use client'

import { useState, type FormEvent, type ReactNode } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import ScrollReveal from './ScrollReveal'
import WhatsAppLink from '@/components/WhatsAppLink'
import { trackFormSubmit } from '@/lib/trackEvents'

const WEB3FORMS_KEY = '71392d98-c721-43c2-8250-c03840287e70'
const CONTACT_EMAIL = 'cristiermurache@gmail.com'

type BlockId = 'whatsapp' | 'form' | 'email'

const cardStyle = {
  border: '1px solid var(--line)',
  borderRadius: 12,
  padding: 32,
  background: 'var(--surface)',
} as const

const labelStyle = {
  color: 'var(--muted)',
  fontFamily: 'var(--font-mono)',
  fontSize: 13,
} as const

function ContactCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`reveal-child rounded-xl transition-all duration-300 ${className}`}
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--muted)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--line)'
      }}
    >
      {children}
    </div>
  )
}

function LabelRow({ label }: { label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      <span
        className="inline-block h-2 w-2 shrink-0 rounded-full"
        style={{ background: 'var(--accent-green)' }}
      />
      <span style={labelStyle}>{label}</span>
    </div>
  )
}

function ContactForm() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  )
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = (fd.get('name') as string)?.trim()
    const email = (fd.get('email') as string)?.trim()
    const businessType = (fd.get('business_type') as string)?.trim()
    const message = (fd.get('message') as string)?.trim()

    const nextErrors: Record<string, boolean> = {}
    if (!name) nextErrors.name = true
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = true
    if (!businessType) nextErrors.business_type = true
    if (!message) nextErrors.message = true

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('idle')
      return
    }

    setErrors({})
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Nuova richiesta da websardegna.life',
          from_name: 'WebSardegna',
          name,
          email,
          business_type: businessType,
          message,
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
    <ContactCard>
      <LabelRow label={t('sectionTitle')} />
      <p
        className="mb-5 text-[13px]"
        style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
      >
        {t('ctaPrimary')}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-[12px]" style={labelStyle}>
            {t('formName')}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            style={{
              ...fieldStyle,
              borderColor: errors.name ? 'var(--accent-green)' : 'var(--line)',
            }}
          />
          {errors.name && (
            <p className="mt-1 text-[11px]" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
              {t('formRequired')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-[12px]" style={labelStyle}>
            {t('formEmail')}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            style={{
              ...fieldStyle,
              borderColor: errors.email ? 'var(--accent-green)' : 'var(--line)',
            }}
          />
          {errors.email && (
            <p className="mt-1 text-[11px]" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
              {t('formEmailInvalid')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-business" className="mb-1.5 block text-[12px]" style={labelStyle}>
            {t('formBusiness')}
          </label>
          <input
            id="contact-business"
            name="business_type"
            type="text"
            className={fieldClass}
            style={{
              ...fieldStyle,
              borderColor: errors.business_type ? 'var(--accent-green)' : 'var(--line)',
            }}
          />
          {errors.business_type && (
            <p className="mt-1 text-[11px]" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
              {t('formRequired')}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-[12px]" style={labelStyle}>
            {t('formMessage')}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className={`${fieldClass} resize-y`}
            style={{
              ...fieldStyle,
              borderColor: errors.message ? 'var(--accent-green)' : 'var(--line)',
            }}
          />
          {errors.message && (
            <p className="mt-1 text-[11px]" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
              {t('formRequired')}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="cta-primary mt-1 inline-flex items-center justify-center gap-3 rounded-lg px-7 py-3.5 text-[15px] font-medium transition-all duration-300 disabled:opacity-60"
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
          <p
            className="text-[13px]"
            style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}
            role="status"
          >
            → {t('formSuccess')}
          </p>
        )}
        {status === 'error' && (
          <p
            className="text-[13px]"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
            role="alert"
          >
            → {t('formError')}
          </p>
        )}
      </form>
    </ContactCard>
  )
}

function EmailBlock() {
  const t = useTranslations('contact')
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t('emailSubject'))}`

  return (
    <ContactCard>
      <LabelRow label={t('emailLabel')} />
      <a
        href={mailto}
        className="block font-bold transition-colors duration-300"
        style={{
          fontSize: 'clamp(20px, 4vw, 28px)',
          color: 'var(--fg)',
          margin: '16px 0',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--accent-green)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--fg)'
        }}
      >
        {t('emailCta')}
      </a>
      <p className="text-[12px]" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
        <span style={{ color: 'var(--accent-green)' }}>→</span> {t('emailSubject')}
      </p>
    </ContactCard>
  )
}

function WhatsAppBlock() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const isSecondary = locale === 'en'

  return (
    <ContactCard>
      <LabelRow label={isSecondary ? t('waAlt') : t('waLabel')} />

      <WhatsAppLink location="contact" className="block">
        <p
          className="font-bold"
          style={{
            fontSize: 'clamp(24px, 5vw, 32px)',
            color: 'var(--fg)',
            margin: '16px 0',
          }}
        >
          +39 350 199 85 69
        </p>
      </WhatsAppLink>

      <div className="flex flex-col gap-1.5">
        {[1, 2, 3].map((i) => (
          <p
            key={i}
            className="text-[12px]"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
          >
            <span style={{ color: 'var(--accent-green)' }}>→</span>{' '}
            {t(`waNote${i}`)}
          </p>
        ))}
      </div>

      {locale === 'en' && (
        <p className="mt-4 text-[12px]" style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
          {t('orEmail')}{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t('emailSubject'))}`}
            style={{ color: 'var(--fg)', borderBottom: '1px solid var(--dim)' }}
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      )}
    </ContactCard>
  )
}

export default function FinalCTA() {
  const t = useTranslations('contact')
  const locale = useLocale()

  const order: BlockId[] =
    locale === 'it'
      ? ['whatsapp', 'form', 'email']
      : ['form', 'email', 'whatsapp']

  const blocks: Record<BlockId, ReactNode> = {
    whatsapp: <WhatsAppBlock />,
    form: <ContactForm />,
    email: <EmailBlock />,
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-20"
      style={{ background: 'var(--bg)' }}
    >
      <div
        className="mx-auto w-full max-w-[720px] px-6 md:px-8"
        style={{ paddingTop: 160, paddingBottom: 160 }}
      >
        <ScrollReveal>
          <p
            className="reveal-child mb-5 text-[11px]"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
          >
            {t('eyebrow')}
          </p>

          <h2
            className="reveal-child mb-10 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(32px, 6vw, 52px)',
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{ color: 'var(--fg)' }}>{t('title1')}</span>
            <br />
            <span style={{ color: 'var(--muted)' }}>{t('title2')}</span>
          </h2>

          <div className="flex flex-col gap-5">
            {order.map((id) => (
              <div key={id}>{blocks[id]}</div>
            ))}
          </div>

          <div className="reveal-child mt-10 text-center">
            <p className="text-[13px]" style={{ fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: 'var(--fg)' }}>websardegna</span>
              <span style={{ color: 'var(--muted)' }}>.life</span>
              <span className="caret" />
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
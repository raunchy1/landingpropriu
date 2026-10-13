import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import LegalPage from '@/components/LegalPage'
import ConsentReopen from '@/components/ConsentReopen'
import { legal } from '@/lib/legal'

type Props = { params: { locale: string } }

export function generateMetadata({ params }: Props): Metadata {
  const loc = params.locale === 'en' ? 'en' : 'it'
  const d = legal.cookie[loc]
  return {
    title: d.title + ' — WebSardegna',
    description: d.meta,
    alternates: { canonical: loc === 'it' ? '/cookie-policy' : '/en/cookie-policy', languages: { it: '/cookie-policy', en: '/en/cookie-policy' } },
  }
}

export default function Page({ params }: Props) {
  const loc = params.locale === 'en' ? 'en' : 'it'
  setRequestLocale(loc)
  const d = legal.cookie[loc]
  return (
    <LegalPage title={d.title} updated={d.updated} sections={d.sections}>
      <ConsentReopen label={loc === 'it' ? 'Gestisci preferenze cookie' : 'Manage cookie preferences'} />
    </LegalPage>
  )
}

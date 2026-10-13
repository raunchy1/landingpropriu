import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import LegalPage from '@/components/LegalPage'

import { legal } from '@/lib/legal'

type Props = { params: { locale: string } }

export function generateMetadata({ params }: Props): Metadata {
  const loc = params.locale === 'en' ? 'en' : 'it'
  const d = legal.privacy[loc]
  return {
    title: d.title + ' — WebSardegna',
    description: d.meta,
    alternates: { canonical: loc === 'it' ? '/privacy' : '/en/privacy', languages: { it: '/privacy', en: '/en/privacy' } },
  }
}

export default function Page({ params }: Props) {
  const loc = params.locale === 'en' ? 'en' : 'it'
  setRequestLocale(loc)
  const d = legal.privacy[loc]
  return (
    <>
      <LegalPage title={d.title} updated={d.updated} sections={d.sections} />
      
    </>
  )
}

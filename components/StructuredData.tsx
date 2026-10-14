import { getTranslations } from 'next-intl/server'
import { buildStructuredData } from '@/lib/structured-data'

type Props = {
  locale: string
}

export default async function StructuredData({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: 'home.faq' })

  const faqs = (t.raw('items') as { q: string; a: string }[]).map((f) => ({
    question: f.q,
    answer: f.a,
  }))

  const schemas = buildStructuredData(locale, faqs)

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
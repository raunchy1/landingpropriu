import { getTranslations } from 'next-intl/server'
import { buildStructuredData } from '@/lib/structured-data'

const FAQ_COUNT = 12

type Props = {
  locale: string
}

export default async function StructuredData({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: 'faq' })

  const faqs = Array.from({ length: FAQ_COUNT }, (_, i) => ({
    question: t(`q${i + 1}`),
    answer: t.raw(`a${i + 1}`) as string,
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
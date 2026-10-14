import type { Metadata } from 'next'

const BASE = 'https://websardegna.xyz'

/** Fill per-page og:url, og/twitter title+description and image from the page's own metadata. */
export function withSeo(meta: Metadata, locale: string): Metadata {
  const canonical = (meta.alternates?.canonical as string | undefined) ?? (locale === 'it' ? '/' : '/en')
  const url = canonical.startsWith('http') ? canonical : `${BASE}${canonical}`
  const title = (meta.title as string) ?? 'WebSardegna'
  const description = meta.description ?? ''
  const og: any = meta.openGraph ?? {}
  const tw: any = meta.twitter ?? {}
  const images = og.images ?? [{ url: '/og-image.png', width: 1200, height: 630, alt: title }]
  return {
    ...meta,
    openGraph: {
      siteName: 'WebSardegna',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      type: 'website',
      ...og,
      title: og.title ?? title,
      description: og.description ?? description,
      url,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      ...tw,
      title: tw.title ?? title,
      description: tw.description ?? description,
      images: tw.images ?? images.map((i: any) => (typeof i === 'string' ? i : i.url)),
    },
  }
}

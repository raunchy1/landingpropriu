import { permanentRedirect } from 'next/navigation'

type Props = {
  params: { locale: string }
}

/** Former single case-study page — all work now lives on /portfolio. */
export default async function ProgettiPage({ params }: Props) {
  const { locale } = await params
  permanentRedirect(locale === 'en' ? '/en/portfolio' : '/portfolio')
}

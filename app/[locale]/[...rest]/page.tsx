import { notFound } from 'next/navigation'

/** Unknown paths under a locale render the styled app/[locale]/not-found.tsx. */
export default function CatchAll() {
  notFound()
}

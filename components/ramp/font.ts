import { Inter_Tight } from 'next/font/google'

/** Grotesk used only by the home page (Ramp-style redesign). */
export const rampFont = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ramp',
  display: 'swap',
})

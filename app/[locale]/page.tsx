import { setRequestLocale } from 'next-intl/server'
import HomeNav from '@/components/home/HomeNav'
import Hero from '@/components/home/Hero'
import Marquee from '@/components/home/Marquee'
import Problem from '@/components/home/Problem'
import Offer from '@/components/home/Offer'
import Sectors from '@/components/home/Sectors'
import Process from '@/components/home/Process'
import Calculator from '@/components/home/Calculator'
import Trust from '@/components/home/Trust'
import Faq from '@/components/home/Faq'
import FinalCta from '@/components/home/FinalCta'
import HomeMotion from '@/components/home/HomeMotion'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <HomeNav />
      <main id="contenuto" className="relative overflow-x-clip" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
        <Hero />
        <Marquee />
        <Problem />
        <Offer />
        <Sectors />
        <Process />
        <Calculator />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
      <HomeMotion rootId="contenuto" />
    </>
  )
}

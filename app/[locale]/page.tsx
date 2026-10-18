import { setRequestLocale } from 'next-intl/server'
import Nav from '@/components/ramp/Nav'
import Hero from '@/components/ramp/Hero'
import Strip from '@/components/ramp/Strip'
import Problem from '@/components/ramp/Problem'
import Work from '@/components/ramp/Work'
import Offer from '@/components/ramp/Offer'
import Sectors from '@/components/ramp/Sectors'
import Process from '@/components/ramp/Process'
import Calculator from '@/components/home/Calculator'
import Trust from '@/components/ramp/Trust'
import Faq from '@/components/ramp/Faq'
import FinalCta from '@/components/ramp/FinalCta'
import HomeMotion from '@/components/home/HomeMotion'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'
import { rampFont } from '@/components/ramp/font'

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className={`ramp ${rampFont.variable}`}>
      <Nav />
      <main id="contenuto" className="relative overflow-x-clip">
        <Hero />
        <Strip />
        <Work />
        <Problem />
        <Offer />
        <Sectors />
        <Process />
        <Calculator />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer ink />
      <MobileBar light />
      <HomeMotion rootId="contenuto" />
    </div>
  )
}

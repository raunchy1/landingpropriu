import { setRequestLocale } from 'next-intl/server'
import HomeNav from '@/components/home/HomeNav'
import Hero from '@/components/home/Hero'
import SelectedWork from '@/components/home/SelectedWork'
import Statement from '@/components/home/Statement'
import Services from '@/components/home/Services'
import Process from '@/components/home/Process'
import Offer from '@/components/home/Offer'
import Trust from '@/components/home/Trust'
import Faq from '@/components/home/Faq'
import FinalCta from '@/components/home/FinalCta'
import HomeMotion from '@/components/home/HomeMotion'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'
import HomeTone from '@/components/home/HomeTone'

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="ws-home">
      <style>{`body{background:#fff;color:#111}`}</style>
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('ws-tone')` }} />
      <HomeTone />
      <HomeNav />
      <main id="contenuto" className="relative overflow-x-clip">
        <Hero />
        <SelectedWork />
        <Statement />
        <Services />
        <Process />
        <Offer />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
      <HomeMotion rootId="contenuto" />
    </div>
  )
}

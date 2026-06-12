import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import VideoCard from '@/components/VideoCard'
import Marquee from '@/components/Marquee'
import Services from '@/components/Services'
import Problems from '@/components/Problems'
import Solutions from '@/components/Solutions'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import MobileBar from '@/components/MobileBar'

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* halftone dot decoration — top right */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          right: '-12%',
          top: '-6%',
          width: '70%',
          height: '34%',
          backgroundImage:
            'radial-gradient(circle, rgba(237,237,234,0.07) 1.1px, transparent 1.1px)',
          backgroundSize: '14px 14px',
          maskImage:
            'radial-gradient(ellipse at 70% 30%, #000 0%, transparent 68%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 70% 30%, #000 0%, transparent 68%)',
        }}
      />

      {/* halftone dot decoration — bottom left */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          left: '-12%',
          bottom: '-6%',
          width: '70%',
          height: '34%',
          backgroundImage:
            'radial-gradient(circle, rgba(237,237,234,0.07) 1.1px, transparent 1.1px)',
          backgroundSize: '14px 14px',
          maskImage:
            'radial-gradient(ellipse at 30% 70%, #000 0%, transparent 68%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 30% 70%, #000 0%, transparent 68%)',
        }}
      />

      <Navbar />
      <Hero />

      {/* video card */}
      <div className="mx-auto max-w-[720px] px-6 pb-0 md:px-8">
        <VideoCard />
      </div>

      <Marquee />

      {/* hairline separator */}
      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <div className="hairline" />
      </div>

      <Services />

      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <div className="hairline" />
      </div>

      <Problems />

      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <div className="hairline" />
      </div>

      <Solutions />

      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <div className="hairline" />
      </div>

      <Process />

      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <div className="hairline" />
      </div>

      <Projects />

      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <div className="hairline" />
      </div>

      <Pricing />

      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <div className="hairline" />
      </div>

      <FAQ />

      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <div className="hairline" />
      </div>

      <FinalCTA />

      <Footer />
      <MobileBar />
    </main>
  )
}

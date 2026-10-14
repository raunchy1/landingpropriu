import HomeNav from './home/HomeNav'
import HomeMotion from './home/HomeMotion'
import Footer from './Footer'
import MobileBar from './MobileBar'

type Props = {
  children: React.ReactNode
}

/** Inner-page frame: same nav, footer, mobile bar and scroll motion as the home page. */
export default function SiteShell({ children }: Props) {
  return (
    <>
      <HomeNav />
      <main id="contenuto" className="relative min-h-[100svh] overflow-x-clip" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
        {children}
      </main>
      <Footer />
      <MobileBar />
      <HomeMotion rootId="contenuto" />
    </>
  )
}

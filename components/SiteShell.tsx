import Nav from './ramp/Nav'
import HomeMotion from './home/HomeMotion'
import Footer from './Footer'
import MobileBar from './MobileBar'
import { rampFont } from './ramp/font'

type Props = {
  children: React.ReactNode
}

/** Inner-page frame: same nav, footer, mobile bar, theme and scroll motion as the home page. */
export default function SiteShell({ children }: Props) {
  return (
    <div className={`ramp ${rampFont.variable}`}>
      <Nav />
      <main id="contenuto" className="relative min-h-[100svh] overflow-x-clip">
        {children}
      </main>
      <Footer ink />
      <MobileBar light />
      <HomeMotion rootId="contenuto" />
    </div>
  )
}

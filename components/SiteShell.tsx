import Navbar from './Navbar'
import Footer from './Footer'
import MobileBar from './MobileBar'

type Props = {
  children: React.ReactNode
}

export default function SiteShell({ children }: Props) {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <main className="pt-[64px]">{children}</main>
      <Footer />
      <MobileBar />
    </div>
  )
}
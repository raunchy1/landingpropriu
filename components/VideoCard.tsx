'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { useLocale } from 'next-intl'

export default function VideoCard() {
  const locale = useLocale()
  const videoSrc = locale === 'en'
    ? '/video/websardegna_hey_final_EN.mp4'
    : '/video/websardegna_ciao_final.mp4'

  return (
    <ScrollReveal>
      <div
        className="overflow-hidden md:max-w-[360px]"
        style={{
          border: '1px solid var(--line)',
          borderRadius: '12px',
        }}
      >
        <video
          key={locale}
          autoPlay
          muted
          loop
          playsInline
          className="block w-full h-auto"
        >
          <source
            src={videoSrc}
            type="video/mp4"
          />
        </video>
      </div>
    </ScrollReveal>
  )
}


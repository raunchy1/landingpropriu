'use client'

import ScrollReveal from '@/components/ScrollReveal'

export default function VideoCard() {
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
          autoPlay
          muted
          loop
          playsInline
          className="block w-full h-auto"
        >
          <source
            src="/video/websardegna_ciao_final.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </ScrollReveal>
  )
}

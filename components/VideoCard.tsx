'use client'

import ScrollReveal from '@/components/ScrollReveal'

export default function VideoCard() {
  return (
    <section
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <ScrollReveal>
          <div
            className="overflow-hidden"
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
              className="block w-full"
              style={{
                aspectRatio: '16 / 9',
                objectFit: 'cover',
              }}
            >
              <source
                src="/video/websardegna_ciao_final.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

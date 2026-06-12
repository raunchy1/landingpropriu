'use client'

import ScrollReveal from '@/components/ScrollReveal'

const SERVICES = [
  { name: 'attività locali', tag: 'più clienti dal web' },
  { name: 'turismo e hospitality', tag: 'prenotazioni dirette' },
  { name: 'ristoranti e bar', tag: 'menu digitale + contatti' },
  { name: 'professionisti', tag: 'presenza online seria' },
  { name: 'palestre e benessere', tag: 'booking + contatti' },
  { name: 'artigiani e negozi', tag: 'e-commerce + vetrina' },
]

export default function Services() {
  return (
    <section
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
      id="servizi"
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <ScrollReveal>
          {/* eyebrow */}
          <p
            className="reveal-child mb-5 text-[11px]"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--muted)',
            }}
          >
            // lavoro con qualsiasi tipo di attività
          </p>

          {/* headline */}
          <div className="reveal-child mb-12">
            <h2
              className="font-bold leading-[1.1]"
              style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                letterSpacing: '-0.03em',
              }}
            >
              <span style={{ color: 'var(--fg)' }}>il tuo sito.</span>
              <br />
              <span style={{ color: 'var(--muted)' }}>come lo vuoi tu.</span>
            </h2>
          </div>

          {/* service rows */}
          <div>
            {SERVICES.map((service, i) => (
              <div
                key={service.name}
                className="list-row reveal-child flex items-center justify-between"
                style={{
                  padding: '20px 0',
                  borderTop: '1px solid var(--line)',
                  ...(i === SERVICES.length - 1
                    ? { borderBottom: '1px solid var(--line)' }
                    : {}),
                }}
              >
                <span
                  className="text-[18px] font-medium"
                  style={{ color: 'var(--fg)' }}
                >
                  {service.name}
                </span>
                <span
                  className="text-[11px]"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--muted)',
                  }}
                >
                  {service.tag}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

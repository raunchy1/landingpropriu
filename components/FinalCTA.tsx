'use client'

import ScrollReveal from './ScrollReveal'

const WA_LINK =
  'https://wa.me/393501998569?text=Ciao%2C%20vorrei%20la%20bozza%20gratuita%20per%20il%20mio%20sito'

const NOTE_ITEMS = [
  'bozza gratuita in 48h',
  'ti piace? continuiamo insieme',
  'zero vincoli, zero anticipi',
]

export default function FinalCTA() {
  return (
    <section
      className="relative"
      style={{ background: 'var(--bg)' }}
    >
      <div
        className="mx-auto w-full max-w-[720px] px-6 md:px-8"
        style={{ paddingTop: 160, paddingBottom: 160 }}
      >
        <ScrollReveal>
          {/* eyebrow */}
          <p
            className="reveal-child mb-5 text-[11px]"
            style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
          >
            // il prossimo passo
          </p>

          {/* headline */}
          <h2
            className="reveal-child mb-10 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(32px, 6vw, 52px)',
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{ color: 'var(--fg)' }}>parliamone.</span>
            <br />
            <span style={{ color: 'var(--muted)' }}>senza impegno.</span>
          </h2>

          {/* whatsapp card */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="reveal-child block rounded-xl transition-all duration-300"
            style={{
              border: '1px solid var(--line)',
              borderRadius: 12,
              padding: 32,
              background: 'var(--surface)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--muted)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--line)'
            }}
          >
            {/* label row */}
            <div className="mb-4 flex items-center gap-2.5">
              <span
                className="inline-block h-2 w-2 shrink-0 rounded-full"
                style={{ background: 'var(--accent-green)' }}
              />
              <span
                className="text-[13px]"
                style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
              >
                whatsapp — rispondo io, personalmente
              </span>
            </div>

            {/* phone number */}
            <p
              className="font-bold"
              style={{
                fontSize: 'clamp(24px, 5vw, 32px)',
                color: 'var(--fg)',
                margin: '16px 0',
              }}
            >
              +39 350 199 85 69
            </p>

            {/* note items */}
            <div className="flex flex-col gap-1.5">
              {NOTE_ITEMS.map((item) => (
                <p
                  key={item}
                  className="text-[12px]"
                  style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}
                >
                  <span style={{ color: 'var(--accent-green)' }}>→</span>{' '}
                  {item}
                </p>
              ))}
            </div>
          </a>

          {/* branded line below card */}
          <div className="reveal-child mt-10 text-center">
            <p
              className="text-[13px]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <span style={{ color: 'var(--fg)' }}>websardegna</span>
              <span style={{ color: 'var(--muted)' }}>.life</span>
              <span className="caret" />
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

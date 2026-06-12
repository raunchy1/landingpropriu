import ScrollReveal from './ScrollReveal'

const solutions = [
  {
    title: 'design su misura',
    body: 'ogni sito è progettato da zero per la tua attività. nessun template uguale a quello del concorrente.',
  },
  {
    title: 'contatti diretti',
    body: 'form contatto, whatsapp, prenotazioni online. il cliente non deve cercare nulla.',
  },
  {
    title: 'ottimizzato per mobile',
    body: 'il 70% dei clienti ti cerca dal telefono. il tuo sito sarà veloce e facile da usare.',
  },
]

export default function Solutions() {
  return (
    <section
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <ScrollReveal>
          {/* eyebrow */}
          <p
            className="reveal-child mb-5 text-[11px]"
            style={{
              color: 'var(--muted)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
            }}
          >
            // cosa otterrai
          </p>

          {/* headline */}
          <h2
            className="reveal-child mb-14 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{ color: 'var(--fg)' }}>un sito che lavora per te.</span>
            <br />
            <span style={{ color: 'var(--muted)' }}>24 ore su 24.</span>
          </h2>

          {/* solution items */}
          <div className="flex flex-col" style={{ gap: '48px' }}>
            {solutions.map((item, i) => (
              <div
                key={i}
                className="reveal-child"
                style={{
                  borderLeft: '2px solid var(--line)',
                  paddingLeft: '24px',
                }}
              >
                <h3
                  className="mb-2"
                  style={{
                    fontWeight: 600,
                    fontSize: '17px',
                    color: 'var(--fg)',
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: '15px',
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                    maxWidth: '440px',
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

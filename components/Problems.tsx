'use client'

import ScrollReveal from '@/components/ScrollReveal'

const PROBLEMS = [
  {
    title: 'non vieni trovato',
    body: 'i clienti cercano su Google. se non sei lì, non esisti.',
  },
  {
    title: 'i clienti non capiscono cosa fai',
    body: 'sito vecchio, informazioni confuse. un cliente confuso non prenota.',
  },
  {
    title: 'nessun sistema per contatti',
    body: 'il cliente deve cercare il numero. ogni attrito è una prenotazione persa.',
  },
]

export default function Problems() {
  return (
    <section
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
      id="problemi"
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
            // perché ti serve un sito
          </p>

          {/* headline */}
          <div className="reveal-child mb-6">
            <h2
              className="font-bold leading-[1.15]"
              style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                letterSpacing: '-0.03em',
                color: 'var(--fg)',
              }}
            >
              il tuo cliente
              <br />
              <span style={{ color: 'var(--muted)' }}>
                ti sta cercando online.
              </span>
              <br />
              <span style={{ color: 'var(--fg)' }}>adesso.</span>
            </h2>
          </div>

          {/* body */}
          <p
            className="reveal-child mb-10 max-w-[480px] text-[17px] leading-[1.7]"
            style={{ color: 'var(--muted)' }}
          >
            se non hai un sito fatto bene, sta prenotando da qualcun altro.
            non servono scuse —{' '}
            <strong style={{ color: 'var(--fg)', fontWeight: 600 }}>
              servono contatti
            </strong>
            .
          </p>

          {/* problem cards */}
          <div className="flex flex-col gap-3">
            {PROBLEMS.map((problem) => (
              <div
                key={problem.title}
                className="reveal-child"
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '32px',
                  background: 'var(--surface)',
                }}
              >
                <h3
                  className="mb-2 text-[17px] font-semibold"
                  style={{ color: 'var(--fg)' }}
                >
                  {problem.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.6]"
                  style={{ color: 'var(--muted)' }}
                >
                  {problem.body}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

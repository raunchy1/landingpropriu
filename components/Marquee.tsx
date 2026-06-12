'use client'

const ITEMS =
  'b&b · ristoranti · hotel · charter · case vacanza · artigianato · professionisti · e-commerce · tour'

export default function Marquee() {
  return (
    <div
      className="relative flex h-[48px] items-center overflow-hidden"
      style={{
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        maskImage:
          'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <div className="marquee-track flex shrink-0 items-center">
        <span
          className="shrink-0 whitespace-nowrap px-6"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--dim)',
            letterSpacing: '0.04em',
          }}
        >
          {ITEMS}
        </span>
        <span
          className="shrink-0 whitespace-nowrap px-6"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--dim)',
            letterSpacing: '0.04em',
          }}
        >
          {ITEMS}
        </span>
        <span
          className="shrink-0 whitespace-nowrap px-6"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--dim)',
            letterSpacing: '0.04em',
          }}
        >
          {ITEMS}
        </span>
        <span
          className="shrink-0 whitespace-nowrap px-6"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--dim)',
            letterSpacing: '0.04em',
          }}
        >
          {ITEMS}
        </span>
      </div>
    </div>
  )
}

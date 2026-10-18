import type { CSSProperties, ReactNode } from 'react'

/**
 * Animated line icons (24×24, 1.5 stroke).
 * Every stroke uses pathLength=1 so CSS can draw it in (`.ai.is-in`), and parts
 * tagged with `ai-m-*` classes get a small idle loop once the icon is drawn.
 * HomeMotion adds `.is-in` when an icon scrolls into view; with reduced motion
 * (or no JS) the icons are simply shown fully drawn. Styles: app/globals.css.
 */
export type IconName =
  | 'search'
  | 'pin'
  | 'shield'
  | 'chat'
  | 'clock'
  | 'coin'
  | 'check'
  | 'contract'
  | 'key'
  | 'rocket'
  | 'phone'
  | 'utensils'
  | 'bed'
  | 'bag'
  | 'hammer'
  | 'compass'
  | 'sparkle'
  | 'globe'
  | 'instagram'
  | 'browser'
  | 'tick'
  | 'minus'

// `i` = draw order (stagger), extra class = idle motion group
const P = (d: string, i = 0, cls = '') => <path key={`${i}${d.slice(0, 8)}`} d={d} pathLength={1} className={cls} style={{ '--i': i } as CSSProperties} />
const C = (cx: number, cy: number, r: number, i = 0, cls = '') => (
  <circle key={`c${i}${cx}${cy}`} cx={cx} cy={cy} r={r} pathLength={1} className={cls} style={{ '--i': i } as CSSProperties} />
)
const Dot = (cx: number, cy: number, i = 0, cls = '') => (
  <circle key={`d${i}${cx}`} cx={cx} cy={cy} r={0.9} className={`ai-dot ${cls}`} style={{ '--i': i } as CSSProperties} />
)

const ICONS: Record<IconName, ReactNode> = {
  search: [
    <g key="g" className="ai-m-scan">
      {C(10.5, 10.5, 6.25, 0)}
      {P('M15.2 15.2 20.5 20.5', 1)}
      {P('M7.6 9.2a3.2 3.2 0 0 1 2.4-1.9', 2, 'ai-soft')}
    </g>,
  ],
  pin: [
    <g key="g" className="ai-m-bounce">
      {P('M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z', 0)}
      {C(12, 10, 2.25, 1)}
    </g>,
    P('M8.5 21.5h7', 2, 'ai-soft ai-m-shadow'),
  ],
  shield: [
    P('M12 3 19 6v5.5c0 4.4-3 8.1-7 9.5-4-1.4-7-5.1-7-9.5V6l7-3Z', 0),
    P('m8.8 12.2 2.2 2.2 4.4-4.6', 1, 'ai-m-recheck'),
  ],
  chat: [
    P('M4.5 18.8 5.6 15A7.6 7.6 0 1 1 9 18.3l-4.5.5Z', 0),
    Dot(9, 11.6, 1, 'ai-m-type'),
    Dot(12, 11.6, 2, 'ai-m-type'),
    Dot(15, 11.6, 3, 'ai-m-type'),
  ],
  clock: [C(12, 12, 8.5, 0), P('M12 12V7.5', 1, 'ai-m-spin'), P('M12 12l3 1.8', 2, 'ai-m-spin-slow'), P('M12 2v1.5M22 12h-1.5M12 22v-1.5M2 12h1.5', 3, 'ai-soft')],
  coin: [
    <g key="g" className="ai-m-flip">
      {C(12, 12, 8.5, 0)}
      {P('M14.8 8.6a4 4 0 1 0 0 6.8', 1)}
      {P('M7.6 11h5.2M7.6 13.2h5.2', 2)}
    </g>,
  ],
  check: [C(12, 12, 8.5, 0), P('m8.2 12.3 2.6 2.6 5-5.4', 1, 'ai-m-recheck')],
  contract: [
    P('M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z', 0),
    P('M14 3v5h5', 1),
    P('M8.5 11.5h7M8.5 14.5h4', 2, 'ai-soft'),
    P('M8.5 18c.8-1.2 1.4-1.2 1.8 0s1 1.2 1.8 0 1.4-1.2 1.8 0', 3, 'ai-m-sign'),
  ],
  key: [
    <g key="g" className="ai-m-turn">
      {C(8, 15.5, 3.75, 0)}
      {P('M10.7 12.8 19 4.5M16 7.5l2.2 2.2M13.8 9.7l1.6 1.6', 1)}
    </g>,
  ],
  rocket: [
    <g key="g" className="ai-m-float">
      {P('M12 2.8c3 2.2 4.6 5.6 4.2 9.6l-1.7 3.4h-5l-1.7-3.4C7.4 8.4 9 5 12 2.8Z', 0)}
      {C(12, 9.5, 1.6, 1)}
      {P('M7.8 12.6 5.5 15l.7 3.2 3.2-2.4M16.2 12.6l2.3 2.4-.7 3.2-3.2-2.4', 2)}
    </g>,
    P('M12 18.4v2.8', 3, 'ai-m-flame'),
  ],
  phone: [
    P('M8 2.8h8a1.6 1.6 0 0 1 1.6 1.6v15.2a1.6 1.6 0 0 1-1.6 1.6H8a1.6 1.6 0 0 1-1.6-1.6V4.4A1.6 1.6 0 0 1 8 2.8Z', 0),
    P('M10.8 5.2h2.4', 1),
    <g key="g" className="ai-m-scroll">
      {P('M9.2 9h5.6M9.2 11.6h5.6M9.2 14.2h3.6', 2, 'ai-soft')}
    </g>,
    Dot(12, 18.2, 3),
  ],
  utensils: [
    <g key="g" className="ai-m-wiggle">
      {P('M7 3v7.2a2 2 0 0 0 2 2v8.8M5 3v5.4M9 3v5.4M5 8.4a2 2 0 0 0 4 0', 0)}
    </g>,
    P('M17.5 21V3c-2 1.2-3 4.2-3 7.6 0 1.8.9 2.9 3 3', 1),
  ],
  bed: [
    P('M3 19V6.5M3 13.5h18V19M3 16.6h18', 0),
    P('M21 13.5v-2a3 3 0 0 0-3-3h-6.5v5', 1),
    C(7, 10.6, 1.9, 2),
    P('M15.6 3.6h2.6l-2.6 2.6h2.6', 3, 'ai-soft ai-m-zzz'),
  ],
  bag: [
    <g key="g" className="ai-m-swing">
      {P('M5.2 8h13.6l-1 12.2H6.2L5.2 8Z', 0)}
      {P('M9 10.5V7a3 3 0 0 1 6 0v3.5', 1)}
    </g>,
  ],
  hammer: [
    <g key="g" className="ai-m-hit">
      {P('m14.2 6.3-9.4 9.4a1.7 1.7 0 0 0 2.4 2.4l9.4-9.4', 0)}
      {P('m12.6 4.7 3.2-1.9 5.4 5.4-1.9 3.2-2.2-2.2-2.3-2.3-2.2-2.2Z', 1)}
    </g>,
    P('M3.5 21h7', 2, 'ai-soft'),
  ],
  compass: [C(12, 12, 8.5, 0), <g key="g" className="ai-m-needle">{P('m15.4 8.6-2 4.8-4.8 2 2-4.8 4.8-2Z', 1)}</g>, Dot(12, 12, 2)],
  sparkle: [
    <g key="g" className="ai-m-twinkle">
      {P('M12 3.2c.6 4.4 2.4 6.2 6.8 6.8-4.4.6-6.2 2.4-6.8 6.8-.6-4.4-2.4-6.2-6.8-6.8 4.4-.6 6.2-2.4 6.8-6.8Z', 0)}
    </g>,
    <g key="g2" className="ai-m-twinkle-2">
      {P('M18.5 15.6c.25 1.6.9 2.2 2.5 2.5-1.6.25-2.25.9-2.5 2.5-.25-1.6-.9-2.25-2.5-2.5 1.6-.3 2.25-.9 2.5-2.5Z', 1)}
    </g>,
  ],
  globe: [C(12, 12, 8.5, 0), <g key="g" className="ai-m-rotate">{P('M12 3.5c-2.4 2.4-3.4 5.2-3.4 8.5s1 6.1 3.4 8.5c2.4-2.4 3.4-5.2 3.4-8.5s-1-6.1-3.4-8.5Z', 1)}</g>, P('M3.8 9.4h16.4M3.8 14.6h16.4', 2, 'ai-soft')],
  instagram: [P('M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Z', 0), C(12, 12, 3.75, 1), Dot(16.9, 7.1, 2, 'ai-m-blink')],
  browser: [
    P('M4.5 4h15a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13A1.5 1.5 0 0 1 4.5 4Z', 0),
    P('M3 8.2h18', 1),
    Dot(5.8, 6.1, 1),
    Dot(8.2, 6.1, 1),
    <g key="g" className="ai-m-scroll">{P('M6.5 11.5h6M6.5 14h4M14.5 11.5h3v5h-3z', 2, 'ai-soft')}</g>,
  ],
  tick: [P('m5 12.5 4.2 4.2L19 7', 0)],
  minus: [P('M6 12h12', 0)],
}

type Props = {
  name: IconName
  className?: string
  /** draw-in delay in ms (on top of the per-stroke stagger) */
  delay?: number
  title?: string
}

export default function AnimIcon({ name, className = '', delay = 0, title }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      data-icon
      className={`ai ai-${name} ${className}`}
      style={delay ? ({ '--ai-delay': `${delay}ms` } as CSSProperties) : undefined}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {ICONS[name]}
    </svg>
  )
}

/** Premium icon tile: gradient border, glow and rotating sheen on hover. */
export function IconTile({
  name,
  size = 'md',
  delay,
  className = '',
  drawNow = false,
}: {
  name: IconName
  size?: 'sm' | 'md' | 'lg'
  delay?: number
  className?: string
  /** draw on mount instead of waiting for the viewport observer (e.g. a newly shown tab) */
  drawNow?: boolean
}) {
  return (
    <span className={`itile itile-${size} ${className}`} aria-hidden="true">
      <AnimIcon name={name} delay={delay} className={drawNow ? 'is-in' : ''} />
    </span>
  )
}

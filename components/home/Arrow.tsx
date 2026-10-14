/** Hover-animated arrow: the first glyph slides out, the second slides in. */
export default function Arrow({ dir = 'up-right' }: { dir?: 'up-right' | 'down' }) {
  const path =
    dir === 'down' ? 'M8 1.5v13M2.5 9 8 14.5 13.5 9' : 'M3 13 13 3M5 3h8v8'
  const glyph = (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d={path} />
    </svg>
  )
  return (
    <span className={`arrow ${dir === 'down' ? 'arrow-down' : ''}`} aria-hidden="true">
      {glyph}
      {glyph}
    </span>
  )
}

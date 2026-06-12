export default function Footer() {
  return (
    <footer
      style={{ borderTop: '1px solid var(--line)' }}
    >
      <div
        className="mx-auto flex max-w-[720px] items-center justify-between px-6 py-6 md:px-8"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--dim)',
        }}
      >
        <span>websardegna.life</span>
        <span>sardegna, 2026</span>
      </div>
    </footer>
  )
}

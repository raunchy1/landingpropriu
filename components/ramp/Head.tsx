/** Section heading block used across the home page. */
export default function Head({
  eyebrow,
  title,
  intro,
  center = false,
  className = '',
}: {
  eyebrow: string
  title: string
  intro?: string
  center?: boolean
  className?: string
}) {
  // drop the old "01 / " numbering from the copy
  const label = eyebrow.replace(/^\d+\s*\/\s*/, '')
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-[820px] ${className}`}>
      <p className="eyebrow mb-5 uppercase">{label}</p>
      <h2 data-split className="display" style={{ fontSize: 'clamp(38px, 5.6vw, 76px)' }}>
        {title}
      </h2>
      {intro && <p className={`lead mt-6 max-w-[52ch] ${center ? 'mx-auto' : ''}`}>{intro}</p>}
    </div>
  )
}

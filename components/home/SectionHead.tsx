type Props = {
  eyebrow: string
  title: string
  intro?: string
  tone?: 'dark' | 'light'
  size?: 'lg' | 'md'
  className?: string
}

/** Editorial section header: numbered eyebrow + large split-revealed title. */
export default function SectionHead({ eyebrow, title, intro, tone = 'dark', size = 'lg', className = '' }: Props) {
  const light = tone === 'light'
  return (
    <div className={className}>
      <p className="eyebrow mb-6 md:mb-8" style={light ? { color: '#5b5547' } : undefined}>
        {eyebrow}
      </p>
      <h2 data-split className={`display ${size === 'lg' ? 'h-lg' : 'h-md'} max-w-[15ch]`} style={light ? { color: '#11161c' } : undefined}>
        {title}
      </h2>
      {intro && (
        <p className="lead mt-6 max-w-[56ch] md:mt-8" style={light ? { color: '#4a4539' } : undefined}>
          {intro}
        </p>
      )}
    </div>
  )
}

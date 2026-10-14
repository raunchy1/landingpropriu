import type { ReactNode } from 'react'

type Props = {
  eyebrow?: ReactNode
  title: ReactNode
  lead?: ReactNode
  /** Rendered above the eyebrow (e.g. a back link). */
  before?: ReactNode
  /** Rendered under the lead, revealed with it. */
  children?: ReactNode
  size?: 'xl' | 'lg' | 'md'
  className?: string
}

/** Inner-page opener: eyebrow + split-revealed display headline + lead. */
export default function PageHeader({ eyebrow, title, lead, before, children, size = 'lg', className = '' }: Props) {
  const sizeClass = size === 'xl' ? 'h-xl' : size === 'md' ? 'h-md' : 'h-lg'
  return (
    <header className={`wrap pb-14 pt-[128px] md:pb-20 md:pt-[184px] ${className}`}>
      {before && <div>{before}</div>}
      {eyebrow && <p className="eyebrow mb-6 md:mb-8">{eyebrow}</p>}
      <h1 data-split className={`display ${sizeClass} ${size === 'md' ? 'max-w-[26ch]' : 'max-w-[18ch]'}`}>
        {title}
      </h1>
      {(lead || children) && (
        <div data-reveal className="mt-8 md:mt-10">
          {lead && <p className="lead max-w-[56ch]">{lead}</p>}
          {children}
        </div>
      )}
    </header>
  )
}

import type { ReactNode } from 'react'
import Arrow from '@/components/home/Arrow'

type Props = {
  title: ReactNode
  body?: ReactNode
  cta: string
  href: string
  className?: string
}

/** Sand call-to-action block with the accent pill button (mirrors the home "Work" band). */
export default function CtaPanel({ title, body, cta, href, className = '' }: Props) {
  return (
    <div data-reveal className={className}>
      <div className="rounded-[24px] p-7 md:p-12" style={{ background: 'var(--accent)', color: '#151515' }}>
        <p className="max-w-[22ch] text-[30px] font-normal leading-[1.02] tracking-[-0.04em] md:text-[44px]">{title}</p>
        {body && (
          <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.6]" style={{ color: '#2b2b26' }}>
            {body}
          </p>
        )}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ink mt-8 w-full sm:w-auto"
        >
          {cta}
          <Arrow />
        </a>
      </div>
    </div>
  )
}

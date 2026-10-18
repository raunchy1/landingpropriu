import type { BlogBlock } from '@/lib/blog/types'
import { Link } from '@/i18n/navigation'

type Props = {
  blocks: BlogBlock[]
}

const body = 'mb-6 text-[17px] leading-[1.75] md:text-[18px]'

export default function BlogContent({ blocks }: Props) {
  return (
    <article className="blog-content">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="rule mb-6 mt-14 pt-10 text-[28px] font-normal leading-[1.1] tracking-[-0.035em] md:text-[38px]"
                style={{ color: 'var(--fg)' }}
              >
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3
                key={i}
                className="mb-4 mt-10 text-[21px] font-medium leading-[1.3] tracking-[-0.015em]"
                style={{ color: 'var(--fg)' }}
              >
                {block.text}
              </h3>
            )
          case 'ul':
            return (
              <ul key={i} className={`${body} space-y-3`} style={{ color: 'var(--muted)' }}>
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-4">
                    <span className="mt-[0.78em] h-px w-3 shrink-0" style={{ background: 'var(--accent)' }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i} className={`${body} space-y-3`} style={{ color: 'var(--muted)' }}>
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-4">
                    <span className="shrink-0 tabular-nums text-[13px] leading-[2.2]" style={{ color: 'var(--accent-fg)' }} aria-hidden="true">
                      {String(j + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            )
          case 'links':
            return (
              <nav key={i} aria-label={block.title} className="rule mb-6 mt-10 pt-8">
                <p className="eyebrow mb-4">{block.title}</p>
                <ul className={`${body} space-y-3`}>
                  {block.items.map((l, j) => (
                    <li key={j}>
                      <Link href={l.href} className="ulink" style={{ color: 'var(--fg)' }}>
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )
          default:
            return (
              <p key={i} className={body} style={{ color: 'var(--muted)' }}>
                {block.text}
              </p>
            )
        }
      })}
    </article>
  )
}

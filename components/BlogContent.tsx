import type { BlogBlock } from '@/lib/blog/types'

type Props = {
  blocks: BlogBlock[]
}

export default function BlogContent({ blocks }: Props) {
  return (
    <article className="blog-content">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={i}
                className="mb-4 mt-10 font-bold leading-[1.2]"
                style={{
                  fontSize: 'clamp(22px, 4vw, 32px)',
                  letterSpacing: '-0.02em',
                  color: 'var(--fg)',
                }}
              >
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3
                key={i}
                className="mb-3 mt-7 font-semibold leading-[1.3]"
                style={{ fontSize: '20px', color: 'var(--fg)' }}
              >
                {block.text}
              </h3>
            )
          case 'ul':
            return (
              <ul
                key={i}
                className="mb-5 list-disc space-y-2 pl-5 text-[17px] leading-[1.7]"
                style={{ color: 'var(--muted)' }}
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol
                key={i}
                className="mb-5 list-decimal space-y-2 pl-5 text-[17px] leading-[1.7]"
                style={{ color: 'var(--muted)' }}
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            )
          default:
            return (
              <p
                key={i}
                className="mb-5 text-[17px] leading-[1.7]"
                style={{ color: 'var(--muted)' }}
              >
                {block.text}
              </p>
            )
        }
      })}
    </article>
  )
}
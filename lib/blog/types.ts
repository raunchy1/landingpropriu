export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'links'; title: string; items: { href: string; label: string }[] }

export type BlogPost = {
  slug: string
  locale: 'it' | 'en'
  title: string
  description: string
  date: string
  readTime: string
  keywords: string[]
  blocks: BlogBlock[]
}
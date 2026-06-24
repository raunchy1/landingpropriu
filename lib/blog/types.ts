export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }

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
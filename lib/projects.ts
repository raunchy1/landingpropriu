import { getWorks, type Loc } from './portfolio'

export type CaseStudy = {
  id: string
  title: string
  category: string
  location: string
  image?: string
  wip?: boolean
  challenge: string
  solution: string
  results: string[]
  tags: string[]
}

/** Public case studies (content shared with the /portfolio page). Currently none. */
export function getCaseStudies(locale: string): CaseStudy[] {
  const loc: Loc = locale === 'en' ? 'en' : 'it'
  return getWorks(loc)
    .map((w) => ({
      id: w.id,
      title: w.title,
      category: w.tag,
      location: loc === 'en' ? 'Sardinia' : 'Sardegna',
      image: w.image,
      wip: w.wip,
      challenge: w.problem,
      solution: w.did,
      results: w.how ?? [],
      tags: w.stack,
    }))
}

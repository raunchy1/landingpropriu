import type { MetadataRoute } from 'next'
import { getAllPostParams } from '@/lib/blog/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://websardegna.xyz'
  const lastModified = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { it: baseUrl, en: `${baseUrl}/en` } },
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: { languages: { it: baseUrl, en: `${baseUrl}/en` } },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages: { it: `${baseUrl}/blog`, en: `${baseUrl}/en/blog` } },
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: { languages: { it: `${baseUrl}/contatti`, en: `${baseUrl}/en/contatti` } },
    },
    {
      url: `${baseUrl}/en/contatti`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/servizi`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages: { it: `${baseUrl}/servizi`, en: `${baseUrl}/en/servizi` } },
    },
    {
      url: `${baseUrl}/en/servizi`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: { languages: { it: `${baseUrl}/portfolio`, en: `${baseUrl}/en/portfolio` } },
    },
    {
      url: `${baseUrl}/en/portfolio`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/en/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/en/cookie-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${baseUrl}/progetti`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: { languages: { it: `${baseUrl}/progetti`, en: `${baseUrl}/en/progetti` } },
    },
    {
      url: `${baseUrl}/en/progetti`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/guida`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.95,
      alternates: { languages: { it: `${baseUrl}/guida`, en: `${baseUrl}/en/guida` } },
    },
    {
      url: `${baseUrl}/en/guida`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ]

  const blogPosts: MetadataRoute.Sitemap = getAllPostParams().map(
    ({ locale, slug }) => ({
      url:
        locale === 'it'
          ? `${baseUrl}/blog/${slug}`
          : `${baseUrl}/en/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })
  )

  // Every IT/EN static page pair carries reciprocal hreflang alternates.
  const withAlternates = staticPages.map((p) => {
    const path = p.url.replace(baseUrl, '').replace(/^\/en(?=\/|$)/, '')
    return {
      ...p,
      alternates: {
        languages: { it: `${baseUrl}${path}`, en: `${baseUrl}/en${path}` },
      },
    }
  })

  return [...withAlternates, ...blogPosts]
}
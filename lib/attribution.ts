const GCLID_KEY = 'ws_gclid'
const UTM_KEY = 'ws_utm'

type UtmParams = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

/** Persist ad click params on first landing (client-only). */
export function captureAttributionFromUrl(): void {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)
  const gclid = params.get('gclid')
  if (gclid) sessionStorage.setItem(GCLID_KEY, gclid)

  const utm: UtmParams = {}
  for (const key of [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
  ] as const) {
    const val = params.get(key)
    if (val) utm[key] = val
  }
  if (Object.keys(utm).length > 0) {
    sessionStorage.setItem(UTM_KEY, JSON.stringify(utm))
  }
}

export function getStoredGclid(): string | null {
  if (typeof window === 'undefined') return null
  return sessionStorage.getItem(GCLID_KEY)
}

export function getStoredUtm(): UtmParams {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(sessionStorage.getItem(UTM_KEY) || '{}') as UtmParams
  } catch {
    return {}
  }
}
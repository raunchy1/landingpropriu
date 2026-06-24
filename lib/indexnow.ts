const INDEXNOW_KEY = '84a594a78df0e0feec22134537af7c4e'
const HOST = 'websardegna.life'

export const indexNowKey = INDEXNOW_KEY

export async function submitToIndexNow(urls: string[]): Promise<Response> {
  return fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  })
}

export const indexNowUrls = [
  'https://websardegna.life/',
  'https://websardegna.life/guida',
  'https://websardegna.life/blog/miglior-web-designer-sardegna-guida',
  'https://websardegna.life/servizi',
  'https://websardegna.life/contatti',
]
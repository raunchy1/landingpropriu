import { getLocale } from 'next-intl/server'
import { ecomCredit, ecomSites } from '@/lib/ecomunicare'

/** Ramp-style logo row: names of the sites, scrolling slowly. */
export default async function Strip() {
  const locale = (await getLocale()) as 'it' | 'en'
  const names = ecomSites.map((s) => s.name)

  return (
    <section aria-label={ecomCredit[locale]} className="py-10 md:py-14">
      <p className="wrap mb-6 text-center text-[13px] font-medium" style={{ color: 'var(--dim)' }}>
        {ecomCredit[locale]}
      </p>
      <div className="r-strip overflow-hidden">
        <div className="r-strip-track">
          {[0, 1].map((k) => (
            <ul key={k} className="flex shrink-0 items-center" aria-hidden={k === 1 ? true : undefined}>
              {names.map((n) => (
                <li key={n} className="whitespace-nowrap px-6 text-[22px] font-semibold tracking-[-0.03em] md:px-9 md:text-[26px]" style={{ color: '#a3a29b' }}>
                  {n}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

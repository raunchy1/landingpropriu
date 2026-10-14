import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import Arrow from './Arrow'
import SectionHead from './SectionHead'

export default async function Work() {
  const t = await getTranslations('home.work')

  return (
    <section id="lavori" className="py-24 md:py-40" style={{ background: 'var(--fg)', color: '#11161c' }}>
      <div className="wrap">
        <SectionHead eyebrow={t('eyebrow')} title={t('title')} tone="light" />
        <div data-reveal className="mt-14 md:mt-20">
          <Link href="/portfolio" className="work-card group grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="relative overflow-hidden border md:col-span-8" style={{ borderColor: '#c9bea5', background: '#f4efe3' }}>
              <Image
                src="/portfolio/andamus.webp"
                alt={t('alt')}
                width={1200}
                height={750}
                sizes="(min-width: 768px) 66vw, 100vw"
                className="work-img h-auto w-full"
              />
              <span
                className="absolute bottom-0 right-0 flex h-14 w-14 items-center justify-center md:h-16 md:w-16"
                style={{ background: 'var(--accent)', color: 'var(--accent-ink)' }}
              >
                <Arrow />
              </span>
            </div>
            <div className="flex flex-col md:col-span-4">
              <p className="text-[12px] uppercase tracking-[0.16em]" style={{ color: '#5b5547' }}>
                01 / {t('tag')}
              </p>
              <h3 className="mt-5 text-[52px] font-normal leading-none tracking-[-0.045em] md:text-[72px]">{t('name')}</h3>
              <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-[12px]" style={{ borderColor: '#b9ae95' }}>
                <span className="h-[6px] w-[6px] rounded-full" style={{ background: '#0a8f74' }} />
                {t('status')}
              </span>
              <p className="mt-6 text-[16px] leading-[1.6]" style={{ color: '#3d392f' }}>
                {t('body')}
              </p>
              <p className="mt-4 text-[13px]" style={{ color: '#5b5547' }}>
                {t('stack')}
              </p>
              <span className="mt-8 inline-flex items-center justify-between gap-3 border-b py-3 text-[15px] md:mt-auto" style={{ borderColor: '#11161c' }}>
                {t('cta')}
                <Arrow />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

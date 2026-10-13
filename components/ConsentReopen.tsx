'use client'
export default function ConsentReopen({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => window.__wsOpenConsent?.()}
      className="mt-4 block rounded-lg border px-5 py-3 text-[14px]"
      style={{ borderColor: 'var(--dim)', color: 'var(--fg)' }}>{label}</button>
  )
}

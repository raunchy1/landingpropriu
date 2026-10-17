/** Compact mark + wordmark for the light editorial header and footer. */
export default function BrandLockup({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="/brand/logo-mark-jost.svg"
        alt=""
        width={22}
        height={40}
        className="h-7 w-auto"
      />
      <span className="text-[15px] font-semibold leading-none tracking-[-0.045em]">WebSardegna</span>
    </span>
  )
}

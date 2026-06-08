import { cn } from '@/lib/utils'

export function ShimmerButton({ children, className, onClick, href, ...props }) {
  const inner = (
    <span
      className={cn(
        'relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white sm:px-10 sm:py-4 sm:text-base',
        'bg-gradient-to-r from-[#0052cc] to-[#0099ee]',
        'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
        'shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] hover:scale-[1.03]',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )

  if (href) {
    return (
      <a href={href} className="inline-flex">
        {inner}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className="inline-flex focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:ring-offset-2 focus:ring-offset-transparent rounded-full">
      {inner}
    </button>
  )
}

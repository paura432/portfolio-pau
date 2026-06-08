import { cn } from '@/lib/utils'

export function BentoGrid({ children, className }) {
  return (
    <div
      className={cn(
        'grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  )
}

export function BentoCard({ children, className, featured = false }) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border bg-[var(--surface)] p-4 shadow-[var(--shadow)] transition-all duration-300 sm:p-5',
        featured
          ? 'border-[var(--brand-accent)]/60 hover:border-[var(--brand-accent)] hover:shadow-[0_0_30px_rgba(0,102,255,0.15)]'
          : 'border-[var(--brand-border)] hover:border-[var(--brand-accent)]/50',
        className
      )}
    >
      {/* Subtle glow on featured */}
      {featured && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--brand-accent)]/5 to-[var(--brand-accent-2)]/5" />
      )}
      {children}
    </div>
  )
}

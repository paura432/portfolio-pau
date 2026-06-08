import { cn } from '@/lib/utils'

export function AnimatedGradientText({ children, className }) {
  return (
    <span
      className={cn(
        'inline animate-gradient-x bg-gradient-to-r from-[#0066ff] via-[#00a8ff] to-[#0066ff] bg-[length:200%_auto] bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  )
}

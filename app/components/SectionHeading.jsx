import { cn } from '@/lib/utils'
import { BlurText } from './magic/BlurText'

export function SectionHeading({ children, className }) {
  const text = typeof children === 'string' ? children : ''

  if (text) {
    return (
      <BlurText
        text={text}
        as="h2"
        className={cn(
          'mb-8 text-center text-3xl font-bold sm:mb-12 sm:text-4xl md:text-5xl',
          className
        )}
        wordClassName="bg-gradient-to-r from-[#0066ff] to-[#00a8ff] bg-clip-text text-transparent"
      />
    )
  }

  // Fallback for non-string children
  return (
    <h2
      className={cn(
        'mb-8 text-center text-3xl font-bold text-gradient sm:mb-12 sm:text-4xl md:text-5xl',
        className
      )}
    >
      {children}
    </h2>
  )
}

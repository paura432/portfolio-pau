import { cn } from '@/lib/utils'

export function BorderBeam({
  className,
  size = 200,
  duration = 12,
  colorFrom = '#0066ff',
  colorTo = '#00a8ff',
}) {
  return (
    <div
      style={{
        '--size': size,
        '--duration': duration,
        '--color-from': colorFrom,
        '--color-to': colorTo,
        '--border-width': '1.5px',
      }}
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] [border:var(--border-width)_solid_transparent]',
        '[background:linear-gradient(var(--bg,#0a0a0f),var(--bg,#0a0a0f))_padding-box,linear-gradient(calc(var(--angle,0)*1deg),var(--color-from),var(--color-to),var(--color-from))_border-box]',
        '[animation:border-beam-rotate_calc(var(--duration)*1s)_linear_infinite]',
        className
      )}
    />
  )
}

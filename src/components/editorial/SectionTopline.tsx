import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const TONE_COLOR = {
  drought: 'var(--color-drought)',
  water: 'var(--color-water)',
  neutral: 'rgba(255,255,255,0.5)',
} as const

type SectionToplineProps = {
  label: ReactNode
  meta?: ReactNode
  tone?: keyof typeof TONE_COLOR
  className?: string
  metaClassName?: string
}

export function SectionTopline({
  label,
  meta,
  tone = 'drought',
  className,
  metaClassName,
}: SectionToplineProps) {
  const accent = TONE_COLOR[tone]

  return (
    <div className={cn('flex items-center justify-between gap-6', className)}>
      <div
        className="flex items-center gap-3 text-[0.66rem] font-black uppercase tracking-[0.22em] sm:text-xs"
        style={{ color: accent }}
      >
        <span className="h-px w-8" style={{ backgroundColor: accent }} />
        <span>{label}</span>
      </div>

      {meta ? (
        <span
          className={cn(
            'hidden text-[0.65rem] font-black uppercase tracking-[0.18em] text-white/24 sm:block',
            metaClassName,
          )}
        >
          {meta}
        </span>
      ) : null}
    </div>
  )
}

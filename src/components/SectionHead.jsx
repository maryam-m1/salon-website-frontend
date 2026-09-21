import Reveal from './Reveal'
import { cn } from '../lib/utils'

export function Ornament({ className }) {
  return (
    <div className={cn('flex items-center justify-center gap-3 text-gold', className)} aria-hidden="true">
      <span className="h-px w-14 bg-current opacity-60" />
      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 0 14 7 7 14 0 7Z" fill="currentColor" /></svg>
      <span className="h-px w-14 bg-current opacity-60" />
    </div>
  )
}

export default function SectionHead({ title, sub, light = false, align = 'center' }) {
  return (
    <Reveal className={cn('mb-10 sm:mb-14', align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl')}>
      <Ornament className={cn('mb-5', align !== 'center' && 'justify-start')} />
      <h2 className={cn('font-display h-section tight-ur', light ? 'text-ivory' : 'text-maroon')}>{title}</h2>
      {sub && <p className={cn('lead mt-4', light ? 'text-ivory/75' : 'text-ink/70')}>{sub}</p>}
    </Reveal>
  )
}

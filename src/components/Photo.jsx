import { useState } from 'react'
import { cn } from '../lib/utils'

const tones = {
  maroon: ['#7A1F3D', '#3a0a18'],
  gold: ['#E1C577', '#9a7626'],
  blush: ['#F8E4E1', '#E5B9B6'],
  rose: ['#D98A94', '#7A1F3D'],
  olive: ['#8DA33A', '#2E3B1B'],
  ivory: ['#FBF6EE', '#E9DCC4'],
  faded: ['#D9D2C8', '#A9A196'],
}

function Lotus({ stroke, fill }) {
  const rot = [-64, -32, 0, 32, 64]
  return (
    <svg viewBox="0 0 100 100" className="w-2/5 max-w-[9rem]" aria-hidden="true">
      <g transform="translate(50 84)" fill={fill} stroke={stroke} strokeWidth="1.1" strokeLinejoin="round">
        {rot.map((r) => (
          <path key={r} transform={`rotate(${r})`} d="M0 0C15-16 15-46 0-68C-15-46-15-16 0 0Z" />
        ))}
      </g>
    </svg>
  )
}

/**
 * Photo: shows /images/<name>.jpg if the file exists, otherwise an elegant placeholder.
 * Bas apni photo public/images/ mein isi naam se rakh do (e.g. hero.jpg).
 */
export default function Photo({ name, alt = '', tone = 'maroon', className, mehrab = false, outline = false, label, eager = false, style }) {
  const [ok, setOk] = useState(false)
  const [a, b] = tones[tone] || tones.maroon
  const light = ['gold', 'blush', 'ivory', 'faded'].includes(tone)
  const stroke = light ? 'rgba(74,14,31,.55)' : 'rgba(201,162,75,.85)'
  return (
    <div
      className={cn('relative overflow-hidden', mehrab && 'mehrab', className)}
      style={{ ...style, background: `linear-gradient(160deg, ${a}, ${b})` }}
      role="img"
      aria-label={alt}
    >
      <div className="jaali absolute inset-0 opacity-25" />
      <div className="absolute inset-0 grid place-items-center">
        <Lotus stroke={stroke} fill={light ? 'rgba(74,14,31,.08)' : 'rgba(201,162,75,.16)'} />
      </div>
      {!ok && (
        <span
          className="absolute inset-x-0 bottom-3 text-center text-[.68rem] px-3 ls"
          style={{ color: light ? 'rgba(74,14,31,.7)' : 'rgba(251,246,238,.75)', direction: 'ltr' }}
        >
          {label || `add photo: /images/${name}.jpg`}
        </span>
      )}
      <img
        src={`/images/${name}.jpg`}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setOk(true)}
        onError={() => setOk(false)}
        className={cn('absolute inset-0 h-full w-full object-cover transition-opacity duration-500', ok ? 'opacity-100' : 'opacity-0')}
      />
      {outline && (
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M1 100V42C1 20 35 12 50 1C65 12 99 20 99 42V100" fill="none" stroke="#C9A24B" strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
        </svg>
      )}
    </div>
  )
}

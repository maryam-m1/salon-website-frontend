import { useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { beforeAfter } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import Photo from './Photo'
import SectionHead from './SectionHead'

function Slider({ item, i }) {
  const { t } = useLang()
  const box = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)
  const setFrom = (e) => {
    const r = box.current.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)))
  }
  return (
    <figure>
      <div
        ref={box}
        dir="ltr"
        className="relative aspect-[4/5] w-full touch-pan-y select-none overflow-hidden rounded-[1.75rem] border border-gold/60 shadow-[0_30px_60px_-34px_rgba(74,14,31,.6)]"
        onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); setFrom(e) }}
        onPointerMove={(e) => dragging.current && setFrom(e)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <Photo name={`after-${i + 1}`} alt="After" tone="rose" className="absolute inset-0 h-full w-full" label={`add photo: /images/after-${i + 1}.jpg`} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Photo name={`before-${i + 1}`} alt="Before" tone="faded" className="absolute inset-0 h-full w-full" label={`add photo: /images/before-${i + 1}.jpg`} />
        </div>
        <span className="absolute start-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white">{t({ en: 'Before', ur: 'پہلے' })}</span>
        <span className="absolute end-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-medium text-maroon">{t({ en: 'After', ur: 'بعد' })}</span>
        <div className="absolute inset-y-0 w-px bg-gold" style={{ left: `${pos}%` }}>
          <button
            role="slider" aria-label="Before and after" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pos)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5))
              if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5))
            }}
            className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-gold bg-maroon text-gold shadow-xl"
          >
            <MoveHorizontal size={20} />
          </button>
        </div>
      </div>
      <figcaption className="tight-ur mt-4 text-center font-display text-2xl text-maroon">{t(item.label)}</figcaption>
    </figure>
  )
}

export default function BeforeAfter() {
  const { t } = useLang()
  return (
    <section className="section-pad bg-ivory">
      <div className="wrap">
        <SectionHead
          title={t({ en: 'Before and after', ur: 'پہلے اور بعد' })}
          sub={t({ en: 'Drag the handle to see the transformation.', ur: 'تبدیلی دیکھنے کے لیے ہینڈل کو کھینچیں۔' })}
        />
        <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-2">
          {beforeAfter.map((b, i) => <Slider key={b.id} item={b} i={i} />)}
        </div>
      </div>
    </section>
  )
}

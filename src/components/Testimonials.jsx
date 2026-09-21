import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { reviews } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import SectionHead from './SectionHead'

export default function Testimonials() {
  const { t } = useLang()
  const track = useRef(null)
  const by = (d) => track.current?.scrollBy({ left: d * Math.min(420, track.current.clientWidth * 0.85), behavior: 'smooth' })
  return (
    <section className="section-pad overflow-hidden bg-maroon text-ivory">
      <div className="wrap">
        <SectionHead light title={t({ en: 'Words from our brides', ur: 'ہماری دلہنوں کی زبانی' })} />
      </div>
      <div className="relative mx-auto max-w-[90rem]">
        <div ref={track} dir="ltr" className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-[max(1.25rem,calc((100vw-76rem)/2))] [scrollbar-width:none]" tabIndex={0} aria-label="Reviews">
          {reviews.map((r, i) => (
            <figure key={i} dir={r.lang === 'ur' ? 'rtl' : 'ltr'} className="hair-gold relative w-[85%] shrink-0 snap-center rounded-[1.75rem] bg-white/[.06] p-7 sm:w-[26rem] sm:snap-start">
              <span className="font-display absolute end-6 top-2 text-7xl leading-none text-gold/40" aria-hidden="true">”</span>
              <div className="flex gap-1 text-gold" aria-label={`${r.stars} stars`}>
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={17} fill={k < r.stars ? 'currentColor' : 'none'} />)}
              </div>
              <blockquote className={`mt-4 leading-relaxed text-ivory/90 ${r.lang === 'ur' ? 'font-[family-name:var(--font-urdu)] leading-[2.1]' : 'font-display text-[1.3rem]'}`}>{r.text}</blockquote>
              <figcaption className="mt-5 text-sm text-ivory/65">
                <span className="text-ivory">{r.name}</span> · {r.where}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-2 flex justify-center gap-3" dir="ltr">
          <button onClick={() => by(-1)} aria-label="Previous review" className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 hover:bg-gold hover:text-maroon"><ChevronLeft size={22} /></button>
          <button onClick={() => by(1)} aria-label="Next review" className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 hover:bg-gold hover:text-maroon"><ChevronRight size={22} /></button>
        </div>
      </div>
    </section>
  )
}

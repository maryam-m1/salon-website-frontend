import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { gallery, galleryFilters } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import Photo from './Photo'
import SectionHead from './SectionHead'

export default function Gallery() {
  const { t } = useLang()
  const [f, setF] = useState('all')
  const [open, setOpen] = useState(null)
  const list = gallery.filter((g) => f === 'all' || g.cat === f)

  const move = useCallback((d) => setOpen((o) => (o === null ? o : (o + d + list.length) % list.length)), [list.length])
  useEffect(() => {
    if (open === null) return
    const k = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') move(1)
      if (e.key === 'ArrowLeft') move(-1)
    }
    document.body.style.overflow = 'hidden'
    addEventListener('keydown', k)
    return () => { removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [open, move])

  const cur = open !== null ? list[open] : null
  return (
    <section id="gallery" className="section-pad bg-blush/40">
      <div className="wrap">
        <SectionHead title={t({ en: 'Our work', ur: 'ہمارا کام' })} sub={t({ en: 'A few of the brides and guests we have had the joy of styling.', ur: 'ان دلہنوں اور مہمانوں کی چند جھلکیاں جنہیں تیار کرنا ہمارے لیے خوشی تھی۔' })} />
        <div className="-mx-5 mb-9 flex gap-2 overflow-x-auto px-5 pb-2 sm:justify-center [scrollbar-width:none]" role="tablist">
          {galleryFilters.map((x) => (
            <button key={x.id} role="tab" aria-selected={f === x.id} onClick={() => setF(x.id)}
              className={`min-h-[2.75rem] shrink-0 rounded-full border border-gold/50 px-5 text-sm font-medium transition-colors ${f === x.id ? 'bg-maroon text-ivory' : 'bg-ivory text-maroon hover:bg-white'}`}>
              {t(x.label)}
            </button>
          ))}
        </div>
        <motion.ul layout className="columns-2 gap-3 sm:gap-5 lg:columns-3 [&>li]:mb-3 sm:[&>li]:mb-5">
          <AnimatePresence mode="popLayout">
            {list.map((g, i) => (
              <motion.li key={g.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }} className="break-inside-avoid">
                <button onClick={() => setOpen(i)} className="group block w-full overflow-hidden rounded-2xl border border-gold/40" aria-label={t(g.alt)}>
                  <div className="transition-transform duration-700 group-hover:scale-[1.04]">
                    <Photo name={g.id} alt={t(g.alt)} tone={g.tone} className="w-full" style={{ aspectRatio: `1 / ${g.ratio}` }} />
                  </div>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <AnimatePresence>
        {cur && (
          <motion.div
            role="dialog" aria-modal="true" aria-label={t(cur.alt)}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-ink/90 p-4 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          >
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute end-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white"><X size={22} /></button>
            <button onClick={(e) => { e.stopPropagation(); move(-1) }} aria-label="Previous" className="absolute start-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white sm:grid"><ChevronLeft size={24} className="rtl:rotate-180" /></button>
            <button onClick={(e) => { e.stopPropagation(); move(1) }} aria-label="Next" className="absolute end-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white sm:grid"><ChevronRight size={24} className="rtl:rotate-180" /></button>
            <motion.div
              key={cur.id}
              drag="x" dragElastic={0.25} dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, i) => { if (i.offset.x < -70) move(1); else if (i.offset.x > 70) move(-1) }}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[min(92vw,34rem)]"
            >
              <Photo name={cur.id} alt={t(cur.alt)} tone={cur.tone} className="aspect-[4/5] max-h-[78dvh] w-full rounded-3xl" />
              <p className="tight-ur mt-3 text-center text-sm text-white/80">{t(cur.alt)}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

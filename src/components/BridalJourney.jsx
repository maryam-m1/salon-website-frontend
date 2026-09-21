import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { MessageCircle } from 'lucide-react'
import { journey, packages, site } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import { money, waLink } from '../lib/utils'
import Photo from './Photo'

const tones = { mehndi: 'olive', barat: 'maroon', walima: 'blush' }

export default function BridalJourney() {
  const { t, isUr } = useLang()
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => setActive(Math.min(journey.length - 1, Math.max(0, Math.floor(v * journey.length * 0.999)))))

  const jump = (i) => {
    const el = ref.current
    const room = el.offsetHeight - (window.innerHeight - 64)
    window.scrollTo({ top: el.offsetTop - 64 + ((i + 0.5) / journey.length) * room, behavior: 'smooth' })
  }
  const cur = journey[active]
  const pkg = packages.find((p) => p.id === cur.pkg)
  const txt = cur.dark ? 'text-ivory' : 'text-ink'

  return (
    <section id="journey" ref={ref} className="relative" style={{ height: `${journey.length * 100 + 60}dvh` }} aria-label="Bridal journey">
      <motion.div
        className={`sticky top-16 h-[calc(100dvh-4rem)] overflow-hidden ${txt}`}
        animate={{ backgroundColor: cur.bg }}
        transition={{ duration: 0.8 }}
      >
        <div className="jaali absolute inset-0 opacity-[.08]" aria-hidden="true" />
        <div className="wrap relative grid h-full grid-rows-[auto_minmax(0,1fr)_auto] gap-2 pt-4 pb-[4.5rem] md:py-8 lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:gap-10">
          {/* heading + dots (mobile: on top) */}
          <div className="lg:hidden text-center">
            <h2 className="font-display tight-ur text-[clamp(1.7rem,7vw,2.4rem)] leading-tight">{t({ en: 'The bridal journey', ur: 'دلہن کا سفر' })}</h2>
          </div>

          {/* 3D depth stack */}
          <div className="relative order-2 min-h-0 lg:order-2 lg:h-full lg:self-stretch" style={{ perspective: '1300px' }} aria-hidden="true">
            <div className="absolute inset-0 grid place-items-center" style={{ transformStyle: 'preserve-3d' }}>
              {journey.map((j, i) => {
                const off = i - active
                const a = Math.abs(off)
                return (
                  <div
                    key={j.id}
                    className="absolute h-[92%] max-h-[34rem] aspect-[3/4] max-w-[74%] lg:h-[80%] lg:max-w-none"
                    style={{
                      transform: `translate3d(${off * (isUr ? -1 : 1) * 34}%, 0, ${-a * 190}px) rotateY(${off * (isUr ? 1 : -1) * 26}deg) scale(${1 - a * 0.06})`,
                      opacity: a > 1 ? 0 : 1 - a * 0.5,
                      transition: 'transform .9s cubic-bezier(.2,.8,.2,1), opacity .7s',
                      zIndex: 10 - a,
                      filter: a ? 'saturate(.7) brightness(.8)' : 'none',
                    }}
                  >
                    <Photo name={`look-${j.id}`} alt={t(j.title)} tone={tones[j.id]} mehrab outline className="h-full w-full" />
                  </div>
                )
              })}
            </div>
          </div>

          {/* text */}
          <div className="order-3 text-center lg:order-1 lg:text-start">
            <h2 className="font-display tight-ur hidden text-[clamp(2rem,4vw,3.4rem)] leading-tight opacity-80 lg:block">{t({ en: 'The bridal journey', ur: 'دلہن کا سفر' })}</h2>
            <AnimatePresence mode="wait">
              <motion.div key={cur.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
                <div className="mt-1 flex items-center justify-center gap-3 lg:mt-6 lg:justify-start">
                  <span className="font-display text-[clamp(2.4rem,9vw,4.8rem)] leading-none tight-ur" style={{ color: cur.accent }}>{t(cur.title)}</span>
                  <span className="flex gap-1.5" aria-hidden="true">
                    {cur.colors.map((c) => <span key={c} className="h-5 w-5 rounded-full border border-white/40" style={{ background: c }} />)}
                  </span>
                </div>
                <p className="tight-ur mt-1 text-sm opacity-75">{t(cur.mood)}</p>
                <p className="tight-ur mx-auto mt-3 max-w-md text-[.98rem] leading-relaxed opacity-90 max-lg:line-clamp-4 lg:mx-0 lg:mt-4 lg:text-[1.05rem]">{t(cur.desc)}</p>
                <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row lg:mt-6 lg:justify-start justify-center">
                  <a
                    href={waLink(`Assalam o Alaikum, I would like to book the ${cur.title.en} look (${pkg.name.en} package) at ${site.brand.en}.`)}
                    target="_blank" rel="noreferrer"
                    className="btn-gold !min-h-[3rem] !px-6 !text-[.95rem]"
                  >
                    <MessageCircle size={18} /> {t({ en: 'Book this look', ur: 'یہ روپ بک کریں' })}
                  </a>
                  <span className="tight-ur text-sm opacity-80">{t(pkg.name)} · <span dir="ltr">{money(pkg.price)}</span></span>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-4 flex items-center justify-center gap-3 lg:mt-7 lg:justify-start" role="tablist" aria-label="Choose a look">
              {journey.map((j, i) => (
                <button
                  key={j.id} role="tab" aria-selected={i === active} onClick={() => jump(i)}
                  className="grid h-11 place-items-center px-1" aria-label={j.title.en}
                >
                  <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === active ? 'w-12' : 'w-6 opacity-40'}`} style={{ background: cur.accent }} />
                </button>
              ))}
              <span className="tight-ur text-xs opacity-60 ms-2">{t({ en: 'Scroll to change look', ur: 'روپ بدلنے کے لیے اسکرول کریں' })}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MessageCircle, RotateCw } from 'lucide-react'
import { serviceTabs, services } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import { useInView } from '../hooks/useDevice'
import { money, waLink } from '../lib/utils'
import SectionHead from './SectionHead'

function Marquee() {
  const { t } = useLang()
  const ref = useRef(null)
  const vis = useInView(ref)
  const names = serviceTabs.map((s) => t(s.label))
  const row = [...names, ...names, ...names, ...names]
  return (
    <div ref={ref} className="overflow-hidden border-y border-gold/40 bg-maroon py-4 text-ivory" dir="ltr" aria-hidden="true">
      <div className={`marquee ${vis ? '' : 'paused'}`}>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((n, i) => (
              <span key={i} className="flex items-center">
                <span className="font-display tight-ur px-6 text-3xl italic sm:px-9 sm:text-4xl">{n}</span>
                <svg width="12" height="12" viewBox="0 0 14 14" className="text-gold"><path d="M7 0 14 7 7 14 0 7Z" fill="currentColor" /></svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function FlipCard({ s, i }) {
  const { t } = useLang()
  const [flipped, setFlipped] = useState(false)
  const toggle = () => {
    if (window.matchMedia('(hover: hover)').matches) return
    setFlipped((f) => !f)
  }
  return (
    <motion.li
      initial={{ opacity: 0, rotateX: -35, y: 30 }}
      animate={{ opacity: 1, rotateX: 0, y: 0 }}
      transition={{ delay: i * 0.09, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ transformPerspective: 900 }}
      className={`flip h-64 ${flipped ? 'is-flipped' : ''}`}
    >
      <div className="flip-inner">
        <button
          onClick={toggle}
          className="flip-face hair-gold flex flex-col justify-between rounded-3xl bg-white/70 p-6 text-start shadow-[0_18px_40px_-24px_rgba(74,14,31,.5)]"
          aria-label={`${t(s.name)}: ${t({ en: 'show price', ur: 'قیمت دیکھیں' })}`}
        >
          <div className="jaali absolute inset-0 -z-10 rounded-3xl opacity-[.12]" />
          <div>
            <h3 className="font-display h-card tight-ur text-maroon">{t(s.name)}</h3>
            <p className="tight-ur mt-3 text-[.95rem] leading-relaxed text-ink/70">{t(s.desc)}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm text-burgundy">
            <RotateCw size={15} /> {t({ en: 'See price', ur: 'قیمت دیکھیں' })}
          </span>
        </button>
        <div className="flip-face flip-back flex flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-br from-maroon to-burgundy p-6 text-center text-ivory">
          <div className="jaali absolute inset-0 rounded-3xl opacity-[.1]" />
          <div className="relative">
            <div className="text-sm text-ivory/70">{t({ en: 'Starting from', ur: 'شروع' })}</div>
            <div className="font-display foil text-4xl font-semibold" dir="ltr">{money(s.price)}</div>
          </div>
          <a
            href={waLink(`Assalam o Alaikum, I would like to book: ${s.name.en}.`)}
            target="_blank" rel="noreferrer"
            className="btn-gold relative !min-h-[2.9rem] !px-5 !text-sm"
          >
            <MessageCircle size={17} /> {t({ en: 'Book on WhatsApp', ur: 'واٹس ایپ پر بک کریں' })}
          </a>
        </div>
      </div>
    </motion.li>
  )
}

export default function Services() {
  const { t } = useLang()
  const [tab, setTab] = useState('bridal')
  return (
    <section id="services" className="scroll-mt-16">
      <Marquee />
      <div className="section-pad wrap">
        <SectionHead
          title={t({ en: 'Everything for your best days', ur: 'آپ کے ہر خاص دن کے لیے' })}
          sub={t({ en: 'Choose a category. Tap or hover on a card to see the price.', ur: 'کوئی زمرہ چنیں۔ قیمت دیکھنے کے لیے کارڈ پر ٹیپ کریں۔' })}
        />
        <div role="tablist" aria-label="Service categories" className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:justify-center [scrollbar-width:none]">
          {serviceTabs.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={tab === s.id}
              onClick={() => setTab(s.id)}
              className={`relative min-h-[2.9rem] shrink-0 rounded-full px-6 text-[.98rem] font-medium transition-colors ${tab === s.id ? 'text-ivory' : 'text-maroon hover:bg-blush/60'} border border-gold/50`}
            >
              {tab === s.id && <motion.span layoutId="svctab" className="absolute inset-0 rounded-full bg-maroon" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
              <span className="relative">{t(s.label)}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.ul key={tab} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services[tab].map((s, i) => <FlipCard key={s.name.en} s={s} i={i} />)}
          </motion.ul>
        </AnimatePresence>
        <p className="tight-ur mt-8 text-center text-sm text-ink/60">
          {t({ en: 'Prices are a guide. Send your date and look on WhatsApp for an exact quote.', ur: 'قیمتیں رہنمائی کے لیے ہیں۔ صحیح قیمت کے لیے واٹس ایپ پر اپنی تاریخ اور روپ بھیجیں۔' })}
        </p>
      </div>
    </section>
  )
}

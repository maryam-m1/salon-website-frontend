import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'
import { site } from '../data/siteConfig'
import { useLang } from '../context/LangContext'

const left = () => {
  const ms = new Date(site.offer.ends).getTime() - Date.now()
  if (ms <= 0) return null
  return {
    d: Math.floor(ms / 864e5),
    h: Math.floor((ms % 864e5) / 36e5),
    m: Math.floor((ms % 36e5) / 6e4),
  }
}

export default function OfferBanner() {
  const { t, lang } = useLang()
  const [open, setOpen] = useState(true)
  const [c, setC] = useState(left)
  useEffect(() => {
    const id = setInterval(() => setC(left()), 30000)
    return () => clearInterval(id)
  }, [])
  if (!c) return null
  const labels = lang === 'ur' ? { d: 'دن', h: 'گھنٹے', m: 'منٹ' } : { d: 'd', h: 'h', m: 'm' }
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          exit={{ height: 0, opacity: 0 }}
          className="relative overflow-hidden bg-gradient-to-r from-burgundy via-maroon to-burgundy text-ivory"
        >
          <div className="wrap flex items-center gap-3 py-2 pe-10 text-[.82rem] sm:justify-center sm:text-sm">
            <p className="tight-ur flex-1 leading-snug sm:flex-none">{t(site.offer.text)}</p>
            <div className="hidden shrink-0 items-center gap-1.5 font-medium text-gold sm:flex" dir="ltr" aria-label="countdown">
              {['d', 'h', 'm'].map((k) => (
                <span key={k} className="rounded bg-black/25 px-2 py-0.5 tabular-nums">{c[k]}{labels[k]}</span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Dismiss offer"
            className="absolute end-1 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full text-ivory/80 hover:text-ivory"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

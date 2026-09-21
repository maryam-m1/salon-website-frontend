import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { nav, site } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import { scrollToId, waLink } from '../lib/utils'
import LangToggle from './LangToggle'

export default function Navbar() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (id) => {
    setOpen(false)
    setTimeout(() => scrollToId(id), open ? 250 : 0)
  }

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-maroon/90 text-ivory backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }) }} className="flex items-baseline gap-2">
          <span className="font-display foil text-3xl font-semibold leading-none">{t(site.brand)}</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); go(n.id) }} className="text-sm text-ivory/80 transition-colors hover:text-gold">
              {t(n.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle className="hidden sm:inline-flex" />
          <a href={waLink(`Assalam o Alaikum, I would like to book at ${site.brand.en}.`)} target="_blank" rel="noreferrer" className="btn-gold !min-h-[2.75rem] !px-5 !text-sm max-sm:!hidden">
            <MessageCircle size={17} /> {t({ en: 'Book now', ur: 'بکنگ کریں' })}
          </a>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 lg:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: 'circle(0% at 92% 4%)' }}
            animate={{ clipPath: 'circle(150% at 92% 4%)' }}
            exit={{ clipPath: 'circle(0% at 92% 4%)' }}
            transition={{ duration: 0.6, ease: [0.7, 0, 0.2, 1] }}
            className="fixed inset-0 z-[60] flex h-dvh flex-col bg-maroon text-ivory px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4"
          >
            <div className="jaali pointer-events-none absolute inset-0 opacity-[.06]" />
            <div className="relative flex items-center justify-between">
              <span className="font-display foil text-3xl font-semibold">{t(site.brand)}</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full border border-gold/40">
                <X size={20} />
              </button>
            </div>
            <nav className="relative mt-8 flex flex-1 flex-col justify-center gap-1" aria-label="Mobile">
              {nav.map((n, i) => (
                <motion.a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={(e) => { e.preventDefault(); go(n.id) }}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 + i * 0.06 }}
                  className="font-display tight-ur border-b border-gold/15 py-3 text-[2.4rem] leading-tight text-ivory"
                >
                  {t(n.label)}
                </motion.a>
              ))}
            </nav>
            <div className="relative flex flex-col gap-4">
              <LangToggle className="inline-flex self-start" />
              <a href={waLink(`Assalam o Alaikum, I would like to book at ${site.brand.en}.`)} target="_blank" rel="noreferrer" className="btn-gold w-full">
                <MessageCircle size={19} /> {t({ en: 'Book on WhatsApp', ur: 'واٹس ایپ پر بکنگ کریں' })}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

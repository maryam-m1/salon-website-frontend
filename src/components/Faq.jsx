import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { faqs } from '../data/siteConfig'
import { useLang } from '../context/LangContext'

export default function Faq() {
  const { t } = useLang()
  const [open, setOpen] = useState(0)
  return (
    <ul className="divide-y divide-gold/30 border-y border-gold/40">
      {faqs.map((f, i) => (
        <li key={i}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex min-h-[3.5rem] w-full items-center justify-between gap-4 py-4 text-start">
            <span className="font-display tight-ur text-[1.35rem] font-medium leading-snug text-maroon">{t(f.q)}</span>
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/60 text-burgundy"><Plus size={17} /></motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden">
                <p className="tight-ur pb-5 pe-12 leading-relaxed text-ink/75">{t(f.a)}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  )
}

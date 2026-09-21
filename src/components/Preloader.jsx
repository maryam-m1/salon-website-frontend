import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { site } from '../data/siteConfig'
import { useLang } from '../context/LangContext'

export default function Preloader() {
  const { t } = useLang()
  const [show, setShow] = useState(() => {
    try { return !sessionStorage.getItem('zn-seen') } catch { return true }
  })
  useEffect(() => {
    if (!show) return
    const id = setTimeout(() => {
      setShow(false)
      try { sessionStorage.setItem('zn-seen', '1') } catch { /* ignore */ }
    }, 2100)
    return () => clearTimeout(id)
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="pre"
          className="fixed inset-0 z-[100] grid place-items-center bg-maroon"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
          style={{ clipPath: 'inset(0 0 0% 0)' }}
        >
          <div className="jaali absolute inset-0 opacity-[.07]" />
          <div className="relative flex flex-col items-center gap-6 text-center">
            <svg width="96" height="120" viewBox="0 0 96 120" fill="none" aria-hidden="true">
              <motion.path
                d="M4 118V52C4 28 36 20 48 3C60 20 92 28 92 52V118"
                stroke="#C9A24B" strokeWidth="1.6"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
              <motion.path
                d="M48 40C60 54 66 66 66 78c0 12-8 20-18 20S30 90 30 78c0-12 6-24 18-38Z"
                fill="#C9A24B"
                initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.7 }} style={{ transformOrigin: '48px 78px' }}
              />
            </svg>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }}>
              <div className="font-display foil text-5xl font-medium">{t(site.brand)}</div>
              <div className="mt-2 text-sm text-ivory/70 ls">{t(site.descriptor)}</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

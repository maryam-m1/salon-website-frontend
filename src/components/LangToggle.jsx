import { motion } from 'motion/react'
import { useLang } from '../context/LangContext'

export default function LangToggle({ className = '' }) {
  const { lang, setLang } = useLang()
  const opts = [['en', 'EN'], ['ur', 'اردو']]
  return (
    <div className={`relative rounded-full border border-gold/50 p-1 ${className}`} dir="ltr" role="group" aria-label="Language">
      {opts.map(([k, label]) => (
        <button
          key={k}
          onClick={() => setLang(k)}
          aria-pressed={lang === k}
          className={`relative z-10 min-h-[2.5rem] min-w-[3.1rem] rounded-full px-3 text-sm font-medium transition-colors ${lang === k ? 'text-maroon' : 'text-ivory/80'}`}
          style={k === 'ur' ? { fontFamily: 'var(--font-urdu)', lineHeight: 1.4 } : undefined}
        >
          {lang === k && (
            <motion.span layoutId="langpill" className="absolute inset-0 -z-10 rounded-full bg-gold" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
          )}
          {label}
        </button>
      ))}
    </div>
  )
}

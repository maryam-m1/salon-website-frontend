import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { flushSync } from 'react-dom'

const Ctx = createContext(null)
export const useLang = () => useContext(Ctx)

const apply = (lang) => {
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem('zn-lang') || 'en' } catch { return 'en' }
  })

  useEffect(() => {
    apply(lang)
    try { localStorage.setItem('zn-lang', lang) } catch { /* ignore */ }
  }, [lang])

  const setLang = useCallback(
    (next) => {
      if (next === lang) return
      const run = () => {
        apply(next)
        flushSync(() => setLangState(next))
      }
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (document.startViewTransition && !reduced) document.startViewTransition(run)
      else run()
    },
    [lang],
  )

  const t = useCallback(
    (v) => (v == null ? '' : typeof v === 'string' || typeof v === 'number' ? v : v[lang] ?? v.en),
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, t, isUr: lang === 'ur' }), [lang, setLang, t])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

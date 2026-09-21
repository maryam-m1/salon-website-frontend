import { nav, site } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import { scrollToId } from '../lib/utils'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="relative bg-ink text-ivory/80 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-14 md:pb-10">
      <div className="jaali absolute inset-0 opacity-[.04]" aria-hidden="true" />
      <div className="wrap relative flex flex-col items-center gap-6 text-center">
        <div>
          <div className="font-display foil text-5xl font-semibold">{t(site.brand)}</div>
          <div className="tight-ur mt-1 text-sm text-ivory/60">{t(site.descriptor)} · {t(site.area)}</div>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1" aria-label="Footer">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); scrollToId(n.id) }} className="inline-flex min-h-[2.75rem] items-center hover:text-gold">{t(n.label)}</a>
          ))}
        </nav>
        <p className="tight-ur max-w-md text-sm text-ivory/55">{t(site.tagline)}</p>
        <p className="text-xs text-ivory/40">© {new Date().getFullYear()} {site.brand.en}. All rights reserved.</p>
      </div>
    </footer>
  )
}

import { Gem, Heart, Lock, ShieldCheck, Sparkles } from 'lucide-react'
import { trust } from '../data/siteConfig'
import { useLang } from '../context/LangContext'

const icons = { lock: Lock, sparkles: Sparkles, shield: ShieldCheck, gem: Gem, heart: Heart }

export default function TrustStrip() {
  const { t } = useLang()
  return (
    <section aria-label="Why choose us" className="border-y border-gold/40 bg-ivory">
      <ul className="wrap grid grid-cols-2 gap-x-4 gap-y-6 py-8 lg:grid-cols-5">
        {trust.map((it, i) => {
          const Icon = icons[it.icon]
          return (
            <li key={i} className={`flex flex-col items-center gap-3 text-center ${i === 4 ? 'col-span-2 lg:col-span-1' : ''}`}>
              <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/60 text-burgundy"><Icon size={21} strokeWidth={1.5} /></span>
              <span className="tight-ur max-w-[15ch] text-sm leading-snug text-ink/80 sm:max-w-[20ch]">{t(it)}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

import { CalendarDays, MessageCircle, Phone } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { scrollToId, telLink, waLink } from '../lib/utils'

export default function MobileBar() {
  const { t } = useLang()
  const base = 'flex min-h-[3.25rem] flex-1 flex-col items-center justify-center gap-0.5 text-[.72rem] font-medium'
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-maroon/95 text-ivory backdrop-blur-md md:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-lg items-stretch">
        <a href={telLink()} className={base}><Phone size={19} />{t({ en: 'Call', ur: 'کال' })}</a>
        <a href={waLink('Assalam o Alaikum, I have a question.')} target="_blank" rel="noreferrer" className={`${base} bg-gold text-maroon`}>
          <MessageCircle size={19} />WhatsApp
        </a>
        <button onClick={() => scrollToId('booking')} className={base}><CalendarDays size={19} />{t({ en: 'Book', ur: 'بکنگ' })}</button>
      </div>
    </div>
  )
}

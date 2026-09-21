import { MessageCircle } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { waLink } from '../lib/utils'

export default function WhatsAppFloat() {
  const { t } = useLang()
  return (
    <a
      href={waLink('Assalam o Alaikum, I would like to ask about a booking.')}
      target="_blank" rel="noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-6 end-6 z-40 hidden items-center gap-3 rounded-full bg-[#1FA855] p-4 text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,.5)] transition-transform hover:scale-105 md:flex"
    >
      <MessageCircle size={26} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:me-1 group-hover:max-w-[10rem]">
        {t({ en: 'Chat with us', ur: 'ہم سے بات کریں' })}
      </span>
    </a>
  )
}

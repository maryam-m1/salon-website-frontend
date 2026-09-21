import { useEffect, useState } from 'react'
import { site } from '../data/siteConfig'
import { useLang } from '../context/LangContext'

const isOpen = () => {
  const h = Number(new Intl.DateTimeFormat('en-GB', { hour: 'numeric', hour12: false, timeZone: site.hours.tz }).format(new Date())) % 24
  return h >= site.hours.open && h < site.hours.close
}

export default function OpenBadge({ className = '' }) {
  const { t } = useLang()
  const [open, setOpen] = useState(isOpen)
  useEffect(() => {
    const id = setInterval(() => setOpen(isOpen()), 60000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/25 px-3.5 py-1.5 text-sm backdrop-blur ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        {open && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${open ? 'bg-emerald-400' : 'bg-rose-400'}`} />
      </span>
      {open ? t({ en: 'Open now', ur: 'ابھی کھلا ہے' }) : t({ en: 'Closed now', ur: 'ابھی بند ہے' })}
    </span>
  )
}

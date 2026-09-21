import { Camera, Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import { telLink, waLink } from '../lib/utils'
import Faq from './Faq'
import SectionHead from './SectionHead'

export default function Contact() {
  const { t } = useLang()
  const { lat, lng } = site.map
  const d = 0.006
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - d}%2C${lat - d}%2C${lng + d}%2C${lat + d}&layer=mapnik&marker=${lat}%2C${lng}`
  const row = 'flex items-start gap-4'
  const ic = 'grid h-11 w-11 shrink-0 place-items-center rounded-full bg-maroon text-gold'
  return (
    <section id="contact" className="section-pad bg-blush/40">
      <div className="wrap grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHead align="start" title={t({ en: 'Questions, answered', ur: 'آپ کے سوالوں کے جواب' })} />
          <Faq />
        </div>
        <div>
          <SectionHead align="start" title={t({ en: 'Visit or message us', ur: 'ملیں یا پیغام بھیجیں' })} />
          <ul className="space-y-5">
            <li className={row}><span className={ic}><MapPin size={20} /></span><div><div className="font-medium text-maroon">{t({ en: 'Studio', ur: 'اسٹوڈیو' })}</div><p className="tight-ur text-ink/75">{t(site.address)}</p></div></li>
            <li className={row}><span className={ic}><Clock size={20} /></span><div><div className="font-medium text-maroon">{t({ en: 'Hours', ur: 'اوقات' })}</div><p className="tight-ur text-ink/75">{t(site.hours.label)}</p></div></li>
            <li className={row}><span className={ic}><Phone size={20} /></span><div><div className="font-medium text-maroon">{t({ en: 'Call', ur: 'کال' })}</div><a href={telLink()} dir="ltr" className="inline-block min-h-[2.75rem] py-2 text-ink/75 underline decoration-gold underline-offset-4">{site.displayPhone}</a></div></li>
            <li className={row}><span className={ic}><Camera size={20} /></span><div><div className="font-medium text-maroon">Instagram</div><a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noreferrer" dir="ltr" className="inline-block min-h-[2.75rem] py-2 text-ink/75 underline decoration-gold underline-offset-4">@{site.instagram}</a></div></li>
          </ul>
          <a href={waLink('Assalam o Alaikum, I have a question.')} target="_blank" rel="noreferrer" className="btn-gold mt-6 w-full sm:w-auto">
            <MessageCircle size={19} /> {t({ en: 'Chat on WhatsApp', ur: 'واٹس ایپ پر بات کریں' })}
          </a>
          <div className="hair-gold mt-8 overflow-hidden rounded-3xl" dir="ltr">
            <iframe title="Map" src={src} loading="lazy" className="h-64 w-full border-0 sm:h-72" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { packages, serviceTabs, services, site, timeSlots } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import { waLink } from '../lib/utils'
import SectionHead from './SectionHead'

const field = 'w-full min-h-[3.25rem] rounded-2xl border border-gold/50 bg-white px-4 py-3 text-ink outline-none transition focus:border-burgundy focus:ring-2 focus:ring-gold/40'
const today = () => new Date().toISOString().slice(0, 10)

export default function Booking() {
  const { t, lang } = useLang()
  const [f, setF] = useState({ name: '', phone: '', service: '', date: '', slot: '', home: false, notes: '' })
  const [err, setErr] = useState({})
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (f.name.trim().length < 2) er.name = t({ en: 'Please enter your name.', ur: 'براہ کرم اپنا نام لکھیں۔' })
    if (f.phone.replace(/\D/g, '').length < 10) er.phone = t({ en: 'Enter a valid phone number.', ur: 'درست فون نمبر لکھیں۔' })
    if (!f.service) er.service = t({ en: 'Choose a service.', ur: 'سروس منتخب کریں۔' })
    setErr(er)
    if (Object.keys(er).length) return
    const msg = [
      `Assalam o Alaikum, I would like to book at ${site.brand.en}.`,
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      `Service: ${f.service}`,
      f.date && `Date: ${f.date}`,
      f.slot && `Time: ${f.slot}`,
      f.home && 'Home service: Yes',
      f.notes && `Notes: ${f.notes}`,
    ].filter(Boolean).join('\n')
    window.open(waLink(msg), '_blank', 'noopener')
  }

  return (
    <section id="booking" className="section-pad relative bg-ivory">
      <div className="wrap">
        <SectionHead title={t({ en: 'Book your appointment', ur: 'اپنی بکنگ کریں' })} sub={t({ en: 'Fill this in and we will open WhatsApp with your details ready to send.', ur: 'یہ فارم بھریں، ہم آپ کی تفصیلات کے ساتھ واٹس ایپ کھول دیں گے۔' })} />
        <form onSubmit={submit} noValidate className="hair-gold mx-auto grid max-w-3xl gap-5 rounded-[2rem] bg-white/60 p-6 shadow-[0_30px_60px_-36px_rgba(74,14,31,.5)] sm:grid-cols-2 sm:p-10">
          <label className="grid gap-2 text-sm font-medium text-maroon">
            {t({ en: 'Your name', ur: 'آپ کا نام' })}
            <input className={field} value={f.name} onChange={set('name')} autoComplete="name" aria-invalid={!!err.name} />
            {err.name && <span className="text-sm font-normal text-red-700">{err.name}</span>}
          </label>
          <label className="grid gap-2 text-sm font-medium text-maroon">
            {t({ en: 'Phone', ur: 'فون نمبر' })}
            <input className={field} type="tel" inputMode="tel" autoComplete="tel" placeholder="03XX XXXXXXX" dir="ltr" value={f.phone} onChange={set('phone')} aria-invalid={!!err.phone} />
            {err.phone && <span className="text-sm font-normal text-red-700">{err.phone}</span>}
          </label>
          <label className="grid gap-2 text-sm font-medium text-maroon sm:col-span-2">
            {t({ en: 'Service', ur: 'سروس' })}
            <select className={field} value={f.service} onChange={set('service')} aria-invalid={!!err.service}>
              <option value="">{t({ en: 'Choose a service', ur: 'سروس منتخب کریں' })}</option>
              <optgroup label={t({ en: 'Bridal packages', ur: 'برائیڈل پیکجز' })}>
                {packages.map((p) => <option key={p.id} value={`${p.name.en} bridal package`}>{t(p.name)}</option>)}
              </optgroup>
              {serviceTabs.map((tab) => (
                <optgroup key={tab.id} label={t(tab.label)}>
                  {services[tab.id].map((s) => <option key={s.name.en} value={s.name.en}>{t(s.name)}</option>)}
                </optgroup>
              ))}
            </select>
            {err.service && <span className="text-sm font-normal text-red-700">{err.service}</span>}
          </label>
          <label className="grid gap-2 text-sm font-medium text-maroon">
            {t({ en: 'Preferred date', ur: 'پسندیدہ تاریخ' })}
            <input className={field} type="date" min={today()} value={f.date} onChange={set('date')} dir="ltr" />
          </label>
          <fieldset className="grid gap-2 text-sm font-medium text-maroon">
            <legend className="mb-2">{t({ en: 'Time slot', ur: 'وقت' })}</legend>
            <div className="flex flex-wrap gap-2" dir="ltr">
              {timeSlots.map((s) => (
                <button type="button" key={s} onClick={() => setF((x) => ({ ...x, slot: s }))} aria-pressed={f.slot === s}
                  className={`min-h-[2.75rem] rounded-full border border-gold/60 px-4 text-sm ${f.slot === s ? 'bg-maroon text-ivory' : 'bg-white text-maroon'}`}>{s}</button>
              ))}
            </div>
          </fieldset>
          <label className="flex min-h-[2.75rem] items-center gap-3 text-[.95rem] text-ink/80 sm:col-span-2">
            <input type="checkbox" checked={f.home} onChange={set('home')} className="h-5 w-5 accent-[#7A1F3D]" />
            {t({ en: 'I would like home service (extra charges apply)', ur: 'مجھے گھر پر سروس چاہیے (اضافی چارجز لاگو)' })}
          </label>
          <label className="grid gap-2 text-sm font-medium text-maroon sm:col-span-2">
            {t({ en: 'Notes (optional)', ur: 'نوٹ (اختیاری)' })}
            <textarea className={field} rows={3} value={f.notes} onChange={set('notes')} placeholder={lang === 'ur' ? 'مثلاً: بارات کا جوڑا سرخ ہے' : 'e.g. my Barat outfit is red and gold'} />
          </label>
          <button type="submit" className="btn-gold sm:col-span-2">
            <MessageCircle size={20} /> {t({ en: 'Send on WhatsApp', ur: 'واٹس ایپ پر بھیجیں' })}
          </button>
        </form>
      </div>
    </section>
  )
}

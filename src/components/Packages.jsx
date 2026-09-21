import { Check, Home, MessageCircle } from 'lucide-react'
import { home, packages, site } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import { money, waLink } from '../lib/utils'
import SectionHead from './SectionHead'
import TiltCard from './TiltCard'

export default function Packages() {
  const { t } = useLang()
  return (
    <section id="packages" className="section-pad relative overflow-hidden bg-ivory">
      <div className="wrap">
        <SectionHead
          title={t({ en: 'Bridal packages', ur: 'برائیڈل پیکجز' })}
          sub={t({ en: 'Three ways to be taken care of, from a single event to all three wedding days.', ur: 'ایک تقریب سے لے کر شادی کے تینوں دنوں تک، خیال رکھنے کے تین انداز۔' })}
        />
        <ul className="grid gap-8 md:grid-cols-3 md:items-stretch">
          {packages.map((p) => (
            <li key={p.id} className={p.popular ? 'md:-mt-4 md:mb-4' : ''}>
              <TiltCard className={`flex flex-col rounded-[1.75rem] p-7 sm:p-8 ${p.popular ? 'bg-gradient-to-b from-maroon to-[#2d0812] text-ivory shadow-[0_40px_70px_-30px_rgba(74,14,31,.85)]' : 'hair-gold bg-white'}`}>
                {p.popular && (
                  <span className="absolute -top-3 start-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-semibold text-maroon rtl:translate-x-1/2">
                    {t({ en: 'Most booked', ur: 'سب سے زیادہ بک' })}
                  </span>
                )}
                <div className="jaali absolute inset-0 rounded-[inherit] opacity-[.06]" />
                <h3 className={`font-display tight-ur text-4xl font-semibold ${p.popular ? 'text-gold' : 'text-maroon'}`}>{t(p.name)}</h3>
                <p className={`tight-ur mt-2 min-h-[3.2rem] text-[.95rem] ${p.popular ? 'text-ivory/75' : 'text-ink/65'}`}>{t(p.blurb)}</p>
                <div className="my-5 flex items-baseline gap-2" dir="ltr">
                  <span className={`text-sm ${p.popular ? 'text-ivory/70' : 'text-ink/60'}`}>{t({ en: 'from', ur: '' })}</span>
                  <span className={`font-display text-5xl font-semibold ${p.popular ? 'foil' : 'text-burgundy'}`}>{money(p.price)}</span>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {p.items.map((it, i) => (
                    <li key={i} className="tight-ur flex items-start gap-3 text-[.95rem]">
                      <Check size={17} className="mt-1 shrink-0 text-gold" />
                      <span>{t(it)}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Assalam o Alaikum, I am interested in the ${p.name.en} bridal package at ${site.brand.en}.`)}
                  target="_blank" rel="noreferrer"
                  className={p.popular ? 'btn-gold w-full' : 'btn-ghost w-full text-maroon'}
                >
                  <MessageCircle size={18} /> {t({ en: 'Ask about this package', ur: 'اس پیکج کے بارے میں پوچھیں' })}
                </a>
              </TiltCard>
            </li>
          ))}
        </ul>

        <div className="hair-gold mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 rounded-3xl bg-blush/40 p-6 text-center sm:flex-row sm:text-start">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-maroon text-gold"><Home size={24} /></span>
          <div className="flex-1">
            <h3 className="font-display tight-ur text-2xl font-semibold text-maroon">{t({ en: 'Bridal at your home', ur: 'آپ کے گھر پر برائیڈل سروس' })}</h3>
            <p className="tight-ur mt-1 text-[.95rem] text-ink/75">
              {t({ en: `Our team comes to you for an extra ${money(home.fee)}. Areas: ${home.areas.join(', ')}.`, ur: `ہماری ٹیم 10,000 روپے اضافی میں آپ کے پاس آتی ہے۔ علاقے: ڈی ایچ اے، بحریہ ٹاؤن، گلبرگ، ماڈل ٹاؤن، جوہر ٹاؤن، کینٹ۔` })}
            </p>
          </div>
          <a href={waLink('Assalam o Alaikum, I would like a bridal service at my home.')} target="_blank" rel="noreferrer" className="btn-ghost shrink-0 text-maroon">
            {t({ en: 'Check my area', ur: 'میرا علاقہ چیک کریں' })}
          </a>
        </div>
      </div>
    </section>
  )
}

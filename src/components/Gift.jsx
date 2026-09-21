import { useState } from 'react'
import { Gift as GiftIcon, MessageCircle } from 'lucide-react'
import { site, voucherAmounts } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import { money, waLink } from '../lib/utils'
import TiltCard from './TiltCard'

export default function Gift() {
  const { t } = useLang()
  const [amt, setAmt] = useState(voucherAmounts[1])
  return (
    <section className="section-pad bg-blush/50">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2">
        <div className="text-center lg:text-start">
          <h2 className="font-display h-section tight-ur text-maroon">{t({ en: 'Gift a glow', ur: 'چمک تحفے میں دیں' })}</h2>
          <p className="lead tight-ur mx-auto mt-4 max-w-md text-ink/75 lg:mx-0">
            {t({ en: 'A voucher for a sister, a friend or a bride-to-be. Valid for 6 months on any service.', ur: 'بہن، سہیلی یا ہونے والی دلہن کے لیے واؤچر۔ کسی بھی سروس پر 6 مہینے تک قابلِ استعمال۔' })}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start" role="radiogroup" aria-label="Amount">
            {voucherAmounts.map((a) => (
              <button key={a} role="radio" aria-checked={amt === a} onClick={() => setAmt(a)} dir="ltr"
                className={`min-h-[2.9rem] rounded-full border border-gold/60 px-5 font-medium transition-colors ${amt === a ? 'bg-maroon text-ivory' : 'bg-ivory text-maroon'}`}>
                {money(a)}
              </button>
            ))}
          </div>
          <a href={waLink(`Assalam o Alaikum, I would like to buy a gift voucher of ${money(amt)} at ${site.brand.en}.`)} target="_blank" rel="noreferrer" className="btn-gold mt-7">
            <MessageCircle size={19} /> {t({ en: 'Order a voucher', ur: 'واؤچر آرڈر کریں' })}
          </a>
          <p className="tight-ur mt-5 text-sm text-burgundy">
            {t({ en: 'Refer a bride and you both get 10% off your next visit.', ur: 'کسی دلہن کو ریفر کریں، دونوں کو اگلی وزٹ پر 10 فیصد رعایت۔' })}
          </p>
        </div>
        <div className="mx-auto w-full max-w-md">
          <TiltCard className="relative aspect-[1.6/1] overflow-hidden rounded-3xl bg-gradient-to-br from-maroon via-burgundy to-maroon p-7 text-ivory shadow-[0_40px_70px_-30px_rgba(74,14,31,.8)]" max={12}>
            <div className="jaali absolute inset-0 opacity-[.1]" />
            <div className="absolute inset-3 rounded-2xl border border-gold/50" />
            <div className="relative flex h-full flex-col justify-between p-2">
              <div className="flex items-start justify-between">
                <span className="font-display foil text-3xl font-semibold">{t(site.brand)}</span>
                <GiftIcon className="text-gold" size={26} />
              </div>
              <div>
                <div className="tight-ur text-sm text-ivory/70">{t({ en: 'Gift voucher', ur: 'گفٹ واؤچر' })}</div>
                <div className="font-display foil text-5xl font-semibold" dir="ltr">{money(amt)}</div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  )
}

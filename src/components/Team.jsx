import { MessageCircle } from 'lucide-react'
import { site, team } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import { waLink } from '../lib/utils'
import Photo from './Photo'
import SectionHead from './SectionHead'
import TiltCard from './TiltCard'

export default function Team() {
  const { t } = useLang()
  return (
    <section id="team" className="section-pad bg-ivory">
      <div className="wrap">
        <SectionHead title={t({ en: 'The artists behind the look', ur: 'اس روپ کے پیچھے فنکار' })} sub={t({ en: 'An all-women team with years of bridal experience.', ur: 'برائیڈل کا برسوں کا تجربہ رکھنے والی خواتین کی ٹیم۔' })} />
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <li key={m.id} className={i === 2 ? 'sm:col-span-2 sm:mx-auto sm:w-[calc(50%-1rem)] lg:col-span-1 lg:mx-0 lg:w-auto' : ''}>
              <TiltCard className="hair-gold overflow-hidden rounded-[1.75rem] bg-white" max={6}>
                <Photo name={m.id} alt={t(m.name)} tone={m.tone} mehrab className="mx-auto mt-5 aspect-[4/4.6] w-[78%]" />
                <div className="p-6 text-center">
                  <h3 className="font-display h-card tight-ur text-maroon">{t(m.name)}</h3>
                  <p className="tight-ur mt-1 text-sm text-burgundy">{t(m.role)}</p>
                  <p className="tight-ur mt-3 text-[.95rem] text-ink/70">{t(m.specialty)}</p>
                  <p className="tight-ur mt-1 text-sm text-ink/55">{t({ en: `${m.years} years of experience`, ur: `${m.years} سال کا تجربہ` })}</p>
                  <a href={waLink(`Assalam o Alaikum, I would like to book with ${m.name.en} at ${site.brand.en}.`)} target="_blank" rel="noreferrer" className="btn-ghost mt-5 w-full text-maroon">
                    <MessageCircle size={17} /> {t({ en: `Book with ${m.name.en.split(' ')[0]}`, ur: `${m.name.ur.split(' ')[0]} کے ساتھ بک کریں` })}
                  </a>
                </div>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

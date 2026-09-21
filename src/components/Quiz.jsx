import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, MessageCircle, RotateCcw, Sparkles } from 'lucide-react'
import { packages, quiz, services, site } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import { money, waLink } from '../lib/utils'
import SectionHead from './SectionHead'

export default function Quiz() {
  const { t, isUr } = useLang()
  const [step, setStep] = useState(0)
  const [ans, setAns] = useState({})
  const done = step >= quiz.questions.length
  const q = quiz.questions[step]

  const pick = (id) => {
    setAns((a) => ({ ...a, [q.id]: id }))
    setStep((s) => s + 1)
  }
  const reset = () => { setStep(0); setAns({}) }

  let result = null
  if (done) {
    const isParty = ans.occasion === 'party'
    const pkg = packages.find((p) => p.id === quiz.moodPackage[ans.mood])
    const partyItem = services.party[0]
    result = isParty
      ? { name: partyItem.name, price: partyItem.price, kind: { en: 'Service', ur: 'سروس' } }
      : { name: pkg.name, price: pkg.price, kind: { en: 'Bridal package', ur: 'برائیڈل پیکج' } }
  }
  const occ = quiz.questions[0].options.find((o) => o.id === ans.occasion)
  const optEn = (qi, id) => quiz.questions[qi].options.find((o) => o.id === id)?.en

  const message = done
    ? `Assalam o Alaikum, I took the Find Your Look quiz at ${site.brand.en}.\nOccasion: ${optEn(0, ans.occasion)}\nSkin undertone: ${optEn(1, ans.undertone)}\nMood: ${optEn(2, ans.mood)}\nRecommended: ${result.name.en}\nI would like to book a consultation.`
    : ''

  return (
    <section id="quiz" className="section-pad relative overflow-hidden bg-blush/50">
      <div className="jaali absolute inset-0 opacity-[.1]" aria-hidden="true" />
      <div className="wrap relative">
        <SectionHead
          title={t({ en: 'Find your look in 3 questions', ur: '3 سوالوں میں اپنا روپ تلاش کریں' })}
          sub={t({ en: 'Tell us the occasion, your undertone and your mood. We will suggest a look and a package.', ur: 'موقع، اپنا انڈر ٹون اور پسندیدہ انداز بتائیں۔ ہم آپ کو روپ اور پیکج تجویز کریں گے۔' })}
        />

        <div className="mx-auto max-w-2xl rounded-[2rem] border border-gold/60 bg-ivory p-6 shadow-[0_30px_60px_-30px_rgba(74,14,31,.45)] sm:p-10" style={{ minHeight: '24rem' }}>
          {!done && (
            <div className="mb-8 flex items-center justify-between">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                aria-label="Back"
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-maroon disabled:opacity-30"
              >
                <ArrowLeft size={18} className={isUr ? 'rotate-180' : ''} />
              </button>
              <div className="flex gap-2" aria-label={`Question ${step + 1} of 3`}>
                {quiz.questions.map((_, i) => (
                  <span key={i} className={`h-1.5 w-10 rounded-full transition-colors ${i <= step ? 'bg-gold' : 'bg-gold/25'}`} />
                ))}
              </div>
              <span className="w-11" />
            </div>
          )}

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div key={step} initial={{ opacity: 0, x: isUr ? -40 : 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isUr ? 40 : -40 }} transition={{ duration: 0.35 }}>
                <h3 className="font-display tight-ur mb-6 text-center text-[clamp(1.6rem,5vw,2.3rem)] leading-tight text-maroon">{t(q.q)}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {q.options.map((o) => (
                    <button
                      key={o.id}
                      onClick={() => pick(o.id)}
                      className="tight-ur min-h-[3.5rem] rounded-2xl border border-gold/50 bg-white px-5 py-3 text-start text-[1.02rem] text-ink transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-blush/50 active:scale-[.98]"
                    >
                      {t(o)}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="res" initial={{ opacity: 0, scale: 0.92, rotateX: 18 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} transition={{ type: 'spring', stiffness: 130, damping: 16 }} style={{ transformPerspective: 900 }} className="text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-maroon text-gold"><Sparkles size={24} /></div>
                <p className="tight-ur text-sm text-ink/60">{t({ en: 'Your look', ur: 'آپ کا روپ' })}</p>
                <h3 className="font-display tight-ur mt-1 text-[clamp(1.9rem,6vw,2.8rem)] leading-tight text-maroon">
                  {t({ en: `${occ.en}: ${quiz.moods[ans.mood].en}`, ur: `${occ.ur}: ${quiz.moods[ans.mood].ur}` })}
                </h3>
                <p className="tight-ur mx-auto mt-4 max-w-md leading-relaxed text-ink/75">
                  {t({ en: `Colours that suit your ${ans.undertone} undertone: ${quiz.palettes[ans.undertone].en}.`, ur: `آپ کے انڈر ٹون کے مطابق رنگ: ${quiz.palettes[ans.undertone].ur}۔` })}
                </p>
                <div className="hair-gold mx-auto mt-6 max-w-sm rounded-2xl bg-gradient-to-br from-maroon to-burgundy p-5 text-ivory">
                  <div className="text-sm text-ivory/70">{t(result.kind)}</div>
                  <div className="font-display tight-ur text-3xl font-semibold">{t(result.name)}</div>
                  <div className="foil font-display text-2xl" dir="ltr">{t({ en: 'from ', ur: '' })}{money(result.price)}</div>
                </div>
                <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <a href={waLink(message)} target="_blank" rel="noreferrer" className="btn-gold">
                    <MessageCircle size={19} /> {t({ en: 'Send my look on WhatsApp', ur: 'میرا روپ واٹس ایپ پر بھیجیں' })}
                  </a>
                  <button onClick={reset} className="btn-ghost text-maroon"><RotateCcw size={16} /> {t({ en: 'Start again', ur: 'دوبارہ شروع کریں' })}</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

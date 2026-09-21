import { lazy, Suspense, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { MessageCircle, Sparkles } from 'lucide-react'
import { site } from '../data/siteConfig'
import { useLang } from '../context/LangContext'
import { useDevice, useInView } from '../hooks/useDevice'
import { scrollToId, waLink } from '../lib/utils'
import Photo from './Photo'
import Magnetic from './Magnetic'
import OpenBadge from './OpenBadge'

const Hero3D = lazy(() => import('./Hero3D'))

const SPARKS = [
  [12, 18, 14], [82, 12, 10], [70, 40, 16], [22, 62, 12], [90, 70, 10], [8, 88, 14], [55, 85, 9], [40, 8, 11],
]
function Sparkles2D() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {SPARKS.map(([x, y, s], i) => (
        <svg key={i} className="twinkle absolute text-gold" style={{ left: `${x}%`, top: `${y}%`, width: s, height: s, animationDelay: `${i * 0.45}s` }} viewBox="0 0 10 10">
          <path d="M5 0 6 4 10 5 6 6 5 10 4 6 0 5 4 4Z" fill="currentColor" />
        </svg>
      ))}
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  const { reduced, coarse, lowEnd, mobile, ready } = useDevice()
  const ref = useRef(null)
  const visible = useInView(ref, '100px')
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const archY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const ringY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const [first] = useState(() => {
    try { return !sessionStorage.getItem('zn-seen') } catch { return true }
  })
  const base = first ? 2.15 : 0.15
  const use3D = ready && !reduced && !lowEnd
  const words = String(t(site.tagline)).split(' ')

  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden bg-maroon text-ivory">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(90%_70%_at_75%_30%,#7A1F3D_0%,#4A0E1F_55%,#2a0712_100%)]" />
      <div className="jaali absolute inset-0 -z-10 opacity-[.07]" />
      <div className="absolute inset-0 -z-[5]" aria-hidden="true">
        {use3D ? (
          <Suspense fallback={<Sparkles2D />}>
            <Hero3D mobile={mobile} coarse={coarse} active={visible} />
          </Suspense>
        ) : (
          ready && <Sparkles2D />
        )}
      </div>

      <div className="wrap grid min-h-[calc(100dvh-4rem)] items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-6">
        <div className="relative z-10 text-center lg:text-start">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: base }} className="mb-6 flex justify-center lg:justify-start">
            <OpenBadge />
          </motion.div>
          <h1 className="font-display h-hero tight-ur" aria-label={t(site.tagline)}>
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[.12em] align-bottom" aria-hidden="true">
                <motion.span
                  className="inline-block"
                  initial={{ y: '115%', rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: base + i * 0.09, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: base + 0.7, duration: 0.8 }}
            className="lead tight-ur mx-auto mt-6 max-w-xl text-ivory/80 lg:mx-0"
          >
            {t(site.heroSub)}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: base + 0.95, duration: 0.8 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Magnetic>
              <a href={waLink(`Assalam o Alaikum, I would like to book at ${site.brand.en}.`)} target="_blank" rel="noreferrer" className="btn-gold">
                <MessageCircle size={19} /> {t({ en: 'Book on WhatsApp', ur: 'واٹس ایپ پر بکنگ کریں' })}
              </a>
            </Magnetic>
            <button onClick={() => scrollToId('quiz')} className="inline-flex min-h-[3rem] items-center gap-2 px-3 text-ivory/85 underline decoration-gold/60 underline-offset-[6px] hover:text-gold">
              <Sparkles size={16} className="text-gold" /> {t({ en: 'Find your look', ur: 'اپنا روپ تلاش کریں' })}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: base + 0.2, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative z-10 mx-auto w-[min(78vw,24rem)] lg:w-[min(38vw,29rem)]"
        >
          <motion.div style={{ y: ringY }} className="absolute -inset-3 translate-x-3 translate-y-3 opacity-70" aria-hidden="true">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
              <path d="M1 100V42C1 20 35 12 50 1C65 12 99 20 99 42V100" fill="none" stroke="#C9A24B" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>
          </motion.div>
          <motion.div style={{ y: reduced ? 0 : archY }}>
            <Photo name="hero" alt={t({ en: 'Bride in red and gold', ur: 'سرخ اور سنہری جوڑے میں دلہن' })} tone="rose" mehrab outline eager className="aspect-[3/4.15] w-full" />
          </motion.div>
          <div className="absolute -bottom-4 start-[-6%] rounded-2xl border border-gold/40 bg-maroon/85 px-4 py-3 text-sm shadow-xl backdrop-blur">
            <div className="font-display text-2xl leading-none text-gold">500+</div>
            <div className="tight-ur text-ivory/80">{t({ en: 'brides styled', ur: 'دلہنیں تیار کیں' })}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'

// reduced: user asked for less motion | coarse: touch device | lowEnd: weak phone | mobile: narrow screen
export function useDevice() {
  const [d, setD] = useState({ reduced: false, coarse: false, lowEnd: false, mobile: false, ready: false })
  useEffect(() => {
    const mq = (q) => window.matchMedia(q).matches
    const force3d = new URLSearchParams(location.search).get('3d') === '1'
    setD({
      reduced: mq('(prefers-reduced-motion: reduce)'),
      coarse: mq('(pointer: coarse)'),
      mobile: window.innerWidth < 768,
      lowEnd: !force3d && ((navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4),
      ready: true,
    })
  }, [])
  return d
}

export function useInView(ref, margin = '0px') {
  const [v, setV] = useState(true)
  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setV(e.isIntersecting), { rootMargin: margin })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [ref, margin])
  return v
}

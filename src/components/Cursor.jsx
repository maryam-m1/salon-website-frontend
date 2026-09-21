import { useEffect, useRef } from 'react'

// Desktop-only gold sparkle trail. Not rendered on touch or reduced motion.
export default function Cursor() {
  const ref = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine) and (hover: hover)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cv = ref.current
    const ctx = cv.getContext('2d')
    let w, h, dpr, raf = 0, last = 0
    const ps = []
    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      w = cv.width = innerWidth * dpr; h = cv.height = innerHeight * dpr
      cv.style.width = innerWidth + 'px'; cv.style.height = innerHeight + 'px'
    }
    size()
    const star = (x, y, r) => {
      ctx.beginPath()
      for (let i = 0; i < 8; i++) {
        const a = (Math.PI / 4) * i, rr = i % 2 ? r * 0.28 : r
        ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr)
      }
      ctx.closePath(); ctx.fill()
    }
    const loop = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i]
        p.life -= 0.022; p.x += p.vx; p.y += p.vy; p.vy += 0.02
        if (p.life <= 0) { ps.splice(i, 1); continue }
        ctx.fillStyle = `rgba(${p.c},${p.life})`
        star(p.x * dpr, p.y * dpr, p.r * p.life * dpr)
      }
      raf = ps.length ? requestAnimationFrame(loop) : 0
    }
    const move = (e) => {
      const now = performance.now()
      if (now - last < 28) return
      last = now
      ps.push({ x: e.clientX, y: e.clientY, vx: (Math.random() - 0.5) * 0.8, vy: Math.random() * 0.6 - 0.3, r: 3 + Math.random() * 4, life: 1, c: Math.random() > 0.4 ? '226,190,100' : '255,236,190' })
      if (ps.length > 40) ps.shift()
      if (!raf) raf = requestAnimationFrame(loop)
    }
    addEventListener('pointermove', move, { passive: true })
    addEventListener('resize', size)
    return () => { removeEventListener('pointermove', move); removeEventListener('resize', size); cancelAnimationFrame(raf) }
  }, [])
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[65] hidden md:block" />
}

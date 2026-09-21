import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { useDevice } from '../hooks/useDevice'
import { cn } from '../lib/utils'

// 3D tilt: follows the mouse on desktop, gentle scroll-tilt on touch. A gold light glides across the surface.
export default function TiltCard({ children, className, max = 9 }) {
  const ref = useRef(null)
  const { coarse, reduced } = useDevice()
  const rx = useSpring(useMotionValue(0), { stiffness: 160, damping: 16 })
  const ry = useSpring(useMotionValue(0), { stiffness: 160, damping: 16 })
  const gx = useMotionValue(50)
  const gy = useMotionValue(30)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scrollTilt = useTransform(scrollYProgress, [0, 0.5, 1], [7, 0, -7])
  const glare = useTransform([gx, gy], ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,235,170,.28), transparent 55%)`)

  const move = (e) => {
    if (e.pointerType !== 'mouse' || reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * max * 2)
    rx.set(-(py - 0.5) * max * 2)
    gx.set(px * 100)
    gy.set(py * 100)
  }
  const leave = () => { rx.set(0); ry.set(0); gx.set(50); gy.set(30) }

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        onPointerMove={move}
        onPointerLeave={leave}
        style={{ rotateX: coarse && !reduced ? scrollTilt : rx, rotateY: coarse ? 0 : ry, transformStyle: 'preserve-3d' }}
        className={cn('relative h-full', className)}
      >
        {children}
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ background: glare }} />
      </motion.div>
    </div>
  )
}

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

// Wraps a button: it leans toward the mouse. Does nothing on touch.
export default function Magnetic({ children, strength = 0.28, className }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 })
  const move = (e) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const leave = () => { x.set(0); y.set(0) }
  return (
    <motion.div ref={ref} style={{ x, y }} onPointerMove={move} onPointerLeave={leave} className={className}>
      {children}
    </motion.div>
  )
}

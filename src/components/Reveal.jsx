import { motion } from 'motion/react'

// Subtle reveal, used on headings only so the page does not feel over-animated.
export default function Reveal({ children, delay = 0, y = 22, className, as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </M>
  )
}

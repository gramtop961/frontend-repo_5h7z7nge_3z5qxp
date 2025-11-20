import { motion } from 'framer-motion'

export default function HoloText({ children, size = 'xl', tone = 'blue', weight = 'semibold', className = '' }) {
  const sizeMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-2xl',
    xxl: 'text-4xl',
    hero: 'text-5xl md:text-6xl',
  }
  const weightMap = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    black: 'font-black tracking-tight',
  }
  const toneMap = {
    blue: 'from-cyan-300 via-sky-300 to-blue-400',
    red: 'from-rose-300 via-pink-300 to-orange-300',
    gold: 'from-amber-200 via-amber-300 to-yellow-300',
  }

  return (
    <motion.h2
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`bg-clip-text text-transparent bg-gradient-to-r drop-shadow-[0_2px_24px_rgba(56,189,248,0.2)] ${sizeMap[size]} ${weightMap[weight]} ${toneMap[tone]} ${className}`}
    >
      {children}
    </motion.h2>
  )
}

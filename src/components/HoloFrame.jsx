import { motion } from 'framer-motion'

export default function HoloFrame({ children, tone = 'blue', glow = true, className = '' }) {
  const toneMap = {
    blue: {
      border: 'border-cyan-400/30',
      ring: 'shadow-[0_0_30px_rgba(34,211,238,0.25)]',
      from: 'from-cyan-500/20',
      to: 'to-sky-400/10',
      accent: 'via-blue-500/20',
    },
    red: {
      border: 'border-rose-500/30',
      ring: 'shadow-[0_0_35px_rgba(244,63,94,0.35)]',
      from: 'from-rose-500/20',
      to: 'to-orange-500/10',
      accent: 'via-rose-500/20',
    },
    gold: {
      border: 'border-amber-400/40',
      ring: 'shadow-[0_0_40px_rgba(251,191,36,0.35)]',
      from: 'from-amber-400/20',
      to: 'to-yellow-500/10',
      accent: 'via-amber-300/20',
    },
  }

  const t = toneMap[tone]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br ${t.from} ${t.accent} ${t.to} ${t.border} ${glow ? t.ring : ''} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_10%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_300px_at_90%_110%,rgba(34,211,238,0.12),transparent)] pointer-events-none" />
      <div className="relative">
        {children}
      </div>
    </motion.div>
  )
}

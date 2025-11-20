import { motion } from 'framer-motion'

export default function XPBar({ value = 45, level = 12 }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <p className="text-cyan-200/80 text-sm">Level {level}</p>
        <p className="text-cyan-200/60 text-xs">XP {value}%</p>
      </div>
      <div className="h-3 rounded-full bg-slate-700/60 border border-cyan-400/20 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.5)_inset]"
        />
      </div>
    </div>
  )
}

import HoloFrame from './HoloFrame'
import { motion } from 'framer-motion'

export default function QuestCard({ title, tasks = [], onComplete }) {
  const total = tasks.length
  const done = tasks.filter(t => t.done).length
  const pct = Math.round((done / Math.max(total, 1)) * 100)

  return (
    <HoloFrame className="p-4 md:p-6" tone="blue">
      <div className="flex items-center justify-between mb-4">
        <div className="text-cyan-100 font-semibold tracking-wide">{title}</div>
        <div className="text-cyan-200/70 text-sm">{done}/{total}</div>
      </div>

      <div className="space-y-2 mb-4">
        {tasks.map((t, i) => (
          <motion.label key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-cyan-400/10 text-cyan-100/90">
            <input type="checkbox" checked={t.done} readOnly className="accent-cyan-400/90 w-4 h-4" />
            <span className={`text-sm ${t.done ? 'line-through text-cyan-300/50' : ''}`}>{t.label}</span>
          </motion.label>
        ))}
      </div>

      <div className="h-2 rounded bg-slate-700/60 overflow-hidden border border-cyan-400/20">
        <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8 }} className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-400" />
      </div>

      <button onClick={onComplete} className="mt-4 w-full py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-100 font-semibold transition-colors">Complete Quest</button>
    </HoloFrame>
  )
}

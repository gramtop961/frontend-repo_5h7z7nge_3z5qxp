import HoloText from '../components/HoloText'
import HoloFrame from '../components/HoloFrame'
import { motion } from 'framer-motion'
import NavTabs from '../components/NavTabs'

export default function Rewards() {
  return (
    <div className="min-h-screen relative bg-slate-950 text-cyan-100">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(251,191,36,0.16),transparent)]" />

      <div className="relative z-10 max-w-md mx-auto pt-6 pb-24 px-4">
        <div className="flex items-center justify-between mb-6">
          <HoloText size="lg" weight="black">Rewards</HoloText>
          <NavTabs />
        </div>

        <HoloFrame tone="gold" className="p-6">
          <HoloText size="xl" tone="gold" weight="black" className="text-center mb-2">Quest Completed — Rewards Received</HoloText>
          <p className="text-center text-amber-200/90 mb-6">XP + Stat increase applied</p>

          <div className="space-y-3">
            {["+500 XP", "+2 Strength", "+1 Agility", "+1 Intelligence"].map((txt, i) => (
              <motion.div key={txt} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="p-3 rounded-xl bg-amber-400/10 border border-amber-300/30 text-amber-100 text-center font-semibold">
                {txt}
              </motion.div>
            ))}
          </div>
        </HoloFrame>
      </div>
    </div>
  )
}

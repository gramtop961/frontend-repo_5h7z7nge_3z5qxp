import { useState } from 'react'
import HoloText from '../components/HoloText'
import HoloFrame from '../components/HoloFrame'
import QuestCard from '../components/QuestCard'
import NavTabs from '../components/NavTabs'
import SystemPopup from '../components/SystemPopup'

export default function DailyQuest() {
  const [tasks, setTasks] = useState([
    { label: '100 Push-ups', done: false },
    { label: '100 Squats', done: false },
    { label: '5km Run', done: false },
  ])
  const [showPenalty, setShowPenalty] = useState(false)

  const markNext = () => {
    // simulate progress for demo purposes
    const idx = tasks.findIndex(t => !t.done)
    if (idx === -1) return
    const next = tasks.map((t, i) => (i === idx ? { ...t, done: true } : t))
    setTasks(next)
  }

  const completeQuest = () => {
    if (tasks.some(t => !t.done)) {
      setShowPenalty(true)
    } else {
      window.location.href = '/rewards'
    }
  }

  return (
    <div className="min-h-screen relative bg-slate-950 text-cyan-100">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.12),transparent)]" />

      <div className="relative z-10 max-w-md mx-auto pt-6 pb-24 px-4">
        <div className="flex items-center justify-between mb-6">
          <HoloText size="lg" weight="black">Daily Quest</HoloText>
          <NavTabs />
        </div>

        <HoloFrame className="p-4 mb-4">
          <p className="text-sm text-cyan-200/80">Complete all tasks to receive rewards.</p>
        </HoloFrame>

        <QuestCard
          title="Perform Training"
          tasks={tasks}
          onComplete={completeQuest}
        />

        <button onClick={markNext} className="mt-4 w-full py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-100 font-semibold transition-colors">
          Mark Next as Done (Demo)
        </button>
      </div>

      <SystemPopup
        open={showPenalty}
        tone="red"
        title="Quest Incomplete. Penalty Zone Detected."
        subtitle="Proceed with caution. Complete all tasks to avoid penalty."
      />
    </div>
  )
}

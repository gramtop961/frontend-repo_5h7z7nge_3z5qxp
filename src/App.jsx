import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import DailyQuest from './pages/DailyQuest'
import Penalty from './pages/Penalty'
import Rewards from './pages/Rewards'
import ParticleField from './components/ParticleField'

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 pointer-events-none">
        <ParticleField />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.08),transparent)]" />
      </div>

      <div className="relative z-10 max-w-md mx-auto pt-6 pb-24 px-4">
        <div className="flex items-center justify-center mb-4">
          <Link to="/" className="text-cyan-200/70 text-xs uppercase tracking-[0.2em] hover:text-cyan-100 transition-colors">Solo Leveling // System</Link>
        </div>
        {children}
      </div>
    </div>
  )
}

function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/daily" element={<DailyQuest />} />
        <Route path="/penalty" element={<Penalty />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </Shell>
  )
}

export default App

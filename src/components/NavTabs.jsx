import { NavLink } from 'react-router-dom'
import { Home, ListChecks, TriangleAlert, Gift } from 'lucide-react'

const tabBase = 'flex items-center gap-2 px-4 py-2 rounded-xl border border-cyan-400/20 text-cyan-200/80 hover:text-cyan-100 hover:border-cyan-300/40 transition-colors'

export default function NavTabs() {
  const tabs = [
    { to: '/', label: 'Dashboard', icon: Home },
    { to: '/daily', label: 'Daily Quest', icon: ListChecks },
    { to: '/penalty', label: 'Penalty', icon: TriangleAlert },
    { to: '/rewards', label: 'Rewards', icon: Gift },
  ]
  return (
    <div className="flex gap-2">
      {tabs.map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to} className={({ isActive }) => `${tabBase} ${isActive ? 'bg-cyan-400/10 text-cyan-100' : ''}`}>
          <Icon className="w-4 h-4" />
          <span className="text-sm">{label}</span>
        </NavLink>
      ))}
    </div>
  )
}

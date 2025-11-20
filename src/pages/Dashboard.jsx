import Spline from '@splinetool/react-spline'
import ParticleField from '../components/ParticleField'
import HoloText from '../components/HoloText'
import HoloFrame from '../components/HoloFrame'
import XPBar from '../components/XPBar'
import NavTabs from '../components/NavTabs'

export default function Dashboard() {
  return (
    <div className="min-h-screen relative bg-slate-950 text-cyan-100">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.12),transparent)]" />
      <ParticleField />

      <div className="relative z-10 max-w-md mx-auto pt-6 pb-24 px-4">
        <div className="flex items-center justify-between mb-6">
          <HoloText size="lg" weight="black">Solo Leveling // System</HoloText>
          <NavTabs />
        </div>

        <div className="h-56 rounded-2xl overflow-hidden border border-cyan-400/20 bg-slate-900/40 mb-6">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <HoloFrame className="p-4 mb-6">
          <div className="flex items-center justify-between">
            <HoloText size="lg" weight="semibold">Daily Quest Available</HoloText>
            <span className="text-cyan-200/70 text-sm">Tap to view</span>
          </div>
          <div className="mt-4">
            <XPBar value={62} level={17} />
          </div>
        </HoloFrame>

        <div className="grid gap-4">
          <HoloFrame className="p-4">
            <p className="text-cyan-200/80 text-sm">Character</p>
            <div className="mt-2 text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400">Level 17</div>
            <p className="text-cyan-200/60 text-xs mt-1">Next level in 1,240 XP</p>
          </HoloFrame>

          <HoloFrame className="p-4">
            <p className="text-cyan-200/80 text-sm">System Notifications</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="text-cyan-200/70">• New quest generated</li>
              <li className="text-cyan-200/70">• Inventory updated</li>
              <li className="text-cyan-200/70">• Ranking +1</li>
            </ul>
          </HoloFrame>
        </div>
      </div>
    </div>
  )
}

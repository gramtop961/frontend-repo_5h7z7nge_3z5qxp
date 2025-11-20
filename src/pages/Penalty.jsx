import HoloText from '../components/HoloText'
import HoloFrame from '../components/HoloFrame'
import NavTabs from '../components/NavTabs'

export default function Penalty() {
  return (
    <div className="min-h-screen relative bg-slate-950 text-cyan-100">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(244,63,94,0.15),transparent)]" />
      <div className="absolute inset-0 mix-blend-screen pointer-events-none" style={{ background: 'radial-gradient(800px 200px at 50% 10%, rgba(244,63,94,0.3), transparent), radial-gradient(600px 400px at 50% 90%, rgba(251,146,60,0.15), transparent)' }} />

      <div className="relative z-10 max-w-md mx-auto pt-6 pb-24 px-4">
        <div className="flex items-center justify-between mb-6">
          <HoloText size="lg" weight="black">Penalty Warning</HoloText>
          <NavTabs />
        </div>

        <HoloFrame tone="red" className="p-6">
          <HoloText size="xl" tone="red" weight="black" className="text-center mb-2">Quest Incomplete. Penalty Zone Detected.</HoloText>
          <p className="text-center text-cyan-100/80">Dramatic lighting engaged. Evade or accept consequences.</p>
        </HoloFrame>
      </div>
    </div>
  )
}

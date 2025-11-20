import HoloFrame from './HoloFrame'
import HoloText from './HoloText'
import { motion, AnimatePresence } from 'framer-motion'

export default function SystemPopup({ open, tone = 'red', title, subtitle }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <HoloFrame tone={tone} className="relative z-10 max-w-md w-full p-6">
            <HoloText size="xl" weight="black" tone={tone === 'red' ? 'red' : 'blue'} className="mb-2 text-center">
              {title}
            </HoloText>
            {subtitle && (
              <p className="text-center text-cyan-100/80 text-sm">
                {subtitle}
              </p>
            )}
          </HoloFrame>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { useEffect, useRef } from 'react'

// Subtle, soft particles for holographic depth
export default function ParticleField({ density = 60, color = 'rgba(59,130,246,0.6)' }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)

    const particles = Array.from({ length: density }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      a: Math.random() * Math.PI * 2,
      s: 0.2 + Math.random() * 0.6,
      o: 0.2 + Math.random() * 0.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.a += 0.005 * p.s
        p.x += Math.cos(p.a) * 0.25 * p.s
        p.y += Math.sin(p.a) * 0.25 * p.s
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        grd.addColorStop(0, color)
        grd.addColorStop(1, 'transparent')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()
      }
      animationRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [density, color])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ filter: 'blur(1.5px)' }}
    />
  )
}

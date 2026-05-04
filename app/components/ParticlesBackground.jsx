'use client'

import { useRef, useEffect } from 'react'

export default function ParticlesBackground({ theme = 'dark' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let particles = []
    const mouse = { x: null, y: null, radius: 150 }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    let animationFrameId

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = 2
        this.speedX = (Math.random() * 0.5) - 0.25
        this.speedY = (Math.random() * 0.5) - 0.25
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1

        // Particles move away from the cursor to keep the background subtly interactive.
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < mouse.radius) {
            this.x += (dx / dist) * 1.5
            this.y += (dy / dist) * 1.5
          }
        }
      }

      draw() {
        ctx.fillStyle = theme === 'light' ? 'rgba(0, 102, 255, 0.45)' : 'rgba(0, 150, 255, 0.8)'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const initParticles = () => {
      particles = []
      const total = Math.floor((canvas.width * canvas.height) / 12000)
      for (let i = 0; i < total; i++) particles.push(new Particle())
    }
    initParticles()

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 130) {
            const opacity = theme === 'light' ? (1 - dist / 130) * 0.35 : 1 - dist / 130
            ctx.strokeStyle = `rgba(0, 150, 255, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = theme === 'light' ? 'rgba(246, 248, 252, 0.35)' : 'rgba(10, 10, 15, 0.3)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.update()
        p.draw()
      })

      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}

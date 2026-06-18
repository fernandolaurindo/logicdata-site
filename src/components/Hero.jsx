import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const WORDS = ['logística', 'financeiro', 'operações', 'distribuição']

function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const ACCENT = '0, 212, 255'
    const COUNT = 55
    const MAX_DIST = 130
    let particles = [], W, H, rafId

    const resize = () => {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    class Dot {
      init() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.r = Math.random() * 1.4 + 0.4
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > W) this.vx *= -1
        if (this.y < 0 || this.y > H) this.vy *= -1
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ACCENT}, 0.5)`
        ctx.fill()
      }
    }

    resize()
    particles = Array.from({ length: COUNT }, () => { const d = new Dot(); d.init(); return d })

    const frame = () => {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(); particles[i].draw()
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${ACCENT}, ${0.12 * (1 - dist / MAX_DIST)})`
            ctx.lineWidth = 0.7; ctx.stroke()
          }
        }
      }
      rafId = requestAnimationFrame(frame)
    }

    const onResize = () => { resize(); particles.forEach(p => p.init()) }
    window.addEventListener('resize', onResize, { passive: true })
    frame()
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}

function RotatingWord() {
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)
  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIdx(i => (i + 1) % WORDS.length)
        setFading(false)
      }, 320)
    }, 2600)
    return () => clearInterval(timer)
  }, [])
  return (
    <span style={{
      color: 'var(--color-cyan)',
      fontStyle: 'italic',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      opacity: fading ? 0 : 1,
      transform: fading ? 'translateY(-8px)' : 'translateY(0)',
      display: 'inline-block',
    }}>
      {WORDS[idx]}
    </span>
  )
}

/* KPI Bento Cards para o Hero */
const bentoCards = [
  {
    id: 'years',
    span: '1 / 3',
    row: '1',
    content: (
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(2.8rem, 6vw, 4rem)', fontWeight: 900, color: 'var(--color-cyan)', lineHeight: 1, letterSpacing: '-0.05em', textShadow: '0 0 40px rgba(0,212,255,0.5)' }}>
            20<sup style={{ fontSize: '1.5rem', fontWeight: 800 }}>+</sup>
          </div>
          <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem', fontWeight: 500, marginTop: 4 }}>anos transformando operações</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {['Logística', 'Financeiro', 'Dados'].map((label, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: ['95%', '75%', '85%'][i] }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: '100%', borderRadius: 4, background: `linear-gradient(90deg, var(--color-cyan), ${['rgba(0,212,255,0.4)', 'rgba(124,58,237,0.7)', 'rgba(0,212,255,0.6)'][i]})` }}
                />
              </div>
              <span style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)', minWidth: 30 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'processes',
    span: '3 / 4',
    row: '1',
    content: (
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-text-muted)', marginBottom: 8 }}>Processos</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-cyan)', lineHeight: 1 }}>+200</div>
        <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', marginTop: 4 }}>automatizados</div>
        <div style={{ marginTop: 12, width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '12px auto 0', animation: 'pulse-ring 2s ease-in-out infinite' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-cyan)" strokeWidth="1.8">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: 'pipeline',
    span: '1 / -1',
    row: '2',
    content: (
      <div>
        <div style={{ fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-text-muted)', marginBottom: 14 }}>Pipeline de dados</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {['Operação', 'ETL', 'BI', 'Resultado'].map((node, i) => (
            <div key={node} style={{ display: 'flex', alignItems: 'center', flex: i < 3 ? undefined : 'none' }}>
              <div style={{
                fontSize: '0.58rem', fontWeight: 700, padding: '5px 10px',
                background: i === 3 ? 'rgba(0,212,255,0.12)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${i === 3 ? 'rgba(0,212,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 6, color: i === 3 ? 'var(--color-cyan)' : 'var(--color-text-secondary)',
                whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)',
                boxShadow: i === 3 ? '0 0 12px rgba(0,212,255,0.2)' : 'none',
              }}>
                {node}
              </div>
              {i < 3 && (
                <div style={{ flex: 1, height: 1, background: 'rgba(0,212,255,0.15)', position: 'relative', overflow: 'hidden', margin: '0 4px', minWidth: 20 }}>
                  <span style={{
                    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                    width: 5, height: 5, borderRadius: '50%', background: 'var(--color-cyan)',
                    boxShadow: '0 0 6px rgba(0,212,255,0.9)',
                    animation: `flowDot 1.8s linear infinite`,
                    animationDelay: `${i * 0.6}s`,
                  }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="inicio"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 0 90px' }}
    >
      {/* Particle Canvas */}
      <ParticleCanvas />

      {/* Grid BG */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Radial Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(0,212,255,0.07) 0%, rgba(124,58,237,0.04) 50%, transparent 70%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="hero-grid">

          {/* TEXT COLUMN */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: 560 }}
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px',
                border: '1px solid rgba(0,212,255,0.2)', borderRadius: 100, fontSize: '0.76rem',
                fontWeight: 600, color: 'var(--color-cyan)', marginBottom: 28,
                background: 'rgba(0,212,255,0.06)', letterSpacing: '0.03em',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-cyan)', animation: 'pulse-dot 2s ease-in-out infinite', flexShrink: 0 }} />
                20+ anos de experiência em dados
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 22,
              }}
            >
              Dados que geram resultado.<br />
              <span style={{ color: 'var(--color-cyan)', textShadow: '0 0 40px rgba(0,212,255,0.35)' }}>
                Processos que ganham eficiência.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', marginBottom: 40, lineHeight: 1.75, maxWidth: 520 }}
            >
              Ajudamos empresas de <RotatingWord /> a organizar dados, automatizar processos e melhorar resultados.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 20 }}>
              <motion.a
                href="https://wa.me/5551992113434"
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.04, y: -2, boxShadow: '0 12px 40px rgba(0,212,255,0.35)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '14px 28px', background: 'var(--color-cyan)', color: '#070B17',
                  borderRadius: 10, fontWeight: 700, fontSize: '0.95rem',
                  boxShadow: '0 4px 20px rgba(0,212,255,0.25)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar com especialista
              </motion.a>
              <motion.a
                href="#servicos"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', background: 'transparent', color: 'var(--color-cyan)',
                  border: '1.5px solid rgba(0,212,255,0.35)', borderRadius: 10, fontWeight: 600, fontSize: '0.95rem',
                  transition: 'background 0.25s',
                }}
              >
                Ver serviços
              </motion.a>
            </motion.div>

            {/* Microcopy */}
            <motion.p variants={itemVariants} style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 6px rgba(74,222,128,0.6)' }} />
              Diagnóstico inicial gratuito
            </motion.p>
          </motion.div>

          {/* BENTO CARDS COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
            className="hero-visual"
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'auto auto',
              gap: 12,
              width: '100%',
              maxWidth: 440,
            }}>
              {bentoCards.map((card, i) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  style={{
                    gridColumn: card.span,
                    gridRow: card.row,
                    padding: '18px 16px',
                    borderRadius: 16,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Top accent line */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
                  }} />
                  {card.content}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)' }}
        aria-hidden="true"
      >
        <div style={{
          width: 22, height: 36, border: '1.5px solid rgba(0,212,255,0.25)', borderRadius: 20, position: 'relative',
        }}>
          <motion.div
            animate={{ y: [0, 13, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: 5, left: '50%', transform: 'translateX(-50%)',
              width: 4, height: 7, background: 'var(--color-cyan)', borderRadius: 3,
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-visual { justify-content: center !important; }
        }
      `}</style>
    </section>
  )
}

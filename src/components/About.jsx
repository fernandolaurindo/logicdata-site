import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'

function Counter({ from = 0, to, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const motionVal = useMotionValue(from)

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionVal, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: v => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix
      },
    })
    return controls.stop
  }, [inView, to, suffix, duration, motionVal])

  return <span ref={ref}>{from}{suffix}</span>
}

const diffs = [
  { icon: <rect x="4" y="4" width="16" height="16" rx="2"/>, text: 'Expertise técnica real, não consultoria teórica' },
  { icon: <><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></>, text: 'Soluções sob medida para cada operação' },
  { icon: <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>, text: 'Domínio profundo em logística e financeiro' },
  { icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>, text: 'Da análise ao fluxo automatizado, tudo em um lugar' },
]

export default function About() {
  return (
    <section id="sobre" style={{ padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle BG glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(124,58,237,0.05) 0%, transparent 70%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'stretch' }} className="about-grid">

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">Quem somos</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
              fontWeight: 700, letterSpacing: '-0.03em',
              lineHeight: 1.2, marginTop: 8, marginBottom: 28,
            }}>
              20+ anos transformando{' '}
              <span style={{ color: 'var(--color-cyan)' }}>dados em resultado</span>
            </h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: 18 }}>
              A <strong style={{ color: 'var(--color-text-primary)' }}>LogicData</strong> é uma consultoria especializada em dados, automação e tecnologia aplicada aos negócios.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: 18 }}>
              Com mais de 20 anos em operações logísticas, a empresa nasceu da necessidade real de transformar desafios operacionais em{' '}
              <em style={{ color: 'var(--color-cyan)', fontStyle: 'italic' }}>soluções práticas, escaláveis e orientadas por dados</em>.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
              Nosso diferencial é a combinação entre conhecimento de negócio e capacidade técnica — antes de qualquer dashboard ou automação,{' '}
              <em style={{ color: 'var(--color-text-primary)', fontStyle: 'italic' }}>entendemos a operação</em>.
            </p>

            {/* Metrics Row */}
            <div style={{ display: 'flex', gap: 32, marginTop: 36, flexWrap: 'wrap' }}>
              {[
                { value: 20, suffix: '+', label: 'anos de mercado' },
                { value: 200, suffix: '+', label: 'processos automatizados' },
                { value: 6, suffix: '', label: 'serviços especializados' },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
                >
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '2rem', fontWeight: 800,
                    color: 'var(--color-cyan)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    textShadow: '0 0 30px rgba(0,212,255,0.4)',
                  }}>
                    <Counter to={m.value} suffix={m.suffix} duration={1.8} />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 500, letterSpacing: '0.02em' }}>
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Foto + Bento de Diferenciais */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
          >
            {/* Header card */}
            <div style={{
              padding: '20px 24px',
              borderRadius: 18,
              background: 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.04) 100%)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0,212,255,0.12)',
              marginBottom: 12,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-cyan)', animation: 'pulse-dot 2s ease-in-out infinite', flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-cyan)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Nossos Diferenciais
              </span>
            </div>

            {/* Differentials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
              {diffs.map((diff, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '18px 18px',
                    flex: 1,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Left accent bar on hover */}
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: 2,
                    background: 'linear-gradient(180deg, var(--color-cyan), var(--color-violet))',
                    opacity: 0,
                    transition: 'opacity 0.25s',
                  }} className={`diff-bar-${i}`} />

                  {/* Icon */}
                  <div style={{
                    width: 36, height: 36, flexShrink: 0,
                    background: 'rgba(0,212,255,0.07)',
                    border: '1px solid rgba(0,212,255,0.14)',
                    borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-cyan)',
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      {diff.icon}
                    </svg>
                  </div>

                  {/* Check + text */}
                  <span style={{ fontSize: '0.86rem', fontWeight: 500, color: 'var(--color-text-secondary)', flex: 1, lineHeight: 1.5 }}>
                    {diff.text}
                  </span>

                  {/* Checkmark */}
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <polyline points="2,6 5,9 10,3" stroke="var(--color-cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Entendemos profundamente seus processos, dados disponíveis e objetivos reais do negócio.',
    icon: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
  },
  {
    num: '02',
    title: 'Mapeamento',
    desc: 'Identificamos fontes de dados, gargalos operacionais e oportunidades de automação.',
    icon: <><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></>,
  },
  {
    num: '03',
    title: 'Planejamento',
    desc: 'Definimos a arquitetura, ferramentas e escopo ideal para cada cenário com clareza.',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></>,
  },
  {
    num: '04',
    title: 'Desenvolvimento',
    desc: 'Construímos dashboards, pipelines, automações e fluxos sob medida para sua operação.',
    icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
  },
  {
    num: '05',
    title: 'Implantação',
    desc: 'Implementamos, integramos e acompanhamos o go-live com suporte em tempo real.',
    icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
  },
  {
    num: '06',
    title: 'Evolução',
    desc: 'Monitoramos resultados, treinamos equipes e expandimos as soluções conforme o negócio cresce.',
    icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>,
  },
]

export default function Methodology() {
  return (
    <section id="metodologia" style={{ padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.035) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 50% at 80% 30%, rgba(124,58,237,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 55% at 20% 70%, rgba(0,212,255,0.06) 0%, transparent 70%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span className="section-tag">Como trabalhamos</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)',
            fontWeight: 700, letterSpacing: '-0.03em', marginTop: 8, lineHeight: 1.2,
          }}>
            Nossa <span style={{ color: 'var(--color-cyan)' }}>Metodologia</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', marginTop: 12 }}>
            Um processo estruturado para garantir que cada solução entregue <strong style={{ color: 'var(--color-text-primary)' }}>resultado real</strong>
          </p>
        </motion.div>

        {/* Steps — grid 3×2 com timeline visual */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          position: 'relative',
        }} className="method-grid">

          {/* Linha conectora superior */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              top: 52, left: '16.6%', right: '16.6%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), rgba(124,58,237,0.3), rgba(0,212,255,0.3), transparent)',
              transformOrigin: 'left',
              display: 'none', // só desktop
            }}
            className="method-connector"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{
                padding: '28px 24px',
                borderRadius: 18,
                background: 'linear-gradient(135deg, rgba(12,18,38,0.7) 0%, rgba(8,12,24,0.6) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.45)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(124,58,237,0.3), transparent)',
              }} />

              {/* Number + Icon row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                {/* Big number */}
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'transparent',
                  background: `linear-gradient(135deg, ${i % 2 === 0 ? 'var(--color-cyan)' : 'var(--color-violet)'}, rgba(255,255,255,0.2))`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  letterSpacing: '-0.05em',
                }}>
                  {step.num}
                </span>

                {/* Icon */}
                <div style={{
                  width: 38, height: 38,
                  background: 'rgba(0,212,255,0.07)',
                  border: '1px solid rgba(0,212,255,0.15)',
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-cyan)',
                  position: 'relative',
                }}>
                  {/* Pulse ring */}
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: 10,
                    animation: `pulse-ring ${2 + i * 0.3}s ease-in-out infinite`,
                  }} />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {step.icon}
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem', fontWeight: 700,
                marginBottom: 10, letterSpacing: '-0.02em',
              }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                {step.desc}
              </p>

              {/* Corner dot */}
              <div style={{
                position: 'absolute', bottom: 16, right: 16,
                width: 6, height: 6, borderRadius: '50%',
                background: i % 2 === 0 ? 'var(--color-cyan)' : 'var(--color-violet)',
                opacity: 0.4,
                boxShadow: `0 0 8px ${i % 2 === 0 ? 'rgba(0,212,255,0.6)' : 'rgba(124,58,237,0.6)'}`,
              }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .method-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) {
          .method-connector { display: block !important; }
        }
      `}</style>
    </section>
  )
}

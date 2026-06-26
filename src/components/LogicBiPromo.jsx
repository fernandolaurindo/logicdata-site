import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const modules = [
  { icon: '📈', label: 'KPIs & OTD' },
  { icon: '🔍', label: 'Causa & Ação' },
  { icon: '💰', label: 'Financeiro' },
  { icon: '🚚', label: 'Controle Operacional' },
  { icon: '📊', label: 'DRE Automático' },
  { icon: '🤖', label: 'Coleta Automática' },
]

export default function LogicBiPromo() {
  return (
    <section style={{ padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Glow de fundo */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.07) 0%, rgba(0,212,255,0.04) 40%, transparent 70%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Borda com gradiente */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderRadius: 28,
            padding: 2,
            background: 'linear-gradient(135deg, rgba(0,212,255,0.3), rgba(124,58,237,0.3), rgba(0,212,255,0.1))',
          }}
        >
          <div style={{
            borderRadius: 26,
            background: 'linear-gradient(135deg, rgba(12,16,32,0.97) 0%, rgba(7,11,23,0.99) 100%)',
            padding: '56px 60px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'center',
          }} className="logicbi-promo-inner">

            {/* Esquerda — texto */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '5px 14px',
                background: 'rgba(124,58,237,0.12)',
                border: '1px solid rgba(124,58,237,0.25)',
                borderRadius: 100, marginBottom: 24,
                fontSize: '0.73rem', fontWeight: 700,
                color: '#a78bfa', letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 6px rgba(167,139,250,0.8)', flexShrink: 0 }} />
                Produto SaaS
              </div>

              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 800, lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: 18,
              }}>
                Conheça o{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #00D4FF 0%, #a78bfa 50%, #00D4FF 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  LogicBi
                </span>
              </h2>

              <p style={{
                fontSize: '1rem', color: 'var(--color-text-secondary)',
                lineHeight: 1.75, marginBottom: 32, maxWidth: 440,
              }}>
                Nossa plataforma SaaS de BI operacional e financeiro para empresas de logística — tudo que você precisa em um único painel web, atualizado automaticamente.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/logicbi" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 28px',
                    background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
                    color: '#fff', borderRadius: 10,
                    fontWeight: 700, fontSize: '0.9rem',
                    boxShadow: '0 4px 24px rgba(0,212,255,0.2)',
                  }}>
                    Conhecer o LogicBi
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </motion.div>
                <motion.a
                  href="https://app.logicdata.com.br"
                  target="_blank"
                  rel="noopener"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 24px',
                    background: 'transparent',
                    border: '1.5px solid rgba(255,255,255,0.12)',
                    color: 'var(--color-text-secondary)',
                    borderRadius: 10, fontWeight: 600, fontSize: '0.9rem',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.35)'; e.currentTarget.style.color = 'var(--color-cyan)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'var(--color-text-secondary)' }}
                >
                  Acessar plataforma
                </motion.a>
              </div>
            </div>

            {/* Direita — módulos grid */}
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: 16 }}>
                Módulos incluídos
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                {modules.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      padding: '14px 12px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 14, textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{m.icon}</div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-text-secondary)', lineHeight: 1.3 }}>{m.label}</div>
                  </motion.div>
                ))}
              </div>
              <div style={{
                marginTop: 16, padding: '12px 16px',
                background: 'rgba(0,212,255,0.05)',
                border: '1px solid rgba(0,212,255,0.15)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{ fontSize: 16 }}>⚡</span>
                <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                  <strong style={{ color: 'var(--color-cyan)' }}>100% web</strong> · sem instalação · atualização automática a cada hora
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .logicbi-promo-inner {
            grid-template-columns: 1fr !important;
            padding: 36px 28px !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  )
}

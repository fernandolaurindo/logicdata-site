import { motion } from 'framer-motion'

const benefits = [
  { icon: '🎯', title: 'Diagnóstico gratuito', desc: 'Avaliamos sua operação sem compromisso' },
  { icon: '⚡', title: 'Resultados rápidos', desc: 'Primeiros ganhos já nas primeiras semanas' },
  { icon: '🔒', title: 'Dados com segurança', desc: 'Privacidade e governança em primeiro lugar' },
]

export default function Contact() {
  return (
    <section
      id="contato"
      style={{ padding: '110px 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Mesh gradient background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(124,58,237,0.09) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(0,212,255,0.07) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Big card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderRadius: 28,
            padding: 'clamp(40px, 6vw, 72px)',
            background: 'linear-gradient(135deg, rgba(12,18,38,0.8) 0%, rgba(7,11,23,0.9) 100%)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 48,
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="contact-card"
        >
          {/* Top glow line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.6), rgba(0,212,255,0.6), transparent)',
          }} />

          {/* Corner glow */}
          <div style={{
            position: 'absolute', top: -80, right: -80,
            width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: -80, left: -80,
            width: 250, height: 250,
            background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Left — Text + Benefits */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-tag">Vamos conversar</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 800, letterSpacing: '-0.04em',
              lineHeight: 1.1, marginTop: 12, marginBottom: 20,
            }}>
              Pronto para{' '}
              <span style={{
                color: 'var(--color-cyan)',
                textShadow: '0 0 40px rgba(0,212,255,0.4)',
              }}>
                melhorar seus resultados?
              </span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.75, marginBottom: 36, maxWidth: 500 }}>
              Descubra como a LogicData pode ajudar sua empresa a organizar informações, automatizar processos,{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>reduzir desperdícios</strong> e apoiar{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>decisões mais assertivas</strong>.
            </p>

            {/* Benefits mini-cards */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.55 }}
                  style={{
                    padding: '10px 14px',
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex', alignItems: 'center', gap: 8,
                    flex: 1,
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{b.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>{b.title}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)' }}>{b.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — CTA */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
            position: 'relative', zIndex: 1,
          }} className="contact-cta-col">
            {/* Phone number */}
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem', fontWeight: 600,
              color: 'var(--color-text-secondary)',
              letterSpacing: '0.05em',
            }}>
              +55 (51) 99211-3434
            </div>

            {/* Main CTA */}
            <motion.a
              href="https://wa.me/5551992113434"
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '18px 36px',
                background: 'linear-gradient(135deg, var(--color-cyan), #00B8E8)',
                color: '#070B17',
                borderRadius: 14, fontWeight: 800, fontSize: '1.05rem',
                boxShadow: '0 8px 40px rgba(0,212,255,0.35), 0 0 0 1px rgba(0,212,255,0.2)',
                whiteSpace: 'nowrap',
                transition: 'box-shadow 0.3s',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chamar no WhatsApp
            </motion.a>

            {/* Microcopy */}
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 6px rgba(74,222,128,0.6)', animation: 'pulse-dot 1.8s ease-in-out infinite' }} />
              Diagnóstico inicial gratuito
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-card { grid-template-columns: 1fr !important; text-align: center; }
          .contact-cta-col { align-items: center !important; }
        }
      `}</style>
    </section>
  )
}

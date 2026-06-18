import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px 0',
      background: 'rgba(4,6,14,0.8)',
    }}>
      <div className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      }}>
        <motion.a
          href="#inicio"
          whileHover={{ opacity: 0.8 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: 'var(--color-cyan)', filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.5))' }}>◈</span>
          LogicData
        </motion.a>

        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
          © 2026 LogicData. Todos os direitos reservados.
        </p>

        <div style={{ display: 'flex', gap: 20 }}>
          {['logicdata.com.br'].map(item => (
            <span key={item} style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{item}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}

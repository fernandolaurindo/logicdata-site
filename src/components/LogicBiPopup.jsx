import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function LogicBiPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.95 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed', bottom: 28, right: 28, zIndex: 9998,
            width: 300,
          }}
        >
          <div style={{
            borderRadius: 20,
            padding: 2,
            background: 'linear-gradient(135deg, rgba(0,212,255,0.4), rgba(124,58,237,0.4))',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,255,0.08)',
          }}>
            <div style={{
              borderRadius: 18,
              background: 'linear-gradient(135deg, #0C1020 0%, #070B17 100%)',
              padding: '22px 22px 20px',
              position: 'relative',
            }}>
              {/* Fechar */}
              <button
                onClick={() => setVisible(false)}
                aria-label="Fechar"
                style={{
                  position: 'absolute', top: 12, right: 12,
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 8, width: 26, height: 26,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'var(--color-text-muted)',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--color-text-primary)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--color-text-muted)' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.25)',
                borderRadius: 100, padding: '3px 10px', marginBottom: 14,
                fontSize: '0.65rem', fontWeight: 800, color: '#a78bfa',
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 5px rgba(167,139,250,0.9)', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                Novo produto
              </div>

              {/* Título */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem', fontWeight: 900,
                letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8,
                background: 'linear-gradient(135deg, #00D4FF, #a78bfa)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                LogicBi
              </div>

              {/* Descrição */}
              <p style={{
                fontSize: '0.82rem', color: 'var(--color-text-secondary)',
                lineHeight: 1.6, marginBottom: 18,
              }}>
                Nossa plataforma SaaS de BI operacional e financeiro para logística — um único painel, atualizado automaticamente.
              </p>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/logicbi"
                  onClick={() => setVisible(false)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '11px 16px',
                    background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
                    color: '#fff', borderRadius: 12,
                    fontWeight: 700, fontSize: '0.85rem',
                    boxShadow: '0 4px 20px rgba(0,212,255,0.2)',
                  }}
                >
                  Conhecer o LogicBi
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

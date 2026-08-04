import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Progress bar
  useEffect(() => {
    const bar = document.getElementById('progress-bar')
    if (!bar) return
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      bar.style.width = `${Math.min((window.scrollY / total) * 100, 100)}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div id="progress-bar" className="progress-bar" style={{ width: '0%' }} />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 9999,
          background: scrolled
            ? 'rgba(7, 11, 23, 0.97)'
            : 'rgba(7, 11, 23, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid transparent',
          transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <motion.a
            href="#inicio"
            whileHover={{ opacity: 0.85 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            <span style={{
              color: 'var(--color-cyan)',
              fontSize: '1.5rem',
              filter: 'drop-shadow(0 0 8px rgba(0,212,255,0.6))',
              lineHeight: 1,
            }}>◈</span>
            LogicData
          </motion.a>

          {/* Desktop menu */}
          <ul style={{ display: 'flex', gap: 36, listStyle: 'none' }} className="desktop-nav">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 500,
                    color: activeSection === link.href.slice(1)
                      ? 'var(--color-cyan)'
                      : 'var(--color-text-secondary)',
                    transition: 'color 0.25s ease',
                    position: 'relative',
                    paddingBottom: 2,
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--color-text-primary)'}
                  onMouseLeave={e => e.target.style.color = activeSection === link.href.slice(1) ? 'var(--color-cyan)' : 'var(--color-text-secondary)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button desktop */}
          <motion.a
            href="mailto:projetos@logicdata.com.br"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="desktop-cta"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '9px 20px',
              background: 'var(--color-cyan)',
              color: '#070B17',
              borderRadius: 8,
              fontSize: '0.85rem',
              fontWeight: 700,
              boxShadow: '0 4px 16px rgba(0,212,255,0.25)',
              transition: 'box-shadow 0.3s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Falar agora
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: 5,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 6,
            }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: 'var(--color-text-primary)',
                  borderRadius: 2,
                  transformOrigin: 'center',
                }}
                animate={menuOpen ? {
                  rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                  y: i === 0 ? 7 : i === 2 ? -7 : 0,
                  opacity: i === 1 ? 0 : 1,
                } : { rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                overflow: 'hidden',
                background: 'rgba(7,11,23,0.98)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="container" style={{ paddingTop: 20, paddingBottom: 24 }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    style={{
                      display: 'block',
                      padding: '14px 0',
                      fontSize: '1.05rem',
                      fontWeight: 500,
                      color: 'var(--color-text-secondary)',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="mailto:projetos@logicdata.com.br"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  onClick={closeMenu}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 18,
                    padding: '12px 24px',
                    background: 'var(--color-cyan)',
                    color: '#070B17',
                    borderRadius: 8,
                    fontSize: '0.95rem',
                    fontWeight: 700,
                  }}
                >
                  Falar com especialista
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}

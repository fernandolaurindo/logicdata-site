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
            href="https://wa.me/5551992113434"
            target="_blank"
            rel="noopener"
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
                  href="https://wa.me/5551992113434"
                  target="_blank"
                  rel="noopener"
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

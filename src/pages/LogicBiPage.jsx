import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/* ── helpers ── */
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } }
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

/* ── dados ── */
const concepts = [
  {
    ico: '🌐', cls: 'ci-web',
    title: 'App Web — acesse de qualquer lugar',
    desc: 'Funciona direto no navegador: Chrome, Edge, Safari. Digite o endereço, faça login e pronto. Computador, tablet ou celular — sem instalar nada.',
    color: 'rgba(0,212,255,0.08)', border: 'rgba(0,212,255,0.2)',
  },
  {
    ico: '☁️', cls: 'ci-saas',
    title: 'SaaS — Software como Serviço',
    desc: 'Você assina um plano mensal e usa. Como Netflix ou Spotify, mas para gestão logística. A LogicData cuida de toda a infraestrutura.',
    color: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.2)',
  },
  {
    ico: '🔄', cls: 'ci-update',
    title: 'Sempre atualizado, sempre no ar',
    desc: 'Melhorias e novos módulos chegam automaticamente. Na próxima vez que abrir o navegador, a plataforma já está melhor — sem você fazer nada.',
    color: 'rgba(22,163,74,0.08)', border: 'rgba(22,163,74,0.2)',
  },
  {
    ico: '🔒', cls: 'ci-tenant',
    title: 'Seu ambiente, completamente isolado',
    desc: 'Cada empresa tem seu próprio espaço de dados. Seus pedidos, seus entregadores, seu financeiro — ninguém mais acessa. Dados no Brasil (São Paulo).',
    color: 'rgba(13,148,136,0.08)', border: 'rgba(13,148,136,0.2)',
  },
]

const modules = [
  { ico: '📈', title: 'KPIs & Performance', desc: 'OTD, OTIF, taxa de insucesso, atrasos por CD — visibilidade total sem abrir o TMS.' },
  { ico: '🔍', title: 'Causa & Ação', desc: 'Pareto de atrasos com drill-down até o motorista. Método 5 Porquês e plano 5W2H integrado.' },
  { ico: '💰', title: 'Contas a Pagar', desc: 'Fechamento por entregador com bônus por performance. Exportação de PIX em lote.' },
  { ico: '📋', title: 'Contas a Receber', desc: 'Faturamento por cliente pagador, status de cobrança e histórico de recebimentos.' },
  { ico: '📊', title: 'DRE Automático', desc: 'Demonstração de resultado gerada automaticamente a partir dos dados de entrega e custos.' },
  { ico: '🚚', title: 'Controle Operacional', desc: 'Visão analítica de todos os pedidos por período, cliente e status — com exportação CSV.' },
  { ico: '🔎', title: 'Consulta de Pedido', desc: 'Rastreamento detalhado por CTRC com histórico completo de ocorrências.' },
  { ico: '🤖', title: 'Coleta de Dados Automática', desc: 'TMS, planilhas, bancos de dados e APIs — qualquer fonte, coletada automaticamente. Zero digitação.' },
]

const flow = [
  { ico: '🤖', title: 'RPA Automático', desc: 'TMS, planilhas, bancos de dados e APIs — qualquer fonte, sem intervenção manual', color: '#2563eb' },
  { ico: '☁️', title: 'Banco na Nuvem', desc: 'Dados normalizados em PostgreSQL gerenciado na região São Paulo', color: '#16a34a' },
  { ico: '⚙️', title: 'Processamento', desc: 'Engine classifica, cruza e calcula KPIs e indicadores em tempo real', color: '#7c3aed' },
  { ico: '📊', title: 'LogicBi', desc: 'Painel web acessível de qualquer dispositivo, pronto para decidir', color: '#0d9488' },
]

const plans = [
  {
    name: 'Starter',
    price: 'R$199',
    period: '/mês',
    desc: 'Para operações iniciando a gestão por dados',
    highlight: false,
    features: ['1 fonte de dados integrada', 'Até 2 usuários', 'Operacional + Causa & Ação', 'Histórico 6 meses', 'Suporte por e-mail'],
    cta: 'Começar agora',
  },
  {
    name: 'Professional',
    price: 'R$549',
    period: '/mês',
    desc: 'Gestão completa — mais fontes, mais usuários e todos os módulos',
    highlight: true,
    features: ['Até 3 fontes de dados integradas', 'Até 5 usuários', 'Todos os módulos + financeiro', 'Histórico 18 meses', 'Suporte via WhatsApp'],
    cta: 'Assinar Professional',
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    period: '',
    desc: 'Para operações de grande volume e necessidades customizadas',
    highlight: false,
    features: ['Fontes de dados ilimitadas', 'Usuários ilimitados', 'Todos os módulos', 'Histórico negociado', 'Suporte dedicado + consultoria'],
    cta: 'Falar com a equipe',
  },
]

/* ── Nav LogicBi ── */
function LogicBiNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999,
      background: scrolled ? 'rgba(7,11,23,0.97)' : 'rgba(7,11,23,0.7)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      transition: 'background 0.4s, border-color 0.4s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link to="/" style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: '0.82rem', color: 'var(--color-text-muted)',
            fontWeight: 500, transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            LogicData
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '1rem' }}>/</span>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800,
            background: 'linear-gradient(135deg, #00D4FF, #a78bfa)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>LogicBi</span>
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="lb-desktop-nav">
          {[['#conceito', 'O que é'], ['#modulos', 'Módulos'], ['#como-funciona', 'Como funciona'], ['#planos', 'Planos']].map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--color-text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--color-text-secondary)'}
            >{label}</a>
          ))}
        </nav>

        <motion.a
          href="https://wa.me/5551992113434"
          target="_blank" rel="noopener"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 7,
            padding: '8px 18px',
            background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
            color: '#fff', borderRadius: 8,
            fontSize: '0.83rem', fontWeight: 700,
            boxShadow: '0 4px 16px rgba(0,212,255,0.2)',
          }}
        >
          Agendar demo
        </motion.a>
      </div>
      <style>{`@media(max-width:768px){.lb-desktop-nav{display:none!important}}`}</style>
    </header>
  )
}

/* ── Page ── */
export default function LogicBiPage() {
  return (
    <div style={{ background: 'var(--color-bg-base)', color: 'var(--color-text-primary)', minHeight: '100vh' }}>
      <LogicBiNav />

      {/* ══ HERO ══════════════════════════════════════ */}
      <section className="lb-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '140px 0 100px' }}>
        {/* Grid bg */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        {/* Glow */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(124,58,237,0.1) 0%, rgba(0,212,255,0.06) 40%, transparent 70%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', marginBottom: 28,
                background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)',
                borderRadius: 100, fontSize: '0.75rem', fontWeight: 700,
                color: '#a78bfa', letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', animation: 'pulse-dot 2s ease-in-out infinite', flexShrink: 0 }} />
                Plataforma SaaS · 100% Web
              </span>
            </motion.div>

            <motion.h1 variants={item} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 900, lineHeight: 1, letterSpacing: '-0.05em',
              marginBottom: 24,
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #00D4FF 0%, #a78bfa 50%, #00D4FF 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>LogicBi</span>
            </motion.h1>

            <motion.p variants={item} style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--color-text-secondary)', lineHeight: 1.7,
              maxWidth: 580, margin: '0 auto 40px',
            }}>
              Inteligência operacional e financeira para empresas de logística — tudo em um único painel web, atualizado automaticamente a cada hora.
            </motion.p>

            <motion.div variants={item} style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.a
                href="https://wa.me/5551992113434"
                target="_blank" rel="noopener"
                whileHover={{ scale: 1.05, y: -3, boxShadow: '0 16px 48px rgba(0,212,255,0.3)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 9,
                  padding: '15px 32px',
                  background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
                  color: '#fff', borderRadius: 12, fontWeight: 700, fontSize: '1rem',
                  boxShadow: '0 6px 28px rgba(0,212,255,0.22)',
                }}
              >
                Agendar demonstração gratuita
              </motion.a>
              <motion.a
                href="#planos"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '15px 28px',
                  background: 'transparent', border: '1.5px solid rgba(255,255,255,0.14)',
                  color: 'var(--color-text-secondary)', borderRadius: 12, fontWeight: 600, fontSize: '1rem',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'; e.currentTarget.style.color = 'var(--color-cyan)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = 'var(--color-text-secondary)' }}
              >
                Ver planos →
              </motion.a>
            </motion.div>

            {/* Mini stats */}
            <motion.div variants={item} style={{ display: 'flex', gap: 40, justifyContent: 'center', marginTop: 64, flexWrap: 'wrap' }}>
              {[['100%', 'Web — sem instalação'], ['1h', 'Ciclo de atualização'], ['8+', 'Módulos integrados']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-cyan)', lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ O QUE É ═══════════════════════════════════ */}
      <section id="conceito" className="lb-section" style={{ padding: '100px 0', background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.03) 50%, transparent)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-tag">Conceito</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginTop: 8, lineHeight: 1.15 }}>
              O que é o LogicBi, <span style={{ color: 'var(--color-cyan)' }}>afinal?</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', marginTop: 12, maxWidth: 520, margin: '12px auto 0' }}>
              Uma plataforma digital que você assina e usa pelo navegador — sem instalar nada, sem servidores próprios.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="concept-grid">
            {concepts.map((c, i) => (
              <motion.div key={c.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex', gap: 20, padding: '28px 28px',
                  background: c.color, border: `1px solid ${c.border}`,
                  borderRadius: 20,
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  background: c.color, border: `1px solid ${c.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                }}>
                  {c.ico}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{c.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:480px){.concept-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ══ MÓDULOS ═══════════════════════════════════ */}
      <section id="modulos" className="lb-section" style={{ padding: '100px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-tag">Plataforma</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginTop: 8, lineHeight: 1.15 }}>
              O que está <span style={{ color: 'var(--color-cyan)' }}>incluído</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }} className="modules-grid">
            {modules.map((m, i) => (
              <motion.div key={m.title}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  padding: '24px 20px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 18, position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)' }} />
                <div style={{ fontSize: 28, marginBottom: 12 }}>{m.ico}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{m.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.modules-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </section>

      {/* ══ COMO FUNCIONA ════════════════════════════ */}
      <section id="como-funciona" className="lb-section" style={{ padding: '100px 0', background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.02) 50%, transparent)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-tag">Arquitetura</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginTop: 8, lineHeight: 1.15 }}>
              Da coleta ao <span style={{ color: 'var(--color-cyan)' }}>insight</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', marginTop: 12 }}>
              Sem intervenção manual — do TMS à tela em menos de uma hora.
            </p>
          </motion.div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 0, maxWidth: 880, margin: '0 auto' }} className="flow-row">
            {flow.map((f, i) => (
              <div key={f.title} style={{ display: 'flex', alignItems: 'center', flex: i < flow.length - 1 ? 1 : undefined }}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ textAlign: 'center', minWidth: 130 }}
                >
                  <div style={{
                    width: 76, height: 76, borderRadius: 20, margin: '0 auto 16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30,
                    background: `${f.color}22`, border: `1px solid ${f.color}44`,
                  }}>{f.ico}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, marginBottom: 6 }}>{f.title}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.45, maxWidth: 120, margin: '0 auto' }}>{f.desc}</div>
                </motion.div>
                {i < flow.length - 1 && (
                  <div style={{ flex: 1, height: 1, background: 'rgba(0,212,255,0.15)', margin: '0 8px', marginBottom: 40, position: 'relative', overflow: 'hidden' }}>
                    <span style={{
                      position: 'absolute', top: '50%', transform: 'translateY(-50%)',
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'var(--color-cyan)', boxShadow: '0 0 8px rgba(0,212,255,0.9)',
                      animation: `flowDot 1.8s linear infinite`, animationDelay: `${i * 0.6}s`,
                    }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              marginTop: 40, maxWidth: 880, margin: '40px auto 0',
              padding: '18px 28px', background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14,
              display: 'flex', alignItems: 'center', gap: 14,
            }}
          >
            <span style={{ fontSize: 20 }}>⚡</span>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: '#fff' }}>Zero retrabalho manual.</strong> Nenhum dado é digitado. O RPA lê, normaliza e envia — sua equipe foca em decidir, não em coletar.
            </p>
          </motion.div>
        </div>
        <style>{`@media(max-width:700px){.flow-row{flex-wrap:wrap!important;justify-content:center!important}.flow-row>div{flex:0 0 calc(50% - 16px)!important;min-width:0!important}}`}</style>
      </section>

      {/* ══ PLANOS ════════════════════════════════════ */}
      <section id="planos" className="lb-section" style={{ padding: '100px 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-tag">Planos</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.03em', marginTop: 8, lineHeight: 1.15 }}>
              Simples e <span style={{ color: 'var(--color-cyan)' }}>transparente</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', marginTop: 12 }}>
              Sem contrato longo. Cancele quando quiser.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 960, margin: '0 auto' }} className="plans-grid">
            {plans.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderRadius: 22, padding: p.highlight ? 2 : 0, position: 'relative',
                  background: p.highlight ? 'linear-gradient(135deg, rgba(0,212,255,0.5), rgba(124,58,237,0.5))' : 'transparent',
                }}
              >
                {p.highlight && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
                    color: '#fff', fontSize: '0.7rem', fontWeight: 800,
                    padding: '4px 14px', borderRadius: 100, letterSpacing: '0.06em',
                    textTransform: 'uppercase', whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(0,212,255,0.3)',
                  }}>Mais popular</div>
                )}
                <div style={{
                  borderRadius: p.highlight ? 20 : 22,
                  padding: '36px 28px',
                  background: p.highlight
                    ? 'linear-gradient(135deg, rgba(12,16,32,1), rgba(7,11,23,1))'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  border: p.highlight ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  height: '100%',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, marginBottom: 6 }}>{p.name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: 24, lineHeight: 1.4 }}>{p.desc}</div>

                  <div style={{ marginBottom: 28 }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: p.price === 'Sob consulta' ? '1.4rem' : '2.4rem',
                      fontWeight: 900, letterSpacing: '-0.04em',
                      color: p.highlight ? 'var(--color-cyan)' : 'var(--color-text-primary)',
                    }}>{p.price}</span>
                    {p.period && <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginLeft: 4 }}>{p.period}</span>}
                  </div>

                  <ul style={{ listStyle: 'none', marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {p.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                        <span style={{ color: p.highlight ? 'var(--color-cyan)' : '#4ade80', fontSize: '1rem', flexShrink: 0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="https://wa.me/5551992113434"
                    target="_blank" rel="noopener"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'block', textAlign: 'center',
                      padding: '13px 20px', borderRadius: 10,
                      fontWeight: 700, fontSize: '0.9rem',
                      background: p.highlight
                        ? 'linear-gradient(135deg, #00D4FF, #7C3AED)'
                        : 'transparent',
                      color: p.highlight ? '#fff' : 'var(--color-text-secondary)',
                      border: p.highlight ? 'none' : '1.5px solid rgba(255,255,255,0.12)',
                      boxShadow: p.highlight ? '0 4px 20px rgba(0,212,255,0.2)' : 'none',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => { if (!p.highlight) { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; e.currentTarget.style.color = 'var(--color-cyan)' } }}
                    onMouseLeave={e => { if (!p.highlight) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'var(--color-text-secondary)' } }}
                  >
                    {p.cta}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:800px){.plans-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ══ CTA FINAL ════════════════════════════════ */}
      <section className="lb-cta" style={{ padding: '100px 0 120px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 18 }}>
              Pronto para ver o{' '}
              <span style={{ background: 'linear-gradient(135deg, #00D4FF, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                LogicBi em ação?
              </span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 40 }}>
              Agende uma demonstração gratuita e veja como a sua operação ficaria no painel — com os seus próprios dados.
            </p>
            <motion.a
              href="https://wa.me/5551992113434"
              target="_blank" rel="noopener"
              whileHover={{ scale: 1.05, y: -4, boxShadow: '0 20px 60px rgba(0,212,255,0.3)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '17px 40px',
                background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
                color: '#fff', borderRadius: 14, fontWeight: 800, fontSize: '1.05rem',
                boxShadow: '0 8px 32px rgba(0,212,255,0.25)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar demonstração gratuita
            </motion.a>
            <p style={{ marginTop: 20, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
              Resposta em até 24 horas · Sem compromisso
            </p>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media(max-width:700px){
          .lb-section{padding:60px 0!important}
          .lb-hero{padding:110px 0 70px!important;min-height:auto!important}
          .lb-plans{padding:60px 0!important}
          .lb-cta{padding:60px 0 80px!important}
        }
      `}</style>

      {/* Footer simples */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '28px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', background: 'linear-gradient(135deg, #00D4FF, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>LogicBi</span>
            <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Um produto LogicData</span>
          </div>
          <Link to="/" style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--color-text-secondary)'}
            onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}
          >
            ← Voltar para logicdata.com.br
          </Link>
        </div>
      </footer>
    </div>
  )
}

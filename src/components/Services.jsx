import { motion } from 'framer-motion'

const services = [
  {
    id: 'financeiro',
    featured: true,
    badge: 'Destaque',
    title: 'Inteligência Financeira e DRE',
    desc: 'Transformamos dados operacionais e financeiros em indicadores claros — DREs, análises de rentabilidade e controles que ajudam a reduzir custos e aumentar a margem do negócio.',
    span: '1 / 3',
    row: '1',
    accentColor: '#F5C438',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    desc: 'Visibilidade clara sobre vendas, entregas, custos e resultados em tempo real — para decisões mais seguras.',
    span: '3 / 4',
    row: '1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 13.5V19a1 1 0 001 1h4a1 1 0 001-1v-5.5"/>
        <path d="M9 8V19a1 1 0 001 1h4a1 1 0 001-1V8"/>
        <path d="M15 4v15a1 1 0 001 1h4a1 1 0 001-1V4"/>
      </svg>
    ),
  },
  {
    id: 'integracao',
    title: 'Integração e Centralização de Dados',
    desc: 'Unificamos dados de diferentes sistemas em um único lugar confiável — eliminando retrabalho e garantindo que toda a empresa fale a mesma língua.',
    span: '4 / 5',
    row: '1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16V4m0 0L3 8m4-4l4 4"/>
        <path d="M17 8v12m0 0l4-4m-4 4l-4-4"/>
      </svg>
    ),
  },
  {
    id: 'automacao',
    title: 'Automação de Processos',
    desc: 'Elimine atividades manuais e reduza erros — liberando sua equipe para o que realmente gera valor.',
    span: '1 / 2',
    row: '2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    id: 'integracoes',
    title: 'Integrações Inteligentes com n8n',
    desc: 'Conecte sistemas, ERPs, planilhas, WhatsApp e APIs — trabalhando juntos sem intervenção manual.',
    span: '2 / 4',
    row: '2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/>
        <path d="M5 8v2a7 7 0 007 7"/><path d="M19 8v2a7 7 0 01-7 7"/>
      </svg>
    ),
  },
  {
    id: 'banco',
    title: 'Estruturação de Bases de Dados',
    desc: 'Organize os dados da sua empresa com qualidade e governança — criando a base que sustenta todas as análises e decisões.',
    span: '4 / 5',
    row: '2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="servicos" style={{ padding: '110px 0', background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.018) 50%, transparent 100%)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 52 }}
        >
          <span className="section-tag">Como resolvemos</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)',
            fontWeight: 700, letterSpacing: '-0.03em', marginTop: 8, lineHeight: 1.2,
          }}>
            Nossos <span style={{ color: 'var(--color-cyan)' }}>Serviços</span>
          </h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', marginTop: 12, maxWidth: 480, margin: '12px auto 0' }}>
            Soluções práticas com foco em <strong style={{ color: 'var(--color-text-primary)' }}>resultado real</strong> para o seu negócio
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          className="services-bento"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: 16,
          }}
        >
          {services.map((service, i) => {
            const isFeatured = service.featured
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  gridColumn: service.span,
                  gridRow: service.row,
                  padding: isFeatured ? '28px 26px' : '28px 24px',
                  borderRadius: 18,
                  background: isFeatured
                    ? 'linear-gradient(135deg, rgba(245,196,56,0.07) 0%, rgba(12,18,38,0.8) 60%)'
                    : 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: isFeatured
                    ? '1px solid rgba(245,196,56,0.2)'
                    : '1px solid rgba(255,255,255,0.07)',
                  boxShadow: isFeatured
                    ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,196,56,0.08)'
                    : '0 4px 24px rgba(0,0,0,0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: isFeatured
                    ? 'linear-gradient(90deg, transparent, #F5C438, transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), rgba(124,58,237,0.3), transparent)',
                  opacity: isFeatured ? 1 : 0.6,
                }} />

                {/* Glow background */}
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: isFeatured
                    ? 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(245,196,56,0.08), transparent 60%)'
                    : 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,212,255,0.05), transparent 60%)',
                }} />


                {/* Icon */}
                <div style={{
                  width: isFeatured ? 46 : 44,
                  height: isFeatured ? 46 : 44,
                  color: isFeatured ? '#F5C438' : 'var(--color-cyan)',
                  marginBottom: 18,
                  background: isFeatured ? 'rgba(245,196,56,0.08)' : 'rgba(0,212,255,0.07)',
                  border: isFeatured ? '1px solid rgba(245,196,56,0.2)' : '1px solid rgba(0,212,255,0.15)',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: 10,
                  position: 'relative', zIndex: 1,
                }}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: isFeatured ? '1rem' : '0.95rem',
                  fontWeight: 700, marginBottom: 10, lineHeight: 1.35,
                  letterSpacing: '-0.02em',
                  position: 'relative', zIndex: 1,
                }}>
                  {service.title}
                </h3>

                {/* Desc */}
                <p style={{
                  fontSize: isFeatured ? '0.85rem' : '0.83rem',
                  color: 'var(--color-text-secondary)', lineHeight: 1.7,
                  position: 'relative', zIndex: 1,
                }}>
                  {service.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-bento {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .services-bento > div {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
        @media (max-width: 600px) {
          .services-bento {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

import { motion } from 'framer-motion'

const challenges = [
  { icon: <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>, icon2: <polyline points="17 18 23 18 23 12"/>, text: '"Por que minha margem caiu esse mês?"', size: 'wide' },
  { icon: <><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></>, text: 'Sistemas que não se comunicam entre si' },
  { icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></>, text: 'Equipe sobrecarregada de planilhas manuais', size: 'tall' },
  { icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></>, text: 'Falta de uma DRE gerencial confiável' },
  { icon: <><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M5 8v2a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V8"/><line x1="12" y1="14" x2="12" y2="16"/></>, text: 'Dados espalhados em várias fontes sem integração', size: 'wide' },
  { icon: <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></>, text: 'Sem visibilidade da operação em tempo real' },
  { icon: <><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></>, text: 'Processos repetitivos que consomem tempo da equipe' },
  { icon: <><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></>, text: 'Dificuldade em saber quais operações realmente lucram' },
]

/* Bento layout: mistura de sizes */
const bentoLayout = [
  { col: '1 / 3', row: '1', idx: 2 },     // wide  — Equipe sobrecarregada
  { col: '3 / 4', row: '1', idx: 4 },     //        Dados espalhados
  { col: '1 / 2', row: '2 / 4', idx: 7 }, // tall  — Dificuldade em saber
  { col: '2 / 3', row: '2', idx: 6 },     //        Processos repetitivos
  { col: '3 / 4', row: '2', idx: 1 },     //        Sistemas que não se comunicam
  { col: '2 / 4', row: '3', idx: 5 },     // wide  — Sem visibilidade
  { col: '1 / 2', row: '4', idx: 0 },     //        "Por que minha margem..."
  { col: '2 / 4', row: '4', idx: 3 },     // wide  — Falta de uma DRE
]

export default function Challenges() {
  return (
    <section
      id="desafios"
      style={{ padding: '110px 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* BG */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.035) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 55% at 15% 50%, rgba(124,58,237,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 85% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span className="section-tag">Reconhece esses desafios?</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)',
            fontWeight: 700, letterSpacing: '-0.03em', marginTop: 8,
            lineHeight: 1.2,
          }}>
            A LogicData foi criada para{' '}
            <span style={{ color: 'var(--color-cyan)' }}>resolver cada um deles</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: 14,
          maxWidth: 900,
          margin: '0 auto',
        }} className="challenges-bento">
          {bentoLayout.map(({ col, row, idx: itemIdx }, i) => {
            const item = challenges[itemIdx]
            return (
              <motion.div
                key={itemIdx}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  gridColumn: col,
                  gridRow: row,
                  padding: '20px 20px',
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, rgba(12,18,38,0.7) 0%, rgba(10,14,28,0.5) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'box-shadow 0.3s',
                }}
                onHoverStart={e => {}}
              >
                {/* Gradient border via pseudo via box-shadow */}
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: 16, pointerEvents: 'none',
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.08), rgba(0,212,255,0.04)) border-box',
                }} />

                {/* Icon */}
                <div style={{
                  width: 42, height: 42, flexShrink: 0,
                  background: 'rgba(0,212,255,0.07)',
                  border: '1px solid rgba(0,212,255,0.15)',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-cyan)',
                  position: 'relative', zIndex: 1,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                    {item.icon2}
                  </svg>
                </div>

                {/* Text */}
                <p style={{
                  fontSize: '0.88rem', fontWeight: 500, color: 'var(--color-text-secondary)',
                  lineHeight: 1.6, position: 'relative', zIndex: 1,
                  flex: 1,
                }}>
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .challenges-bento {
            grid-template-columns: 1fr !important;
          }
          .challenges-bento > div {
            grid-column: 1 !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  )
}

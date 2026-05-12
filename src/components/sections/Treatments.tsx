"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const treatments = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5"/>
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5"/>
      </svg>
    ),
    title: "Lentes de Contato Dental",
    subtitle: "Transformação Instantânea",
    description: "Facetas ultrafinas de porcelana que transformam forma, cor e alinhamento com resultado natural e duradouro.",
    color: "#e8f6fa",
    accent: "#1a6b8a",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
    title: "Clareamento Avançado",
    subtitle: "Luminosidade Perfeita",
    description: "Protocolo exclusivo com tecnologia LED. Resultados de até 8 tons mais claros em uma única sessão.",
    color: "#fff8e8",
    accent: "#c9a96e",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Harmonização Facial",
    subtitle: "Equilíbrio & Beleza",
    description: "Procedimentos minimamente invasivos para harmonizar e rejuvenescer o rosto com resultados naturais.",
    color: "#fce8f0",
    accent: "#c0507a",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22V12M12 12C12 12 8 10 8 6a4 4 0 0 1 8 0c0 4-4 6-4 6z"/>
        <path d="M8 22h8"/>
      </svg>
    ),
    title: "Implantes Dentários",
    subtitle: "Permanência & Função",
    description: "Implantes de titânio com planejamento digital 3D. Substituição permanente com resultado idêntico ao natural.",
    color: "#e8f0fc",
    accent: "#3a5fc0",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Smile Design",
    subtitle: "Arte & Ciência",
    description: "Planejamento digital completo do sorriso ideal. Veja o resultado antes de iniciar qualquer tratamento.",
    color: "#e8faf0",
    accent: "#1a8a5a",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "Reabilitação Oral",
    subtitle: "Reconstrução Total",
    description: "Tratamento completo para casos complexos. Devolvemos função, estética e qualidade de vida.",
    color: "#f0e8fc",
    accent: "#7a3ac0",
  },
];

export function Treatments() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="tratamentos"
      ref={ref}
      className="section-py-lg"
      style={{ background: "var(--color-bg-soft)" }}
    >
      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1rem" }}
          >
            <div style={{ width: "2.5rem", height: "2px", background: "var(--color-primary)", borderRadius: "2px" }} />
            <span style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
            }}>
              Tratamentos
            </span>
            <div style={{ width: "2.5rem", height: "2px", background: "var(--color-primary)", borderRadius: "2px" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Procedimentos de{" "}
            <em className="text-gradient" style={{ fontStyle: "italic" }}>alto padrão</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Cada tratamento é executado com precisão técnica, materiais premium
            e atenção obsessiva aos detalhes.
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "1.25rem",
        }}
          className="treatments-grid"
        >
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? t.color : "#ffffff",
                borderRadius: "14px",
                border: `1px solid ${hovered === i ? t.accent + "30" : "var(--color-border)"}`,
                padding: "1.75rem",
                cursor: "default",
                transition: "all 0.3s ease",
                boxShadow: hovered === i ? `0 8px 30px ${t.accent}18` : "var(--shadow-sm)",
                transform: hovered === i ? "translateY(-3px)" : "none",
              }}
            >
              <div style={{
                width: "3.25rem",
                height: "3.25rem",
                borderRadius: "12px",
                background: t.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: t.accent,
                marginBottom: "1.25rem",
                transition: "all 0.3s ease",
                border: `1px solid ${t.accent}20`,
              }}>
                {t.icon}
              </div>

              <div style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: t.accent,
                marginBottom: "0.375rem",
              }}>
                {t.subtitle}
              </div>

              <h3 style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "var(--color-text)",
                marginBottom: "0.625rem",
              }}>
                {t.title}
              </h3>

              <p style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.875rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.65,
                marginBottom: "1.25rem",
              }}>
                {t.description}
              </p>

              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: t.accent,
                  textDecoration: "none",
                  transition: "gap 0.2s",
                }}
              >
                Saiba mais
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Agendar Consulta Gratuita
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .treatments-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .treatments-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

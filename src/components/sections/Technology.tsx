"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const techs = [
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: "Planejamento Digital 3D",
    desc: "Software de última geração para simular e planejar seu sorriso com precisão milimétrica.",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    title: "Scanner Intraoral 3D",
    desc: "Moldagem digital sem silicone. Escaneamento preciso em minutos para próteses com encaixe perfeito.",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    title: "Tomografia Cone Beam",
    desc: "Imagem 3D de alta resolução para diagnóstico preciso de implantes e estruturas ósseas.",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: "Laser Odontológico",
    desc: "Tratamentos minimamente invasivos. Menos dor, recuperação mais rápida e resultados superiores.",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: "Biossegurança Hospitalar",
    desc: "Esterilização de nível hospitalar com autoclave de última geração e monitoramento contínuo.",
  },
  {
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>,
    title: "Clareamento LED Premium",
    desc: "Sistema com luz LED de alta intensidade para resultados de até 8 tons em uma única sessão.",
  },
];

export function Technology() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="section-py-lg"
      style={{ background: "#ffffff" }}
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
              Tecnologia
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
            }}
          >
            Precisão técnica de{" "}
            <em className="text-gradient" style={{ fontStyle: "italic" }}>nível mundial.</em>
          </motion.h2>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: "1.25rem",
        }}
          className="tech-grid"
        >
          {techs.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.08 }}
              className="card"
              style={{ padding: "1.75rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
            >
              <div style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "10px",
                background: "var(--color-accent-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-primary)",
                flexShrink: 0,
              }}>
                {t.icon}
              </div>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  marginBottom: "0.375rem",
                }}>
                  {t.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.65,
                }}>
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .tech-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

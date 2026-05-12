"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { n: "01", title: "Avaliação Gratuita", desc: "Consulta completa sem compromisso. Analisamos seu sorriso e apresentamos as possibilidades.", time: "60 min" },
  { n: "02", title: "Planejamento Digital", desc: "Simulação 3D do resultado final. Você vê seu novo sorriso antes de qualquer procedimento.", time: "45 min" },
  { n: "03", title: "Execução Premium", desc: "Cada procedimento com materiais de altíssima qualidade, no seu ritmo e conforto.", time: "Variável" },
  { n: "04", title: "Acompanhamento", desc: "Nosso relacionamento não termina com o tratamento. Acompanhamos você para resultados duradouros.", time: "Contínuo" },
];

const amenities = [
  "Ambiente climatizado e silencioso",
  "Sedação consciente disponível",
  "Música e entretenimento",
  "Café e bebidas premium",
  "Wi-Fi de alta velocidade",
  "Estacionamento exclusivo",
  "Horário estendido",
  "Equipe multilíngue",
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="section-py-lg"
      style={{ background: "var(--color-bg-muted)" }}
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
              A Experiência
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
            Uma jornada{" "}
            <em className="text-gradient" style={{ fontStyle: "italic" }}>inesquecível.</em>
          </motion.h2>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.25rem",
          marginBottom: "4rem",
        }}
          className="steps-grid"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "1.75rem",
                border: "1px solid var(--color-border)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Step number bg */}
              <div style={{
                position: "absolute",
                top: "-0.5rem",
                right: "1rem",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "5rem",
                fontWeight: 700,
                color: "var(--color-primary)",
                opacity: 0.05,
                lineHeight: 1,
                userSelect: "none",
              }}>
                {s.n}
              </div>

              <div style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                background: "var(--color-accent-soft)",
                border: "2px solid var(--color-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--color-primary)",
                marginBottom: "1rem",
              }}>
                {s.n}
              </div>

              <h3 style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--color-text)",
                marginBottom: "0.5rem",
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.875rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.65,
                marginBottom: "0.75rem",
              }}>
                {s.desc}
              </p>
              <span className="badge badge-primary">{s.time}</span>
            </motion.div>
          ))}
        </div>

        {/* Amenities */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.5rem",
          alignItems: "center",
        }}
          className="amenities-grid"
        >
          <div
            style={{
              aspectRatio: "4/3",
              borderRadius: "16px",
              border: "1px solid var(--color-border)",
              overflow: "hidden",
              background: "linear-gradient(135deg, #e8f6fa 0%, #d4edf5 100%)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/clinica.png"
              alt="Clínica JT Odontologia"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.875rem",
                fontWeight: 600,
                color: "var(--color-text)",
                marginBottom: "0.75rem",
              }}
            >
              Conforto & Exclusividade
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.9375rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Nossa clínica foi projetada para que você se sinta em um ambiente
              de spa de luxo, não em um consultório odontológico.
            </motion.p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }}>
              {amenities.map((a, i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--color-text-muted)",
                  }}>
                    {a}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .steps-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .amenities-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

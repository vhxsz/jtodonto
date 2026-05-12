"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const differentials = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
      </svg>
    ),
    title: "Tecnologia de Ponta",
    description: "Equipamentos modernos para diagnóstico digital, planejamento 3D e execução com precisão.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Atendimento Humanizado",
    description: "Cada paciente é único. Desenvolvemos um plano exclusivo respeitando seus objetivos.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: "Estética & Saúde Bucal",
    description: "Unimos saúde, função e beleza para criar sorrisos naturais, harmoniosos e duradouros.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Segurança Total",
    description: "Protocolos de biossegurança rigorosos. Sua saúde e segurança são nossa prioridade.",
  },
];

export function About() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="sobre" ref={ref} className="section-py-lg" style={{ background: "#ffffff" }}>
      <div className="container-xl">

        {/* label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}
        >
          <div style={{ width: "2.5rem", height: "2px", background: "#1a6b8a", borderRadius: "2px" }} />
          <span style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "0.75rem", fontWeight: 600,
            letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a6b8a",
          }}>
            Quem Somos
          </span>
        </motion.div>

        {/* grid principal */}
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center", marginBottom: "4.5rem" }}>

          {/* texto */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 }}
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 600, lineHeight: 1.1,
                color: "#1a2e3a", letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Odontologia e estética{" "}
              <em style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #1a6b8a 0%, #4db8d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                focadas em você.
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 }}
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "1rem", color: "#5a7a8a",
                lineHeight: 1.78, marginBottom: "1.125rem",
              }}
            >
              A JT Odontologia nasceu da paixão por transformar vidas através de sorrisos
              saudáveis e bonitos. Somos uma clínica completa de odontologia e estética
              facial, com foco em procedimentos bucais — do aparelho ortodôntico ao
              preenchimento labial, da reabilitação dentária ao clareamento.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.26 }}
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "1rem", color: "#5a7a8a",
                lineHeight: 1.78, marginBottom: "2rem",
              }}
            >
              Com a Dra. Taiane Valadares e o Dr. João Gilberto à frente, unimos técnica
              avançada, materiais de qualidade e um atendimento verdadeiramente humano
              para que cada paciente saia com o sorriso que sempre sonhou.
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, x: -14 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.34 }}
              style={{ borderLeft: "3px solid #1a6b8a", paddingLeft: "1.25rem", marginBottom: "2rem" }}
            >
              <p style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.2rem", fontStyle: "italic",
                color: "#1a6b8a", lineHeight: 1.65,
              }}>
                &ldquo;Um sorriso bonito começa com saúde. Nossa missão é cuidar dos dois,
                com carinho e excelência.&rdquo;
              </p>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.42 }}
            >
              <a
                href="https://wa.me/5521982516991"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Conhecer a Clínica
              </a>
            </motion.div>
          </div>

          {/* imagem quem somos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.18 }}
            style={{ position: "relative" }}
          >
            <div style={{
              borderRadius: "16px",
              border: "1px solid #d4e8f0",
              overflow: "hidden",
              background: "linear-gradient(135deg, #e8f6fa 0%, #d4edf5 100%)",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/quemsomos.png"
                alt="Equipe JT Odontologia"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* diferenciais */}
        <div className="diff-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.25rem" }}>
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.09 }}
              className="card"
              style={{ padding: "1.5rem" }}
            >
              <div style={{
                width: "2.75rem", height: "2.75rem", borderRadius: "10px",
                background: "#e8f6fa", display: "flex", alignItems: "center",
                justifyContent: "center", color: "#1a6b8a", marginBottom: "0.875rem",
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.9375rem", fontWeight: 600, color: "#1a2e3a", marginBottom: "0.4rem",
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.875rem", color: "#5a7a8a", lineHeight: 1.65,
              }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
          .diff-grid  { grid-template-columns: repeat(4,1fr) !important; }
        }
      `}</style>
    </section>
  );
}

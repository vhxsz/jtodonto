"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const WA = "https://api.whatsapp.com/send/?phone=5521982516991";

const professionals = [
  {
    id: "taiane",
    name: "Dra. Taiane Valadares",
    role: "Cirurgiã-Dentista",
    cro: "CRO-RJ",
    image: "/images/doutora-taiane.png",
    color: "#e8f6fa",
    specialties: [
      "Ortodontia",
      "Odontopediatria",
      "Cirurgia Dentária",
      "Estética Dental",
    ],
    formation: [
      "Cirurgiã-Dentista",
      "Especialista em Ortodontia",
      "Especialista em Odontopediatria",
    ],
    philosophy:
      "Cuidar do sorriso de cada paciente, desde a infância até a vida adulta, com carinho, técnica e dedicação. Cada sorriso é único e merece atenção especial.",
    highlights: [
      "Ortodontista",
      "Odontopediatra",
      "Cirurgiã-Dentista",
    ],
  },
  {
    id: "joao",
    name: "Dr. João Gilberto",
    role: "Cirurgião-Dentista",
    cro: "CRO-RJ",
    image: "/images/doutor-joao.png",
    color: "#f0f7fa",
    specialties: [
      "Endodontia",
      "Prótese Dentária",
      "Cirurgia Oral",
      "Reabilitação Oral",
    ],
    formation: [
      "Cirurgião-Dentista",
      "Especialista em Endodontia",
      "Especialista em Prótese Dentária",
    ],
    philosophy:
      "Devolver a função e a estética ao sorriso do paciente é minha maior satisfação. Trabalho com precisão e cuidado em cada procedimento.",
    highlights: [
      "Especialista em Endodontia",
      "Especialista em Prótese",
      "Cirurgião-Dentista",
    ],
  },
];

export function Professionals() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [active, setActive] = useState(0);

  const prof = professionals[active];

  return (
    <section id="profissionais" ref={ref} className="section-py-lg" style={{ background: "#ffffff" }}>
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
            Os Especialistas
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.08 }}
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600, color: "#1a2e3a",
            letterSpacing: "-0.02em", marginBottom: "2.25rem",
          }}
        >
          Expertise que{" "}
          <em style={{
            fontStyle: "italic",
            background: "linear-gradient(135deg, #1a6b8a 0%, #4db8d4 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            transforma vidas.
          </em>
        </motion.h2>

        {/* tabs */}
        <div style={{ display: "flex", borderBottom: "2px solid #d4e8f0", marginBottom: "2.25rem" }}>
          {professionals.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "0.75rem 1.5rem",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.9375rem",
                fontWeight: active === i ? 600 : 400,
                color: active === i ? "#1a6b8a" : "#5a7a8a",
                borderBottom: active === i ? "2px solid #1a6b8a" : "2px solid transparent",
                marginBottom: "-2px", transition: "all 0.2s",
              }}
            >
              {p.name.split(" ")[0]} {p.name.split(" ")[1]}
            </button>
          ))}
        </div>

        {/* perfil */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="prof-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", alignItems: "start" }}
          >
            {/* foto */}
            <div style={{ position: "relative", maxWidth: "360px" }}>
              <div style={{
                aspectRatio: "3/4", borderRadius: "16px",
                border: "1px solid #d4e8f0", overflow: "hidden",
                background: prof.color, position: "relative",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={prof.image}
                  alt={prof.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              </div>

              {/* badge CRO */}
              <div style={{
                position: "absolute", bottom: "1rem", left: "1rem",
                background: "#ffffff", borderRadius: "8px",
                padding: "0.5rem 0.875rem",
                boxShadow: "0 4px 16px rgba(26,107,138,0.14)",
                border: "1px solid #d4e8f0",
              }}>
                <div style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.75rem", fontWeight: 600, color: "#1a6b8a",
                }}>
                  {prof.cro}
                </div>
              </div>
            </div>

            {/* info */}
            <div>
              <span style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.75rem", fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#1a6b8a", display: "block", marginBottom: "0.4rem",
              }}>
                {prof.role}
              </span>

              <h3 style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 600, color: "#1a2e3a",
                letterSpacing: "-0.02em", marginBottom: "1.125rem",
              }}>
                {prof.name}
              </h3>

              <blockquote style={{ borderLeft: "3px solid #1a6b8a", paddingLeft: "1.125rem", marginBottom: "1.75rem" }}>
                <p style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.1rem", fontStyle: "italic",
                  color: "#1a6b8a", lineHeight: 1.65,
                }}>
                  &ldquo;{prof.philosophy}&rdquo;
                </p>
              </blockquote>

              <div className="prof-info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem", marginBottom: "1.75rem" }}>
                {/* especialidades */}
                <div>
                  <h4 style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "0.6875rem", fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "#8aa5b0", marginBottom: "0.75rem",
                  }}>
                    Especialidades
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                    {prof.specialties.map((s) => (
                      <li key={s} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#1a6b8a", flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.875rem", color: "#5a7a8a" }}>
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* formação */}
                <div>
                  <h4 style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "0.6875rem", fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "#8aa5b0", marginBottom: "0.75rem",
                  }}>
                    Formação
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                    {prof.formation.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#a8cdd8", flexShrink: 0, marginTop: "6px" }} />
                        <span style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.8125rem", color: "#5a7a8a", lineHeight: 1.5 }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {prof.highlights.map((h) => (
                  <span key={h} className="badge badge-primary" style={{ fontSize: "0.8125rem" }}>
                    ✓ {h}
                  </span>
                ))}
              </div>

              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <i className="bi bi-whatsapp" style={{ fontSize: "0.9rem" }} />
                Agendar com {prof.name.split(" ")[0]} {prof.name.split(" ")[1]}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .prof-grid { grid-template-columns: 360px 1fr !important; }
        }
        @media (max-width: 640px) {
          .prof-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

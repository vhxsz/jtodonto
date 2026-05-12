"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WA = "https://api.whatsapp.com/send/?phone=5521982516991";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100svh",
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {/* ── faixa azul lateral esquerda (desktop) ── */}
      <div className="hero-accent-bar" />

      {/* ── blob decorativo ── */}
      <div aria-hidden style={{
        position: "absolute", top: "-30%", right: "-10%",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,107,138,0.06) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: "-20%", left: "30%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(77,184,212,0.05) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* ── grid principal ── */}
      <motion.div style={{ y, opacity }} className="container-xl hero-grid-wrap">
        <div className="hero-grid">

          {/* ── COLUNA ESQUERDA: texto ── */}
          <div className="hero-text-col">

            {/* eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.5rem" }}
            >
              <div style={{ width: "2rem", height: "2px", background: "#1a6b8a", borderRadius: "2px", flexShrink: 0 }} />
              <span style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.6875rem", fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#1a6b8a",
              }}>
                Nova Iguaçu, RJ · Odontologia &amp; Estética
              </span>
            </motion.div>

            {/* headline */}
            <div style={{ overflow: "hidden", marginBottom: "0.25rem" }}>
              <motion.h1
                initial={{ y: 64, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2.6rem, 6vw, 4.75rem)",
                  fontWeight: 600, lineHeight: 1.04,
                  color: "#1a2e3a", letterSpacing: "-0.025em", margin: 0,
                }}
              >
                Sorrisos que
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "0.25rem" }}>
              <motion.h1
                initial={{ y: 64, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2.6rem, 6vw, 4.75rem)",
                  fontWeight: 600, lineHeight: 1.04,
                  color: "#1a2e3a", letterSpacing: "-0.025em", margin: 0,
                }}
              >
                transformam
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "1.75rem" }}>
              <motion.h1
                initial={{ y: 64, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2.6rem, 6vw, 4.75rem)",
                  fontWeight: 600, lineHeight: 1.04,
                  letterSpacing: "-0.025em", margin: 0,
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #1a6b8a 0%, #4db8d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                vidas.
              </motion.h1>
            </div>

            {/* subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58 }}
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)",
                color: "#5a7a8a", lineHeight: 1.72,
                maxWidth: "440px", marginBottom: "2rem", fontWeight: 400,
              }}
            >
              Aparelho ortodôntico, preenchimento labial, clareamento,
              implantes e muito mais — com tecnologia de ponta e
              atendimento verdadeiramente humano.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2.25rem" }}
            >
              <a
                href={WA}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ gap: "0.5rem" }}
              >
                <i className="bi bi-whatsapp" style={{ fontSize: "1.05rem" }} />
                Agendar Avaliação Gratuita
              </a>
              <button
                onClick={() => document.querySelector("#tratamentos")?.scrollIntoView({ behavior: "smooth" })}
                className="btn btn-outline btn-lg"
              >
                Ver Tratamentos
              </button>
            </motion.div>

            {/* trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              style={{
                display: "flex", flexWrap: "wrap", gap: "1.25rem",
                paddingTop: "1.5rem", borderTop: "1px solid #e4edf2",
              }}
            >
              {[
                { icon: "bi-check2-circle", label: "Avaliação gratuita" },
                { icon: "bi-shield-check",  label: "Especialistas certificados" },
                { icon: "bi-whatsapp",      label: "Atendimento via WhatsApp" },
              ].map((t) => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <i className={`bi ${t.icon}`} style={{ color: "#1a6b8a", fontSize: "0.9rem" }} />
                  <span style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "0.8125rem", color: "#5a7a8a",
                  }}>
                    {t.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── COLUNA DIREITA: foto dos doutores ── */}
          <motion.div
            className="hero-img-col"
            initial={{ opacity: 0, scale: 0.97, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* card da foto */}
            <div style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              background: "linear-gradient(160deg, #e8f6fa 0%, #d4edf5 100%)",
              boxShadow: "0 24px 64px rgba(26,107,138,0.16), 0 4px 16px rgba(26,107,138,0.08)",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/quemsomos.png"
                alt="Dra. Taiane Valadares e Dr. João Gilberto"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />

              {/* badge flutuante */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.55 }}
                style={{
                  position: "absolute", bottom: "1.25rem", left: "1.25rem",
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "14px",
                  padding: "0.875rem 1.125rem",
                  boxShadow: "0 8px 28px rgba(26,107,138,0.14)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  display: "flex", alignItems: "center", gap: "0.75rem",
                }}
              >
                <div style={{
                  width: "2.5rem", height: "2.5rem", borderRadius: "50%",
                  background: "linear-gradient(135deg, #1a6b8a, #4db8d4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <i className="bi bi-tooth" style={{ color: "#fff", fontSize: "1.1rem" }} />
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "0.8125rem", fontWeight: 700, color: "#1a2e3a",
                    lineHeight: 1.2,
                  }}>
                    Dra. Taiane &amp; Dr. João
                  </div>
                  <div style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "0.6875rem", color: "#5a7a8a", marginTop: "2px",
                  }}>
                    Especialistas em Odontologia
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Rolar para baixo"
        style={{
          position: "absolute", bottom: "1.5rem", left: "50%",
          transform: "translateX(-50%)",
          background: "none", border: "none", cursor: "pointer",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
          zIndex: 3, padding: 0,
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "1px", height: "32px",
            background: "linear-gradient(to bottom, #1a6b8a, transparent)",
          }}
        />
        <i className="bi bi-chevron-down" style={{ fontSize: "0.75rem", color: "#8aa5b0" }} />
      </motion.button>

      <style>{`
        /* ── faixa lateral azul (desktop) ── */
        .hero-accent-bar {
          display: none;
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #1a6b8a, #4db8d4);
        }

        /* ── wrap geral ── */
        .hero-grid-wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          align-items: center;
        }

        /* ── grid ── */
        .hero-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
          /* mobile: padding abaixo da navbar */
          padding-top: calc(64px + 1.5rem);
          padding-bottom: 5rem;
        }

        /* ── coluna imagem: escondida no mobile ── */
        .hero-img-col { display: none; }

        /* ── tablet ── */
        @media (min-width: 768px) {
          .hero-grid {
            padding-top: calc(72px + 2rem);
            padding-bottom: 5.5rem;
          }
        }

        /* ── desktop ── */
        @media (min-width: 1024px) {
          .hero-accent-bar { display: block; }
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            padding-top: calc(80px + 3rem);
            padding-bottom: 6rem;
            align-items: center;
          }
          .hero-img-col {
            display: block;
          }
        }

        @media (min-width: 1280px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 5rem;
          }
        }
      `}</style>
    </section>
  );
}

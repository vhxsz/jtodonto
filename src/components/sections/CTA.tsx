"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WA = "https://api.whatsapp.com/send/?phone=5521982516991";

export function CTA() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="contato"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #1a6b8a 0%, #2a8aad 100%)",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
        /* cantos superiores arredondados — "saltando" da tela */
        borderRadius: "28px 28px 0 0",
        boxShadow: "0 -12px 60px rgba(26,107,138,0.25), 0 -4px 20px rgba(26,107,138,0.15)",
        marginTop: "0",
      }}
    >
      {/* decoração */}
      <div style={{
        position: "absolute", top: "-20%", right: "-5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "rgba(255,255,255,0.04)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-25%", left: "-8%",
        width: "350px", height: "350px", borderRadius: "50%",
        background: "rgba(255,255,255,0.04)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: "6%", top: "50%",
        transform: "translateY(-50%)",
        opacity: 0.05, pointerEvents: "none",
      }}>
        <svg width="280" height="280" viewBox="0 0 100 100" fill="white">
          <path d="M50 5 C30 5,15 20,15 38 C15 55,22 65,28 75 C32 82,35 90,40 90 C44 90,46 85,50 85 C54 85,56 90,60 90 C65 90,68 82,72 75 C78 65,85 55,85 38 C85 20,70 5,50 5 Z"/>
        </svg>
      </div>

      <div className="container-xl" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>

        {/* logo */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: "1.75rem" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="JT Odontologia"
            style={{
              height: "56px",
              width: "auto",
              objectFit: "contain",
              borderRadius: "14px",
              display: "block",
              /* fundo branco semi-transparente para a logo ficar legível no fundo azul */
              background: "rgba(255,255,255,0.15)",
              padding: "6px 10px",
            }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        </motion.div>

        <div style={{ overflow: "hidden", marginBottom: "0.4rem" }}>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              fontWeight: 600, color: "#ffffff",
              lineHeight: 1.05, letterSpacing: "-0.02em",
            }}
          >
            Seu sorriso ideal
          </motion.h2>
        </div>
        <div style={{ overflow: "hidden", marginBottom: "1.5rem" }}>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              fontWeight: 600, fontStyle: "italic",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.05, letterSpacing: "-0.02em",
            }}
          >
            começa aqui.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.42 }}
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(0.9375rem, 2.5vw, 1.0625rem)",
            color: "rgba(255,255,255,0.78)",
            lineHeight: 1.72, maxWidth: "480px",
            margin: "0 auto 2.25rem",
          }}
        >
          Agende sua avaliação gratuita e descubra como podemos transformar
          seu sorriso com precisão, estética e excelência.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.56 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", justifyContent: "center", marginBottom: "2rem" }}
        >
          <a
            href={WA}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-white btn-lg"
          >
            <i className="bi bi-whatsapp" style={{ fontSize: "1rem", color: "#1a6b8a" }} />
            Agendar Avaliação Gratuita
          </a>
          <a
            href="tel:+5521982516991"
            className="btn btn-lg"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <i className="bi bi-telephone" style={{ fontSize: "0.9rem" }} />
            Ligar Agora
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", justifyContent: "center" }}
        >
          {["Avaliação Gratuita", "Sem Compromisso", "Atendimento Humanizado"].map((b) => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)",
              }}>
                {b}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

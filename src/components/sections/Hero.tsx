"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WA = "https://api.whatsapp.com/send/?phone=5521982516991";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: "100svh",          /* svh = sem barra do browser mobile */
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(160deg, #e8f6fa 0%, #f4fafc 55%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── decoração de fundo ── */}
      <div aria-hidden style={{
        position: "absolute", top: "-20%", right: "-15%",
        width: "520px", height: "520px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,107,138,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: "-25%", left: "-12%",
        width: "420px", height: "420px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(77,184,212,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* dente decorativo — só desktop */}
      <div aria-hidden className="hero-tooth">
        <svg width="340" height="340" viewBox="0 0 100 100" fill="#1a6b8a">
          <path d="M50 5 C30 5,15 20,15 38 C15 55,22 65,28 75 C32 82,35 90,40 90 C44 90,46 85,50 85 C54 85,56 90,60 90 C65 90,68 82,72 75 C78 65,85 55,85 38 C85 20,70 5,50 5 Z"/>
        </svg>
      </div>

      {/* ── conteúdo ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="container-xl hero-inner"
      >
        {/* tag line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-tag"
        >
          <span className="hero-tag-dot" />
          Nova Iguaçu, RJ · Odontologia &amp; Estética
        </motion.div>

        {/* headline */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hero-h1"
          >
            Sorrisos desenhados
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hero-h1 hero-h1-gradient"
          >
            com precisão e arte.
          </motion.h1>
        </div>

        {/* subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.54 }}
          className="hero-sub"
        >
          Aparelho ortodôntico, preenchimento labial, clareamento, implantes
          e muito mais — tudo com tecnologia de ponta e atendimento humanizado.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.66 }}
          className="hero-ctas"
        >
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg hero-btn-main">
            <i className="bi bi-whatsapp" />
            Agendar Avaliação Gratuita
          </a>
          <button
            onClick={() => document.querySelector("#tratamentos")?.scrollIntoView({ behavior: "smooth" })}
            className="btn btn-outline btn-lg"
          >
            Ver Tratamentos
          </button>
        </motion.div>

        {/* diferenciais */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.82 }}
          className="hero-badges"
        >
          {[
            { icon: "bi-check-circle", text: "Avaliação gratuita" },
            { icon: "bi-phone",        text: "Atendimento via WhatsApp" },
            { icon: "bi-award",        text: "Especialistas certificados" },
          ].map((b) => (
            <div key={b.text} className="hero-badge-item">
              <i className={b.icon} />
              <span>{b.text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        onClick={() => document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })}
        className="hero-scroll"
        aria-label="Rolar para baixo"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="hero-scroll-line"
        />
        <i className="bi bi-chevron-down hero-scroll-icon" />
      </motion.button>

      <style>{`
        /* ── hero inner ── */
        .hero-inner {
          position: relative;
          z-index: 2;
          padding-top: calc(64px + 1.25rem);  /* navbar + espaço compacto */
          padding-bottom: 4.5rem;
          max-width: 720px;
        }

        /* ── tag ── */
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #1a6b8a;
          background: rgba(26,107,138,0.07);
          border: 1px solid rgba(26,107,138,0.15);
          border-radius: 100px;
          padding: 0.3rem 0.875rem;
          margin-bottom: 1.25rem;
        }
        .hero-tag-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #1a6b8a;
          flex-shrink: 0;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(0.7); }
        }

        /* ── headline ── */
        .hero-h1 {
          font-family: var(--font-cormorant), Georgia, serif;
          font-size: clamp(2.4rem, 9vw, 5rem);
          font-weight: 600;
          line-height: 1.04;
          color: #1a2e3a;
          letter-spacing: -0.025em;
          margin: 0;
        }
        .hero-h1-gradient {
          font-style: italic;
          background: linear-gradient(135deg, #1a6b8a 0%, #4db8d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.25rem;
        }

        /* ── subtítulo ── */
        .hero-sub {
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: clamp(0.9rem, 2.5vw, 1.0625rem);
          color: #5a7a8a;
          line-height: 1.72;
          max-width: 500px;
          margin-bottom: 1.75rem;
          font-weight: 400;
        }

        /* ── CTAs ── */
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
          margin-bottom: 1.75rem;
        }
        .hero-btn-main { gap: 0.5rem; }

        /* ── diferenciais ── */
        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid #d4e8f0;
        }
        .hero-badge-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 0.8125rem;
          color: #5a7a8a;
          font-weight: 400;
        }
        .hero-badge-item i {
          color: #1a6b8a;
          font-size: 0.875rem;
        }

        /* ── scroll indicator ── */
        .hero-scroll {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 3;
          padding: 0;
        }
        .hero-scroll-line {
          width: 1px;
          height: 28px;
          background: linear-gradient(to bottom, #1a6b8a, transparent);
        }
        .hero-scroll-icon {
          font-size: 0.75rem;
          color: #8aa5b0;
        }

        /* ── dente decorativo ── */
        .hero-tooth {
          display: none;
          position: absolute;
          right: 3%;
          bottom: 4%;
          opacity: 0.04;
          pointer-events: none;
        }

        /* ── desktop ── */
        @media (min-width: 768px) {
          .hero-inner {
            padding-top: calc(72px + 2.5rem);
            padding-bottom: 5.5rem;
          }
          .hero-tooth { display: block; }
        }

        @media (min-width: 1024px) {
          .hero-inner {
            padding-top: calc(80px + 3rem);
          }
        }
      `}</style>
    </section>
  );
}

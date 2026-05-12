"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const WA = "https://api.whatsapp.com/send/?phone=5521982516991";

const cases = [
  {
    id: 1,
    treatment: "Aparelho Ortodôntico",
    description: "Correção do alinhamento dental com aparelho fixo estético. Resultado funcional e visual transformador.",
    before: "/images/aparelho-antes.png",
    after:  "/images/aparelho-depois.png",
  },
  {
    id: 2,
    treatment: "Preenchimento Labial",
    description: "Harmonização labial com ácido hialurônico para lábios mais volumosos, simétricos e naturais.",
    before: "/images/preenchimento-antes.png",
    after:  "/images/preenchimento-depois.png",
  },
  {
    id: 3,
    treatment: "Reabilitação Dentária",
    description: "Reconstrução completa da função e estética dental com próteses, implantes e facetas de alta qualidade.",
    before: "/images/reabilitacao-antes.png",
    after:  "/images/reabilitacao-depois.png",
  },
];

/* ─────────────────────────────────────────────────────────────
   Slider otimizado:
   - Atualiza o DOM diretamente via refs (sem setState no drag)
   - Sem re-render durante o arrasto → zero travamento
   - Mantém o mesmo visual: imagem "antes" sobreposta com clip-path
───────────────────────────────────────────────────────────── */
function Slider({ before, after, label }: { before: string; after: string; label: string }) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const beforeImgRef  = useRef<HTMLImageElement>(null);
  const lineRef       = useRef<HTMLDivElement>(null);
  const isDragging    = useRef(false);
  const posRef        = useRef(50); // posição atual em %

  /* aplica a posição diretamente no DOM — sem setState */
  const applyPos = useCallback((pct: number) => {
    const clamped = Math.max(2, Math.min(98, pct));
    posRef.current = clamped;

    if (beforeImgRef.current) {
      beforeImgRef.current.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
    }
    if (lineRef.current) {
      lineRef.current.style.left = `${clamped}%`;
    }
  }, []);

  const getPos = useCallback((clientX: number) => {
    if (!containerRef.current) return posRef.current;
    const rect = containerRef.current.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }, []);

  /* mouse */
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    applyPos(getPos(e.clientX));
  }, [applyPos, getPos]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      applyPos(getPos(e.clientX));
    };
    const onMouseUp = () => { isDragging.current = false; };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseup",   onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   onMouseUp);
    };
  }, [applyPos, getPos]);

  /* touch */
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    applyPos(getPos(e.touches[0].clientX));
  }, [applyPos, getPos]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    applyPos(getPos(e.touches[0].clientX));
  }, [applyPos, getPos]);

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      style={{
        position: "relative",
        aspectRatio: "4/3",
        borderRadius: "14px",
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
        WebkitUserSelect: "none",
        border: "1px solid #d4e8f0",
        background: "#e8f6fa",
        touchAction: "none",
      }}
    >
      {/* DEPOIS — camada de baixo, sempre visível */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={after}
        alt={`Depois — ${label}`}
        draggable={false}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {/* ANTES — camada de cima, clip-path controlado via ref */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={beforeImgRef}
        src={before}
        alt={`Antes — ${label}`}
        draggable={false}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          clipPath: "inset(0 50% 0 0)",
          pointerEvents: "none",
          willChange: "clip-path",
        }}
      />

      {/* linha divisória — posição controlada via ref */}
      <div
        ref={lineRef}
        style={{
          position: "absolute", top: 0, bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "3px",
          background: "#ffffff",
          boxShadow: "0 0 8px rgba(0,0,0,0.25)",
          zIndex: 10,
          pointerEvents: "none",
          willChange: "left",
        }}
      >
        {/* handle */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "2.75rem", height: "2.75rem",
          background: "#ffffff", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 16px rgba(0,0,0,0.18)",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a6b8a" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6"/>
            <polyline points="9 18 3 12 9 6" transform="translate(6,0) scale(-1,1) translate(-6,0)"/>
          </svg>
        </div>
      </div>

      {/* labels */}
      <span style={{
        position: "absolute", top: "0.75rem", left: "0.75rem", zIndex: 11,
        background: "rgba(255,255,255,0.92)", borderRadius: "6px",
        padding: "0.2rem 0.6rem",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        fontSize: "0.6875rem", fontWeight: 600, color: "#5a7a8a",
        letterSpacing: "0.06em", textTransform: "uppercase",
        pointerEvents: "none",
      }}>
        Antes
      </span>
      <span style={{
        position: "absolute", top: "0.75rem", right: "0.75rem", zIndex: 11,
        background: "#1a6b8a", borderRadius: "6px",
        padding: "0.2rem 0.6rem",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        fontSize: "0.6875rem", fontWeight: 600, color: "#ffffff",
        letterSpacing: "0.06em", textTransform: "uppercase",
        pointerEvents: "none",
      }}>
        Depois
      </span>
    </div>
  );
}

export function BeforeAfter() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [active, setActive] = useState(0);

  return (
    <section id="resultados" ref={ref} className="section-py-lg" style={{ background: "#f8fbfc" }}>
      <div className="container-xl">

        {/* header */}
        <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "0.875rem" }}
          >
            <div style={{ width: "2.5rem", height: "2px", background: "#1a6b8a", borderRadius: "2px" }} />
            <span style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.75rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a6b8a",
            }}>
              Resultados Reais
            </span>
            <div style={{ width: "2.5rem", height: "2px", background: "#1a6b8a", borderRadius: "2px" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600, color: "#1a2e3a",
              letterSpacing: "-0.02em", marginBottom: "0.625rem",
            }}
          >
            Transformações que{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #1a6b8a 0%, #4db8d4 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              falam por si.
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.18 }}
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.9375rem", color: "#5a7a8a",
            }}
          >
            Arraste o divisor para comparar antes e depois.
          </motion.p>
        </div>

        {/* tabs */}
        <div style={{ display: "flex", gap: "0.625rem", justifyContent: "center", marginBottom: "2rem", flexWrap: "wrap" }}>
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? "#1a6b8a" : "#ffffff",
                color: active === i ? "#ffffff" : "#5a7a8a",
                border: `1px solid ${active === i ? "#1a6b8a" : "#d4e8f0"}`,
                borderRadius: "8px", padding: "0.5rem 1.25rem",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.875rem", fontWeight: 500,
                cursor: "pointer", transition: "all 0.2s",
              }}
            >
              {c.treatment}
            </button>
          ))}
        </div>

        {/* slider + info */}
        <div className="ba-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", alignItems: "center" }}>
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
            <Slider
              before={cases[active].before}
              after={cases[active].after}
              label={cases[active].treatment}
            />
          </motion.div>

          <motion.div
            key={`info-${active}`}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="badge badge-primary" style={{ marginBottom: "0.875rem", display: "inline-flex" }}>
              Caso {cases[active].id} de {cases.length}
            </span>
            <h3 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.75rem", fontWeight: 600, color: "#1a2e3a", marginBottom: "0.625rem",
            }}>
              {cases[active].treatment}
            </h3>
            <p style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.9375rem", color: "#5a7a8a", lineHeight: 1.7, marginBottom: "1.25rem",
            }}>
              {cases[active].description}
            </p>
            <p style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.8125rem", color: "#8aa5b0", marginBottom: "1.5rem",
            }}>
              * Resultados de pacientes reais. Resultados podem variar.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <i className="bi bi-whatsapp" style={{ fontSize: "0.9rem" }} />
              Quero um resultado assim
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .ba-grid { grid-template-columns: 1.4fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

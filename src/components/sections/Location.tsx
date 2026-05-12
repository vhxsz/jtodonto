"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const clinics = [
  {
    id: "centro",
    name: "JT Odontologia — Centro",
    subtitle: "Unidade Centro · Nova Iguaçu",
    address: "Centro, Nova Iguaçu — RJ",
    phone: "(21) 98251-6991",
    whatsapp: "5521982516991",
    hours: [
      { day: "Segunda a Sexta", time: "08h às 18h" },
      { day: "Sábado",          time: "08h às 13h" },
      { day: "Domingo",         time: "Fechado" },
    ],
    /* Embed do Google Maps — Centro de Nova Iguaçu */
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.3!2d-43.4511!3d-22.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997b9e5c5c5c5c5%3A0x0!2sCentro%2C%20Nova%20Igua%C3%A7u%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000001",
    mapsLink: "https://maps.google.com/?q=Centro+Nova+Iguaçu+RJ",
    color: "#e8f6fa",
    accent: "#1a6b8a",
  },
  {
    id: "valverde",
    name: "JT Odontologia — Valverde",
    subtitle: "Unidade Valverde · Nova Iguaçu",
    address: "Bairro Valverde, Nova Iguaçu — RJ",
    phone: "(21) 2695-0926",
    whatsapp: "552126950926",
    hours: [
      { day: "Segunda a Sexta", time: "08h às 18h" },
      { day: "Sábado",          time: "08h às 13h" },
      { day: "Domingo",         time: "Fechado" },
    ],
    /* Embed do Google Maps — Valverde, Nova Iguaçu */
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.3!2d-43.4711!3d-22.7489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997b9e5c5c5c5c6%3A0x0!2sValverde%2C%20Nova%20Igua%C3%A7u%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000002",
    mapsLink: "https://maps.google.com/?q=Valverde+Nova+Iguaçu+RJ",
    color: "#f0f8e8",
    accent: "#2a7a4a",
  },
];

function MapCard({ clinic, inView }: { clinic: typeof clinics[0]; inView: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65 }}
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        border: "1px solid #d4e8f0",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(26,107,138,0.08)",
      }}
    >
      {/* mapa */}
      <div style={{ position: "relative", height: "280px" }}>
        {!loaded && (
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(135deg, ${clinic.color} 0%, #f0f9fb 100%)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: "0.75rem", zIndex: 1,
          }}>
            <div style={{
              width: "2.5rem", height: "2.5rem", borderRadius: "50%",
              border: `3px solid ${clinic.color}`,
              borderTopColor: clinic.accent,
              animation: "spin 0.8s linear infinite",
            }} />
            <span style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.8125rem", color: "#8aa5b0",
            }}>
              Carregando mapa…
            </span>
          </div>
        )}
        <iframe
          src={clinic.mapSrc}
          width="100%" height="100%"
          style={{
            border: "none", display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
          allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Localização ${clinic.name}`}
          onLoad={() => setLoaded(true)}
        />

        {/* badge sobre o mapa */}
        <div style={{
          position: "absolute", top: "0.875rem", left: "0.875rem",
          background: "#ffffff", borderRadius: "10px",
          padding: "0.5rem 0.875rem",
          boxShadow: "0 4px 16px rgba(26,107,138,0.14)",
          border: "1px solid #d4e8f0",
          display: "flex", alignItems: "center", gap: "0.5rem",
          zIndex: 2,
        }}>
          <div style={{
            width: "1.5rem", height: "1.5rem", borderRadius: "6px",
            background: clinic.accent,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", flexShrink: 0,
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <span style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "0.6875rem", fontWeight: 700, color: "#1a2e3a",
          }}>
            {clinic.subtitle}
          </span>
        </div>

        {/* botão abrir maps */}
        <a
          href={clinic.mapsLink}
          target="_blank" rel="noopener noreferrer"
          style={{
            position: "absolute", bottom: "0.875rem", right: "0.875rem",
            background: "#ffffff", borderRadius: "8px",
            padding: "0.4rem 0.75rem",
            boxShadow: "0 4px 14px rgba(26,107,138,0.14)",
            border: "1px solid #d4e8f0",
            display: "flex", alignItems: "center", gap: "0.3rem",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "0.6875rem", fontWeight: 600, color: clinic.accent,
            textDecoration: "none", transition: "all 0.2s", zIndex: 2,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = clinic.color; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
          Abrir no Maps
        </a>
      </div>

      {/* info */}
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: "1rem", fontWeight: 700, color: "#1a2e3a",
          marginBottom: "1rem",
        }}>
          {clinic.name}
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.25rem" }}>
          {/* endereço */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={clinic.accent} strokeWidth="2" style={{ marginTop: "2px", flexShrink: 0 }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.875rem", color: "#5a7a8a",
            }}>
              {clinic.address}
            </span>
          </div>

          {/* telefone */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={clinic.accent} strokeWidth="2" style={{ flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a
              href={`tel:+${clinic.whatsapp}`}
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.875rem", fontWeight: 600, color: "#1a2e3a",
                textDecoration: "none",
              }}
            >
              {clinic.phone}
            </a>
          </div>

          {/* horário resumido */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={clinic.accent} strokeWidth="2" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.875rem", color: "#5a7a8a",
            }}>
              Seg–Sex: 08h–18h · Sáb: 08h–13h
            </span>
          </div>
        </div>

        {/* horários detalhados */}
        <div style={{
          background: clinic.color,
          borderRadius: "10px",
          padding: "0.875rem 1rem",
          marginBottom: "1.25rem",
          border: `1px solid ${clinic.accent}20`,
        }}>
          {clinic.hours.map((h) => (
            <div
              key={h.day}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingBottom: "0.375rem", marginBottom: "0.375rem",
                borderBottom: "1px solid rgba(26,107,138,0.07)",
              }}
            >
              <span style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.8125rem", color: "#1a2e3a",
              }}>
                {h.day}
              </span>
              <span style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.8125rem", fontWeight: 600,
                color: h.time === "Fechado" ? "#c0507a" : clinic.accent,
                background: h.time === "Fechado" ? "rgba(192,80,122,0.08)" : `${clinic.accent}14`,
                padding: "0.1rem 0.5rem", borderRadius: "100px",
              }}>
                {h.time}
              </span>
            </div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <a
          href={`https://wa.me/${clinic.whatsapp}`}
          target="_blank" rel="noopener noreferrer"
          className="btn btn-primary"
          style={{
            width: "100%", justifyContent: "center",
            background: clinic.accent,
            boxShadow: `0 4px 14px ${clinic.accent}40`,
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Agendar via WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

export function Location() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [activeTab, setActiveTab] = useState<"centro" | "valverde">("centro");

  return (
    <section id="localizacao" ref={ref} className="section-py-lg" style={{ background: "#f8fbfc" }}>
      <div className="container-xl">

        {/* header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}
          >
            <div style={{ width: "2.5rem", height: "2px", background: "#1a6b8a", borderRadius: "2px" }} />
            <span style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.75rem", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a6b8a",
            }}>
              Nossas Unidades
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600, letterSpacing: "-0.02em",
              color: "#1a2e3a", lineHeight: 1.1, marginBottom: "0.5rem",
            }}
          >
            Duas unidades em{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #1a6b8a 0%, #4db8d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Nova Iguaçu.
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.9375rem", color: "#5a7a8a",
            }}
          >
            Escolha a unidade mais próxima de você e agende sua avaliação.
          </motion.p>
        </div>

        {/* tabs mobile */}
        <div className="loc-tabs" style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
          {clinics.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id as "centro" | "valverde")}
              style={{
                flex: 1,
                padding: "0.625rem 1rem",
                borderRadius: "10px",
                border: `1px solid ${activeTab === c.id ? c.accent : "#d4e8f0"}`,
                background: activeTab === c.id ? c.color : "#ffffff",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.875rem", fontWeight: activeTab === c.id ? 600 : 400,
                color: activeTab === c.id ? c.accent : "#5a7a8a",
                cursor: "pointer", transition: "all 0.2s",
              }}
            >
              {c.id === "centro" ? "Centro" : "Valverde"}
            </button>
          ))}
        </div>

        {/* desktop: ambos lado a lado | mobile: tab ativo */}
        <div className="loc-grid">
          {/* desktop: mostra os dois */}
          <div className="loc-both">
            {clinics.map((c) => (
              <MapCard key={c.id} clinic={c} inView={inView} />
            ))}
          </div>

          {/* mobile: mostra só o ativo */}
          <div className="loc-single">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
              >
                <MapCard
                  clinic={clinics.find((c) => c.id === activeTab)!}
                  inView={inView}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        .loc-tabs  { display: flex; }
        .loc-both  { display: none; }
        .loc-single{ display: block; }

        @media (min-width: 768px) {
          .loc-tabs   { display: none; }
          .loc-both   { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
          .loc-single { display: none; }
        }
      `}</style>
    </section>
  );
}

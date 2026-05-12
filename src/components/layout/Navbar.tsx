"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA = "https://api.whatsapp.com/send/?phone=5521982516991";

const navLinks = [
  { label: "Sobre",         href: "#sobre",         icon: "bi-house" },
  { label: "Tratamentos",   href: "#tratamentos",   icon: "bi-stars" },
  { label: "Profissionais", href: "#profissionais", icon: "bi-people" },
  { label: "Resultados",    href: "#resultados",    icon: "bi-images" },
  { label: "Localização",   href: "#localizacao",   icon: "bi-geo-alt" },
  { label: "Contato",       href: "#contato",       icon: "bi-chat-dots" },
];

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const [pillStyle,  setPillStyle]  = useState({ left: 0, width: 0, opacity: 0 });
  const navRef  = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      let current = "";
      navLinks.forEach((l) => {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= 130) current = l.href;
      });
      setActiveHref(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const idx = navLinks.findIndex((l) => l.href === activeHref);
    const btn = btnRefs.current[idx];
    if (btn && navRef.current) {
      const nr = navRef.current.getBoundingClientRect();
      const br = btn.getBoundingClientRect();
      setPillStyle({ left: br.left - nr.left, width: br.width, opacity: 1 });
    } else {
      setPillStyle((p) => ({ ...p, opacity: 0 }));
    }
  }, [activeHref]);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.93)",
          backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid #d4e8f0" : "1px solid rgba(212,232,240,0.5)",
          boxShadow: scrolled ? "0 2px 24px rgba(26,107,138,0.09)" : "none",
          transition: "all 0.35s ease",
          padding: scrolled ? "0.55rem 0" : "0.9rem 0",
        }}
      >
        <div className="container-xl" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>

          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.625rem", flexShrink: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="JT Odontologia"
              style={{
                height: "38px",
                width: "auto",
                objectFit: "contain",
                borderRadius: "10px",
                display: "block",
              }}
              onError={(e) => {
                /* fallback: ícone de dente */
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = "none";
                const fallback = el.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            {/* fallback visível só se logo falhar */}
            <div style={{
              display: "none",
              width: "2.25rem", height: "2.25rem", borderRadius: "10px",
              background: "linear-gradient(135deg, #1a6b8a 0%, #4db8d4 100%)",
              alignItems: "center", justifyContent: "center",
              color: "#fff", boxShadow: "0 2px 10px rgba(26,107,138,0.28)", flexShrink: 0,
            }}>
              <i className="bi bi-tooth" style={{ fontSize: "1rem" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.25rem", fontWeight: 700,
                color: "#1a6b8a", letterSpacing: "0.02em", lineHeight: 1.15,
              }}>
                JT Odontologia
              </span>
              <span style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.55rem", fontWeight: 500,
                color: "#8aa5b0", letterSpacing: "0.2em", textTransform: "uppercase",
              }}>
                Nova Iguaçu · RJ
              </span>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <nav
            ref={navRef}
            className="nav-desktop"
            style={{ position: "relative", display: "flex", alignItems: "center" }}
          >
            {/* pill deslizante */}
            <div style={{
              position: "absolute", top: "50%", transform: "translateY(-50%)",
              height: "2rem", borderRadius: "7px",
              background: "#e8f6fa", border: "1px solid rgba(26,107,138,0.13)",
              pointerEvents: "none",
              transition: "left 0.28s cubic-bezier(.4,0,.2,1), width 0.28s cubic-bezier(.4,0,.2,1), opacity 0.2s",
              left: pillStyle.left, width: pillStyle.width, opacity: pillStyle.opacity, zIndex: 0,
            }} />

            {navLinks.map((link, i) => {
              const active = activeHref === link.href;
              return (
                <button
                  key={link.href}
                  ref={(el) => { btnRefs.current[i] = el; }}
                  onClick={() => go(link.href)}
                  style={{
                    position: "relative", zIndex: 1,
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "0.78rem", fontWeight: active ? 600 : 500,
                    color: active ? "#1a6b8a" : "#5a7a8a",
                    letterSpacing: "0.03em",
                    padding: "0.5rem 0.8rem",
                    borderRadius: "7px",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                    display: "flex", alignItems: "center", gap: "0.35rem",
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = "#1a6b8a"; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = "#5a7a8a"; }}
                >
                  <i className={link.icon} style={{ fontSize: "0.85rem" }} />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="nav-cta" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <a
              href="tel:+5521982516991"
              style={{
                display: "flex", alignItems: "center", gap: "0.35rem",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.8rem", fontWeight: 500, color: "#5a7a8a",
                textDecoration: "none", padding: "0.45rem 0.7rem",
                borderRadius: "8px", transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#1a6b8a"; e.currentTarget.style.background = "#e8f6fa"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#5a7a8a"; e.currentTarget.style.background = "transparent"; }}
            >
              <i className="bi bi-telephone" style={{ fontSize: "0.85rem" }} />
              (21) 98251-6991
            </a>
            <a
              href={WA}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <i className="bi bi-whatsapp" style={{ fontSize: "0.9rem" }} />
              Agendar
            </a>
          </div>

          {/* ── Hamburger mobile ── */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            style={{
              background: menuOpen ? "#e8f6fa" : "none",
              border: `1.5px solid ${menuOpen ? "#1a6b8a" : "#d4e8f0"}`,
              borderRadius: "10px", cursor: "pointer",
              padding: "0.45rem 0.6rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", color: "#1a6b8a",
            }}
          >
            <i
              className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}
              style={{ fontSize: "1.25rem", lineHeight: 1 }}
            />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="bd"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 98, background: "rgba(26,46,58,0.28)", backdropFilter: "blur(3px)" }}
            />

            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: "fixed",
                top: scrolled ? "54px" : "68px",
                left: "0.875rem", right: "0.875rem",
                zIndex: 99,
                background: "#ffffff",
                borderRadius: "18px",
                border: "1px solid #d4e8f0",
                boxShadow: "0 20px 60px rgba(26,107,138,0.18)",
                overflow: "hidden",
              }}
            >
              {/* cabeçalho do drawer */}
              <div style={{
                padding: "0.875rem 1.125rem",
                borderBottom: "1px solid #eef4f7",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "#f8fbfc",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo.png"
                    alt="JT Odontologia"
                    style={{
                      height: "28px",
                      width: "auto",
                      objectFit: "contain",
                      borderRadius: "7px",
                      display: "block",
                    }}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                  />
                  <span style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "0.875rem", fontWeight: 700, color: "#1a2e3a",
                  }}>
                    JT Odontologia
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "#8aa5b0", padding: "0.25rem" }}
                >
                  <i className="bi bi-x-lg" style={{ fontSize: "1rem" }} />
                </button>
              </div>

              {/* links */}
              <nav style={{ padding: "0.5rem 0.625rem" }}>
                {navLinks.map((link, i) => {
                  const active = activeHref === link.href;
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => go(link.href)}
                      style={{
                        width: "100%",
                        background: active ? "#e8f6fa" : "none",
                        border: "none", cursor: "pointer", textAlign: "left",
                        padding: "0.75rem 0.875rem", borderRadius: "10px",
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontSize: "0.9375rem", fontWeight: active ? 600 : 400,
                        color: active ? "#1a6b8a" : "#1a2e3a",
                        display: "flex", alignItems: "center", gap: "0.75rem",
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "#f4f9fb"; }}
                      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "none"; }}
                    >
                      <i
                        className={link.icon}
                        style={{ fontSize: "1rem", color: active ? "#1a6b8a" : "#8aa5b0", width: "1.25rem", textAlign: "center" }}
                      />
                      <span style={{ flex: 1 }}>{link.label}</span>
                      {active && <i className="bi bi-chevron-right" style={{ fontSize: "0.75rem", color: "#1a6b8a" }} />}
                    </motion.button>
                  );
                })}
              </nav>

              {/* CTAs */}
              <div style={{
                padding: "0.75rem 1rem 1rem",
                borderTop: "1px solid #eef4f7",
                display: "flex", flexDirection: "column", gap: "0.5rem",
              }}>
                <a
                  href={WA}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ justifyContent: "center" }}
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="bi bi-whatsapp" style={{ fontSize: "1rem" }} />
                  Agendar Avaliação Gratuita
                </a>
                <a
                  href="tel:+5521982516991"
                  className="btn btn-outline btn-sm"
                  style={{ justifyContent: "center" }}
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="bi bi-telephone" style={{ fontSize: "0.875rem" }} />
                  (21) 98251-6991
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

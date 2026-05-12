"use client";

const WA = "https://api.whatsapp.com/send/?phone=5521982516991";

const footerLinks = {
  Tratamentos: [
    "Aparelho Ortodôntico",
    "Preenchimento Labial",
    "Clareamento Dental",
    "Implantes Dentários",
    "Smile Design",
    "Reabilitação Oral",
  ],
  Clínica: [
    "Sobre Nós",
    "Nossa Equipe",
    "Tecnologia",
    "Resultados",
    "Depoimentos",
    "Localização",
  ],
};

export function Footer() {
  return (
    <footer style={{
      background: "#1a2e3a",
      color: "rgba(255,255,255,0.7)",
      /* sem arredondamento — footer reto */
      borderRadius: "0",
      boxShadow: "none",
      marginTop: "0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* decoração de fundo */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "320px", height: "320px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(77,184,212,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-xl" style={{ paddingTop: "3.5rem" }}>

        {/* grid principal */}
        <div className="footer-grid" style={{
          display: "grid", gridTemplateColumns: "1fr",
          gap: "2.5rem", paddingBottom: "2.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="JT Odontologia"
                style={{
                  height: "48px",
                  width: "auto",
                  objectFit: "contain",
                  borderRadius: "12px",
                  display: "block",
                  background: "rgba(255,255,255,0.12)",
                  padding: "5px 8px",
                }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
            </div>

            <p style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.875rem", lineHeight: 1.72,
              color: "rgba(255,255,255,0.5)", maxWidth: "270px", marginBottom: "1.5rem",
            }}>
              Odontologia e estética facial com foco em saúde bucal, beleza e bem-estar.
              Duas unidades em Nova Iguaçu para melhor atender você.
            </p>

            {/* redes sociais */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {[
                { name: "Instagram", href: "https://instagram.com", icon: "bi-instagram" },
                { name: "WhatsApp", href: WA, icon: "bi-whatsapp" },
                { name: "Facebook", href: "https://facebook.com", icon: "bi-facebook" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{
                    width: "2.25rem", height: "2.25rem", borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.45)", textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(77,184,212,0.5)"; e.currentTarget.style.color = "#4db8d4"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.45)"; }}
                >
                  <i className={s.icon} style={{ fontSize: "0.9rem" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <h4 style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.6875rem", fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)", marginBottom: "1rem",
              }}>
                {cat}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontSize: "0.875rem", color: "rgba(255,255,255,0.5)",
                        textDecoration: "none", transition: "color 0.2s",
                        display: "flex", alignItems: "center", gap: "0.375rem",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      <i className="bi bi-chevron-right" style={{ fontSize: "0.6rem", opacity: 0.5 }} />
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contato */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.6875rem", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)", marginBottom: "1rem",
            }}>
              Nossas Unidades
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Unidade Centro */}
              <div>
                <div style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.75rem", fontWeight: 700,
                  color: "#4db8d4", marginBottom: "0.5rem", letterSpacing: "0.06em",
                }}>
                  <i className="bi bi-geo-alt-fill" style={{ marginRight: "0.3rem" }} />
                  Unidade Centro
                </div>
                {[
                  { icon: "bi-map", text: "Av. Gov. Roberto Silveira, 470 — Sala 607" },
                  { icon: "bi-building", text: "Nova Iguaçu, RJ" },
                  { icon: "bi-whatsapp", text: "(21) 98251-6991", href: WA },
                  { icon: "bi-clock", text: "Seg–Sex: 8h–18h · Sáb: 8h–13h" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.375rem" }}>
                    <i className={item.icon} style={{ color: "#4db8d4", fontSize: "0.8rem", marginTop: "3px", flexShrink: 0 }} />
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", lineHeight: 1.5 }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Unidade Valverde */}
              <div>
                <div style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.75rem", fontWeight: 700,
                  color: "#4db8d4", marginBottom: "0.5rem", letterSpacing: "0.06em",
                }}>
                  <i className="bi bi-geo-alt-fill" style={{ marginRight: "0.3rem" }} />
                  Unidade Valverde
                </div>
                {[
                  { icon: "bi-map", text: "Bairro Valverde" },
                  { icon: "bi-building", text: "Nova Iguaçu, RJ" },
                  { icon: "bi-telephone", text: "(21) 2695-0926", href: "tel:+552126950926" },
                  { icon: "bi-clock", text: "Seg–Sex: 8h–18h · Sáb: 8h–13h" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.375rem" }}>
                    <i className={item.icon} style={{ color: "#4db8d4", fontSize: "0.8rem", marginTop: "3px", flexShrink: 0 }} />
                    {item.href ? (
                      <a href={item.href}
                        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", lineHeight: 1.5 }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          gap: "0.75rem", padding: "1.25rem 0",
        }}>
          <p style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "0.75rem", color: "rgba(255,255,255,0.25)",
          }}>
            © {new Date().getFullYear()} JT Odontologia. Todos os direitos reservados.
          </p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {["Política de Privacidade", "Termos de Uso"].map((l) => (
              <a key={l} href="#"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.75rem", color: "rgba(255,255,255,0.25)",
                  textDecoration: "none", transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.4fr 1fr 1fr 1.3fr !important; }
        }
      `}</style>
    </footer>
  );
}

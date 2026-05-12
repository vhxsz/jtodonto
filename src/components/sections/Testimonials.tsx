"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────
   Avatares SVG mock — rostos neutros e variados
   Cada avatar usa uma paleta de pele diferente
   para representar diversidade brasileira
───────────────────────────────────────────── */
function Avatar({ seed, size = 40 }: { seed: number; size?: number }) {
  // 6 variações de tom de pele + cabelo
  const variants = [
    { skin: "#FDDBB4", hair: "#3B2314", hairStyle: "short" },
    { skin: "#C68642", hair: "#1A0A00", hairStyle: "curly" },
    { skin: "#F1C27D", hair: "#2C1810", hairStyle: "medium" },
    { skin: "#8D5524", hair: "#0D0D0D", hairStyle: "short" },
    { skin: "#FDDBB4", hair: "#4A3728", hairStyle: "long" },
    { skin: "#E0AC69", hair: "#1C1008", hairStyle: "curly" },
  ];
  const v = variants[seed % variants.length];
  const r = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: "50%", flexShrink: 0 }}
    >
      {/* fundo */}
      <circle cx="20" cy="20" r="20" fill="#f0f4f8" />

      {/* corpo / ombros */}
      <ellipse cx="20" cy="34" rx="11" ry="8" fill={v.skin} opacity="0.7" />

      {/* pescoço */}
      <rect x="17" y="25" width="6" height="5" rx="2" fill={v.skin} />

      {/* rosto */}
      <ellipse cx="20" cy="19" rx="8" ry="9" fill={v.skin} />

      {/* olhos */}
      <ellipse cx="16.5" cy="18" rx="1.2" ry="1.4" fill="#2C1810" />
      <ellipse cx="23.5" cy="18" rx="1.2" ry="1.4" fill="#2C1810" />
      {/* brilho olhos */}
      <circle cx="17.1" cy="17.4" r="0.4" fill="#fff" />
      <circle cx="24.1" cy="17.4" r="0.4" fill="#fff" />

      {/* sobrancelhas */}
      <path d="M14.5 15.5 Q16.5 14.5 18.5 15.5" stroke={v.hair} strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M21.5 15.5 Q23.5 14.5 25.5 15.5" stroke={v.hair} strokeWidth="0.9" strokeLinecap="round" fill="none" />

      {/* nariz */}
      <path d="M19.5 20 Q20 22 20.5 20" stroke={v.skin} strokeWidth="1" fill="none" opacity="0.6" />

      {/* boca / sorriso */}
      <path d="M17 23 Q20 25.5 23 23" stroke="#C0706A" strokeWidth="1.1" strokeLinecap="round" fill="none" />

      {/* cabelo */}
      {v.hairStyle === "short" && (
        <path
          d="M12 18 Q12 9 20 9 Q28 9 28 18 Q26 12 20 12 Q14 12 12 18Z"
          fill={v.hair}
        />
      )}
      {v.hairStyle === "medium" && (
        <>
          <path
            d="M12 18 Q12 9 20 9 Q28 9 28 18 Q26 12 20 12 Q14 12 12 18Z"
            fill={v.hair}
          />
          <path d="M12 18 Q11 24 12 27" stroke={v.hair} strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M28 18 Q29 24 28 27" stroke={v.hair} strokeWidth="3" strokeLinecap="round" fill="none" />
        </>
      )}
      {v.hairStyle === "long" && (
        <>
          <path
            d="M12 18 Q12 9 20 9 Q28 9 28 18 Q26 12 20 12 Q14 12 12 18Z"
            fill={v.hair}
          />
          <path d="M12 18 Q10 26 11 32" stroke={v.hair} strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M28 18 Q30 26 29 32" stroke={v.hair} strokeWidth="4" strokeLinecap="round" fill="none" />
        </>
      )}
      {v.hairStyle === "curly" && (
        <>
          <ellipse cx="20" cy="11" rx="9" ry="5" fill={v.hair} />
          <ellipse cx="13" cy="15" rx="3" ry="4" fill={v.hair} />
          <ellipse cx="27" cy="15" rx="3" ry="4" fill={v.hair} />
          <ellipse cx="20" cy="9" rx="7" ry="4" fill={v.hair} />
        </>
      )}
    </svg>
  );
}

/* ─── tipos e dados ─── */
interface Testimonial {
  text: string;
  name: string;
  role: string;
  treatment: string;
  avatarSeed: number;
}

const testimonials: Testimonial[] = [
  {
    text: "A transformação foi além do que eu esperava. Não é só o sorriso que mudou — minha autoconfiança e presença mudaram completamente. A Dra. Taiane tem um olhar artístico único.",
    name: "Mariana Costa",
    role: "Empresária",
    treatment: "Lentes de Contato Dental",
    avatarSeed: 4,
  },
  {
    text: "Fiz implantes com o Dr. João Gilberto e o resultado é simplesmente perfeito. Ninguém acredita que são implantes. A tecnologia e o cuidado da equipe são incomparáveis.",
    name: "Rafael Mendes",
    role: "Executivo",
    treatment: "Implantes Dentários",
    avatarSeed: 0,
  },
  {
    text: "Como profissional de saúde, sou muito criteriosa. A clínica superou todas as minhas expectativas em higiene, tecnologia e resultado estético. Simplesmente impecável.",
    name: "Isabela Ferreira",
    role: "Médica",
    treatment: "Smile Design",
    avatarSeed: 2,
  },
  {
    text: "O planejamento digital foi incrível. Ver meu sorriso antes de fazer o tratamento me deu total segurança. O resultado ficou exatamente como planejado, ou melhor.",
    name: "Carlos Eduardo",
    role: "Advogado",
    treatment: "Clareamento + Facetas",
    avatarSeed: 1,
  },
  {
    text: "Fiz o preenchimento labial e ficou muito natural. Exatamente o que eu queria — volume sem exagero. A Dra. Taiane entendeu perfeitamente o que eu buscava.",
    name: "Fernanda Lima",
    role: "Designer",
    treatment: "Preenchimento Labial",
    avatarSeed: 5,
  },
  {
    text: "Coloquei aparelho e em poucos meses já vi diferença enorme. Atendimento super atencioso, sempre me explicando cada etapa. Recomendo demais a JT Odontologia!",
    name: "Lucas Oliveira",
    role: "Estudante",
    treatment: "Aparelho Ortodôntico",
    avatarSeed: 3,
  },
  {
    text: "Fiz reabilitação completa e recuperei minha autoestima. Equipe incrível, ambiente acolhedor e resultado que superou todas as expectativas. Muito grata!",
    name: "Ana Paula Souza",
    role: "Professora",
    treatment: "Reabilitação Dentária",
    avatarSeed: 2,
  },
  {
    text: "Clareamento dental feito com muito cuidado. Sem sensibilidade, resultado excelente. Já indiquei para toda a família. Profissionais de altíssimo nível.",
    name: "Roberto Alves",
    role: "Engenheiro",
    treatment: "Clareamento Dental",
    avatarSeed: 1,
  },
  {
    text: "Atendimento humanizado de verdade. Sentia muito medo de dentista e aqui me senti completamente à vontade. Resultado do tratamento foi além do esperado.",
    name: "Camila Nunes",
    role: "Nutricionista",
    treatment: "Tratamento Completo",
    avatarSeed: 4,
  },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

/* ─── card — cor neutra única ─── */
function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.li
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: "0 16px 40px rgba(26,46,58,0.1)",
        transition: { type: "spring", stiffness: 360, damping: 22 },
      }}
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #e4edf2",
        padding: "1.375rem 1.5rem",
        listStyle: "none",
        cursor: "default",
        userSelect: "none",
        boxShadow: "0 2px 8px rgba(26,46,58,0.05)",
      }}
    >
      {/* estrelas */}
      <div style={{ display: "flex", gap: "2px", marginBottom: "0.875rem" }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      <blockquote style={{ margin: 0, padding: 0 }}>
        <p style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: "0.875rem",
          color: "#3a4e5a",
          lineHeight: 1.72,
          marginBottom: "1.125rem",
        }}>
          &ldquo;{t.text}&rdquo;
        </p>

        <footer style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Avatar seed={t.avatarSeed} size={40} />
          <div style={{ minWidth: 0 }}>
            <cite style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.875rem", fontWeight: 600,
              color: "#1a2e3a", fontStyle: "normal",
              display: "block", whiteSpace: "nowrap",
              overflow: "hidden", textOverflow: "ellipsis",
            }}>
              {t.name}
            </cite>
            <span style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.75rem", color: "#7a9aaa",
              display: "block",
            }}>
              {t.role}
            </span>
            <span style={{
              display: "inline-block",
              marginTop: "0.25rem",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.6875rem", fontWeight: 500,
              color: "#1a6b8a",
              background: "#e8f6fa",
              padding: "0.1rem 0.5rem",
              borderRadius: "100px",
            }}>
              {t.treatment}
            </span>
          </div>
        </footer>
      </blockquote>
    </motion.li>
  );
}

/* ─── coluna scroll infinito ─── */
function TestimonialsColumn({
  items,
  duration = 14,
  className = "",
}: {
  items: Testimonial[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ overflow: "hidden", flex: 1, minWidth: 0 }}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        style={{
          display: "flex", flexDirection: "column",
          gap: "0.875rem",
          margin: 0, padding: 0,
          paddingBottom: "0.875rem",
        }}
      >
        {[0, 1].map((idx) => (
          <React.Fragment key={idx}>
            {items.map((t, i) => (
              <TestimonialCard key={`${idx}-${i}`} t={t} />
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
}

/* ─── seção ─── */
export function Testimonials() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="section-py-lg" style={{ background: "#f4f8fa" }}>
      <div className="container-xl">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "2.75rem" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            border: "1px solid #d4e8f0", borderRadius: "100px",
            padding: "0.25rem 1rem", background: "#ffffff",
            marginBottom: "1.125rem",
          }}>
            <span style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.75rem", fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a6b8a",
            }}>
              Depoimentos
            </span>
          </div>

          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600, letterSpacing: "-0.02em",
            color: "#1a2e3a", marginBottom: "0.75rem",
          }}>
            O que nossos{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #1a6b8a 0%, #4db8d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              pacientes dizem.
            </em>
          </h2>

          <p style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "0.9375rem", color: "#5a7a8a",
            maxWidth: "460px", margin: "0 auto", lineHeight: 1.7,
          }}>
            Histórias reais de quem transformou o sorriso e a autoestima com a JT Odontologia.
          </p>
        </motion.div>

        {/* colunas */}
        <div
          style={{
            display: "flex",
            gap: "0.875rem",
            maxHeight: "660px",
            overflow: "hidden",
            maskImage: "linear-gradient(to bottom, transparent, black 7%, black 93%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 7%, black 93%, transparent)",
          }}
        >
          <TestimonialsColumn items={col1} duration={17} />
          <TestimonialsColumn items={col2} duration={21} className="t-col2" />
          <TestimonialsColumn items={col3} duration={19} className="t-col3" />
        </div>
      </div>

      <style>{`
        .t-col2 { display: none; }
        .t-col3 { display: none; }
        @media (min-width: 640px)  { .t-col2 { display: block; } }
        @media (min-width: 1024px) { .t-col3 { display: block; } }
      `}</style>
    </section>
  );
}

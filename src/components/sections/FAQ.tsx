"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Quanto tempo dura o tratamento com lentes de contato dental?",
    a: "O processo completo leva de 2 a 3 semanas, dividido em 2 a 3 consultas. Na primeira, fazemos o planejamento digital e moldagem. Na segunda, você experimenta as lentes provisórias. Na terceira, instalamos as lentes definitivas de porcelana.",
  },
  {
    q: "As lentes de contato dental exigem desgaste dos dentes?",
    a: "Depende do caso. Utilizamos técnicas minimamente invasivas que, em muitos casos, não requerem nenhum desgaste dental. Após a avaliação, apresentamos o plano mais conservador possível para o seu caso específico.",
  },
  {
    q: "O clareamento dental causa sensibilidade?",
    a: "Com nosso protocolo exclusivo, a sensibilidade é mínima ou inexistente. Utilizamos géis de última geração com agentes dessensibilizantes e monitoramos cada sessão de perto.",
  },
  {
    q: "Quanto tempo duram os implantes dentários?",
    a: "Implantes de titânio de alta qualidade têm durabilidade vitalícia quando bem cuidados. Com higiene adequada e acompanhamento regular, os implantes duram décadas sem necessidade de substituição.",
  },
  {
    q: "Como funciona o planejamento digital do sorriso?",
    a: "Utilizamos software especializado para criar uma simulação digital do seu sorriso ideal. Você vê o resultado antes de qualquer procedimento, podendo fazer ajustes até ficar completamente satisfeito.",
  },
  {
    q: "A clínica atende planos odontológicos?",
    a: "Somos uma clínica particular especializada em odontologia estética de alto padrão. Não trabalhamos com planos odontológicos, pois isso nos permite utilizar os melhores materiais e tecnologias disponíveis.",
  },
  {
    q: "Vocês oferecem parcelamento?",
    a: "Sim. Oferecemos parcelamento em até 24x no cartão de crédito sem juros para tratamentos selecionados. Também trabalhamos com financiamento odontológico especializado.",
  },
];

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="section-py-lg"
      style={{ background: "var(--color-bg-soft)" }}
    >
      <div className="container-xl">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
        }}
          className="faq-grid"
        >
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}
            >
              <div style={{ width: "2.5rem", height: "2px", background: "var(--color-primary)", borderRadius: "2px" }} />
              <span style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
              }}>
                Dúvidas Frequentes
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "var(--color-text)",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Tire suas{" "}
              <em className="text-gradient" style={{ fontStyle: "italic" }}>dúvidas.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.9375rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Reunimos as perguntas mais frequentes. Não encontrou o que procura?
              Entre em contato conosco.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Falar com Especialista
              </a>
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                className="accordion-item"
              >
                <button
                  className="accordion-trigger"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span style={{ paddingRight: "1rem" }}>{faq.q}</span>
                  <span className={`accordion-icon ${open === i ? "open" : ""}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p style={{
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontSize: "0.9375rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.7,
                        paddingBottom: "1.25rem",
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .faq-grid { grid-template-columns: 1fr 1.6fr !important; }
        }
      `}</style>
    </section>
  );
}

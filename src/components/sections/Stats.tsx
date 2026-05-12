"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { value: 2000, suffix: "+", label: "Sorrisos Transformados" },
  { value: 15,   suffix: "+", label: "Anos de Experiência" },
  { value: 98,   suffix: "%", label: "Índice de Satisfação" },
  { value: 5,    suffix: ".0", label: "Avaliação Google" },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      style={{
        background: "var(--color-primary)",
        padding: "3.5rem 0",
      }}
    >
      <div className="container-xl">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "0",
        }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                textAlign: "center",
                padding: "2rem 1.5rem",
                borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.15)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.15)" : "none",
              }}
            >
              <div style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "#ffffff",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                <CountUp end={s.value} suffix={s.suffix} duration={2000} />
              </div>
              <div style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.75)",
                fontWeight: 400,
                letterSpacing: "0.04em",
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .stats-grid > div {
            border-bottom: none !important;
          }
          .stats-grid > div:last-child {
            border-right: none !important;
          }
          .stats-grid > div:nth-child(2) {
            border-right: 1px solid rgba(255,255,255,0.15) !important;
          }
          .stats-grid > div:nth-child(3) {
            border-right: 1px solid rgba(255,255,255,0.15) !important;
          }
        }
      `}</style>
    </section>
  );
}

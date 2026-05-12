"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return Math.min(prev + Math.random() * 18 + 6, 100);
      });
    }, 70);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center" }}
          >
            {/* Tooth icon */}
            <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
              <svg width="48" height="48" viewBox="0 0 100 100" fill="var(--color-primary)" opacity="0.8">
                <path d="M50 5 C30 5, 15 20, 15 38 C15 55, 22 65, 28 75 C32 82, 35 90, 40 90 C44 90, 46 85, 50 85 C54 85, 56 90, 60 90 C65 90, 68 82, 72 75 C78 65, 85 55, 85 38 C85 20, 70 5, 50 5 Z"/>
              </svg>
            </div>
            <div style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "var(--color-primary)",
              letterSpacing: "0.06em",
              marginBottom: "4px",
            }}>
              Taiane & João Valadares
            </div>
            <div style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 500,
              color: "var(--color-text-light)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>
              Odontologia Estética
            </div>
          </motion.div>

          {/* Progress bar */}
          <div style={{
            width: "160px",
            height: "3px",
            background: "var(--color-border)",
            borderRadius: "2px",
            overflow: "hidden",
          }}>
            <motion.div
              style={{
                height: "100%",
                background: "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                borderRadius: "2px",
                width: `${Math.min(progress, 100)}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

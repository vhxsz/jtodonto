"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  once = true,
  tag: Tag = "p",
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
          className={className}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-5% 0px" });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...directionMap[direction] }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

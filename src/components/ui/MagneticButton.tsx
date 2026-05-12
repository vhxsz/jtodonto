"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "gold",
  size = "md",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    gold: "bg-gradient-to-r from-[#c9a96e] via-[#e8c98a] to-[#c9a96e] text-[#0a0a0a] hover:shadow-[0_0_40px_rgba(201,169,110,0.4)]",
    outline: "border border-[rgba(201,169,110,0.4)] text-[#c9a96e] hover:border-[#c9a96e] hover:bg-[rgba(201,169,110,0.05)]",
    ghost: "text-[#c9a96e] hover:bg-[rgba(201,169,110,0.05)]",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-xs tracking-[0.15em]",
    md: "px-8 py-3.5 text-xs tracking-[0.2em]",
    lg: "px-12 py-5 text-sm tracking-[0.2em]",
  };

  const baseClass = cn(
    "relative inline-flex items-center justify-center font-sans-premium uppercase font-medium transition-all duration-300 rounded-none overflow-hidden group",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="magnetic-btn"
    >
      <span className={baseClass} onClick={onClick}>
        {/* Shimmer effect */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
        <span className="relative z-10">{children}</span>
      </span>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}

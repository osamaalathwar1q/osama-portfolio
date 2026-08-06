"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: "blue" | "cyan" | "purple" | "none";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glowColor = "blue",
  ...props
}) => {
  const baseClasses =
    "relative rounded-2xl p-6 overflow-hidden backdrop-blur-xl border border-slate-800/80 bg-slate-900/50 text-slate-100 shadow-xl transition-all duration-300";

  const hoverClasses = hoverEffect
    ? "hover:border-cyan-500/30 hover:bg-slate-900/80 hover:-translate-y-1 hover:shadow-2xl"
    : "";

  const glowClasses = {
    blue: "hover:shadow-blue-500/10",
    cyan: "hover:shadow-cyan-500/10",
    purple: "hover:shadow-purple-500/10",
    none: "",
  };

  return (
    <motion.div
      className={twMerge(clsx(baseClasses, hoverClasses, glowClasses[glowColor], className))}
      {...props}
    >
      {/* Background Subtle Gradient Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
      {children}
    </motion.div>
  );
};

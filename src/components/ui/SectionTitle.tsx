"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "right" | "left";
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
}) => {
  const alignment = {
    center: "text-center items-center",
    right: "text-right items-start",
    left: "text-left items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col mb-12 sm:mb-16 ${alignment[align]}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-blue-500/10 border border-blue-500/20 text-[#06B6D4] mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        {title.split(" ").map((word, idx) => (
          <span key={idx} className={idx === 1 ? "gradient-text px-1.5 inline-block" : ""}>
            {word}{" "}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

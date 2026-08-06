"use client";

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  className,
  href,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2.5 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#06B6D4] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white shadow-lg shadow-[#2563EB]/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-slate-800/80 text-slate-100 hover:bg-slate-700/80 border border-slate-700/60 hover:border-slate-500 hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border border-[#06B6D4]/40 text-[#06B6D4] hover:bg-[#06B6D4]/10 hover:border-[#06B6D4] hover:scale-[1.02] active:scale-[0.98]",
    glass:
      "glass-panel text-slate-200 hover:text-white hover:bg-slate-800/80 border-slate-700/50 hover:border-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  const combinedClasses = twMerge(
    clsx(baseStyles, variants[variant], sizes[size], className)
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
};

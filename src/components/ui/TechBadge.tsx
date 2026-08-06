import React from "react";

interface TechBadgeProps {
  name: string;
  variant?: "cyan" | "blue" | "purple" | "default";
  size?: "sm" | "md";
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  variant = "cyan",
  size = "sm",
}) => {
  const variants = {
    cyan: "bg-cyan-950/40 text-cyan-300 border-cyan-500/30 hover:border-cyan-400",
    blue: "bg-blue-950/40 text-blue-300 border-blue-500/30 hover:border-blue-400",
    purple: "bg-purple-950/40 text-purple-300 border-purple-500/30 hover:border-purple-400",
    default: "bg-slate-800/60 text-slate-300 border-slate-700 hover:border-slate-500",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-[11px]",
    md: "px-3.5 py-1.5 text-xs font-semibold",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-lg border font-medium transition-colors duration-200 ${variants[variant]} ${sizes[size]}`}
    >
      <span className="h-1 w-1 rounded-full bg-current opacity-70" />
      {name}
    </span>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Info, ShieldAlert, ArrowLeft } from "lucide-react";
import { Project } from "@/types";
import { TechBadge } from "./TechBadge";

interface ProjectCardProps {
  project: Project;
  onSelectModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectModal }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="group relative h-full flex flex-col rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden transition-all duration-300"
      >
        {/* Ambient Top Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

        {/* Project Thumbnail */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-950">
          <Image
            src={project.publicImagePath}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-110 transition-transform duration-700 filter contrast-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10">
            {project.isUnderDevelopment ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-950/80 border border-amber-500/50 text-amber-300 backdrop-blur-md shadow-md">
                <ShieldAlert className="h-3.5 w-3.5" />
                قيد التطوير
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-950/80 border border-cyan-500/40 text-cyan-300 backdrop-blur-md shadow-md">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                مشروع مكتمل
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
              {project.name}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <TechBadge key={idx} name={tech} variant={idx % 2 === 0 ? "cyan" : "default"} />
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] text-slate-400 self-center font-medium">
                +{project.technologies.length - 4} تقنيات
              </span>
            )}
          </div>

          {/* Card Footer Actions */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <span>{project.buttonText}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <button
                onClick={() => onSelectModal(project)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold hover:bg-amber-900/60 transition-all duration-300"
              >
                <span>قيد التطوير (التفاصيل)</span>
                <Info className="h-3.5 w-3.5" />
              </button>
            )}

            <button
              onClick={() => onSelectModal(project)}
              className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors text-xs font-medium flex items-center gap-1"
              title="عرض التفاصيل الكاملة"
            >
              <span>التفاصيل</span>
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

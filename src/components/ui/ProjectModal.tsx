"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldAlert, CheckCircle2, Layers, Cpu } from "lucide-react";
import { Project } from "@/types";
import { TechBadge } from "./TechBadge";
import { Button } from "./Button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080B12]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-950/40 z-10 my-8"
        >
          {/* Header Image Cover */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
            <Image
              src={project.publicImagePath}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 p-2.5 rounded-full bg-slate-950/70 border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors z-20"
              aria-label="إغلاق"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Status Badge on Image */}
            <div className="absolute bottom-4 right-6 z-10 flex items-center gap-2">
              {project.isUnderDevelopment ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 border border-amber-500/40 text-amber-300 backdrop-blur-md">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  قيد التطوير (Under Development)
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  جاهز ومنشور (Active Solution)
                </span>
              )}
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.name}
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="h-4 w-4 text-cyan-400" />
                  أبرز المزايا والوظائف البرمجية:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Cpu className="h-4 w-4 text-blue-400" />
                التقنيات وأدوات التطوير المستخدمة:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <TechBadge key={idx} name={tech} variant={idx % 2 === 0 ? "cyan" : "blue"} size="md" />
                ))}
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              {project.link ? (
                <Button
                  variant="primary"
                  size="md"
                  href={project.link}
                  icon={<ExternalLink className="h-4 w-4" />}
                >
                  زيارة رابط المشروع المباشر
                </Button>
              ) : (
                <div className="px-5 py-2.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-sm font-semibold flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4" />
                  <span>المشروع قيد التطوير - لا يوجد رابط خارجي حالياً</span>
                </div>
              )}

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white text-sm font-medium transition-colors"
              >
                إغلاق
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

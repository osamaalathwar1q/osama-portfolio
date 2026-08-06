"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Calendar, Award, CheckCircle2 } from "lucide-react";
import { Certificate } from "@/types";

interface CertificateLightboxProps {
  certificates: Certificate[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
  certificates,
  selectedIndex,
  onClose,
  onNavigate,
}) => {
  const isVisible = selectedIndex !== null && selectedIndex >= 0 && selectedIndex < certificates.length;
  const currentCert = isVisible ? certificates[selectedIndex!] : null;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    const nextIdx = (selectedIndex + 1) % certificates.length;
    onNavigate(nextIdx);
  }, [selectedIndex, certificates.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    const prevIdx = (selectedIndex - 1 + certificates.length) % certificates.length;
    onNavigate(prevIdx);
  }, [selectedIndex, certificates.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handleNext(); // RTL direction mapping
      if (e.key === "ArrowRight") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, handleNext, handlePrev, onClose]);

  if (!isVisible || !currentCert) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#05070C]/90 backdrop-blur-xl"
        />

        {/* Lightbox Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-slate-900/95 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  {currentCert.title}
                </h3>
                <p className="text-xs text-slate-400">{currentCert.issuingOrganization}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="إغلاق"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 items-center">
            {/* Image Preview Window */}
            <div className="lg:col-span-8 relative h-[300px] sm:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
              <Image
                src={currentCert.publicImagePath}
                alt={currentCert.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 800px"
                className="object-contain p-2"
              />

              {/* Navigation Controls on Image */}
              <button
                onClick={handlePrev}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/70 border border-slate-700 text-white hover:bg-cyan-600 transition-colors shadow-lg z-20"
                aria-label="الشهادة السابقة"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/70 border border-slate-700 text-white hover:bg-cyan-600 transition-colors shadow-lg z-20"
                aria-label="الشهادة التالية"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            {/* Certificate Details Sidebar */}
            <div className="lg:col-span-4 space-y-4 text-right">
              <div className="space-y-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                  {currentCert.category}
                </span>
                <h4 className="text-lg font-bold text-white pt-1">{currentCert.programOrCourse}</h4>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300 bg-slate-950/50 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="h-4 w-4 text-cyan-400" />
                  <span>التاريخ / المدة: {currentCert.date}</span>
                </div>
                {currentCert.hoursOrGrade && (
                  <div className="text-cyan-400 font-semibold pt-1">
                    {currentCert.hoursOrGrade}
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentCert.description}
              </p>

              {/* Skills Learned List */}
              {currentCert.skillsLearned && currentCert.skillsLearned.length > 0 && (
                <div className="space-y-2 pt-2">
                  <h5 className="text-xs font-bold text-slate-400">المهارات المكتسبة:</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {currentCert.skillsLearned.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px] text-slate-200"
                      >
                        <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-3 text-center text-xs text-slate-500">
                الشهادة {selectedIndex! + 1} من أصل {certificates.length}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

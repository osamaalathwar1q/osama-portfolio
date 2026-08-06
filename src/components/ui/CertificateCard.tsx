"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Calendar, Maximize2 } from "lucide-react";
import { Certificate } from "@/types";

interface CertificateCardProps {
  certificate: Certificate;
  onOpenLightbox: () => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  onOpenLightbox,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onOpenLightbox}
      className="group relative flex flex-col rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden cursor-pointer transition-all duration-300"
    >
      {/* Image Preview Thumbnail */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-950">
        <Image
          src={certificate.publicImagePath}
          alt={certificate.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />

        {/* Hover Lightbox Icon Indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300">
          <div className="p-3 rounded-full bg-cyan-500 text-slate-950 shadow-lg font-bold flex items-center gap-2 text-xs">
            <Maximize2 className="h-4 w-4" />
            <span>عرض الشهادة</span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 border border-slate-700 text-cyan-300 backdrop-blur-md">
            {certificate.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
            {certificate.title}
          </h3>
          <p className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
            <Award className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
            <span className="line-clamp-1">{certificate.issuingOrganization}</span>
          </p>
          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed pt-1">
            {certificate.description}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 text-slate-500" />
            <span>{certificate.date}</span>
          </div>
          {certificate.hoursOrGrade && (
            <span className="text-cyan-400 font-semibold">{certificate.hoursOrGrade.split("|")[0]}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

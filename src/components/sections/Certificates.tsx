"use client";

import React, { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { CertificateCard } from "../ui/CertificateCard";
import { CertificateLightbox } from "../ui/CertificateLightbox";
import { certificatesData } from "@/data/certificates";
import { Certificate } from "@/types";

const filterCategories = [
  { id: "all", label: "الكل" },
  { id: "Academic", label: "جامعة الحكمة" },
  { id: "Edraak", label: "منصة إدراك" },
  { id: "Professional", label: "مسك (Misk Skills)" },
  { id: "Technical", label: "التقنية والذكاء الاصطناعي" },
  { id: "Soft Skills", label: "اللغات والدبلومات" },
];

export const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredCertificates =
    activeCategory === "all"
      ? certificatesData
      : activeCategory === "Edraak"
      ? certificatesData.filter((c) => c.issuingOrganization.includes("إدراك") || c.id.includes("edraak"))
      : certificatesData.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className="relative py-24 bg-[#05070C] overflow-hidden">
      {/* Ambient Glow Backdrops */}
      <div className="pointer-events-none absolute left-10 top-1/4 h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="معرض الاعتمادات والشهادات"
          title="الشهادات الأكاديمية والمهنية المعتمدة"
          subtitle="سجل متكامل من الشهادات التدريبية، التكريمات الجامعية، ودورات التأهيل المهني والتقني"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredCertificates.map((cert) => {
            const indexInFullList = certificatesData.findIndex((c) => c.id === cert.id);
            return (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onOpenLightbox={() => setLightboxIndex(indexInFullList)}
              />
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox
        certificates={certificatesData}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};

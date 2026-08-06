"use client";

import React from "react";
import { Code2, Sparkles } from "lucide-react";
import { contactInfo } from "@/data/socials";
import { GithubIcon, LinkedinIcon, InstagramIcon, TelegramIcon, WhatsappIcon, GlobeIcon } from "../ui/SocialIcons";

export const Footer = () => {
  return (
    <footer className="relative bg-[#05070D] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Glow Backdrops */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 flex items-center justify-center">
                <div className="h-full w-full bg-[#080B12] rounded-[10px] flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  أسامة أحمد محمد
                </span>
                <span className="block text-xs text-cyan-400 font-medium">Founder of AFAQ CODE</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              مهندس برمجيات ومطور حلول تقنية متكاملة (Web, Mobile, Desktop Systems). مؤسس وقائد فريق AFAQ CODE لتقديم الحلول والتحول الرقمي المبتكر.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400/80 bg-cyan-950/30 border border-cyan-500/20 px-3 py-1.5 rounded-full w-fit">
              <Sparkles className="h-3.5 w-3.5" />
              <span>مستعد لبناء حلول برمجية استثنائية</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">عن المهندس</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">المهارات والتقنيات</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">المشاريع البرمجية</a></li>
              <li><a href="#certificates" className="hover:text-cyan-400 transition-colors">الشهادات والاعتمادات</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">التواصل المباشر</a></li>
            </ul>
          </div>

          {/* Col 3: Active Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">شبكات التواصل</h4>
            <p className="text-xs text-slate-500">القنوات والمنصات الرسمية المباشرة</p>
            <div className="flex flex-wrap gap-2 pt-2">
              <a href={contactInfo.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors">
                <GithubIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" title="WhatsApp" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors">
                <WhatsappIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.telegramPersonalUrl} target="_blank" rel="noopener noreferrer" title="Telegram Personal" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors">
                <TelegramIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" title="Instagram الشخصي" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.companyInstagramUrl} target="_blank" rel="noopener noreferrer" title="Instagram AFAQ CODE" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-pink-400 hover:text-pink-300 border-pink-500/30 transition-colors">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={contactInfo.companyWebsiteUrl} target="_blank" rel="noopener noreferrer" title="AFAQ CODE Website" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <GlobeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Osama Ahmed Mohammed — Founder of AFAQ CODE. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1">
            Designed & Developed by <span className="text-cyan-400 font-semibold">Osama Ahmed Mohammed</span> | Built with Next.js, TypeScript and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

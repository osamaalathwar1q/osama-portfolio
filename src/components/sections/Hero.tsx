"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Code2, Terminal, Cpu, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";
import { GithubIcon, LinkedinIcon, InstagramIcon, TelegramIcon, WhatsappIcon } from "../ui/SocialIcons";

const heroBadges = [
  { icon: <Code2 className="h-4 w-4 text-cyan-400" />, label: "Full Stack Software Engineer" },
  { icon: <Cpu className="h-4 w-4 text-blue-400" />, label: "Founder of AFAQ CODE" },
  { icon: <Terminal className="h-4 w-4 text-[#06B6D4]" />, label: "Cross-Platform & Mobile Specialist" },
];

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Dynamic Background Glow & Ambient Effects */}
      <div className="pointer-events-none absolute top-1/4 right-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-96 w-96 rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-64 w-full max-w-4xl bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (RTL order: text content) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-950/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-cyan-300">
                متاح للعمل على المشاريع والاستشارات البرمجية
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-slate-400 text-lg sm:text-xl font-medium tracking-wide">
                أهلاً بك، أنا
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                أسامة أحمد محمد{" "}
                <span className="block mt-2 gradient-text text-3xl sm:text-5xl lg:text-5xl">
                  مهندس برمجيات ومؤسس AFAQ CODE
                </span>
              </h1>
            </div>

            {/* Sub-titles Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {heroBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-sm"
                >
                  {badge.icon}
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Executive Bio Pitch */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal pt-2">
              متخصص في تصميم وبناء الحلول البرمجية عالية الأداء الأنظمة السحابية (Web Apps)، تطبيقات الهاتف المحمول (Flutter)، والنظم المكتبية للمؤسسات (ERP Systems). أركز على تقديم بنية هندسية نظيفة، تجربة مستخدم مبهرة، وتكامل أحدث تقنيات الذكاء الاصطناعي والأتمتة الرقمية.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                icon={<ArrowLeft className="h-5 w-5" />}
              >
                استكشف المشاريع البرمجية
              </Button>
              <Button
                variant="glass"
                size="lg"
                href="#contact"
              >
                تواصل معي مباشرة
              </Button>
            </div>

            {/* Social Placeholders & Quick Stats */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400 font-medium">المنصات الرسمية:</span>
                <div className="flex items-center gap-2">
                  <span title="GitHub" className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors">
                    <GithubIcon className="h-4 w-4" />
                  </span>
                  <span title="LinkedIn" className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors">
                    <LinkedinIcon className="h-4 w-4" />
                  </span>
                  <span title="Instagram" className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors">
                    <InstagramIcon className="h-4 w-4" />
                  </span>
                  <span title="Telegram" className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors">
                    <TelegramIcon className="h-4 w-4" />
                  </span>
                  <span title="WhatsApp" className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors">
                    <WhatsappIcon className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-slate-300 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-cyan-400" />
                  <span>حلول موثوقة 100%</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column (RTL order: Profile Image & 3D Cards) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Outer Glowing Rings */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-1 animate-pulse shadow-2xl shadow-cyan-500/20">
                <div className="h-full w-full bg-[#080B12] rounded-[22px] overflow-hidden relative">
                  
                  {/* Profile Picture */}
                  <Image
                    src="/images/p.png"
                    alt="أسامة أحمد محمد عثمان"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 filter contrast-105 brightness-105"
                  />

                  {/* Gradient Overlay for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Floating Technology Badge 1 (Top Left) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 glass-panel px-4 py-2.5 rounded-2xl border border-cyan-500/40 shadow-xl flex items-center gap-2.5"
              >
                <div className="p-1.5 rounded-xl bg-blue-600/30 text-cyan-400">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full Stack Systems</div>
                  <div className="text-[10px] text-slate-400">Next.js & PHP & C#</div>
                </div>
              </motion.div>

              {/* Floating Technology Badge 2 (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 glass-panel px-4 py-2.5 rounded-2xl border border-blue-500/40 shadow-xl flex items-center gap-2.5"
              >
                <div className="p-1.5 rounded-xl bg-cyan-600/30 text-blue-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Mobile & AI Apps</div>
                  <div className="text-[10px] text-slate-400">Flutter & Automation</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

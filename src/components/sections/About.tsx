"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Award, Layers, Cpu, Terminal, Rocket, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard } from "../ui/GlassCard";

const highlightItems = [
  {
    icon: <Rocket className="h-6 w-6 text-cyan-400" />,
    title: "مؤسس وقائد منصة AFAQ CODE",
    description: "قيادة وتأسيس فريق تقني لبناء وتطوير المنظومات البرمجية والتطبيقات الرقمية المبتكرة للمؤسسات والشركات.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-blue-400" />,
    title: "هندسة الأنظمة والذكاء الاصطناعي",
    description: "خبرة متعمقة في ربط النظم البرمجية بتقنيات الذكاء الاصطناعي، الأتمتة التلقائية، وبناء بروتوكولات REST APIs السريعة.",
  },
  {
    icon: <Layers className="h-6 w-6 text-cyan-300" />,
    title: "تطوير تطبيقات متعددة المنصات",
    description: "بناء أنظمة سطح المكتب C# WinForms، تطبيقات الهواتف الذكية عبر Flutter/Dart، والمنصات السحابية بـ Next.js & PHP.",
  },
];

const expertisePillars = [
  "هندسة البرمجيات وتصميم المعماريات النظيفة (Clean Architecture)",
  "تطوير البرامج والمكتبات بـ C# ونظم قواعد البيانات SQL Server & MySQL",
  "تطوير التطبيقات المحمولة بـ Flutter وشبكة إدارة الحالات Bloc State Management",
  "تطوير منصات الويب الحديثة باستخدام Next.js 16, React, TypeScript & Tailwind CSS",
  "دمج حلول الذكاء الاصطناعي التوليدي Generative AI وأدوات الأتمتة المتقدمة",
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#080B12] overflow-hidden">
      {/* Background Subtle Lines & Glows */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="نبذة عن المهندس"
          title="خبرة هندسية ورؤية تقنية متطورة"
          subtitle="أجمع بين الفكر الهندي النظيف وشغف الابتكار لتسليم مشاريع برمجية متكاملة تحقق أهداف الأعمال وتفوق التوقعات."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <GlassCard className="lg:col-span-7 flex flex-col justify-between" glowColor="cyan">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/30">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">أسامة أحمد محمد عثمان</h3>
                  <p className="text-xs text-cyan-400 font-medium">Software Engineer & Team Leader</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  أنا مهندس برمجيات متخصص في بناء وتشييد النظم البرمجية المتكاملة مع التركيز على الكفاءة القابلة للتوسع وقوة الأداء. بصفتي <strong className="text-white font-semibold">مؤسس وقائد منصة AFAQ CODE</strong>، قمت بإدارة وتطوير عدة مشاريع برمجية تتنوع بين نظم إدارية مكتبية (ERP Systems)، تطبيقات محمولة، ومواقع ويب حديثة.
                </p>
                <p>
                  يمتد شغفي ليشمل أحدث تقنيات <strong className="text-cyan-400 font-semibold">الذكاء الاصطناعي (AI Tools & Automation)</strong> لدمجها داخل بيئات العمل البرمجية لتحسين تجربة المستخدم وأتمتة العمليات المعقدة.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Award className="h-4 w-4 text-cyan-400" />
                  المجالات والركائز البرمجية الأساسية:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-2.5">
                  {expertisePillars.map((pillar, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>التركيز: Clean Architecture & Full Stack Solutions</span>
              <span className="text-cyan-400 font-semibold">AFAQ CODE Team</span>
            </div>
          </GlassCard>

          {/* Highlights Columns */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {highlightItems.map((item, index) => (
              <GlassCard key={index} className="flex-1" glowColor="blue">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

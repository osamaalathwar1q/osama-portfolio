"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard } from "../ui/GlassCard";
import { Code, Server, Smartphone, Monitor, Cpu, Wrench, Sparkles, CheckCircle } from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: string; iconName?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "تطوير الواجهات (Frontend)",
    icon: <Code className="h-5 w-5 text-cyan-400" />,
    skills: [
      { name: "Next.js 16", level: "متقدم جـداً" },
      { name: "React 19", level: "متقدم" },
      { name: "TypeScript", level: "متقدم" },
      { name: "Tailwind CSS v4", level: "خبير" },
      { name: "JavaScript (ES6+)", level: "خبير" },
      { name: "HTML5 / CSS3", level: "خبير" },
    ],
  },
  {
    id: "backend",
    name: "الأنظمة الخلفية (Backend)",
    icon: <Server className="h-5 w-5 text-blue-400" />,
    skills: [
      { name: "PHP", level: "متقدم" },
      { name: "REST APIs Architecture", level: "خبير" },
      { name: "MySQL Database", level: "متقدم" },
      { name: "Node.js Basics", level: "متوسط" },
      { name: "API Security & Auth", level: "متقدم" },
    ],
  },
  {
    id: "mobile",
    name: "تطبيقات الهواتف (Mobile)",
    icon: <Smartphone className="h-5 w-5 text-cyan-300" />,
    skills: [
      { name: "Flutter Framework", level: "خبير" },
      { name: "Dart Language", level: "خبير" },
      { name: "Bloc State Management", level: "متقدم جـداً" },
      { name: "SQLite Local DB", level: "متقدم" },
      { name: "Mobile Clean Architecture", level: "متقدم" },
    ],
  },
  {
    id: "desktop",
    name: "أنظمة المكتب (Desktop ERP)",
    icon: <Monitor className="h-5 w-5 text-[#2563EB]" />,
    skills: [
      { name: "C# (.NET)", level: "خبير" },
      { name: "WinForms Architecture", level: "خبير" },
      { name: "Microsoft SQL Server", level: "متقدم جـداً" },
      { name: "ERP & Inventory Logic", level: "خبير" },
      { name: "Report Building", level: "متقدم" },
    ],
  },
  {
    id: "ai",
    name: "الذكاء الاصطناعي والأتمتة",
    icon: <Cpu className="h-5 w-5 text-purple-400" />,
    skills: [
      { name: "Generative AI Concepts", level: "متقدم" },
      { name: "AI Agents & Tooling", level: "متقدم" },
      { name: "Prompt Engineering", level: "خبير" },
      { name: "Workflow Automation", level: "متقدم" },
    ],
  },
  {
    id: "tools",
    name: "أدوات التطوير (Tools)",
    icon: <Wrench className="h-5 w-5 text-[#06B6D4]" />,
    skills: [
      { name: "Git & GitHub", level: "خبير" },
      { name: "VS Code", level: "خبير" },
      { name: "Visual Studio Enterprise", level: "متقدم جـداً" },
      { name: "Postman API Testing", level: "متقدم" },
    ],
  },
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="relative py-24 bg-[#05070C] overflow-hidden">
      {/* Glow Backdrop */}
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-cyan-600/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="القدرات والتقنيات"
          title="الترسانة البرمجية والمهارات التقنية"
          subtitle="تقنيات حديثة وأدوات احترافية أعتمد عليها في بناء مختلف الأنظمة والتطبيقات البرمجية"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === "all"
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            الكل
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {cat.icon}
              <span>{cat.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <GlassCard key={cat.id} glowColor="cyan" className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{cat.name}</h3>
              </div>

              <div className="grid grid-cols-1 gap-2.5 pt-1">
                {cat.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};

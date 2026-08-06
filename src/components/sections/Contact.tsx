"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Send, Download, CheckCircle2, MessageSquare, Globe, Sparkles, PhoneCall } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { GlassCard } from "../ui/GlassCard";
import { Button } from "../ui/Button";
import { contactInfo, socialLinks } from "@/data/socials";
import { GithubIcon, LinkedinIcon, InstagramIcon, TelegramIcon, WhatsappIcon, GlobeIcon } from "../ui/SocialIcons";

const defaultWhatsappMessage = encodeURIComponent("السلام عليكم، شاهدت معرض أعمالك وأرغب بالتواصل معك بخصوص مشروع.");
const directWhatsappUrl = `https://wa.me/967778144907?text=${defaultWhatsappMessage}`;

const contactCards = [
  {
    id: "whatsapp",
    title: "واتساب (WhatsApp المباشر)",
    description: contactInfo.whatsappNumber,
    actionText: "محادثة فورية عبر واتساب",
    url: directWhatsappUrl,
    icon: <WhatsappIcon className="h-6 w-6 text-emerald-400" />,
    color: "emerald",
  },
  {
    id: "email",
    title: "البريد الإلكتروني الرسمي",
    description: contactInfo.email,
    actionText: "إرسال رسالة إلكترونية",
    url: `mailto:${contactInfo.email}`,
    icon: <Mail className="h-6 w-6 text-cyan-400" />,
    color: "cyan",
  },
  {
    id: "telegram",
    title: "تليجرام (Telegram)",
    description: "@OAMO7 | قناة AFAQ CODE",
    actionText: "فتح تطبيق Telegram",
    url: contactInfo.telegramPersonalUrl,
    icon: <TelegramIcon className="h-6 w-6 text-sky-400" />,
    color: "sky",
  },
  {
    id: "company",
    title: "منصة AFAQ CODE",
    description: "الموقع الرسمي للحلول البرمجية",
    actionText: "زيارة موقع المنصة",
    url: contactInfo.companyWebsiteUrl,
    icon: <Globe className="h-6 w-6 text-blue-400" />,
    color: "blue",
  },
];

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct custom user message if filled, or use default pre-filled text
    let customText = "";
    if (formState.name || formState.subject || formState.message) {
      customText = `السلام عليكم، أنا ${formState.name || "زائر للموقع"}.\n`;
      if (formState.subject) customText += `الموضوع: ${formState.subject}\n`;
      if (formState.message) customText += `تفاصيل الرسالة: ${formState.message}\n`;
      if (formState.email) customText += `البريد الإلكتروني: ${formState.email}`;
    } else {
      customText = "السلام عليكم، شاهدت معرض أعمالك وأرغب بالتواصل معك بخصوص مشروع.";
    }

    const waUrl = `https://wa.me/967778144907?text=${encodeURIComponent(customText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative py-24 bg-[#080B12] overflow-hidden">
      {/* Ambient Radial Backdrops */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="تواصل معي"
          title="دعنا نبدأ مشروعك القادم معاً"
          subtitle="أنا متاح دائماً لمناقشة المشاريع البرمجية المبتكرة، الاستشارات التقنية، وفرص العمل المستقل أو المؤسسي"
        />

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card) => (
            <GlassCard key={card.id} glowColor="cyan" className="flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/80 w-fit">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  <p className="text-xs text-slate-300 font-mono dir-ltr text-right mt-1">
                    {card.description}
                  </p>
                </div>
              </div>

              <a
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-300"
              >
                <span>{card.actionText}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </GlassCard>
          ))}
        </div>

        {/* Form + Social Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form Column */}
          <GlassCard className="lg:col-span-7 space-y-6" glowColor="blue">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <WhatsappIcon className="h-5 w-5 text-emerald-400" />
                تواصل مباشر عبر واتساب (WhatsApp Click-to-Chat)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                يمكنك كتابة رسالتك أدناه أو الضغط مباشرة لفتح محادثة واتساب مع تجهيز النص تلقائياً
              </p>
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-right">
                  <label className="text-xs font-semibold text-slate-300">الاسم الكريم (اختياري)</label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك أو اسم المؤسسة"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                <div className="space-y-1.5 text-right">
                  <label className="text-xs font-semibold text-slate-300">البريد الإلكتروني (اختياري)</label>
                  <input
                    type="email"
                    placeholder="example@domain.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-colors dir-ltr text-right"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-right">
                <label className="text-xs font-semibold text-slate-300">موضوع الاستفسار (اختياري)</label>
                <input
                  type="text"
                  placeholder="طلب بناء تطبيق / مشروع سحابي / نظام ERP..."
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div className="space-y-1.5 text-right">
                <label className="text-xs font-semibold text-slate-300">تفاصيل الرسالة (اختياري)</label>
                <textarea
                  rows={3}
                  placeholder="اكتب تفاصيل الفكرة أو المشروع هنا ليتم إرفاقها بنص المحادثة..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  icon={<WhatsappIcon className="h-4 w-4 text-emerald-300" />}
                >
                  إرسال الرسالة عبر واتساب (+967778144907)
                </Button>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold hover:border-slate-500 transition-colors"
                >
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span>إرسال بريد إلكتروني</span>
                </a>
              </div>
            </form>
          </GlassCard>

          {/* Social Hub Column */}
          <GlassCard className="lg:col-span-5 space-y-6" glowColor="cyan">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                شبكات التواصل الاجتماعي الرسمية
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                تابع أحدث المشاريع، التحديثات التقنية، والمحتوى الهندسي
              </p>
            </div>

            <div className="space-y-3">
              {socialLinks.map((social) => {
                const getIcon = (iconName: string) => {
                  switch (iconName) {
                    case "github": return <GithubIcon className="h-5 w-5 text-slate-200" />;
                    case "linkedin": return <LinkedinIcon className="h-5 w-5 text-blue-400" />;
                    case "instagram": return <InstagramIcon className="h-5 w-5 text-pink-400" />;
                    case "telegram": return <TelegramIcon className="h-5 w-5 text-sky-400" />;
                    case "whatsapp": return <WhatsappIcon className="h-5 w-5 text-emerald-400" />;
                    default: return <GlobeIcon className="h-5 w-5 text-cyan-400" />;
                  }
                };

                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-900 group-hover:scale-110 transition-transform duration-300">
                        {getIcon(social.iconName)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {social.name}
                        </div>
                        <div className="text-xs text-slate-400 dir-ltr text-right">
                          {social.label}
                        </div>
                      </div>
                    </div>

                    <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-300 leading-relaxed">
              💡 <strong>رابط واتساب المباشر:</strong> الضغط على زر واتساب يفتح تطبيق واتساب فوراً بحساب الرقم الرسمـي (+967778144907).
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};

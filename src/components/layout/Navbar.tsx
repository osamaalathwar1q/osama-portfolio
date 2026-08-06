"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sparkles } from "lucide-react";

const navLinks = [
  { name: "الرئيسية", href: "#hero" },
  { name: "عني", href: "#about" },
  { name: "المهارات", href: "#skills" },
  { name: "المشاريع", href: "#projects" },
  { name: "الشهادات", href: "#certificates" },
  { name: "التواصل", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Intersection Observer alternative for scroll spying
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080B12]/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] p-0.5 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="h-full w-full bg-[#080B12] rounded-[10px] flex items-center justify-center">
                <Code2 className="h-5 w-5 text-[#06B6D4] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-tight flex items-center gap-1">
                أسامة أحمد
                <Sparkles className="h-3.5 w-3.5 text-[#06B6D4]" />
              </span>
              <span className="text-[10px] font-medium text-slate-400 -mt-1 tracking-wider">
                AFAQ CODE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-800/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-full border border-cyan-500/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Contact Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              تواصل معي
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#080B12]/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500"
              >
                تواصل معي
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

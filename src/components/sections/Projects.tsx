"use client";

import React, { useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { ProjectCard } from "../ui/ProjectCard";
import { ProjectModal } from "../ui/ProjectModal";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-[#080B12] overflow-hidden">
      {/* Ambient Backdrop Glows */}
      <div className="pointer-events-none absolute right-10 top-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-10 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="معرض الأعمال والأنظمة"
          title="مشاريع برمجية متكاملة وحلول رقمية"
          subtitle="مجموعة مختارة من الأنظمة والتطبيقات البرمجية الحقيقية التي قمت بتصميمها وبنائها بأحدث التقنيات"
        />

        {/* 3D Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Detailed Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

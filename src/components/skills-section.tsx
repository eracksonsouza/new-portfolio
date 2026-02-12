"use client";

import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const skillsData = {
  frontend: [
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "APIs REST", icon: FaCode, color: "#fdb003" },
    { name: "Prisma", icon: SiPrisma, color: "#0C344B" },
  ],
  tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "VS Code", icon: VscCode, color: "#007ACC" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ],
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "tools">(
    "frontend",
  );

  return (
    <section className="mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
        Linguagens e Frameworks
      </h2>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
        <button
          onClick={() => setActiveTab("frontend")}
          className={`px-6 md:px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
            activeTab === "frontend"
              ? "bg-[#fdb003] text-black shadow-lg"
              : "border border-white/12 bg-[var(--es-surface)] text-gray-100 hover:bg-[var(--es-surface-2)]"
          }`}
        >
          <p className="cursor-pointer">&lt; Front-end /&gt;</p>
        </button>
        <button
          onClick={() => setActiveTab("backend")}
          className={`px-6 md:px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
            activeTab === "backend"
              ? "bg-[#fdb003] text-black shadow-lg"
              : "border border-white/12 bg-[var(--es-surface)] text-gray-100 hover:bg-[var(--es-surface-2)]"
          }`}
        >
          <p className="cursor-pointer">&lt; Back-end /&gt;</p>
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`px-6 md:px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
            activeTab === "tools"
              ? "bg-[#fdb003] text-black shadow-lg"
              : "border border-white/12 bg-[var(--es-surface)] text-gray-100 hover:bg-[var(--es-surface-2)]"
          }`}
        >
          <p className="cursor-pointer">&lt; Ferramentas /&gt;</p>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center max-w-5xl mx-auto">
        {skillsData[activeTab].map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              className="flex min-h-[140px] w-full max-w-[160px] cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border border-white/12 bg-[var(--es-surface)] p-6 transition-all duration-300 hover:scale-105 hover:border-[#fdb003]/35 hover:shadow-2xl hover:shadow-[#fdb003]/15"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <IconComponent
                className="text-5xl transition-colors duration-300"
                style={{ color: skill.color }}
              />
              <span className="text-center text-sm font-semibold text-gray-100">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;

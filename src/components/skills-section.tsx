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
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

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
  ],
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend">(
    "frontend"
  );

  return (
    <section className="mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
        Linguagens e Frameworks
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab("frontend")}
          className={`px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
            activeTab === "frontend"
              ? "bg-[#fdb003] text-white shadow-lg"
              : "bg-white text-gray-900 hover:bg-gray-100"
          }`}
        >
          <p className="cursor-pointer">&lt; Front-end /&gt;</p>
        </button>
        <button
          onClick={() => setActiveTab("backend")}
          className={`px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 ${
            activeTab === "backend"
              ? "bg-[#fdb003] text-white shadow-lg"
              : "bg-white text-gray-900 hover:bg-gray-100"
          }`}
        >
          <p className="cursor-pointer">&lt; Back-end /&gt;</p>
        </button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center max-w-5xl mx-auto">
        {skillsData[activeTab].map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#fdb003]/30 cursor-pointer min-h-[140px] w-full max-w-[160px]"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <IconComponent
                className="text-5xl transition-colors duration-300"
                style={{ color: skill.color }}
              />
              <span className="font-semibold text-gray-900 text-center text-sm">
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

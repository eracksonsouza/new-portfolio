import SkillsSection from "@/components/skills-section";
import type { Metadata } from "next";
import ProfessionalExperience from "@/components/professional-experience";
import EducationSection from "@/components/educacion-section";

export const metadata: Metadata = {
  title: "Sobre Mim",
  description:
    "Conheça mais sobre Erackson Souza - Desenvolvedor Web Full-Stack, graduando em Análise e Desenvolvimento de Sistemas. Experiência com React, Next.js, TypeScript, Node.js e mais.",
  keywords: [
    "Sobre Erackson Souza",
    "Desenvolvedor Full-Stack",
    "Formação",
    "Habilidades",
    "Experiência",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Sobre Mim | Erackson Souza",
    description:
      "Conheça mais sobre Erackson Souza - Desenvolvedor Web Full-Stack, graduando em Análise e Desenvolvimento de Sistemas.",
    url: "https://erackson-souza.vercel.app/about",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Sobre Mim | Erackson Souza",
    description:
      "Conheça mais sobre Erackson Souza - Desenvolvedor Web Full-Stack, graduando em Análise e Desenvolvimento de Sistemas.",
  },
  alternates: {
    canonical: "https://erackson-souza.vercel.app/about",
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#0a0a0a]">
      <main className="container mx-auto px-4 py-24 md:py-32 max-w-6xl">
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre mim
          </h1>
          <div className="h-1 w-16 bg-[#fdb003] mb-8"></div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Desenvolvedor full-stack que acredita em código como ferramenta de
            transformação. Trabalho diariamente com{" "}
            <span className="font-bold">
              JavaScript, TypeScript, React, Next.js, Node.js e Tailwind
            </span>
            , construindo desde interfaces acessíveis até APIs robustas com
            Express e Fastify. Gosto de resolver problemas reais, explorar novas
            arquiteturas e transformar ideias em produtos funcionais. Meu foco
            hoje é evoluir como full-stack, aprofundando cada vez mais em
            backend, testes, boas práticas e projetos que me desafiem a sair do
            comum.
          </p>
        </section>
        <EducationSection />
        <ProfessionalExperience />
        <SkillsSection />
      </main>
    </div>
  );
};

export default AboutPage;

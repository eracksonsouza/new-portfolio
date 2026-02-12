import SkillsSection from "@/components/skills-section";
import type { Metadata } from "next";
import ProfessionalExperience from "@/components/professional-experience";
import EducationSection from "@/components/educacion-section";
import Image from "next/image";

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
    <div className="min-h-screen bg-[var(--es-bg-main)]">
      <main className="container mx-auto px-4 py-24 md:py-32 max-w-6xl">
        <section className="mb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
            <div className="mx-auto">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-[#fdb003]/30 bg-white md:h-80 md:w-80">
                <Image
                  src="/assets/eu.png"
                  alt="Foto de Erackson Souza"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <span className="mb-5 inline-flex rounded-full border border-[#fdb003]/30 bg-[#fdb003]/10 px-4 py-2 text-sm font-medium text-[#fdb003]">
                Sobre mim
              </span>

              <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Erackson Souza
              </h1>

              <p className="text-lg leading-relaxed text-gray-300">
                Desenvolvedor full-stack que acredita em código como ferramenta
                de transformação. Trabalho diariamente com{" "}
                <span className="font-bold">
                  JavaScript, TypeScript, React, Next.js, Node.js e Tailwind
                </span>
                , construindo desde interfaces acessíveis até APIs robustas com
                Express e Fastify. Gosto de resolver problemas reais, explorar
                novas arquiteturas e transformar ideias em produtos funcionais.
                Meu foco hoje é evoluir como full-stack, aprofundando cada vez
                mais em backend, testes, boas práticas e projetos que me
                desafiem a sair do comum.
              </p>
            </div>
          </div>
        </section>
        <EducationSection />
        <ProfessionalExperience />
        <SkillsSection />
      </main>
    </div>
  );
};

export default AboutPage;

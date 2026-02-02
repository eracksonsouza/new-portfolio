"use client";

import esStore from "@/../../public/assets/projetos/es-store.png";
import financeControl from "@/../../public/assets/projetos/finance-control.png";
import neiMarket from "@/../../public/assets/projetos/nei-analytcs.png";
import lpPsic from "@/../../public/assets/projetos/lp-psic.png";
import petDev from "@/../../public/assets/projetos/petdev.png";
import Image from "next/image";
import Link from "next/link";
import { Code, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Projetos = [
  {
    id: 1,
    title: "NEI MARKET ANALYTICS",
    description:
      "Plataforma de análise de mercado que centraliza dados em tempo real de criptomoedas, ações e fundos imobiliários. Desenvolvida com Vue.js, Tailwind CSS e um backend em Express.js, integra múltiplas APIs financeiras para exibir gráficos e informações atualizadas. O projeto inclui um chatbot inteligente (API Gemini) que responde dúvidas dos usuários, ajudando investidores a tomar decisões mais rápidas e seguras.",
    impact:
      "Tornar a análise de mercado acessível e em tempo real para investidores e entusiastas de finanças.",
    image: neiMarket,
    link: "https://nei-market-analytics.com.br/",
    repository: "https://github.com/bush1D3v/NEI_market_analytics",
    site: "https://nei-market-analytics.com.br/",
    technologies: ["Vue.js", "TypeScript", "Express.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "ES-STORE",
    description:
      "E-commerce moderno construído com Next.js, TypeScript e Tailwind CSS, com interface responsiva e fluida. Oferece páginas de produto dinâmicas, carrinho interativo e um fluxo de compra otimizado para mobile. O projeto foi desenhado para melhorar a experiência de compra e conversão, aplicando boas práticas de UI/UX e performance.",
    impact:
      "Criar uma experiência de compra simples e direta, reduzindo fricção e aumentando engajamento.",
    image: esStore,
    link: "https://es-store-beryl.vercel.app",
    repository: "https://github.com/eracksonsouza/es-store",
    site: "https://es-store.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "FINANCE CONTROL",
    description:
      "Aplicação web para gestão financeira pessoal, desenvolvida com React, TypeScript, Supabase e Tailwind CSS. Permite registrar receitas e despesas, categorizar transações e visualizar gráficos interativos que ajudam o usuário a entender e controlar seu orçamento. O sistema conta com autenticação segura e armazenamento persistente.",
    impact:
      "Ajudar pessoas a organizarem suas finanças e visualizarem seus hábitos de gasto de forma prática e intuitiva.",
    image: financeControl,
    link: "https://finance-control-psi.vercel.app/",
    repository: "https://github.com/eracksonsouza/finance-pocket",
    site: "https://finance-control-psi.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "Supabase",
    ],
  },
  {
    id: 4,
    title: "Landing Page — Dra. Marina",
    description:
      "Landing page feita em Next.js e Tailwind CSS para divulgação de serviços de psicologia. Foco total em clareza e credibilidade, apresentando informações sobre os atendimentos, depoimentos de pacientes e um formulário funcional de contato. O design transmite empatia e profissionalismo, conectando novos pacientes com a psicóloga de forma simples e humana.",
    impact:
      "Aumentar o alcance digital da profissional e facilitar o primeiro contato com novos pacientes.",
    image: lpPsic,
    link: "https://lp-psic.vercel.app/",
    repository: "https://github.com/eracksonsouza/lp-psic",
    site: "https://lp-psic.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "PETDEV",
    description:
      "Plataforma para agendamento e divulgação de serviços PetShop, desenvolvida em Next.js e TypeScript. Exibe serviços, horários disponíveis e um botão de contato direto via WhatsApp. O layout foi pensado para gerar confiança e conveniência, tanto pro dono do pet quanto pro prestador do serviço.",
    impact:
      "Simplificar o agendamento e a comunicação entre clientes e petshops, eliminando burocracia.",
    image: petDev,
    link: "https://petdev.vercel.app/",
    repository: "https://github.com/eracksonsouza/petdev",
    site: "https://petdev.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
];

export default function ProjectsCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, Projetos.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] h-full px-4 md:px-6 py-6 md:py-8 overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-10 md:mb-12">
          <h3 className="text-[#fdb003] text-xs md:text-sm font-semibold mb-3 md:mb-4 uppercase tracking-[2px]">
            Meus últimos projetos
          </h3>
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Faço projetos que facilitam a vida das pessoas
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
            Cada projeto é pensado para resolver problemas reais e gerar impacto
            positivo na vida dos usuários.
          </p>
        </div>

        <div className="relative mb-8 md:mb-10">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 md:p-3 transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>

          <div className="overflow-hidden px-2 md:px-0">
            <div
              className="flex gap-0 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {Projetos.map((projeto) => (
                <div
                  key={projeto.id}
                  className="shrink-0 w-full px-2 md:px-0 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-[#111]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#fdb003]/30 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 h-full flex flex-col group">
                    <div className="relative h-[220px] md:h-[260px] lg:h-[280px] overflow-hidden">
                      <Image
                        src={projeto.image}
                        alt={projeto.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                      <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 md:gap-4">
                        <Link
                          href={projeto.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-[#fdb003]/10 hover:bg-[#fdb003] hover:text-black border border-[#fdb003] text-[#fdb003] px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-semibold text-xs md:text-sm transition-all hover:-translate-y-1"
                        >
                          <ExternalLink size={16} />
                          <span>Ver site</span>
                        </Link>
                        <Link
                          href={projeto.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-[#fdb003]/10 hover:bg-[#fdb003] hover:text-black border border-[#fdb003] text-[#fdb003] px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-semibold text-xs md:text-sm transition-all hover:-translate-y-1"
                        >
                          <Code size={16} />
                          <span>Código</span>
                        </Link>
                      </div>
                    </div>
                    <div className="p-5 md:p-6 flex flex-col gap-3 md:gap-4 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-white text-base md:text-lg font-bold leading-tight">
                          {projeto.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-3">
                        {projeto.description}
                      </p>
                      <div className="flex gap-2 md:gap-3 bg-[#fdb003]/5 border-l-3 border-l-[#fdb003] p-3 md:p-3.5 rounded">
                        <span className="text-lg md:text-xl shrink-0">
                          💡
                        </span>
                        <p className="text-gray-200 text-xs md:text-sm leading-relaxed">
                          <strong className="text-[#fdb003] font-semibold">
                            Impacto:
                          </strong>{" "}
                          {projeto.impact}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-auto pt-3 md:pt-4">
                        {projeto.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2.5 md:px-3 py-1 md:py-1.5 bg-white/5 border border-white/10 hover:border-[#fdb003] hover:bg-[#fdb003]/10 hover:text-[#fdb003] rounded-md text-gray-400 text-[10px] md:text-xs font-medium transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 md:p-3 transition-all"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-6 md:mb-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-[#fdb003] w-6 md:w-8"
                  : "bg-white/30 hover:bg-white/50 w-2"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="#contact"
            className="bg-[#fdb003] hover:bg-[#e5a003] text-black text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full transition-all font-semibold w-full md:w-auto text-center"
          >
            Entre em contato comigo
          </Link>
        </div>
      </div>
    </section>
  );
}

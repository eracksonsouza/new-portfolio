"use client";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Projetos = [
  {
    id: 1,
    title: "NEI MARKET ANALYTICS",
    description:
      "Plataforma de análise de mercado que centraliza dados em tempo real de criptomoedas, ações e fundos imobiliários. Desenvolvida com Vue.js, Tailwind CSS e um backend em Express.js, integra múltiplas APIs financeiras para exibir gráficos e informações atualizadas. O projeto inclui um chatbot inteligente (API Gemini) que responde dúvidas dos usuários, ajudando investidores a tomar decisões mais rápidas e seguras.",
    impact:
      "Tornar a análise de mercado acessível e em tempo real para investidores e entusiastas de finanças.",
    image: "/assets/projetos/nei-analytcs.png",
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
    image: "/assets/projetos/es-store.png",
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
    image: "/assets/projetos/finance-control.png",
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
    image: "/assets/projetos/lp-psic.png",
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
    image: "/assets/projetos/petdev.png",
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
      className="bg-[var(--es-bg-main)] px-4 py-16 md:px-6 md:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-10 md:mb-12">
          <h3 className="text-[#fdb003] text-xs md:text-sm font-semibold mb-3 md:mb-4 uppercase tracking-[2px]">
            Meus últimos projetos
          </h3>
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Faço projetos que facilitam a vida das pessoas
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-[var(--es-text-muted)] md:text-base">
            Cada projeto é pensado para resolver problemas reais e gerar impacto
            positivo na vida dos usuários.
          </p>
        </div>

        <div className="relative mb-8 md:mb-10">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 z-10 -translate-x-2 -translate-y-1/2 rounded-full bg-[var(--es-surface-2)]/85 p-2 transition-all hover:bg-[var(--es-surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdb003] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--es-bg-main)] disabled:cursor-not-allowed disabled:opacity-30 md:-translate-x-4 md:p-3"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white cursor-pointer" />
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
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/12 bg-[var(--es-surface)]/90 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#fdb003]/30">
                    <div className="relative h-[220px] md:h-[260px] lg:h-[280px] overflow-hidden">
                      <Image
                        src={projeto.image}
                        alt={projeto.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                    </div>
                    <div className="p-5 md:p-6 flex flex-col gap-3 md:gap-4 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-white text-base md:text-lg font-bold leading-tight">
                          {projeto.title}
                        </h3>
                      </div>
                      <p className="line-clamp-3 text-xs leading-relaxed text-gray-300 md:text-sm">
                        {projeto.description}
                      </p>
                      <div className="flex gap-2 md:gap-3 bg-[#fdb003]/5 border-l-3 border-l-[#fdb003] p-3 md:p-3.5 rounded">
                        <Image
                          src="/favicons/light-icon.png"
                          alt="Lâmpada"
                          width={20}
                          height={20}
                          className="h-5 w-5 shrink-0 md:h-6 md:w-6"
                        />
                        <p className="text-gray-200 text-xs md:text-sm leading-relaxed">
                          <strong className="text-[#fdb003] font-semibold">
                            Impacto:
                          </strong>{" "}
                          {projeto.impact}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1 md:pt-2">
                        {projeto.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-gray-400 transition-all hover:border-[#fdb003] hover:bg-[#fdb003]/10 hover:text-[#fdb003] md:px-3 md:py-1.5 md:text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center gap-3 pt-3 md:pt-4">
                        <Link
                          href={projeto.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-10 items-center justify-center rounded-sm bg-[#fdb003] px-3.5 py-2 text-xs font-semibold text-black transition-all hover:bg-[#e5a003] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdb003] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--es-bg-main)] md:px-4 md:text-sm"
                          aria-label={`Ver repositório no Github do projeto ${projeto.title}`}
                        >
                          Ver Github
                        </Link>
                        <Link
                          href={projeto.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-10 items-center gap-1.5 border-b border-white/50 pb-0.5 text-xs font-medium text-white transition-all hover:border-[#fdb003] hover:text-[#fdb003] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdb003] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--es-bg-main)] md:text-sm"
                          aria-label={`Ver deploy do projeto ${projeto.title}`}
                        >
                          Ver projeto
                          <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 z-10 translate-x-2 -translate-y-1/2 rounded-full bg-[var(--es-surface-2)]/85 p-2 transition-all hover:bg-[var(--es-surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdb003] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--es-bg-main)] disabled:cursor-not-allowed disabled:opacity-30 md:translate-x-4 md:p-3"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white cursor-pointer" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-6 md:mb-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdb003] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--es-bg-main)]"
              aria-label={`Ir para slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
            >
              <span
                aria-hidden="true"
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-[#fdb003] w-6 md:w-8"
                    : "bg-white/30 hover:bg-white/50 w-2"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="#contact"
            className="bg-[#fdb003] hover:bg-[#e5a003] text-black text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full transition-all font-semibold w-full md:w-auto text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fdb003] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--es-bg-main)]"
          >
            Entre em contato comigo
          </Link>
        </div>
      </div>
    </section>
  );
}

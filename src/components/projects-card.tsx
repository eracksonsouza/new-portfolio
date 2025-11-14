"use client";

import esStore from "@/../../public/assets/projetos/es-store.png";
import financeControl from "@/../../public/assets/projetos/finance-control.png";
import neiMarket from "@/../../public/assets/projetos/nei-analytcs.png";
import lpPsic from "@/../../public/assets/projetos/lp-psic.png";
import petDev from "@/../../public/assets/projetos/petdev.png";
import Image from "next/image";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";
import { useCarousel } from "@/hooks/useCarousel";
import { Carousel } from "@/components/ui/carousel";

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

const ProjectsCard = () => {
  const {
    currentIndex,
    itemsPerPage,
    maxIndex,
    handlePrev,
    handleNext,
    goToSlide,
    canGoPrev,
    canGoNext,
    pauseAutoplay,
    resumeAutoplay,
  } = useCarousel({
    totalItems: Projetos.length,
    breakpoints: { mobile: 1, tablet: 2, desktop: 3 },
    autoplay: true,
    autoplayInterval: 5000,
    loop: true,
  });

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0a0a0a] py-12 md:py-20 px-4 md:px-6"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12 md:mb-16 mt-4">
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

        {/* Carrossel */}
        <Carousel
          currentIndex={currentIndex}
          itemsPerPage={itemsPerPage}
          maxIndex={maxIndex}
          onPrev={handlePrev}
          onNext={handleNext}
          onGoToSlide={goToSlide}
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          buttonColor="#fdb003"
          indicatorColor="#fdb003"
        >
          {Projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
            >
              <div className="bg-[#111]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#fdb003]/30 hover:transform hover:translate-y-[-8px] hover:scale-[1.02] transition-all duration-300 h-full flex flex-col group">
                <div className="relative h-[280px] md:h-[350px] overflow-hidden">
                  <Image
                    src={projeto.image}
                    alt={projeto.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

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
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-4">
                    {projeto.description}
                  </p>
                  <div className="flex gap-2 md:gap-3 bg-[#fdb003]/5 border-l-3 border-l-[#fdb003] p-3 md:p-4 rounded">
                    <span className="text-lg md:text-xl flex-shrink-0">💡</span>
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
        </Carousel>

        <div className="flex justify-center">
          <Link
            href="#contact"
            className="bg-[#fdb003] hover:bg-[#e5a003] text-black text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full transition-all font-semibold w-full md:w-auto text-center"
          >
            Fazer orçamento com um especialista
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCard;

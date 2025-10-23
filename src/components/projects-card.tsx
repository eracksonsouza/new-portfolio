"use client";

import esStore from "@/../../public/assets/projetos/es-store.png";
import financeControl from "@/../../public/assets/projetos/finance-control.png";
import neiMarket from "@/../../public/assets/projetos/nei-analytcs.png";
import lpPsic from "@/../../public/assets/projetos/lp-psic.png";
import petDev from "@/../../public/assets/projetos/petdev.png";
import Image from "next/image";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import styles from "@/app/style/projects-card.module.css";

const Projetos = [
  {
    id: 1,
    title: "NEI MARKET ANALYTICS",
    description:
      "Plataforma de análise de mercado que reúne dados em tempo real sobre criptomoedas, ações e fundos imobiliários. Conta com um backend em Express.js para integração de múltiplas APIs financeiras e um frontend moderno em Vue.js + Tailwind CSS. Inclui um chatbot inteligente alimentado pela API Gemini para responder dúvidas dos usuários.",
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
      "E-commerce completo desenvolvido com Next.js, Tailwind CSS e TypeScript. Apresenta uma interface moderna e responsiva, com página de produtos, carrinho dinâmico e fluxo de compra intuitivo, proporcionando uma ótima experiência ao usuário.",
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
      "Aplicação web para controle financeiro pessoal desenvolvida com React, TypeScript e Tailwind CSS. Permite registrar receitas e despesas, categorizar transações e visualizar gráficos interativos para acompanhar o orçamento. Possui autenticação e armazenamento seguro de dados.",
    image: financeControl,
    link: "https://finance-control-psi.vercel.app/",
    repository: "https://github.com/eracksonsouza/finance-pocket",
    site: "https://finance-control-psi.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Betha Auth",
      "Supabase",
    ],
  },
  {
    id: 4,
    title: "Landing Page Dra. Marina",
    description:
      "Landing page desenvolvida com Next.js e Tailwind CSS para divulgação de serviços de psicologia. O projeto apresenta informações claras sobre os atendimentos, depoimentos de clientes e um formulário de contato funcional, com foco em conversão e credibilidade.",
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
      "Plataforma para agendamento e divulgação de serviços de PetShop, desenvolvida com Next.js, TypeScript e Tailwind CSS. Permite que os usuários conheçam os serviços oferecidos, agendem atendimentos e entrem em contato diretamente via WhatsApp.",
    image: petDev,
    link: "https://petdev.vercel.app/",
    repository: "https://github.com/eracksonsouza/petdev",
    site: "https://petdev.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
];

const ProjectsCard = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2a2a2c] via-[#363638] to-[#424244] text-white">
      <div className="container mx-auto px-4 py-24 md:py-32 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Meus últimos <span className="text-[#fdb003]">Projetos</span>
        </h2>
        <div className="w-16 h-1 bg-[#fdb003] mb-12"></div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCreative]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className={styles.projectsSwiper}
        >
          {Projetos.map((projeto) => (
            <SwiperSlide key={projeto.id}>
              <div className="bg-[#1a1d23] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group shadow-xl h-full">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={projeto.image}
                    alt={projeto.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link
                      href={projeto.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#fdb003] text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-[#e09f02] transition-colors text-base"
                    >
                      <Code size={22} />
                      Código
                    </Link>
                    <Link
                      href={projeto.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-400 transition-colors text-base"
                    >
                      <ExternalLink size={22} />
                      Demo
                    </Link>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#fdb003]">
                    {projeto.title}
                  </h3>
                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    {projeto.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {projeto.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-5 py-2.5 bg-[#fdb003] text-gray-900 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsCard;

import projetoNei from "@/../../public/assets/projetos/projeto-nei.png";
import projetoSearchGit from "@/../../public/assets/projetos/search-github-user.png";
import projetoTheMovie from "@/../../public/assets/projetos/the-movie.png";
import Image from "next/image";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";

const Projetos = [
  {
    id: 1,
    title: "NEI MARKET ANALYTICS",
    description:
      "Projeto de análise de mercado: Criptomoedas, ações, fundos imobiliários, bolsa de valores com o intuito de passar dados em tempo real. Além disso o projeto tem um chat bot que usa a API do gemini para responder perguntas ao usuário.",
    image: projetoNei,
    link: "https://projetonei.com.br",
    repository: "https://github.com/bush1D3v/NEI_market_analytics",
    site: "https://nei-market-analytics.com.br/",
    technologies: ["Vue.js", "TypeScript", "Express.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "THE MOVIE API",
    description:
      "O projeto consiste em fazer o consumo de uma API de filmes e exibir os filmes na tela com informações como: poster, título, sinopse, gênero, duração e data de lançamento.",
    image: projetoTheMovie,
    link: "https://the-movie-eracksons.vercel.app",
    repository: "https://github.com/eracksonsouza/Erackson1-05-APi-The-Movie",
    site: "https://eracksont-05-api-the-movie-1siezwwho-erackson-souzas-projects.vercel.app/",
    technologies: ["CSS", "JavaScript", "React", "Axios"],
  },
  {
    id: 3,
    title: "SEARCH USER GITHUB",
    description:
      "O projeto consiste em consumir a API do GitHub utilizando a função fetch. O usuário digita um nome de usuário e com base nesse nome, os dados relacionados a esse usuário são retornados e exibidos diretamente na interface da aplicação.",
    image: projetoSearchGit,
    link: "https://search-github-user-eracksons.vercel.app",
    repository:
      "https://github.com/eracksonsouza/03-Search-User-Quest-APi-GitHub",
    site: "https://eracksonsouza.github.io/03-Search-User-Quest-APi-GitHub/",
    technologies: ["CSS", "JavaScript", "Fetch"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-[#1a1d23] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group shadow-xl"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCard;

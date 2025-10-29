import SkillsSection from "@/components/skills-section";
import { FaCode, FaGraduationCap } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a2a2c] via-[#363638] to-[#424244]">
      <main className="container mx-auto px-4 py-24 md:py-32 max-w-6xl">
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre mim
          </h1>
          <div className="h-1 w-16 bg-[#fdb003] mb-8"></div>

          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Sou um desenvolvedor web apaixonado por tecnologia e inovação. Tenho
            um forte interesse por aprimorar minhas habilidades em
            desenvolvimento web full stack, buscando sempre novos desafios e
            oportunidades para aprender e crescer. Experiência com tecnologias
            como JavaScript, TypeScript, React, Next.js, Node.js e Tailwind CSS
            no front-end, e de backend com Express.js, Node.js e APIs Rest.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-[#fdb003] rounded-lg flex items-center justify-center">
                <FaCode className="text-white text-xl" />
              </div>
              <p className="text-gray-300 text-lg">
                Desenvolvedor Web Full-stack sempre em busca de criar soluções
                que facilitam a vida de outras pessoas
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <p className="text-gray-300 text-lg">
                Graduando em Análise e Desenvolvimento de Sistemas, pela
                Universidade Estácio de Sá
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />
      </main>
    </div>
  );
};

export default AboutPage;

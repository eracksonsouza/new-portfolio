import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ProfessionalExperience from "@/components/professional-experience";
import EducationSection from "@/components/educacion-section";
import ProjectsCard from "@/components/projects-card";
import ContactForm from "@/components/contact-form";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-[var(--es-bg-main)] text-white">
      <section id="home">
        <HeroSection />
      </section>

      <section id="about" className="bg-[var(--es-bg-soft)] py-16 md:py-24">
        <main className="container mx-auto max-w-6xl px-4">
          <div className="mb-16 grid items-center gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
            <div className="mx-auto">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-[#fdb003]/30 bg-white md:h-80 md:w-80">
                <Image
                  src="/assets/eu.png"
                  alt="Foto de Erackson Souza"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">Sobre mim</h2>
              <div className="mb-8 h-1 w-16 bg-[#fdb003]" />
              <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
                Desenvolvedor Full Stack focado em resultados e soluções reais, crio aplicações modernas que conectam negócios e pessoas, com foco em performance e experiência. Tenho experiência prática com {" "}
                <span className="font-bold">
                  JavaScript, TypeScript, React, Next.js, Node.js e Tailwind
                </span>
                , construindo desde interfaces acessíveis até APIs robustas com
                Express e Fastify. Meu foco é evoluir em arquitetura de
                software, backend e boas práticas para criar produtos com
                impacto real.
              </p>
            </div>
          </div>

          <EducationSection />
          <ProfessionalExperience />
          <SkillsSection />
        </main>
      </section>

      <ProjectsCard />

      <section id="contact" className="bg-[var(--es-bg-soft)] py-16 md:py-24">
        <main className="container mx-auto max-w-2xl px-4">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 text-center md:space-y-4">
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                Entre em <span className="text-[#fdb003]">Contato</span>
              </h2>
              <p className="text-base text-gray-400 md:text-lg">
                Tem uma pergunta ou quer trabalhar junto? Me chama.
              </p>
            </div>
            <ContactForm />
          </div>
        </main>
      </section>
    </div>
  );
};

export default Home;

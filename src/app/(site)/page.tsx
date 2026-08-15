import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ProfessionalExperience from "@/components/professional-experience";
import EducationSection from "@/components/educacion-section";
import Link from "next/link";
import dynamic from "next/dynamic";

const ProjectsSection = dynamic(
  () => import("@/components/projects/projects-section"),
  {
    loading: () => (
      <div className="h-80 rounded-2xl bg-[var(--es-surface)]/60" />
    ),
  }
);

const ContactForm = dynamic(() => import("@/components/contact-form"), {
  loading: () => <div className="h-[520px] rounded-xl bg-[var(--es-surface-2)]/40" />,
});

const Home = () => {
  return (
    <div className="bg-[var(--es-bg-main)] text-white">
      <section id="home">
        <HeroSection />
      </section>

      <section id="about" className="bg-[var(--es-bg-soft)] py-16 md:py-24">
        <main className="container mx-auto max-w-6xl px-4">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Sobre mim</h2>
            <div className="mb-8 h-1 w-16 bg-[#fdb003]" />
            <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
              Desenvolvedor Full Stack focado em resultados e soluções reais,
              crio aplicações modernas que conectam negócios e pessoas, com foco
              em performance e experiência. Tenho experiência prática com{" "}
              <span className="font-bold">
                JavaScript, TypeScript, React, Next.js, Node.js e Tailwind
              </span>
              , construindo desde interfaces acessíveis até APIs robustas com
              Express e Fastify. Meu foco é evoluir em arquitetura de software,
              backend e boas práticas para criar produtos com impacto real.
            </p>
          </div>

          <EducationSection />
          <ProfessionalExperience />
          <SkillsSection />
        </main>
      </section>

      <ProjectsSection />

      <section id="contact" className="bg-[var(--es-bg-soft)] py-16 md:py-24">
        <main className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <section className="space-y-10">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#fdb003]">
                  Vamos conversar
                </p>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  Entre em <span className="text-[#fdb003]">Contato</span>
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
                  Estou sempre aberto para discutir novos projetos, ideias e
                  oportunidades de colaboração. Se quiser trocar uma ideia, me
                  chama.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-400">
                  Prefere falar por e-mail?
                </p>
                <Link
                  href="mailto:souza.erackson@gmail.com"
                  className="inline-block text-lg font-semibold text-[#fdb003] transition-colors hover:text-[#ffd166]"
                >
                  souza.erackson@gmail.com
                </Link>
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-[var(--es-surface)]/70 p-6 shadow-xl md:p-8">
              <ContactForm variant="split" />
            </section>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Home;

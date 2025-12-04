import { Briefcase } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  isCurrent?: boolean;
};

type ProfessionalExperienceProps = {
  experiences?: Experience[];
};

const defaultExperiences: Experience[] = [
  {
    title: "Monitor de Tecnologia",
    company: "DevQuest",
    location: "Remoto",
    period: "Dez 2024 — Atual",
    description:
      "Acompanho alunos diariamente, desbloqueando dúvidas em HTML, CSS, JavaScript, React, TypeScript, Node.js, PostgreSQL e Express com foco em torná-los independentes.",
    isCurrent: true,
  },
  {
    title: "Desenvolvedor Full-Stack (Freelance)",
    company: "Projetos autorais e clientes diretos",
    location: "Remoto",
    period: "Jan 2024 — Out 2024",
    description:
      "Criação de landing pages e produtos internos usando Next.js, Tailwind CSS e integrações com APIs, priorizando performance e clareza visual.",
  }
];

const ProfessionalExperience = ({
  experiences = defaultExperiences,
}: ProfessionalExperienceProps) => {
  return (
    <section className="mb-20" aria-labelledby="experience-title">
      <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="space-y-1">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#fdb003]">
              <Briefcase className="h-4 w-4" aria-hidden />
              Carreira
            </p>
            <h2
              id="experience-title"
              className="text-3xl md:text-4xl font-semibold text-white"
            >
              Experiências profissionais
            </h2>
          </div>
          <span className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
            Atualizado recentemente
          </span>
        </div>

        <div className="divide-y divide-white/10">
          {experiences.map((experience) => (
            <article
              key={`${experience.title}-${experience.company}`}
              className="relative py-5 first:pt-0 last:pb-0"
            >
              {experience.isCurrent && (
                <span className="absolute right-0 top-5 inline-flex items-center rounded-full border border-[#fdb003]/50 bg-[#fdb003]/10 px-3 py-1 text-xs font-semibold text-[#fdb003]">
                  Atual
                </span>
              )}

              <div className="space-y-2 pr-24 md:pr-28">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {experience.title}
                </h3>

                <p className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="text-gray-200">{experience.company}</span>
                  <span aria-hidden className="text-gray-500">
                    •
                  </span>
                  <span className="text-gray-400">{experience.location}</span>
                </p>

                <p className="text-sm text-gray-400">{experience.period}</p>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-3xl">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;

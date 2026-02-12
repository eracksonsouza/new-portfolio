import Image from "next/image";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  duration?: string;
  description: string;
  highlights?: string[];
  stacks?: string[];
  isCurrent?: boolean;
};

type ProfessionalExperienceProps = {
  experiences?: Experience[];
};

const defaultExperiences: Experience[] = [
  {
    title: "Desenvolvedor Web | Automações e Projetos Full-Stack",
    company: "DevQuest",
    location: "Remoto",
    period: "Atual",
    duration: "Função atual",
    description:
      "Atuo como Desenvolvedor Web, com foco em automações, desenvolvimento de aplicações e projetos educacionais full-stack, contribuindo para a evolução técnica da plataforma e para o aprendizado prático dos alunos.",
    highlights: [
      "Desenvolvimento de automações com n8n, integrando APIs REST, webhooks e ferramentas externas para otimizar fluxos e processos internos.",
      "Criação e estruturação de projetos full-stack utilizados nos cursos, simulando cenários reais de mercado.",
      "Desenvolvimento e manutenção de aplicações web, com foco em organização de código, reutilização de componentes e boas práticas.",
      "Apoio técnico aos alunos na resolução de problemas, aplicação de lógica, consumo de APIs REST e estruturação de projetos.",
      "Participação na definição de requisitos técnicos, melhorias contínuas e evolução da experiência do aluno.",
    ],
    stacks: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Trabalho em equipe",
      "React.js",
      "Next.js",
      "n8n",
    ],
    isCurrent: true,
  },
  {
    title: "Mentoria Técnica e Code Review",
    company: "DevQuest",
    location: "Remoto",
    period: "Dez 2024 — Atual",
    duration: "1 ano +",
    description:
      "Atuo na análise e revisão de código (Code Review) de centenas de alunos, garantindo a aplicação de boas práticas em React, TypeScript e Node.js.",
    highlights: [
      "Debugging e Troubleshooting: auxílio na resolução de bugs complexos em aplicações full-stack, ensinando estratégias de depuração e lógica de programação avançada.",
      "Arquitetura e Ferramentas: facilito a implementação de integrações entre Front-end (React/Next.js) e Back-end (Node.js/Express) com bancos de dados PostgreSQL.",
      "Mentorias Individuais (PAD – Programa de Aceleração Dev): atuação em mentorias individuais, apoiando alunos na evolução técnica, organização de estudos e estruturação de projetos.",
      "Liderança Técnica: atuo como referência técnica na comunidade, auxiliando na estruturação de projetos escaláveis e no uso correto de versionamento com Git.",
    ],
    stacks: [
      "React",
      "TypeScript",
      "Node.js",
      "Next.js",
      "Express",
      "PostgreSQL",
      "Git",
    ],
  },
  {
    title: "Desenvolvedor Full-Stack (Freelance)",
    company: "Projetos autorais e clientes diretos",
    location: "Remoto",
    period: "Jan 2024 — Out 2024",
    duration: "10 meses",
    description:
      "Criação de landing pages e produtos internos usando Next.js, Tailwind CSS e integrações com APIs, priorizando performance e clareza visual.",
  },
];

const ProfessionalExperience = ({
  experiences = defaultExperiences,
}: ProfessionalExperienceProps) => {
  return (
    <section className="mb-20" aria-labelledby="experience-title">
      <div className="space-y-8">
        <header className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#fdb003]/35 bg-[#101722] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#fdb003]">
            <Image src="/brief-icon.png" alt="" width={20} height={20} aria-hidden />
            Carreira
          </p>
          <h2 id="experience-title" className="text-3xl font-bold text-white md:text-4xl">
            Área profissional
          </h2>
          <p className="text-base text-gray-400 md:text-lg">2024 · Atualmente</p>
        </header>

        <div className="space-y-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.title}-${experience.company}`}
              className="rounded-2xl border border-white/12 bg-[#101722]/90 p-6 md:p-7"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white md:text-2xl">{experience.title}</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {experience.company} <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-400">{experience.location}</span>
                  </p>
                </div>

                {experience.isCurrent && (
                  <span className="inline-flex items-center rounded-full border border-[#fdb003]/40 bg-[#fdb003]/10 px-3 py-1 text-xs font-semibold text-[#fdb003]">
                    Atual
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed text-gray-300 md:text-base">{experience.description}</p>

              {experience.highlights && experience.highlights.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-300 md:text-base">
                  {experience.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-[#fdb003]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {experience.stacks && experience.stacks.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.stacks.map((stack) => (
                    <span
                      key={stack}
                      className="rounded-full border border-[#fdb003]/30 bg-[#fdb003]/8 px-3 py-1 text-xs font-medium text-[#fdb003]"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm">
                <span className="font-semibold text-[#fdb003]">{experience.duration || "Período"}</span>
                <span className="text-gray-400">{experience.period}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;

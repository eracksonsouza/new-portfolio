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
  /** Quando presente, o card inteiro vira link e ganha a seta. */
  url?: string;
  logo?: string;
  logoAlt?: string;
  logoBg?: string;
};

type ProfessionalExperienceProps = {
  experiences?: Experience[];
};

const defaultExperiences: Experience[] = [
  {
    title: "Desenvolvedor Full Stack · Freelance",
    company: "EcoResort Vale do Rossim",
    location: "Remoto",
    period: "Mai 2026 — Ago 2026",
    duration: "4 meses",
    url: "https://www.valedorossim.com/",
    logo: "/assets/LogoVR.png",
    logoAlt: "Logo EcoResort Vale do Rossim",
    description:
      "Desenvolvimento do sistema de reservas completo — backend REST com Node.js, Fastify, Drizzle ORM e PostgreSQL, e frontend em React.js + Vite + TypeScript + Tailwind CSS.",
    highlights: [
      "Criação do painel administrativo para gestão de acomodações, eventos e disponibilidade pelos proprietários do resort.",
      "Configuração de gateway de pagamento e implementação das regras de negócio do fluxo de reservas.",
      "Integração com channel manager (SiteMinder) para sincronização de disponibilidade em tempo real com OTAs (Airbnb, Odisseias).",
      "Responsável pelas decisões de arquitetura, modelagem de banco de dados e integrações com sistemas externos.",
    ],
    stacks: [
      "Node.js",
      "Fastify",
      "Drizzle ORM",
      "PostgreSQL",
      "React.js",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Desenvolvedor Web | Automações e Projetos Full-Stack",
    company: "DevQuest",
    location: "Remoto",
    period: "Atual",
    duration: "Função atual",
    logo: "/assets/devquest-logo.png",
    logoAlt: "Logo DevQuest",
    logoBg: "bg-transparent",
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
    logo: "/assets/devquest-logo.png",
    logoAlt: "Logo DevQuest",
    logoBg: "bg-transparent",
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
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200 group-hover/card:-translate-y-1 group-hover/card:translate-x-1 motion-reduce:transition-none"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const ProfessionalExperience = ({
  experiences = defaultExperiences,
}: ProfessionalExperienceProps) => {
  return (
    <section className="mb-20" aria-labelledby="experience-title">
      <div className="space-y-8">
        <header className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--es-accent)]/35 bg-[var(--es-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--es-accent)]">
            <Image
              src="/brief-icon.png"
              alt=""
              width={20}
              height={20}
              aria-hidden
            />
            Carreira
          </p>
          <h2
            id="experience-title"
            className="text-3xl font-bold text-white md:text-4xl"
          >
            Área profissional
          </h2>
          <p className="text-base text-gray-400 md:text-lg">
            2024 · Atualmente
          </p>
        </header>

        {/* group/list: passar o mouse em um card apaga levemente os outros */}
        <ol className="group/list">
          {experiences.map((experience) => {
            const heading = (
              <>
                {experience.title}
                <span className="text-gray-400"> · </span>
                {experience.company}
                {experience.url && <ArrowIcon />}
              </>
            );

            return (
              <li
                key={`${experience.title}-${experience.company}`}
                className="mb-4"
              >
                <div className="group/card relative grid gap-3 py-5 transition-opacity duration-300 sm:grid-cols-8 sm:gap-6 hover:opacity-100! group-hover/list:opacity-50 motion-reduce:transition-none">
                  {/* superfície que acende no hover. Fica sempre montada e só
                      troca de opacidade — transição barata e suave. O `hover:`
                      do Tailwind v4 já só vale em dispositivo com mouse. */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -inset-x-4 z-0 rounded-xl bg-[var(--es-surface-2)] opacity-0 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.07)] ring-1 ring-[var(--es-accent)]/15 transition-opacity duration-300 group-hover/card:opacity-100 lg:-inset-x-6 motion-reduce:transition-none"
                  />

                  <div className="relative z-10 sm:col-span-2">
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {experience.period}
                    </p>
                  </div>

                  <div className="relative z-10 sm:col-span-6">
                    <h3 className="font-semibold leading-snug text-white transition-colors group-hover/card:text-[var(--es-accent)] motion-reduce:transition-none">
                      {experience.url ? (
                        <a
                          href={experience.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-baseline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--es-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--es-bg-soft)]"
                        >
                          {/* expande a área clicável para o card inteiro */}
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 hidden rounded-lg lg:block"
                          />
                          <span>{heading}</span>
                        </a>
                      ) : (
                        heading
                      )}
                    </h3>

                    <p className="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-gray-500">
                      {experience.logo && (
                        <span
                          className={`inline-flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-sm ${
                            experience.logoBg ?? "bg-white p-0.5"
                          }`}
                        >
                          <Image
                            src={experience.logo}
                            alt={experience.logoAlt || experience.company}
                            width={40}
                            height={40}
                            className="h-full w-full object-contain"
                          />
                        </span>
                      )}
                      <span>{experience.location}</span>
                      {experience.duration && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{experience.duration}</span>
                        </>
                      )}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {experience.description}
                    </p>

                    {experience.highlights &&
                      experience.highlights.length > 0 && (
                        <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-gray-400">
                          {experience.highlights.map((item) => (
                            <li key={item} className="flex gap-2.5">
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-600"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                    {experience.stacks && experience.stacks.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {experience.stacks.map((stack) => (
                          <li key={stack}>
                            <span className="inline-flex items-center rounded-full bg-[var(--es-accent)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--es-accent)]">
                              {stack}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ProfessionalExperience;

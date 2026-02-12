import Image from "next/image";

type EducationItem = {
  title: string;
  institution: string;
  location: string;
  period: string;
  duration?: string;
  status?: "Cursando" | "Concluído" | "Planejado";
  description?: string;
};

type EducationSectionProps = {
  education?: EducationItem[];
};

const defaultEducation: EducationItem[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Estácio de Sá",
    location: "Mossoró, RN",
    period: "2024 — Atual",
    duration: "Em andamento",
    status: "Cursando",
    description:
      "Base sólida em fundamentos de desenvolvimento, engenharia de software e segurança, aplicando conceitos em projetos práticos.",
  },
];

const EducationSection = ({
  education = defaultEducation,
}: EducationSectionProps) => {
  return (
    <section className="mb-20" aria-labelledby="education-title">
      <div className="space-y-8">
        <header className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#fdb003]/35 bg-[#101722] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#fdb003]">
            <Image
              src="/graduation-cap-icon.png"
              alt=""
              width={20}
              height={20}
              aria-hidden
            />
            Formação
          </p>
          <h2 id="education-title" className="text-3xl font-bold text-white md:text-4xl">
            Acadêmica
          </h2>
          <p className="text-base text-gray-400 md:text-lg">2024 · Atualmente</p>
        </header>

        <div className="space-y-5">
          {education.map((item) => (
            <article
              key={`${item.title}-${item.period}`}
              className="rounded-2xl border border-white/12 bg-[#101722]/90 p-6 md:p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    {item.institution}
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-400">{item.location}</span>
                  </p>
                </div>

                {item.status && (
                  <span className="inline-flex items-center rounded-full border border-[#fdb003]/40 bg-[#fdb003]/10 px-3 py-1 text-xs font-semibold text-[#fdb003]">
                    {item.status}
                  </span>
                )}
              </div>

              {item.description && (
                <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
                  {item.description}
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm">
                <span className="font-semibold text-[#fdb003]">{item.duration || "Período"}</span>
                <span className="text-gray-400">{item.period}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

import { FaGraduationCap } from "react-icons/fa";

type EducationItem = {
  title: string;
  institution: string;
  location: string;
  period: string;
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
    status: "Cursando",
    description:
      "Base sólida em fundamentos de desenvolvimento, engenharia de software e segurança, aplicando conceitos em projetos práticos.",
  }
];

const EducationSection = ({
      education = defaultEducation,
}: EducationSectionProps) => {
  return (
    <section className="mb-20" aria-labelledby="education-title">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fdb003]/10 border border-[#fdb003]/30">
            <FaGraduationCap className="text-[#fdb003] text-xl" aria-hidden />
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-[#fdb003]">
              Formação
            </p>
            <h2
              id="education-title"
              className="text-2xl md:text-3xl font-semibold text-white"
            >
              Graduação
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <article
              key={`${item.title}-${item.period}`}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 md:p-6"
            >
              <div className="flex flex-wrap items-start gap-3 justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {item.institution}
                    <span className="text-gray-500 mx-2">•</span>
                    <span className="text-gray-400">{item.location}</span>
                  </p>
                  <p className="text-sm text-gray-400">{item.period}</p>
                </div>

                {item.status && (
                  <span className="inline-flex items-center rounded-full border border-[#fdb003]/40 bg-[#fdb003]/10 px-3 py-1 text-xs font-semibold text-[#fdb003]">
                    {item.status}
                  </span>
                )}
              </div>

              {item.description && (
                <p className="mt-4 text-sm md:text-base text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

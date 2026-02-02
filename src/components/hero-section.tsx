import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string[];
  buttons?: {
    label: string;
    href: string;
    target?: "_blank" | "_self";
    rel?: string;
  }[];
}

const HeroSection = ({
  title = "Olá, tudo bem?",
  subtitle = "Seja bem-vindo ao meu portfólio!",
  buttons = [
    {
      label: "CURRÍCULO",
      href: "https://drive.google.com/drive/folders/1YNRAWRyM1sVKaJ7ALk8j1Rvj65qptrSJ?usp=sharing",
      target: "_blank",
      rel: "noreferrer",
    },
    { label: "PROJETOS", href: "/projects" },
  ],
}: HeroSectionProps) => {
  return (
    <div className="relative bg-[#0a0a0a] shadow-2xl h-full flex justify-center items-center w-full py-8">
      <div className="absolute top-8 left-8 w-16 h-1 bg-[#fdb003]"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 p-6 sm:p-8 lg:p-12">
        <div className="flex-1 flex flex-col gap-6 max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Opa, tudo bem?
            <br />
            Eu sou o <span className="text-[#fdb003]">Erackson Souza</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
            Desenvolvedor Full Stack focado em resultados e soluções reais.
            Crio aplicações modernas que conectam negócios e pessoas, com foco
            em performance e experiência. Tenho experiência prática com{" "}
            <strong>
              JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS
            </strong>{" "}
            e no backend com{" "}
            <strong>Express.js, APIs REST e integrações automáticas</strong>.
          </p>

          <div className="flex flex-wrap gap-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                asChild
                className="bg-[#fdb003] hover:bg-[#e5a003] text-white font-semibold rounded-full px-8 py-6 text-sm tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Link href={button.href} target={button.target} rel={button.rel}>
                  {button.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="relative shrink-0 mt-6 lg:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#fdb003] to-[#e5a003] opacity-20 blur-xl"></div>

            <div className="relative mb-10 w-full h-full rounded-full overflow-hidden border-4 border-[#fdb003]/30 shadow-2xl">
              <Image
                src="/assets/eu.png"
                alt="Erackson Souza"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

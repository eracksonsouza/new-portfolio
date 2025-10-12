import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string[];
  buttons?: {
    label: string;
    href: string;
  }[];
}

const HeroSection = ({
  title = "Olá, tudo bem?",
  subtitle = "Seja bem-vindo ao meu portfólio!",

  buttons = [
    { label: "CURRÍCULO", href: "/curriculum" },
    { label: "PROJETOS", href: "/projects" },
  ],
}: HeroSectionProps) => {
  return (
    <div className="flex flex-col gap-8 lg:bg-transparent bg-white lg:p-0 p-6 lg:rounded-none rounded-b-lg lg:shadow-none shadow-lg">
      {/* Título e Subtítulo */}
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">{subtitle}</p>

        {/* Botões */}
        <div className="flex flex-wrap gap-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              asChild
              className="bg-[#fdb003] hover:bg-[#e5a003] text-white font-semibold rounded-full px-8 py-6 text-sm tracking-wider"
            >
              <Link href={button.href}>{button.label}</Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Descrição */}
      <div className="space-y-4">
        <p className="text-base md:text-xl text-gray-800">
          Sou um desenvolvedor web apaixonado por tecnologia e inovação. Tenho
          um forte interesse por aprimorar minhas habilidades em desenvolvimento
          web full stack, buscando sempre novos desafios e oportunidades para
          aprender e crescer; Experiência com tecnologias como JavaScript,
          TypeScript, React, Next.js, Node.js e Tailwind CSS no front-end, e de
          backend com Express.js, Node.js e APIs Rest.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

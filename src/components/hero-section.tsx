import Link from "next/link";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import euDigital from "../../public/assets/eu-digital-amarelo.png";

interface HeroSectionProps {
  cvUrl?: string;
  chatUrl?: string;
  socialLinks?: {
    linkedin: string;
    github: string;
  };
}

const HeroSection = ({
  cvUrl =
    "https://drive.google.com/drive/folders/1YNRAWRyM1sVKaJ7ALk8j1Rvj65qptrSJ?usp=sharing",
  chatUrl = "https://wa.me/+5584991153472",
  socialLinks = {
    linkedin: "https://www.linkedin.com/in/eracksonsouza/",
    github: "https://github.com/eracksonsouza",
  },
}: HeroSectionProps) => {
  return (
    <section className="relative isolate flex w-full items-center justify-center overflow-hidden bg-[var(--es-bg-main)] py-8 shadow-2xl lg:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(253,176,3,0.18),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,18,0.76),rgba(8,12,20,0.95))]" />

      <div className="relative container mx-auto grid items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:px-12">
        <div className="order-1 flex flex-col gap-5 text-center lg:text-left">

          <div className="space-y-3">
            <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Erackson
              <br />
              Souza
            </h1>
            <p className="text-base text-gray-300 sm:text-lg">
              Desenvolvedor Full Stack | Front-end & Back-end
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-[#fdb003]/30 bg-white/10 p-2.5 text-gray-100 transition-colors hover:border-[#fdb003] hover:text-[#fdb003]"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-[#fdb003]/30 bg-white/10 p-2.5 text-gray-100 transition-colors hover:border-[#fdb003] hover:text-[#fdb003]"
            >
              <FaGithub size={20} />
            </Link>
          </div>
        </div>

        <div className="order-2 relative mx-auto w-48 sm:w-56 md:w-64 lg:w-96">
          <div className="absolute inset-0 rounded-full bg-[#fdb003]/25 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-full border border-[#fdb003]/30 bg-[var(--es-surface-2)] shadow-[0_0_50px_rgba(253,176,3,0.28)] lg:shadow-[0_0_65px_rgba(253,176,3,0.3)]">
            <Image src={euDigital} alt="Erackson Souza" fill className="object-cover" priority />
          </div>
        </div>

        <div className="order-3 flex flex-col items-center gap-4 lg:items-end">
          <Link
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base text-[#fdb003] transition-colors hover:text-[#ffd166]"
          >
            Baixar CV <FiDownload size={16} />
          </Link>

          <Link
            href={chatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#fdb003]/40 bg-transparent px-6 py-2.5 text-base text-[#fdb003] transition-all hover:border-[#fdb003] hover:text-[#ffd166]"
          >
            <FaWhatsapp size={18} />
            Vamos conversar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

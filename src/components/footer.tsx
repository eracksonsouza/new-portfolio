import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/eracksonsouza/",
  github: "https://github.com/eracksonsouza",
  whatsapp: "https://wa.me/+5584991153472",
};

const Footer = () => {
  return (
    <footer className="flex h-[10vh] items-center border-t border-white/10 bg-[var(--es-surface)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-sm md:text-base">
            ©2026 Erackson Souza
          </div>

          <div className="flex items-center gap-6">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0A66C2] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#fdb003] transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#25D366] transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

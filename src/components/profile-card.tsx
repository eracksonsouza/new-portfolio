import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";
import fotoPerfil from "@/../public/assets/foto-perfil-card.png";

interface ProfileCardProps {
  name?: string;
  title?: string;
  imageSrc?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    whatsapp?: string;
    instagram?: string;
  };
}

const ProfileCard = ({
  name = "Erackson Souza",
  title = "DESENVOLVEDOR WEB",
  socialLinks = {
    linkedin: "https://www.linkedin.com/in/seu-perfil",
    github: "https://github.com/seu-usuario",
    whatsapp: "https://wa.me/5511999999999",
    instagram: "https://www.instagram.com/seu-usuario",
  },
}: ProfileCardProps) => (
  <div className="w-full max-w-md mx-auto bg-gradient-to-b from-[#fdb003] to-[#f59e0b] lg:rounded-lg rounded-t-lg shadow-2xl overflow-hidden">
    {/* Foto de perfil */}
    <div className="pt-12 pb-8 flex justify-center">
      <div className="relative w-52 h-52 rounded-full border-4 border-white shadow-lg overflow-hidden">
        <Image
          src={fotoPerfil}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>

    {/* Informações */}
    <div className="text-center px-8 pb-8">
      <h2 className="text-white text-3xl font-bold mb-3">{name}</h2>

      {/* Linha divisória */}
      <div className="w-48 h-0.5 bg-white/30 mx-auto mb-4"></div>

      <p className="text-white/90 text-sm tracking-[0.3em] uppercase font-light">
        {title}
      </p>
    </div>

    {/* Redes Sociais */}
    <div className="bg-white py-6">
      <div className="flex justify-center items-center gap-6">
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#0A66C2] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
        )}

        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#181717] transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
        )}

        {socialLinks.whatsapp && (
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#25D366] transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={32} />
          </a>
        )}

        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-[#E4405F] transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={32} />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProfileCard;

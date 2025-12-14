"use client";

import Link from "next/link";
import { Linkedin, Github, MessageCircle } from "lucide-react";

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/eracksonsouza/",
  github: "https://github.com/eracksonsouza",
  whatsapp: "https://wa.me/+5584991153472",
};

const Footer = () => {
  return (
    <footer className="py-6 bg-[#363638] border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-sm md:text-base">
            ©2025 Erackson Souza
          </div>

          <div className="flex items-center gap-6">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0A66C2] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#fdb003] transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>

            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#25D366] transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "Sobre" },
  { href: "/#projects", label: "Projetos" },
  { href: "/#contact", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="relative container mx-auto px-4">
        <div className="flex items-center justify-between h-[10vh]">
          <Link href="/" className="relative h-12 w-auto">
            <Image
              src="/assets/logo-es.png"
              alt="Logo Erackson Souza"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
              priority
              quality={100}
            />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-[#fdb003] transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-black hover:text-[#fdb003] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        <nav
          className={`md:hidden absolute right-4 top-[calc(10vh-0.25rem)] w-48 rounded-xl border border-black/10 bg-white backdrop-blur-lg shadow-lg transition-all duration-200 ${
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0"
          }`}
        >
          <ul className="flex flex-col p-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-black/5 hover:text-[#fdb003]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "Sobre" },
  { href: "/#projects", label: "Projetos" },
  { href: "/#contact", label: "Contato" },
];

const Header = () => (
  <header className="sticky top-0 left-0 right-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
    <div className="relative container mx-auto px-4">
      <div className="flex h-[var(--header-height)] items-center justify-between">
        <Link href="/" className="relative h-12 w-auto">
          <Image
            src="/assets/logo-es.png"
            alt="Logo Erackson Souza"
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
            sizes="160px"
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

        <details className="group relative md:hidden">
          <summary className="list-none cursor-pointer rounded-md p-2 text-black transition-colors hover:text-[#fdb003]">
            <span className="sr-only">Abrir menu</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7 group-open:hidden"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="hidden h-7 w-7 group-open:block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          </summary>

          <nav className="absolute right-0 top-[calc(var(--header-height)-0.25rem)] w-48 rounded-xl border border-black/10 bg-white shadow-lg">
            <ul className="flex flex-col p-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-black/5 hover:text-[#fdb003]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </div>
  </header>
);

export default Header;

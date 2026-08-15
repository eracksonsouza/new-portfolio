"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Só aparece depois que o usuário rolou o equivalente a uma tela. */
const SHOW_AFTER = 600;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);

    // Chamada inicial: cobre o caso de a página abrir já rolada (F5 no meio).
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      // Fica sempre montado e só troca opacidade/pointer-events: evita
      // remontar a imagem a cada scroll e permite animar a entrada.
      className={`group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--es-surface-2)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.75)] ring-1 ring-[var(--es-accent)]/20 transition-all duration-300 hover:ring-[var(--es-accent)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--es-accent)] motion-reduce:transition-none ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <Image
        src="/assets/dedo-emoji.webp"
        alt=""
        width={48}
        height={48}
        aria-hidden
        className="h-7 w-7 object-contain transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      />
    </button>
  );
};

export default BackToTop;

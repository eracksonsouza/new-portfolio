"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
const fotoHero = "/assets/eu.png";

// Ajuste fino do enquadramento da foto (em porcentagem)
const FOCAL_X = 82; // 0% esquerda, 100% direita
const FOCAL_Y = 50; // 0% topo, 100% base

function Typewriter({
  items,
  typingSpeed = 80,
  pauseMs = 1200,
}: {
  items: string[];
  typingSpeed?: number;
  pauseMs?: number;
}) {
  const phrases = useMemo(() => items.filter(Boolean), [items]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    const full = phrases[phraseIndex % phrases.length];
    const isComplete = displayed === full;
    const isEmpty = displayed.length === 0;

    const baseDelay = deleting ? Math.max(typingSpeed * 0.6, 40) : typingSpeed;
    const delay = isComplete || isEmpty ? pauseMs : baseDelay;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (!isComplete) {
          setDisplayed(full.slice(0, displayed.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (!isEmpty) {
          setDisplayed(full.slice(0, displayed.length - 1));
        } else {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [phrases, phraseIndex, displayed, deleting, typingSpeed, pauseMs]);

  return (
    <span className="whitespace-nowrap">
      <span className="text-[#fdb003]">{displayed || "\u00A0"}</span>
      <span
        className="inline-block w-[2px] h-[1em] align-[-0.1em] bg-[#fdb003] ml-1 animate-pulse"
        aria-hidden
      />
    </span>
  );
}

export default function NewHome() {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#0f1216]">
      {/* Foto como background */}
      <div className="absolute inset-0">
        <Image
          src={fotoHero}
          alt="Foto de Erackson Souza"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 md:opacity-90 select-none pointer-events-none"
          style={{ objectPosition: `${FOCAL_X}% ${FOCAL_Y}%` }}
        />
        {/* Gradiente para legibilidade do texto */}
        <div className="absolute inset-y-0 left-0 w-[68%] md:w-[62%] lg:w-[58%] bg-gradient-to-r from-[#0f1216] via-[#0f1216]/95 md:via-[#0f1216]/85 to-transparent" />
      </div>

      {/* Conteúdo */}
      <section className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.35em] text-white/60 uppercase">
            Bem-vindo
          </p>
          <h1 className="mt-3 text-4xl md:text-6xl leading-tight font-extrabold text-white">
            Eu sou Erackson Souza,
            <br className="hidden md:block" />
            <span className="block mt-2 md:mt-4 text-2xl md:text-4xl font-semibold">
              <Typewriter
                items={[
                  "Desenvolvedor Web",
                  "Desenvolvedor Full Stack",
                  "Dev Criativo",
                ]}
              />
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/80">
            Buscando sempre novos desafios e oportunidades para aprender e
            crescer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* Espaço reservado para CTAs se desejar adicionar depois */}
          </div>
        </div>
      </section>
    </div>
  );
}

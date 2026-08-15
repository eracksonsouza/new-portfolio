"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  /** Lado de onde o bloco entra. */
  from?: "left" | "right" | "bottom";
  className?: string;
};

const OFFSET = { left: -56, right: 56, bottom: 0 } as const;

/**
 * Recebe `children` como prop, então o conteúdo continua sendo renderizado no
 * servidor mesmo estando dentro de um client component. O bloco nasce visível:
 * a animação só é aplicada se o GSAP rodar, nunca escondendo conteúdo por JS.
 */
const Reveal = ({ children, from = "bottom", className }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Abaixo de lg as colunas empilham: deslizar na horizontal não faz
      // sentido e ainda empurraria o bloco para fora da viewport.
      mm.add(
        {
          stacked:
            "(prefers-reduced-motion: no-preference) and (max-width: 1023px)",
          sideBySide:
            "(prefers-reduced-motion: no-preference) and (min-width: 1024px)",
        },
        (context) => {
          const { sideBySide } = context.conditions as {
            stacked: boolean;
            sideBySide: boolean;
          };

          gsap.from(ref.current, {
            opacity: 0,
            x: sideBySide ? OFFSET[from] : 0,
            y: sideBySide && from !== "bottom" ? 0 : 40,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              once: true,
            },
          });
        }
      );

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Reveal;

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { ProjectShot } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SLIDE_MS = 3000;

type ProjectShotsProps = {
  title: string;
  cover: ProjectShot;
  shots: ProjectShot[];
  /** Lado para onde a moldura decorativa se desloca. */
  frameSide?: "left" | "right";
  priority?: boolean;
};

const ProjectShots = ({
  title,
  cover,
  shots,
  frameSide = "left",
  priority = false,
}: ProjectShotsProps) => {
  const slides = [cover, ...shots];
  const hasCarousel = slides.length > 1;

  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [index, setIndex] = useState(0);
  /** Só monta os prints extras quando a linha chega perto da viewport. */
  const [armed, setArmed] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Os prints passam sozinhos, sem hover nem clique. Só pausa quando a linha
  // sai da tela — não adianta rodar carrossel que ninguém está vendo.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !hasCarousel) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setArmed(true);
        setPlaying(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasCarousel]);

  // Avanço automático.
  useEffect(() => {
    if (!playing || !hasCarousel) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_MS
    );
    return () => window.clearInterval(id);
  }, [playing, hasCarousel, slides.length]);

  // Crossfade entre os prints.
  useGSAP(
    () => {
      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, {
          opacity: i === index ? 1 : 0,
          duration: 0.55,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      });
    },
    { dependencies: [index, armed], scope: containerRef }
  );

  // Parallax da moldura — só no desktop e sem reduced motion.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 1024px)",
        () => {
          gsap.fromTo(
            frameRef.current,
            { y: 16 },
            {
              y: -16,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      );
      return () => mm.revert();
    },
    { scope: containerRef }
  );

  /** Os dots apenas saltam para o print — o rodízio continua depois. */
  const selectSlide = (i: number) => {
    setArmed(true);
    setIndex(i);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* moldura outline deslocada atrás do print */}
      <div
        ref={frameRef}
        aria-hidden="true"
        className={`pointer-events-none absolute -top-2 h-full w-full rounded-xl border border-[var(--es-accent)]/30 sm:-top-3 md:-top-4 ${
          frameSide === "left"
            ? "-left-2 sm:-left-3 md:-left-4"
            : "-right-2 sm:-right-3 md:-right-4"
        }`}
      />

      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-[var(--es-surface)]">
        {slides.map((shot, i) => {
          if (i > 0 && !armed) return null;
          return (
            <div
              key={shot.src}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className="absolute inset-0"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              <Image
                src={shot.src}
                alt={i === 0 ? shot.alt : `${title} — ${shot.alt}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={priority && i === 0}
                quality={85}
              />
            </div>
          );
        })}
      </div>

      {hasCarousel && (
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {slides.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => selectSlide(i)}
              aria-label={`Ver print ${i + 1} de ${slides.length} do projeto ${title}`}
              aria-current={i === index ? "true" : undefined}
              className="inline-flex h-9 w-7 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--es-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--es-bg-main)]"
            >
              <span
                aria-hidden="true"
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-[var(--es-accent)]"
                    : "w-1.5 bg-white/25"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectShots;

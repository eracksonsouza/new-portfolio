"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  currentIndex: number;
  itemsPerPage: number;
  maxIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  buttonColor?: string;
  indicatorColor?: string;
}

export function Carousel({
  children,
  currentIndex,
  itemsPerPage,
  maxIndex,
  onPrev,
  onNext,
  onGoToSlide,
  canGoPrev,
  canGoNext,
  buttonColor = "#fdb003",
  indicatorColor = "#fdb003",
}: CarouselProps) {
  return (
    <div className="relative mb-8 md:mb-12 px-0 md:px-12">
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className=" absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 md:p-3 transition-all"
        aria-label="Anterior"
        style={{
          backgroundColor: canGoPrev
            ? `${buttonColor}1A`
            : "rgba(255,255,255,0.1)",
        }}
      >
        <ChevronLeft
          className="w-4 h-4 md:w-6 md:h-6"
          style={{ color: canGoPrev ? buttonColor : "#ffffff" }}
        />
      </button>

      {/* Container do Carrossel */}
      <div className="overflow-hidden mx-8 md:mx-0">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {children}
        </div>
      </div>

      {/* Botão Próximo */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 md:p-3 transition-all"
        aria-label="Próximo"
        style={{
          backgroundColor: canGoNext
            ? `${buttonColor}1A`
            : "rgba(255,255,255,0.1)",
        }}
      >
        <ChevronRight
          className="w-4 h-4 md:w-6 md:h-6"
          style={{ color: canGoNext ? buttonColor : "#ffffff" }}
        />
      </button>

      {/* Indicadores */}
      {maxIndex > 0 && (
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-6 md:w-8"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              style={{
                backgroundColor:
                  currentIndex === index ? indicatorColor : undefined,
              }}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

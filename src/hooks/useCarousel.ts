import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Hook personalizado para gerenciar carrosséis reutilizáveis
 *
 * @example
 * // Uso básico com autoplay
 * const carousel = useCarousel({
 *   totalItems: 10,
 *   autoplay: true,
 *   autoplayInterval: 5000,
 *   loop: true
 * });
 *
 * // Com breakpoints responsivos
 * const carousel = useCarousel({
 *   totalItems: items.length,
 *   breakpoints: {
 *     mobile: 1,
 *     tablet: 2,
 *     desktop: 3
 *   },
 *   autoplay: true,
 *   autoplayInterval: 5000,
 *   loop: true
 * });
 *
 * // No JSX, adicione eventos de mouse para pausar/retomar autoplay
 * <div
 *   onMouseEnter={carousel.pauseAutoplay}
 *   onMouseLeave={carousel.resumeAutoplay}
 * >
 *   // Seu conteúdo do carrossel
 * </div>
 */
interface UseCarouselProps {
  /** Número total de itens no carrossel */
  totalItems: number;
  /** Quantidade de itens visíveis por página em cada breakpoint */
  breakpoints?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  /** Ativa o autoplay (passagem automática de slides) */
  autoplay?: boolean;
  /** Intervalo em milissegundos entre cada passagem automática (padrão: 5000ms) */
  autoplayInterval?: number;
  /** Ativa o loop infinito (volta ao início após o último item) */
  loop?: boolean;
}

export function useCarousel({
  totalItems,
  breakpoints = { mobile: 1, tablet: 2, desktop: 3 },
  autoplay = false,
  autoplayInterval = 5000,
  loop = false,
}: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(breakpoints.desktop || 3);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  // Função para avançar para o próximo slide
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev < maxIndex) {
        return prev + 1;
      } else if (loop) {
        return 0; // Volta para o início se loop estiver ativo
      }
      return prev;
    });
  }, [maxIndex, loop]);

  // Função para voltar ao slide anterior
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else if (loop) {
        return maxIndex; // Vai para o final se loop estiver ativo
      }
      return prev;
    });
  }, [maxIndex, loop]);

  // Função para ir para um slide específico
  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  // Effect para gerenciar o resize da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(breakpoints.mobile || 1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(breakpoints.tablet || 2);
      } else {
        setItemsPerPage(breakpoints.desktop || 3);
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  // Effect para gerenciar o autoplay
  useEffect(() => {
    if (!autoplay || isHovered) {
      return;
    }

    // Limpa o timer anterior se existir
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }

    // Cria um novo timer
    autoplayTimerRef.current = setInterval(() => {
      handleNext();
    }, autoplayInterval);

    // Cleanup
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplay, autoplayInterval, handleNext, isHovered, currentIndex]);

  // Funções para pausar/retomar autoplay ao passar o mouse
  const pauseAutoplay = useCallback(() => {
    setIsHovered(true);
  }, []);

  const resumeAutoplay = useCallback(() => {
    setIsHovered(false);
  }, []);

  return {
    currentIndex,
    itemsPerPage,
    maxIndex,
    handlePrev,
    handleNext,
    goToSlide,
    canGoPrev: loop || currentIndex > 0,
    canGoNext: loop || currentIndex < maxIndex,
    pauseAutoplay,
    resumeAutoplay,
    isAutoplayPaused: isHovered,
  };
}

import Link from "next/link";

interface AnimatedScrollIndicatorProps {
  href?: string;
  label?: string;
  ariaLabel?: string;
}

const AnimatedScrollIndicator = ({
  href = "/#about",
  label = "SCROLL",
  ariaLabel = "Rolar para a próxima seção",
}: AnimatedScrollIndicatorProps) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="group absolute bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-1/2 z-10 -translate-x-1/2 md:bottom-6"
    >
      <div className="scroll-mouse-icon">
        <span className="scroll-mouse-wheel" />
      </div>
      <span className="mt-2 block text-center text-xs tracking-[0.18em] text-[#fdb003]/70 transition-colors group-hover:text-[#fdb003]">
       
      </span>
    </Link>
  );
};

export default AnimatedScrollIndicator;

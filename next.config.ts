import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // O Next 16 só permite as qualidades declaradas aqui (padrão: [75]).
    // Sem o 85, o `quality={85}` dos prints era ignorado sem aviso.
    // 75 continua na lista porque é o padrão das demais imagens do site.
    qualities: [75, 85],
  },
};

export default nextConfig;

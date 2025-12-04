import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erackson-souza.vercel.app"),
  title: {
    default: "Erackson Souza - Desenvolvedor Full-Stack",
    template: "%s | Erackson Souza",
  },
  description:
    "Portfólio profissional de Erackson Souza - Desenvolvedor Web Full-Stack especializado em Next.js, React, TypeScript e Node.js. Confira meus projetos e habilidades.",
  keywords: [
    "Erackson Souza",
    "Desenvolvedor Full-Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Portfólio",
    "Web Developer",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Erackson Souza" }],
  creator: "Erackson Souza",
  publisher: "Erackson Souza",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://erackson-souza.vercel.app",
    title: "Erackson Souza - Desenvolvedor Full-Stack",
    description:
      "Portfólio profissional de Erackson Souza - Desenvolvedor Web Full-Stack especializado em Next.js, React, TypeScript e Node.js.",
    siteName: "Erackson Souza Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Erackson Souza - Desenvolvedor Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erackson Souza - Desenvolvedor Full-Stack",
    description:
      "Portfólio profissional de Erackson Souza - Desenvolvedor Web Full-Stack especializado em Next.js, React, TypeScript e Node.js.",
    images: ["/og-image.png"],
    creator: "@eracksonsouza",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicons/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicons/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  alternates: {
    canonical: "https://erackson-souza.vercel.app",
  },
  verification: {
    google: "seu-codigo-google-search-console",
    // Adicione outros verificadores quando necessário
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://erackson-souza.vercel.app" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

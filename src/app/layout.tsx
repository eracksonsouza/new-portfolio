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
  title: "Portfólio Erackson Souza",
  description:
    "Portfólio Erackson Souza - Desenvolvedor Web Full-Stack, especialista em Next.js, React e Node.js. Confira meus projetos e habilidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

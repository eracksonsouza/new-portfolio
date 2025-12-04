import ProjectsCard from "@/components/projects-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Explore o portfólio de projetos de Erackson Souza - Aplicações web modernas desenvolvidas com Next.js, React, TypeScript, Node.js e outras tecnologias de ponta.",
  keywords: [
    "Projetos Erackson Souza",
    "Portfólio",
    "Aplicações Web",
    "Next.js Projects",
    "React Projects",
    "Full-Stack Projects",
  ],
  openGraph: {
    title: "Projetos | Erackson Souza",
    description:
      "Explore o portfólio de projetos de Erackson Souza - Aplicações web modernas desenvolvidas com tecnologias de ponta.",
    url: "https://erackson-souza.vercel.app/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos | Erackson Souza",
    description:
      "Explore o portfólio de projetos de Erackson Souza - Aplicações web modernas.",
  },
  alternates: {
    canonical: "https://erackson-souza.vercel.app/projects",
  },
};

const ProjectsPage = () => {
  return <ProjectsCard />;
};

export default ProjectsPage;

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/projects";
import ProjectShots from "./project-shots";
import Reveal from "./reveal";

type ProjectRowProps = {
  project: Project;
  index: number;
};

const ProjectRow = ({ project, index }: ProjectRowProps) => {
  /** Zigue-zague: linhas ímpares invertem os lados a partir de lg. */
  const mediaFirst = index % 2 === 1;

  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal
        from={mediaFirst ? "left" : "right"}
        className={mediaFirst ? "lg:order-1" : "lg:order-2"}
      >
        <ProjectShots
          title={project.title}
          cover={project.cover}
          shots={project.shots}
          frameSide={mediaFirst ? "left" : "right"}
          priority={index === 0}
        />
      </Reveal>

      <Reveal
        from={mediaFirst ? "right" : "left"}
        className={mediaFirst ? "lg:order-2" : "lg:order-1"}
      >
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold leading-tight text-white lg:text-3xl">
            {project.title}
          </h3>

          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400"
              >
                {tech}
              </li>
            ))}
          </ul>

          <p className="text-sm leading-relaxed text-gray-300 md:text-base">
            {project.description}
          </p>

          <p className="rounded-r border-l-2 border-[var(--es-accent)] bg-[var(--es-accent)]/5 py-2.5 pl-4 pr-3 text-sm leading-relaxed text-gray-200">
            <strong className="font-semibold text-[var(--es-accent)]">
              Resultado:
            </strong>{" "}
            {project.result}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
            {project.repository && (
              <Link
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--es-accent)] px-5 text-sm font-semibold text-black transition-colors hover:bg-[var(--es-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--es-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--es-bg-main)]"
                aria-label={`Ver repositório do projeto ${project.title} no Github`}
              >
                Ver Github
              </Link>
            )}

            {project.site && (
              <Link
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 border-b border-white/40 pb-0.5 text-sm font-medium text-white transition-colors hover:border-[var(--es-accent)] hover:text-[var(--es-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--es-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--es-bg-main)]"
                aria-label={`Abrir o projeto ${project.title} publicado`}
              >
                Ver projeto
                <FiExternalLink size={14} aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </Reveal>
    </article>
  );
};

export default ProjectRow;

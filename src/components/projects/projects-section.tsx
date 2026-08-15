import { projects } from "@/data/projects";
import ProjectRow from "./project-row";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="overflow-x-clip bg-[var(--es-bg-main)] px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 flex flex-col items-center md:mb-24">
          <h2 className="text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Projetos
          </h2>
          <div
            aria-hidden="true"
            className="mt-8 flex flex-col items-center gap-2"
          >
            <span className="block h-14 w-px bg-linear-to-b from-transparent to-[var(--es-accent)]" />
            <span className="block h-1.5 w-1.5 rounded-full bg-[var(--es-accent)]" />
          </div>
        </header>

        <div className="space-y-24 lg:space-y-36">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 px-4 py-16 sm:scroll-mt-20 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Selected work and side projects I've built."
        />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-xl border border-white/10 bg-surface p-4 transition-colors hover:border-accent/40 sm:p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold leading-snug text-accent sm:text-xl">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm text-white/70 transition-colors hover:text-accent"
                >
                  GitHub →
                </a>
              </div>
              <ul className="mt-3 flex-1 space-y-2 sm:mt-4">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-white/80 sm:gap-3 sm:text-sm"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent sm:mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

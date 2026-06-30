"use client";

import { useState } from "react";
import {
  projectFilters,
  projects,
  type ProjectFilterId,
} from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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

        <div
          className="-mx-4 mb-6 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:mb-8 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Filter projects by category"
        >
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors sm:px-5 ${
                    isActive
                      ? "border-accent bg-accent/15 text-accent"
                      : "border-white/10 bg-surface text-white/70 hover:border-accent/40 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
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

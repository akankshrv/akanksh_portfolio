import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 px-4 py-16 sm:scroll-mt-20 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with."
        />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-white/10 p-4 sm:p-6"
            >
              <h3 className="mb-3 text-base font-semibold text-accent sm:mb-4 sm:text-lg">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-surface px-2.5 py-1 text-xs text-white/90 sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

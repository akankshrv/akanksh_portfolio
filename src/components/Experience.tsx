import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 bg-surface px-4 py-16 sm:scroll-mt-20 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and the roles I've held."
        />
        <div className="space-y-6 sm:space-y-8">
          {experience.map((job) => (
            <article
              key={job.id}
              className="rounded-xl border border-white/10 bg-background p-4 transition-colors hover:border-accent/40 sm:p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-accent sm:text-xl">
                    {job.role}
                  </h3>
                  <p className="text-sm text-white/90 sm:text-base">
                    {job.company}
                  </p>
                  <p className="text-xs text-white/60 sm:text-sm">
                    {job.location}
                  </p>
                </div>
                <span className="shrink-0 text-xs text-white/60 sm:text-sm">
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {job.highlights.map((item) => (
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

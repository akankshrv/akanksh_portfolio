import { education } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-16 bg-surface px-4 py-16 sm:scroll-mt-20 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Education"
          subtitle="My academic background and qualifications."
        />
        <div className="space-y-4 sm:space-y-6">
          {education.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-white/10 bg-background p-4 sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug text-accent sm:text-xl">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-white/90 sm:text-base">
                    {item.institution}
                  </p>
                  <p className="text-xs text-white/60 sm:text-sm">
                    {item.location}
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <span className="text-xs text-white/60 sm:text-sm">
                    {item.period}
                  </span>
                  <p className="mt-1 text-xs text-white/80 sm:text-sm">
                    GPA: {item.gpa}
                  </p>
                </div>
              </div>
              {item.coursework.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-medium text-white/90 sm:text-sm">
                    Coursework
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs text-white/90 sm:px-3"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

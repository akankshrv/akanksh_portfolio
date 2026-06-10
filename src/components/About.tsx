import { about } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 px-4 py-16 sm:scroll-mt-20 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About"
          subtitle="A little bit about who I am and what I do."
        />
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <p className="text-justify text-base leading-relaxed text-white/90 sm:text-lg">
            {about.summary}
          </p>
          <ul className="space-y-3 sm:space-y-4">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-white/80 sm:text-base"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

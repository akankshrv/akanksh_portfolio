import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="flex min-h-[100dvh] items-center px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
          Hi, I&apos;m <span className="text-accent">{personalInfo.name}</span>
        </h1>
        <p className="mt-3 text-xl text-white/90 sm:mt-4 sm:text-2xl md:text-3xl">
          {personalInfo.title}
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
          {personalInfo.tagline}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:py-3"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="rounded-lg border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent sm:py-3"
          >
            View Experience
          </a>
          <a
            href="#about"
            className="rounded-lg border border-white/20 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent sm:py-3"
          >
            Learn More
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-3 text-sm text-white/60 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="break-all transition-colors hover:text-accent sm:break-normal"
          >
            {personalInfo.email}
          </a>
          <span>{personalInfo.location}</span>
        </div>
      </div>
    </section>
  );
}

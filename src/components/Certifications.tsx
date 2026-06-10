import { certifications } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-16 bg-surface px-4 py-16 sm:scroll-mt-20 sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Certifications"
          subtitle="Professional credentials and certifications I've earned."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="rounded-xl border border-white/10 bg-background p-4 transition-colors hover:border-accent/40 sm:p-6"
            >
              <h3 className="text-base font-semibold text-accent sm:text-lg">
                {cert.name}
              </h3>
              <p className="mt-2 text-xs text-white/80 sm:text-sm">
                {cert.issuer}
              </p>
              {cert.date && (
                <p className="mt-1 text-xs text-white/50">{cert.date}</p>
              )}
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block py-1 text-sm text-white/70 transition-colors hover:text-accent"
              >
                View Credential →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

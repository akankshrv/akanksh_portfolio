interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 sm:mb-12">
      <h2 className="text-2xl font-bold tracking-tight text-accent sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm text-white/70 sm:mt-3 sm:text-base">
          {subtitle}
        </p>
      )}
      <div className="mt-3 h-1 w-12 rounded-full bg-accent sm:mt-4 sm:w-16" />
    </div>
  );
}

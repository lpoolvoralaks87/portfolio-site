import Squiggle from "./Squiggle";

export type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  dates: string;
  /** One headline number that sums the role up at a glance. */
  stat: { value: string; label: string };
  highlights: string[];
};

type ExperienceCardProps = {
  entry: ExperienceEntry;
  index: number;
};

export default function ExperienceCard({ entry, index }: ExperienceCardProps) {
  // cards sit very slightly crooked on desktop, like pieces of paper on a desk
  const tilt = index % 2 === 0 ? "md:-rotate-[0.7deg]" : "md:rotate-[0.7deg]";

  return (
    <article
      className={`group relative flex flex-col border border-[#171412]/15 bg-[#EDE9E2] p-6 transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:border-[#171412]/40 md:p-8 ${tilt}`}
    >
      <div className="flex items-start justify-between gap-4 font-mono text-xs uppercase tracking-[0.12em] text-[#171412]/50">
        <p>{entry.dates}</p>
        <p className="text-right">{entry.location}</p>
      </div>

      <p className="mt-8 font-serif text-6xl leading-none text-[#C1362B] md:text-7xl">
        {entry.stat.value}
      </p>
      <p className="mt-2 max-w-[260px] font-sans text-sm leading-snug text-[#171412]/60">
        {entry.stat.label}
      </p>

      <div className="relative mt-8 self-start">
        <h3 className="font-serif text-3xl leading-tight text-[#171412] md:text-4xl">
          {entry.org}
        </h3>
        <Squiggle className="pointer-events-none absolute -bottom-3 left-0 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <p className="mt-4 self-start rounded-full border border-[#171412]/25 px-3 py-1 font-mono text-xs uppercase tracking-[0.08em] text-[#171412]/70">
        {entry.role}
      </p>

      <details className="group/details mt-6 border-t border-[#171412]/10 pt-4">
        <summary className="flex list-none items-center justify-between font-mono text-sm uppercase tracking-[0.1em] text-[#171412] [&::-webkit-details-marker]:hidden">
          What I did
          <span
            aria-hidden="true"
            className="text-2xl leading-none text-[#C1362B] transition-transform duration-300 group-open/details:rotate-45"
          >
            +
          </span>
        </summary>
        <ul className="mt-4 list-disc space-y-3 pl-5 font-sans text-[15px] leading-relaxed text-[#171412]/70 marker:text-[#171412]/30">
          {entry.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </details>
    </article>
  );
}

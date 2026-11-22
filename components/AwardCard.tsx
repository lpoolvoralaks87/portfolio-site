import Image from "next/image";

export type AwardEntry = {
  /** The word that gets circled in red crayon: "1st", "2nd", "Finalist". */
  badge: string;
  title: string;
  org: string;
  location: string;
  dates?: string;
  /** One-line headline shown on the card. */
  prize?: string;
  highlights: string[];
};

type AwardCardProps = {
  award: AwardEntry;
};

export default function AwardCard({ award }: AwardCardProps) {
  const meta = [award.dates, award.location].filter(Boolean).join(" · ");

  return (
    <article className="group flex flex-col bg-[#e6e1d8] p-6 transition-colors duration-300 hover:bg-[#e0dacf] md:p-8">
      {/* the circled word */}
      <div className="relative flex h-24 w-40 items-center justify-center self-start transition-transform duration-300 group-hover:-rotate-2">
        <Image
          src="/ring-red.png"
          alt=""
          width={300}
          height={200}
          unoptimized
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
        />
        <span className="relative font-serif text-3xl leading-none text-[#171412] md:text-4xl">
          {award.badge}
        </span>
      </div>

      <h3 className="mt-8 font-serif text-2xl leading-tight text-[#171412] md:text-[28px]">
        {award.org}
      </h3>
      <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-[#171412]/60">
        {award.title}
      </p>
      {award.prize && (
        <p className="mt-4 font-sans text-base font-medium leading-snug text-[#C1362B]">
          {award.prize}
        </p>
      )}
      {meta && (
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.07em] text-[#171412]/45">{meta}</p>
      )}

      <details className="group/details mt-6 border-t border-[#171412]/10 pt-4">
        <summary className="flex list-none items-center justify-between font-mono text-sm uppercase tracking-[0.1em] text-[#171412] [&::-webkit-details-marker]:hidden">
          The story
          <span
            aria-hidden="true"
            className="text-2xl leading-none text-[#C1362B] transition-transform duration-300 group-open/details:rotate-45"
          >
            +
          </span>
        </summary>
        <ul className="mt-4 max-w-[640px] list-disc space-y-3 pl-5 font-sans text-[15px] leading-relaxed text-[#171412]/70 marker:text-[#171412]/30">
          {award.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </details>
    </article>
  );
}

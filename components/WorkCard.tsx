import Image from "next/image";

export type WorkEntry = {
  title: string;
  kind: string;
  meta: string;
  description: string;
  image: string;
  href?: string;
};

type WorkCardProps = {
  work: WorkEntry;
  index: number;
  requestHref: string;
};

// Each piece is a little taped-up polaroid, all slightly crooked in different directions.
const TILTS = ["-rotate-2", "rotate-[1.5deg]", "-rotate-1", "rotate-2"];
const TAPES = ["bg-[#C1362B]/30", "bg-[#D8B98A]/70"];
const TAPE_EDGE =
  "[clip-path:polygon(0_0,100%_0,96%_25%,100%_50%,96%_75%,100%_100%,0_100%,4%_75%,0_50%,4%_25%)]";

export default function WorkCard({ work, index, requestHref }: WorkCardProps) {
  return (
    <article className="group mx-auto flex w-full max-w-[270px] flex-col sm:mx-0">
      <div
        className={`relative bg-[#FBF9F5] p-3 pb-5 shadow-[0_8px_20px_-6px_rgba(23,20,18,0.25)] transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:rotate-0 motion-reduce:transition-none ${TILTS[index % TILTS.length]}`}
      >
        {/* strip of tape holding it to the page */}
        <span
          aria-hidden="true"
          className={`absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 ${
            index % 2 === 0 ? "-rotate-3" : "rotate-3"
          } ${TAPES[index % TAPES.length]} ${TAPE_EDGE}`}
        />

        <Image
          src={work.image}
          alt={`Preview of "${work.title}"`}
          width={240}
          height={339}
          className="aspect-[4/5] h-auto w-full border border-[#171412]/10 object-cover object-top"
        />

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#171412]/45">
          {work.meta}
        </p>
        <h4 className="mt-1 font-serif text-xl leading-snug text-[#171412]">
          {work.title}
        </h4>
      </div>

      <details className="group/details mt-5 px-1">
        <summary className="flex list-none items-center justify-between font-mono text-xs uppercase tracking-[0.1em] text-[#171412] [&::-webkit-details-marker]:hidden">
          What it&apos;s about
          <span
            aria-hidden="true"
            className="text-2xl leading-none text-[#C1362B] transition-transform duration-300 group-open/details:rotate-45"
          >
            +
          </span>
        </summary>
        <p className="mt-3 font-sans text-sm leading-relaxed text-[#171412]/70">
          {work.description}
        </p>
      </details>

      <a
        href={requestHref}
        className="mt-3 self-start px-1 font-mono text-xs uppercase tracking-[0.07em] text-[#171412] underline decoration-[#C1362B]/60 decoration-2 underline-offset-4 transition-colors hover:decoration-[#C1362B]"
      >
        Request access →
      </a>
    </article>
  );
}

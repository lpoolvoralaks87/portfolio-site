import Image from "next/image";
import AboutHero from "@/components/AboutHero";

const REQUEST_ACCESS_EMAIL = "lpoolvoralaks87@cmc.edu";

function requestAccessHref(title: string) {
  const subject = `Access request: ${title}`;
  const body = `Hi Lalita,\n\nI'd like to request access to read "${title}".\n\nThanks!`;
  return `mailto:${REQUEST_ACCESS_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

type ExperienceEntry = {
  role: string;
  org: string;
  location: string;
  dates: string;
  highlights: string[];
};

type AwardEntry = {
  title: string;
  org: string;
  location: string;
  dates?: string;
  highlights: string[];
  requestAccess?: boolean;
};

type WorkEntry = {
  title: string;
  kind: string;
  meta: string;
  description: string;
  image: string;
  href?: string;
};

type WorkCategory = {
  label: string;
  entries: WorkEntry[];
};

const experience: ExperienceEntry[] = [
  {
    role: "Business Analyst & Data Analytics Intern",
    org: "Accenture",
    location: "Bangkok, Thailand",
    dates: "Summer 2025, Summer 2026",
    highlights: [
      "Designed strategy and spearheaded creative execution for a new loyalty program launch for one of the largest retail conglomerates, increasing customer retention by ~20%",
      "Produced comprehensive pitch decks and presented to client BOD in weekly steering committee meetings",
      "Streamlined CRM data processing and contributed to a CRM gamification feature now used by over 8 million users",
    ],
  },
  {
    role: "Co-President",
    org: "Girls Into Venture Capital",
    location: "Claremont, California",
    dates: "Jan 2026 – Present",
    highlights: [
      "Founded and launched a new chapter across the Claremont Colleges; led curriculum development and event programming",
      "Delivered a 10-week fellowship program, organizing competitions and workshops with founders and women in venture capital",
    ],
  },
  {
    role: "Business Development & Outreach Intern",
    org: "OpenTest.AI",
    location: "Claremont, California",
    dates: "Jan 2026 – May 2026",
    highlights: [
      "Led investor and client outreach initiatives, coordinated events by raising $2,000+, and managed operational implementations",
      "Developed marketing campaigns and conducted market research to support growth and positioning strategies",
      "Assisted in cost restructuring initiatives, driving up margins by ~10 bps",
    ],
  },
  {
    role: "Business Development Intern",
    org: "Sokil",
    location: "Claremont, California",
    dates: "Mar 2025 – May 2025",
    highlights: [
      "Conducted comprehensive market analysis of the demining/drone sector and designed a pricing model",
      "Built a market-entry strategy into Ukraine, balancing financial sustainability with accessibility for small demining NGOs",
      "Researched accessible UAV magnetometry systems and presented to 50+ investors",
    ],
  },
  {
    role: "Investment Analyst Intern",
    org: "SeaX Ventures",
    location: "Bangkok, Thailand",
    dates: "May 2024 – July 2024",
    highlights: [
      "Oversaw the end-to-end deal process: 40+ deals sourced, several advanced to due diligence, 2 closed",
      "Advised portfolio company founders through structured consulting sessions, producing investment memos and LP reports that supported strategic partnerships and drove ~30% revenue growth across the portfolio",
    ],
  },
];

const awards: AwardEntry[] = [
  {
    title: "First Place Winner",
    org: "RLCIE Pitch Competition",
    location: "Claremont, California",
    dates: "April 2025",
    highlights: [
      "Awarded $1,000 for placing first in pitching a startup idea, reaching out to attorneys and partners at various law firms",
    ],
  },
  {
    title: "Finalist",
    org: "Accenture Innovation Challenge",
    location: "Washington, D.C.",
    dates: "Jan 2025 – Feb 2025",
    highlights: [
      "Nationwide case competition by Accenture; one of 188 initially selected participants out of 1,700+ applications, and one of four teams flown to the DC office for the final round out of 47 teams (top 0.05% of participants)",
      "Produced a comprehensive solution for partner Special Olympics, whose board personally reached out afterward",
    ],
  },
  {
    title: "First Place Winner",
    org: "Venture Program with March Capital Competition",
    location: "Claremont, California",
    dates: "Nov 2023 – March 2024",
    highlights: [
      "First team of first-years awarded $5,000 and a trip to the Montgomery Summit, an invitation-only tech conference",
      "Pitched an AI-driven risk management startup against 87 competitors",
    ],
  },
  {
    title: "Second Place Winner",
    org: "Actionist Consulting Case Competition",
    location: "Claremont, California",
    dates: "May 2026",
    highlights: ["Placed second out of 50+ participants"],
  },
  {
    title: "Letter of Recommendation",
    org: "Accenture",
    location: "Bangkok, Thailand",
    highlights: ["Written by a Managing Director at Accenture."],
    requestAccess: true,
  },
];

const works: WorkCategory[] = [
  {
    label: "Science",
    entries: [
      {
        title:
          "Optimising Aluminium Sulphate Concentration in Caesalpinia Sappan Dye Mordanting",
        kind: "Extended Essay",
        meta: "2023",
        description:
          "Measures how aluminium sulphate concentration affects the colour fastness of Caesalpinia sappan natural dye on cotton, using photo analysis and spectrophotometry to weigh dyeing performance against environmental impact.",
        image: "/works/ee-mordant-dye.png",
      },
      {
        title: "Salinity as a Constraint on Dissolved Oxygen in Canal Water",
        kind: "Chemistry IA",
        meta: "2023",
        description:
          "A titrimetric investigation into how salinity affects dissolved oxygen levels in a polluted Bangkok canal, using the Winkler method to test whether saline runoff threatens aquatic life.",
        image: "/works/chem-ia-salinity.png",
      },
      {
        title: "Chromatic Influence on Memory Retention",
        kind: "Psychology IA · Group 4",
        meta: "2023",
        description:
          "A repeated-measures experiment testing whether red versus black text affects word recall, examining Bargh's auto-motive model and the assumption that red undermines performance.",
        image: "/works/psych-ia-color-recall.png",
      },
      {
        title:
          "Habitat-Driven Variation in Stomatal Density of Epipremnum Aureum",
        kind: "Biology IA",
        meta: "2023",
        description:
          "A comparative study of stomatal density in Epipremnum aureum grown indoors versus outdoors, linking the difference to light, humidity, temperature, and watering frequency.",
        image: "/works/bio-ia-stomatal-density.png",
      },
    ],
  },
  {
    label: "Philosophy",
    entries: [
      {
        title: "Is replicability necessary in the production of knowledge?",
        kind: "TOK Essay",
        meta: "May 2023",
        description:
          "Examines whether replicability is necessary for producing knowledge, comparing its role in the human sciences against the arts.",
        image: "/works/tok-essay-replicability.png",
      },
      {
        title: "To what extent is certainty attainable?",
        kind: "TOK Exhibition",
        meta: "May 2023",
        description:
          "Explores the extent to which certainty is attainable through everyday objects, including the periodic table and cultural superstition.",
        image: "/works/tok-exhibition-certainty.png",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <AboutHero />

      <section
        id="who-am-i"
        className="flex flex-col justify-center border-t border-[#171412]/10 bg-[#EDE9E2] px-6 py-24 md:px-12"
      >
        <h2 className="font-serif text-5xl text-[#171412] md:text-6xl">
          Who am I
        </h2>
        <p className="mt-6 max-w-[560px] font-sans text-base leading-relaxed text-[#171412]/65">
          I&apos;m an economics student at Claremont McKenna College,
          minoring in data science, graduating May 2027. Coursework spans
          accounting data analytics, statistics, econometrics, corporate
          finance, and banking &amp; financial intermediation. Outside of
          class I&apos;m usually somewhere between a pitch deck and a
          spreadsheet — currently splitting time between Accenture and
          Girls Into Venture Capital, the chapter I founded across the
          Claremont Colleges.
        </p>

        <dl className="mt-12 grid max-w-[560px] grid-cols-2 gap-x-6 gap-y-8 font-sans text-sm sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-[#171412]/50">
              Languages
            </dt>
            <dd className="mt-2 text-[#171412]/80">Thai, English</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-[#171412]/50">
              Technical
            </dt>
            <dd className="mt-2 text-[#171412]/80">
              Excel, R, STATA, Google Suite
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-[#171412]/50">
              Interests
            </dt>
            <dd className="mt-2 text-[#171412]/80">
              Gastronomy, numerology, fencing, tea
            </dd>
          </div>
        </dl>
      </section>

      <section
        id="my-experience"
        className="flex flex-col justify-center border-t border-[#171412]/10 bg-[#e6e1d8] px-6 py-24 md:px-12"
      >
        <h2 className="font-serif text-5xl text-[#171412] md:text-6xl">
          My experience
        </h2>

        <div className="mt-12 divide-y divide-[#171412]/10">
          {experience.map((entry) => (
            <article
              key={`${entry.org}-${entry.role}`}
              className="grid grid-cols-1 gap-4 py-8 first:pt-0 md:grid-cols-[minmax(0,280px)_1fr] md:gap-10"
            >
              <div>
                <h3 className="font-serif text-2xl text-[#171412] md:text-[28px]">
                  {entry.role}
                </h3>
                <p className="mt-2 font-sans text-sm uppercase tracking-[0.1em] text-[#171412]/60">
                  {entry.org} — {entry.location}
                </p>
                <p className="mt-1 font-sans text-sm text-[#171412]/45">
                  {entry.dates}
                </p>
              </div>
              <ul className="max-w-[560px] list-disc space-y-3 pl-5 font-sans text-base leading-relaxed text-[#171412]/70 marker:text-[#171412]/30">
                {entry.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="recognitions"
        className="flex flex-col justify-center border-t border-[#171412]/10 bg-[#EDE9E2] px-6 py-24 md:px-12"
      >
        <h2 className="font-serif text-5xl text-[#171412] md:text-6xl">
          Recognitions
        </h2>

        <div className="mt-12 divide-y divide-[#171412]/10">
          {awards.map((award) => (
            <article
              key={award.org}
              className="grid grid-cols-1 gap-4 py-8 first:pt-0 md:grid-cols-[minmax(0,280px)_1fr] md:gap-10"
            >
              <div>
                <h3 className="font-serif text-2xl text-[#171412] md:text-[28px]">
                  {award.org}
                </h3>
                <p className="mt-2 font-sans text-sm uppercase tracking-[0.1em] text-[#171412]/60">
                  {award.title} — {award.location}
                </p>
                {award.dates && (
                  <p className="mt-1 font-sans text-sm text-[#171412]/45">
                    {award.dates}
                  </p>
                )}
              </div>
              <div className="max-w-[560px] font-sans text-base leading-relaxed text-[#171412]/70">
                <ul className="list-disc space-y-3 pl-5 marker:text-[#171412]/30">
                  {award.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {award.requestAccess && (
                  <a
                    href={requestAccessHref(`${award.org} ${award.title}`)}
                    className="mt-3 inline-block text-sm uppercase tracking-[0.1em] text-[#171412] underline decoration-[#171412]/30 underline-offset-4 transition-colors hover:decoration-[#171412]"
                  >
                    Request access →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="works"
        className="flex flex-col justify-center border-t border-[#171412]/10 bg-[#e6e1d8] px-6 py-24 md:px-12"
      >
        <h2 className="font-serif text-5xl text-[#171412] md:text-6xl">
          Works
        </h2>
        <p className="mt-6 max-w-[560px] font-sans text-base leading-relaxed text-[#171412]/65">
          Projects and papers I&apos;ve worked on.
        </p>

        {works.map((category) => (
          <div key={category.label} className="mt-14 first:mt-12">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#171412]/50">
              {category.label}
            </p>

            <div className="mt-4 divide-y divide-[#171412]/10">
              {category.entries.map((work) => (
                <article
                  key={work.title}
                  className="grid grid-cols-1 gap-4 py-8 first:pt-6 md:grid-cols-[96px_minmax(0,220px)_1fr] md:items-start md:gap-8"
                >
                  <Image
                    src={work.image}
                    alt={`Preview of "${work.title}"`}
                    width={240}
                    height={339}
                    className="h-auto w-20 border border-[#171412]/15 md:w-full"
                  />
                  <div>
                    <h3 className="font-serif text-2xl text-[#171412] md:text-[28px]">
                      {work.title}
                    </h3>
                  </div>
                  <div className="max-w-[560px] font-sans text-base leading-relaxed text-[#171412]/70">
                    <p>{work.description}</p>
                    <a
                      href={requestAccessHref(work.title)}
                      className="mt-3 inline-block text-sm uppercase tracking-[0.1em] text-[#171412] underline decoration-[#171412]/30 underline-offset-4 transition-colors hover:decoration-[#171412]"
                    >
                      Request access →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

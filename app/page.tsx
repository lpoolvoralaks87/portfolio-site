import AboutHero from "@/components/AboutHero";
import ExperienceCard, { type ExperienceEntry } from "@/components/ExperienceCard";
import AwardCard, { type AwardEntry } from "@/components/AwardCard";
import WorkCard, { type WorkEntry } from "@/components/WorkCard";
import Squiggle from "@/components/Squiggle";

const REQUEST_ACCESS_EMAIL = "lpoolvoralaks87@cmc.edu";

function requestAccessHref(title: string) {
  const subject = `Access request: ${title}`;
  const body = `Hi Lalita,\n\nI'd like to request access to read "${title}".\n\nThanks!`;
  return `mailto:${REQUEST_ACCESS_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

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
    stat: { value: "~20%", label: "higher customer retention from a new loyalty program launch" },
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
    stat: { value: "10 wks", label: "fellowship program delivered across the Claremont Colleges" },
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
    stat: { value: "$2K+", label: "raised to run events and investor outreach" },
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
    stat: { value: "50+", label: "investors I presented my UAV research to" },
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
    stat: { value: "40+", label: "deals sourced, with 2 closed" },
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
    badge: "1st",
    prize: "$1,000 prize",
    location: "Claremont, California",
    dates: "April 2025",
    highlights: [
      "Awarded $1,000 for placing first in pitching a startup idea, reaching out to attorneys and partners at various law firms",
    ],
  },
  {
    title: "Finalist",
    org: "Accenture Innovation Challenge",
    badge: "Finalist",
    prize: "One of four teams flown to the D.C. final",
    location: "Washington, D.C.",
    dates: "Jan 2025 – Feb 2025",
    highlights: [
      "Nationwide case competition by Accenture; one of 188 initially selected participants out of 1,700+ applications, and one of four teams flown to the DC office for the final round out of 47 teams (top 0.05% of participants)",
      "Produced a comprehensive solution for partner Special Olympics, whose board personally reached out afterward",
    ],
  },
  {
    title: "3rd Place Winner",
    org: "Sparkathon",
    badge: "3rd",
    prize: "$500, out of 120+ students",
    location: "Claremont, California",
    dates: "Nov 2024",
    highlights: [
      "Awarded $500 for placing third out of 120+ students",
      "Sponsored by Roblox, Notion, and Perplexity; the largest case competition of the Claremont Colleges",
      "An impact-driven design thinking competition that challenges students from across California to collaboratively solve societal problems",
    ],
  },
  {
    title: "First Place Winner",
    org: "Venture Program with March Capital Competition",
    badge: "1st",
    prize: "$5,000 and a trip to the Montgomery Summit",
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
    badge: "2nd",
    prize: "Out of 50+ participants",
    location: "Claremont, California",
    dates: "May 2026",
    highlights: ["Placed second out of 50+ participants"],
  },
];

const letters = [
  {
    title: "Letter of Recommendation",
    org: "Accenture",
    note: "Written by a Managing Director at Accenture.",
  },
  {
    title: "Letter of Reference",
    org: "SeaX Ventures",
    note: "Written by a Principal and a Managing Partner at SeaX Ventures.",
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
          I was born and raised in Bangkok, Thailand, before moving to
          California for college, where I started out as a Chemistry major
          before switching allegiances to Economics and Data Science.
          Outside of class, I&apos;m probably wrangling a cat I&apos;m
          deeply allergic to, doing my daily Sudoku, or scavenging for a
          new favorite restaurant.
        </p>
      </section>

      <section
        id="my-experience"
        className="flex flex-col justify-center border-t border-[#171412]/10 bg-[#e6e1d8] px-6 py-24 md:px-12"
      >
        <h2 className="font-serif text-5xl text-[#171412] md:text-6xl">
          My experience
        </h2>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          {experience.map((entry, i) => (
            <ExperienceCard
              key={`${entry.org}-${entry.role}`}
              entry={entry}
              index={i}
            />
          ))}
        </div>
      </section>

      <section
        id="recognitions"
        className="flex flex-col justify-center border-t border-[#171412]/10 bg-[#EDE9E2] px-6 pb-16 pt-24 md:px-12"
      >
        <h2 className="font-serif text-5xl text-[#171412] md:text-6xl">
          Recognitions
        </h2>

        <div className="mt-12 grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-6 md:[&>*:last-child:nth-child(odd)]:col-span-2">
          {awards.map((award) => (
            <AwardCard key={award.org + award.title} award={award} />
          ))}
        </div>
      </section>

      <section
        id="letters"
        className="flex flex-col justify-center bg-[#EDE9E2] px-6 pb-24 pt-4 md:px-12"
      >
        <div className="border-t border-[#171412]/10 pt-10">
          <h3 className="font-serif text-3xl text-[#171412] md:text-4xl">
            Letters
          </h3>
          <p className="mt-2 font-sans text-sm text-[#171412]/50">
            Shared on request.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
            {letters.map((letter) => (
              <li
                key={letter.title}
                className="font-sans text-sm leading-relaxed text-[#171412]/60"
              >
                <span className="font-serif text-lg text-[#171412]">
                  {letter.title}
                </span>
                <span className="text-[#171412]/45"> · {letter.org}</span>
                <br />
                {letter.note}{" "}
                <a
                  href={requestAccessHref(`${letter.org} ${letter.title}`)}
                  className="whitespace-nowrap text-[#171412] underline decoration-[#C1362B]/60 decoration-2 underline-offset-4 transition-colors hover:decoration-[#C1362B]"
                >
                  Request access →
                </a>
              </li>
            ))}
          </ul>
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
          <div key={category.label} className="mt-16">
            <div className="relative inline-block">
              <h3 className="font-serif text-3xl text-[#171412] md:text-4xl">
                {category.label}
              </h3>
              <Squiggle className="pointer-events-none absolute -bottom-3 left-0 w-full" />
            </div>

            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {category.entries.map((work, i) => (
                <WorkCard
                  key={work.title}
                  work={work}
                  index={i}
                  requestHref={requestAccessHref(work.title)}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

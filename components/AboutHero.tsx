"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PersonIllustration from "./PersonIllustration";
import Squiggle from "./Squiggle";
import HandDrawnOval from "./HandDrawnOval";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function formatLocalTime(date: Date) {
  const day = DAYS[date.getDay()];
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `LOCAL TIME: ${day} ${hours}:${minutes}${meridiem}`;
}

export default function AboutHero() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const id = setInterval(tick, 1000);
    const kickoff = setTimeout(tick, 0);
    return () => {
      clearInterval(id);
      clearTimeout(kickoff);
    };
  }, []);

  return (
    <section className="w-full bg-[#EDE9E2] text-[#171412]">
      <nav className="grid grid-cols-3 items-center gap-2 px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10">
        <div className="flex items-center gap-2 font-sans text-[10px] tracking-[0.1em] text-[#171412]/80 sm:gap-6 sm:text-xs sm:tracking-[0.18em]">
          <Link
            href="#works"
            className="uppercase transition-colors hover:text-[#171412]"
          >
            Works
          </Link>
          <span className="relative inline-flex items-center px-1.5 py-1 sm:px-2">
            <HandDrawnOval className="pointer-events-none absolute -inset-x-1.5 -inset-y-1.5 h-[calc(100%+12px)] w-[calc(100%+12px)] text-[#171412] sm:-inset-x-2 sm:-inset-y-2 sm:h-[calc(100%+16px)] sm:w-[calc(100%+16px)]" />
            <span aria-current="page" className="relative uppercase">
              <span className="mr-1 normal-case text-[#C1362B]">x</span>
              About
            </span>
          </span>
        </div>

        <div className="justify-self-center text-center">
          <Link
            href="/"
            className="font-sans text-[9px] font-medium uppercase leading-[1.15] tracking-[0.14em] text-[#171412]/80 transition-colors hover:text-[#171412] sm:text-[11px] sm:tracking-[0.18em]"
          >
            Back
            <br />
            Home
          </Link>
        </div>

        <div className="justify-self-end text-right font-sans text-[10px] tracking-[0.08em] text-[#171412]/80 sm:text-xs sm:tracking-[0.14em]">
          {now ? formatLocalTime(now) : "LOCAL TIME: —"}
        </div>
      </nav>

      <div className="grid grid-cols-1 items-center gap-12 px-6 pb-20 pt-4 md:grid-cols-[45%_55%] md:gap-8 md:px-12 md:pb-32 md:pt-8">
        <div className="order-2 flex justify-center md:order-1 md:justify-start">
          <PersonIllustration className="h-auto w-full max-w-[280px] text-[#171412] md:max-w-[360px]" />
        </div>

        <div className="order-1 md:order-2">
          <h1 className="font-serif text-[64px] leading-none text-[#171412] sm:text-[80px] md:text-[90px]">
            Hey,
          </h1>

          <p className="mt-6 font-sans text-xs tracking-[0.2em] text-[#171412]/70">
            JUST SOME STUFF ABOUT LALITA POOLVORALAKS
          </p>

          <div className="mt-6 flex flex-col items-start gap-2 font-serif text-4xl leading-[1.15] sm:text-5xl md:text-6xl">
            <a
              href="#who-am-i"
              className="transition-opacity hover:opacity-70"
            >
              Who am I
            </a>

            <span className="relative inline-block">
              <a
                href="#my-experience"
                className="relative z-10 transition-opacity hover:opacity-70"
              >
                My experience
              </a>
              <Squiggle className="pointer-events-none absolute -bottom-3 left-0 h-4 w-[110%]" />
              <span
                className="pointer-events-none absolute -right-10 -top-5 rotate-[-9deg] text-lg text-[#C1362B] sm:-right-14 sm:text-xl"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                ADD?
              </span>
            </span>

            <a
              href="#recognitions"
              className="transition-opacity hover:opacity-70"
            >
              Recognitions
            </a>

            <a
              href="#works"
              className="transition-opacity hover:opacity-70"
            >
              Works
            </a>
          </div>

          <p className="mt-10 max-w-[500px] font-sans text-base leading-relaxed text-[#171412]/65">
            I&apos;m a student at Claremont McKenna College
            studying Economics and data science interested in finance, startups, and strategy work. Thanks for being here!
          </p>
        </div>
      </div>
    </section>
  );
}

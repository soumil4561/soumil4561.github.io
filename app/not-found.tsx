"use client";

import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";

export default function NotFound() {
  return (
    <section
      className="section min-h-[60vh] justify-center flex flex-col gap-2"
      id="not-found"
    >
      <Reveal direction="down" timing={0}>
        <h6 className="font-heading font-thin text-sm uppercase leading-[1.2] tracking-widest">
          404
        </h6>
      </Reveal>
      <Reveal className="flex flex-col items-center" timing={0.2}>
        <h1 className="section-heading font-thin text-5xl md:text-7xl mb-8">
          Page Not Found
        </h1>
        <Link
          className="px-4 py-2 border-1 border-border rounded-xs bg-secondary/90 text-inverse hover:bg-secondary
          transition duration-200 uppercase tracking-wider text-[0.8125rem] font-normal"
          href="/"
        >
          Back to homepage
        </Link>
      </Reveal>
    </section>
  );
}

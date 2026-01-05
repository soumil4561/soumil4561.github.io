"use client";

import { usePathname } from "next/navigation";

import { ArrowIconButtonV2 } from "../button/ArrowButton";

export default function CTA() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <div className="w-full flex items-center justify-center p-10 md:pt-20 md:px-40 bg-background-tertiary border-t-1 border-border">
      <div className="w-full flex flex-col items-center justify-center">
        <h6 className="section-heading-supertitle">Something on your mind?</h6>
        <h1 className="section-heading text-7xl md:text-8xl">
          Let&apos;s talk
        </h1>
        <h3 className="font-content font-light md:text-[1.25rem] text-center">
          Happy to discuss systems, backends, and interesting problems.
        </h3>
        <ArrowIconButtonV2
          className="bg-secondary/90 text-inverse hover:bg-secondary transition 
          duration-200 uppercase tracking-wider text-[0.8125rem] font-normal mt-8 md:mt-12 rounded-xs"
          link="/contact"
          sameTab={true}
        >
          Get in touch
        </ArrowIconButtonV2>
      </div>
    </div>
  );
}

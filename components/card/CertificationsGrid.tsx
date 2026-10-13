"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";

import { ArrowIconButtonV2 } from "@/components/button/ArrowButton";

export type Certification = {
  name: string;
  issuer: string;
  year: number;
  link: string;
};

const INITIAL_COUNT = 6;

function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div className="flex shrink-0 w-[374px] max-w-full flex-col justify-between gap-8 p-8 md:p-10 lg:p-12 border-border border-1 rounded-xs bg-background-tertiary">
      <div>
        <div className="font-heading text-sm uppercase font-light tracking-widest text-default">
          {cert.issuer} · {cert.year}
        </div>
        <div className="font-heading text-3xl font-normal">{cert.name}</div>
      </div>
      <ArrowIconButtonV2
        className="bg-secondary/90 text-inverse hover:bg-secondary transition duration-200 py-4"
        link={cert.link}
      >
        <div className="flex flex-row font-heading items-center tracking-widest uppercase text-sm gap-1">
          View
        </div>
      </ArrowIconButtonV2>
    </div>
  );
}

// Compact row for phones: one small boxed row per cert, gapped like the contact links.
function CertificationRow({ cert }: { cert: Certification }) {
  return (
    <Link
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-row items-center justify-between gap-4 p-4 border-border border-1 rounded-xs bg-background-tertiary hover:bg-background-tertiary-hover hover:border-border-hover duration-500"
    >
      <div className="min-w-0">
        <div className="font-heading text-lg leading-tight">{cert.name}</div>
        <div className="font-heading text-xs uppercase font-light tracking-widest text-default">
          {cert.issuer} · {cert.year}
        </div>
      </div>
      <ArrowRightIcon
        className="shrink-0 transition-transform duration-300 ease-in group-hover:-rotate-45"
        size={18}
      />
    </Link>
  );
}

export function CertificationsGrid({
  certifications,
}: {
  certifications: Certification[];
}) {
  const [expanded, setExpanded] = useState(false);

  if (certifications.length === 0) return null;

  const collapsible = certifications.length > INITIAL_COUNT;
  const shown =
    collapsible && !expanded
      ? certifications.slice(0, INITIAL_COUNT)
      : certifications;

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="md:hidden w-full flex flex-col gap-4">
        {shown.map((cert, i) => (
          <CertificationRow key={i} cert={cert} />
        ))}
      </div>

      <div className="hidden md:flex w-full flex-row flex-wrap justify-center gap-4">
        {shown.map((cert, i) => (
          <CertificationCard key={i} cert={cert} />
        ))}
      </div>

      {collapsible && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((e) => !e)}
          className="font-heading uppercase tracking-widest text-sm px-6 py-3 border-border border-1 rounded-xs hover:border-border-hover hover:bg-background-tertiary-hover duration-200 cursor-pointer"
        >
          {expanded
            ? "Show less"
            : `Show ${certifications.length - INITIAL_COUNT} more`}
        </button>
      )}
    </div>
  );
}

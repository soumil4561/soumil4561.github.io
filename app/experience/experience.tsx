import { BriefcaseIcon, GraduationCapIcon } from "@phosphor-icons/react";

import { TimelineBar } from "@/components/timeline/TimelineBar";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import {
  EducationCard,
  ExperienceCard,
} from "@/components/timeline/TimelineEntryCard";
import { siteConfig } from "@/config/site";
import { getTimelineEntries } from "@/lib/timeline";
import { ArrowIconButtonV2 } from "@/components/button/ArrowButton";

export default function Experience() {
  const entries = getTimelineEntries();
  const certifications = siteConfig.certifications;

  return (
    <section className="section py-16 lg:pt-32" id="experience">
      <div className="section-heading">Experience &amp; Education</div>
      <div className="section-heading-subtitle">
        Work, study, and certifications
      </div>

      <div className="relative w-full">
        <TimelineBar />

        {entries.map((entry, i) => (
          <TimelineItem
            key={i}
            icon={
              entry.kind === "education" ? (
                <GraduationCapIcon size={22} />
              ) : (
                <BriefcaseIcon size={22} />
              )
            }
            index={entries.length - i}
          >
            {entry.kind === "education" ? (
              <EducationCard {...entry} />
            ) : (
              <ExperienceCard {...entry} />
            )}
          </TimelineItem>
        ))}
      </div>

      <h3 className="font-heading text-2xl mt-16 mb-4 self-start">
        Certifications
      </h3>
      <div className="w-full flex flex-row gap-4 overflow-x-auto pb-2 justify-center">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="shrink-0 w-[374px] flex flex-col gap-8 p-8 md:p-10 lg:p-12 border-border border-1 rounded-xs bg-background-tertiary hover:bg-background-tertiary-hover hover:border-border-hover duration-500 ease-in-out"
          >
            <div>
              <div className="font-content text-sm uppercase font-medium tracking-widest text-text-muted">
                {cert.issuer} · {cert.year}
              </div>
              <div className="font-heading text-3xl font-extralight">
                {cert.name}
              </div>
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
        ))}
      </div>
    </section>
  );
}

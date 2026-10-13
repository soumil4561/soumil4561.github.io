import { BriefcaseIcon, GraduationCapIcon } from "@phosphor-icons/react";

import { TimelineBar } from "@/components/timeline/TimelineBar";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import {
  EducationCard,
  ExperienceCard,
} from "@/components/timeline/TimelineEntryCard";
import { siteConfig } from "@/config/site";
import { getTimelineEntries } from "@/lib/timeline";
import { CertificationsGrid } from "@/components/card/CertificationsGrid";

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

      {certifications.length > 0 && (
        <>
          <h3 className="font-heading text-2xl mt-16 mb-6 w-full text-center">
            Certifications
          </h3>
          <CertificationsGrid certifications={certifications} />
        </>
      )}
    </section>
  );
}

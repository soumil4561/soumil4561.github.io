import { TimelineBar } from "@/components/timeline/TimelineBar";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import { siteConfig } from "@/config/site";

function TimelineCardDetails(details: {
  title: string;
  subtitle: string;
  description: string;
  timeline: string;
}) {
  return (
    <div className="">
      <div
        className="border-border border-1 bg-background-secondary rounded-xs tracking-wider
         uppercase px-2 py-1 font-heading text-sm w-fit md:ml-auto"
      >
        {details.timeline}
      </div>
      <div className="flex flex-col relative my-4 md:mb-2 md:mt-0 md:-top-2">
        <div className="font-content text-base uppercase font-medium tracking-widest text-text-muted">
          {details.subtitle}
        </div>
        <div className="font-heading uppercase text-3xl font-normal">
          {details.title}
        </div>
        {/* <div className="font-heading font-normal">{details.subtitle}</div> */}
      </div>

      <div className="font-content font-light pt-1 leading-8">{details.description}</div>
    </div>
  );
}

export default function Experience() {
  const experience = siteConfig.experience;

  return (
    <section className="section py-16 lg:pt-32" id="experience">
      <div className="section-heading">Experience</div>
      <div className="section-heading-subtitle">My journey so far</div>

      <div className="relative w-full flex flex-col justify-between">
        {/* Timeline vertical line */}
        <TimelineBar />

        {/* Dots + cards */}
        {experience.map((details, i) => (
          <div key={i} className="relative flex items-center">
            <TimelineItem index={experience.length - i}>
              <TimelineCardDetails
                description={details.description}
                subtitle={details.subtitle}
                title={details.title}
                timeline={details.timeline || "hello"}
              />
            </TimelineItem>
          </div>
        ))}
      </div>
    </section>
  );
}

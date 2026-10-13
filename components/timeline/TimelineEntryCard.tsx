import { formatRange } from "@/lib/timeline";

type TimelineEntryCardProps = {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string | null;
  description: string;
};

/** Shared layout for every card on the timeline. */
function TimelineEntryCard(props: TimelineEntryCardProps) {
  return (
    <div>
      <div className="border-border border-1 bg-background-secondary rounded-xs tracking-wider uppercase px-2 py-1 font-heading text-sm w-fit md:ml-auto">
        {formatRange(props.startDate, props.endDate)}
      </div>
      <div className="flex flex-col my-4 lg:mb-2">
        <div className="font-content text-base uppercase font-medium tracking-widest text-text-muted">
          {props.subtitle}
        </div>
        <div className="font-heading uppercase text-3xl font-normal">
          {props.title}
        </div>
      </div>
      <div className="font-content font-light pt-1 leading-8">
        {props.description}
      </div>
    </div>
  );
}

export function ExperienceCard(props: {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string | null;
  description: string;
}) {
  return <TimelineEntryCard {...props} />;
}

export function EducationCard(props: {
  degree: string;
  major: string;
  institution: string;
  startDate: string;
  endDate: string | null;
  description: string;
}) {
  return (
    <TimelineEntryCard
      description={props.description}
      endDate={props.endDate}
      startDate={props.startDate}
      subtitle={props.institution}
      title={`${props.degree} in ${props.major}`}
    />
  );
}

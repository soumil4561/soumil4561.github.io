import { TimelineCard } from "./TimelineCard";

interface TimelineCardData {
  title: string;
  subtitle: string;
  description: string;
}

interface TimelineItem {
  index: number;
  details: TimelineCardData;
}

export function TimelineItem(item: TimelineItem) {
  return (
    <div key={item.index} className="relative flex items-center">
      {/* Dot positioned on center line */}
      <div className="absolute md:left-1/2 -translate-x-1/2 h-3 w-3 border-4 rounded-full bg-current z-10" />

      {/* Card beside the dot */}
      <TimelineCard
        description={item.details.description}
        position={item.index % 2 === 0 ? "left" : "right"}
        subtitle={item.details.subtitle}
        title={item.details.title}
      />
    </div>
  );
}

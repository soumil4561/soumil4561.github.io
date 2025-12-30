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
  let index = item.index.toString();

  if (item.index < 9) index = "0" + index;

  return (
    <div key={item.index} className="relative flex items-center">
      {/* Dot positioned on center line */}
      <div className=" absolute md:left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
        {/* Halo */}
        <div className="p-4 bg-background rounded-full">
          {/* Dot */}
          <div
            className=" font-heading h-3 w-3 p-5 rounded-full bg-background-secondary 
            border border-border flex items-center justify-center"
          >
            {index}
          </div>
        </div>
      </div>

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

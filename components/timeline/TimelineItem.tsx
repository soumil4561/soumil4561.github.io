import { TimelineCard } from "./TimelineCard";

interface TimelineItem {
  index: number;
  children: React.ReactNode;
}

export function TimelineItem(item: TimelineItem) {
  let index = item.index.toString();

  if (item.index < 9) index = "0" + index;

  return (
    <div key={item.index} className="relative flex items-center">
      {/* Dot positioned on center line */}
      <div className=" absolute md:left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
        {/* Halo */}
        <div className="py-4 bg-background rounded-full">
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
      <TimelineCard position={item.index % 2 === 0 ? "left" : "right"}>
        {item.children}
      </TimelineCard>
    </div>
  );
}

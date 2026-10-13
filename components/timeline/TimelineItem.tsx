import { TimelineCard } from "./TimelineCard";

interface TimelineItem {
  /** Position in the list, only used to alternate the card side. */
  index: number;
  icon: React.ReactNode;
  children: React.ReactNode;
}
export function TimelineItem(item: TimelineItem) {
  const isLeft = item.index % 2 === 0;

  return (
    <div
      key={item.index}
      className="
        relative
        grid grid-cols-1
        items-center
        pl-10
        md:grid-cols-[1fr_auto_1fr]
        md:gap-x-8
        md:pl-0
      "
    >
      {/* Dot */}
      <div
        className="
          absolute
          left-0
          -translate-x-1/2
          z-30
          flex items-center justify-center
          md:static
          md:translate-x-0
          md:col-start-2
          md:row-start-1
        "
      >
        <div className="py-4 bg-background rounded-full">
          <div className="font-heading h-10 w-10 shrink-0 rounded-full bg-background-secondary border border-border flex items-center justify-center">
            {item.icon}
          </div>
        </div>
      </div>

      {/* Card */}
      <div
        className={`
          row-start-1
          ${isLeft ? "md:col-start-1" : "md:col-start-3"}
        `}
      >
        <TimelineCard>{item.children}</TimelineCard>
      </div>
    </div>
  );
}

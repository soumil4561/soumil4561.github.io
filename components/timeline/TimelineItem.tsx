import { TimelineCard } from "./TimelineCard";

interface TimelineItem {
  index: number;
  children: React.ReactNode;
}
export function TimelineItem(item: TimelineItem) {
  let index = item.index.toString();

  if (item.index < 9) index = "0" + index;

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
          <div className="font-heading h-3 w-3 p-5 rounded-full bg-background-secondary border border-border flex items-center justify-center">
            {index}
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

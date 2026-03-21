import React from "react";

interface TimelineCardProps {
  position: "left" | "right";
  children?: React.ReactNode;
}

export function TimelineCard(card: TimelineCardProps) {
  const isLeft = card.position === "left";

  return (
    <div
      className={`
        my-6 w-full md:w-2/5 dark:bg-background-tertiary p-6 border-1 border-border rounded-xs
        ml-[calc(5%+1rem)]
        ${
          isLeft
            ? "md:mr-[calc(60%+1rem)] md:ml-auto"
            : "md:ml-[calc(60%+1rem)]"
        }
      `}
    >
      {card.children}
    </div>
  );
}

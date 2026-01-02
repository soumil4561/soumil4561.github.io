interface TimelineCardProps {
  title: string;
  subtitle: string;
  description: string;
  position: "left" | "right";
}

export function TimelineCard(card: TimelineCardProps) {
  const isLeft = card.position === "left";

  return (
    <div
      className={`
        my-6 w-full md:w-2/5 dark:bg-background-secondary p-6 border-1 border-border
        ml-[calc(5%+1rem)]
        ${
          isLeft
            ? "md:mr-[calc(60%+1rem)] md:ml-auto"
            : "md:ml-[calc(60%+1rem)]"
        }
      `}
    >
      <div className="font-heading uppercase text-2xl font-medium">
        {card.title}
      </div>
      <div className="font-heading font-normal">{card.subtitle}</div>
      <div className="font-content font-light pt-1">{card.description}</div>
    </div>
  );
}

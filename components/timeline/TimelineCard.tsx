import React from "react";

import { Reveal } from "@/components/animations/reveal";

interface TimelineCardProps {
  children?: React.ReactNode;
}

export function TimelineCard({ children }: TimelineCardProps) {
  return (
    <Reveal>
      <div
        className="
          my-6 p-6 w-full
          border border-border rounded-xs
          dark:bg-background-tertiary
        "
      >
        {children}
      </div>
    </Reveal>
  );
}

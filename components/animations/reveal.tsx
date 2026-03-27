import { useRef } from "react";

import { useIsVisible } from "@/hooks/useInVisible";

interface RevealProps {
  children: React.ReactNode;
  timing?: number;
  direction?: "up" | "down";
  className?: string;
}

export function Reveal({
  children,
  className = "",
  direction = "up",
  timing = 1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  let animation;

  switch (direction) {
    case "up":
      animation = "animate-fadeInUp";
      break;
    case "down":
      animation = "animation-fadeInDown";
      break;
    default:
      console.warn(
        "Incorrect animation direction passed to component, defaulting to the upper direction",
      );
      animation = "animate-fadeInUp";
      break;
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animation : "opacity-0"}`}
      style={{ "--delay": `${timing}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

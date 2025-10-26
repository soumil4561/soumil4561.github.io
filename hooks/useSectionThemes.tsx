"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export function useSectionTheme(
  sections: { ref: React.RefObject<HTMLElement | null>; theme?: "light" | "dark" }[]
) {
  const { setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ ref, theme }, index) => {
      if (!ref?.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // For the first section, use system theme if theme is not specified
            if (index === 0 && !theme) {
              setTheme(systemTheme === "dark" ? "dark" : "light");
            } else if (theme) {
              setTheme(theme);
            }
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sections, setTheme, systemTheme]);
}

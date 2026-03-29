import { useState, useEffect, RefObject } from "react";

const TARGET_ACTIVATION_THRESHOLD = 0.4;

export function useIsVisible(ref: RefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once it's visible, set to true
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Disconnect after it's seen once so it doesn't re-animate
          observer.unobserve(entry.target);
        }
      },
      { threshold: TARGET_ACTIVATION_THRESHOLD },
    ); // Trigger when TARGET_ACTIVATION_THRESHOLD amount of the element is visible

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

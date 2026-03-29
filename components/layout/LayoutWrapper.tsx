// components/LayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <main
      className={
        isHome
          ? "container mx-auto max-w-8xl px-6 flex-grow mb-4"
          : "container mx-auto max-w-8xl px-6 flex-grow mb-4 pt-16 xl:pt-32"
      }
    >
      {children}
    </main>
  );
}

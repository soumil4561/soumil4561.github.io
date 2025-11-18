"use client";

import { ThemeProvider } from "next-themes";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
}

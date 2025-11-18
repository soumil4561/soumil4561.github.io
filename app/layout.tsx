import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import ClientProviders from "@/app/providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { icon: [{ url: "/favicon.ico" }] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="transition-colors duration-300">
        <ClientProviders>
          <div className="bg-background text-foreground min-h-screen">
            {children}
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}

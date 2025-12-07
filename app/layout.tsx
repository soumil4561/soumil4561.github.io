import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import ClientProviders from "@/app/providers";
import Navbar from "@/components/navbar/Navbar";

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
            <div className="relative flex flex-col min-h-screen">
              <main className="container mx-auto max-w-8xl px-6 flex-grow">
                <Navbar items={siteConfig.navItems} />
                {children}
              </main>
              <footer className="w-full flex items-center justify-center py-3" />
            </div>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}

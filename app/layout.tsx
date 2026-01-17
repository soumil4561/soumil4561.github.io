import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

import { siteConfig } from "@/config/site";
import ClientProviders from "@/app/providers";
import Navbar from "@/components/navbar/Navbar";
import CTA from "@/components/cta/cta";
import Footer from "@/components/footer/Footer";

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
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link href="https://challenges.cloudflare.com" rel="preconnect" />
      </head>
      {isProd && (
        <meta
          content="
            default-src 'self';
            script-src-elem 'self' https://challenges.cloudflare.com 'unsafe-inline' 'unsafe-eval';
            script-src-attr 'none';
            frame-src https://challenges.cloudflare.com;
            connect-src 'self' https://challenges.cloudflare.com;
            img-src 'self' data: https:;
            style-src 'self';
            frame-ancestors 'none';"
          httpEquiv="Content-Security-Policy"
        />
      )}

      <body className="transition-colors duration-300">
        <ClientProviders>
          <div className="bg-background text-foreground min-h-screen">
            <div className="relative flex flex-col min-h-screen">
              <main className="container mx-auto max-w-8xl px-6 flex-grow mb-4">
                <Navbar items={siteConfig.navItems} />
                {children}
              </main>
              <CTA />
              <Footer />
            </div>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}

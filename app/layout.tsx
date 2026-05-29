import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry Gu - Web Design, Front-End & UX Research | Portfolio",
  description: "Harry Gu - Graphic Designer with expertise in UI/UX, development, and illustration. Crafting innovative designs that resonate with audiences.",
  keywords: "Harry Gu, graphic design, web design, UI/UX design, illustration, front-end programming, web development, logo design, branding, portfolio",
  icons: { icon: "/icons/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family=Monoton&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photoswipe@5.3.0/dist/photoswipe.css" />
        <link rel="stylesheet" href="/photoswipe-dynamic-caption-plugin.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="78081a86-b416-47ef-8ca6-3509cd763406"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

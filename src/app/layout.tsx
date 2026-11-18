import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-ui-sans",
});
import "./globals.css";
import "@/styles/site.css";
import "@/styles/sections.css";
import "@/styles/dvd-section.css";
import "@/styles/liquid-glass.css";
import { TrailerLightbox } from "@/components/TrailerLightbox";
import { RuntimeLoader } from "@/components/RuntimeLoader";
import { CustomScrollbar } from "@/components/CustomScrollbar";
import { GlobalFooter } from "@/components/GlobalFooter";

export const viewport: Viewport = {
  themeColor: "#fff9f1",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tera Music — Your World of Sound",
  description:
    "An open-source third-party YouTube Music client with offline playback, synchronized lyrics, zero ads, and real-time audio experiences.",
  icons: {
    icon: [
      { url: "/assets/app-icon.png", sizes: "any", type: "image/png" },
      { url: "/assets/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/assets/app-icon.png",
    apple: "/assets/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`w-mod-js ${manrope.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/assets/app-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon-180.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Figtree:wght@300;400;500&family=Inter:wght@300;400&family=Roboto:wght@500;800&family=Lato:wght@300;400;700&family=Space+Grotesk:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:ital,wght@0,400..600;1,400..600&family=Darker+Grotesque:wght@700&family=Bitter:ital,wght@1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/hero-shader.webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/fonts/PPNeueMontreal-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PPEiko-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <Script
          id="mod-touch"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`,
          }}
        />
        <Script src="/js/route-shim.js" strategy="beforeInteractive" />
        <Script src="/js/mobile-gate.js" strategy="beforeInteractive" />
        <Script src="/js/scroll-scheduler.js" strategy="beforeInteractive" />
      </head>
      <body data-barba="wrapper" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.body.classList.remove('night');
              try {
                localStorage.removeItem('theme');
                localStorage.removeItem('hero-theme');
              } catch (_) {}
            `,
          }}
        />
        <CustomScrollbar />
        <RuntimeLoader />
        <TrailerLightbox />
        <main>{children}</main>
        <GlobalFooter />
        <Script src="/js/site.js" strategy="afterInteractive" />
        <Script src="/js/hero-player.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

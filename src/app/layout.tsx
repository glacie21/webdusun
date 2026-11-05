import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { villageData } from "@/data/content";
import MotionProvider from "@/components/motion/MotionProvider";
import SkipLink from "@/components/layout/SkipLink";
import { pageMetadata } from "@/lib/seo";
import { colors } from "@/lib/theme";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const { site } = villageData;

export const viewport: Viewport = {
  themeColor: colors.forest,
  width: "device-width",
  initialScale: 1,
};

// Teks di bawah ini diatur dari villageData.site di src/data/content.ts.
// Ikon tab browser diambil otomatis dari src/app/icon.svg, dan gambar
// pratinjau tautan dibuat otomatis oleh src/app/opengraph-image.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  keywords: site.keywords,
  authors: [{ name: site.author }],
  ...pageMetadata({ title: site.title, description: site.description, path: "/" }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal font-sans antialiased selection:bg-sage-light selection:text-forest-dark">
        <SkipLink label={site.skipLinkLabel} />
        <MotionProvider>{children}</MotionProvider>
        {/* Statistik pengunjung (Vercel Web Analytics). Tidak memakai cookie dan
            baru aktif setelah website dipasang di Vercel dan fitur Analytics dinyalakan. */}
        <Analytics />
      </body>
    </html>
  );
}

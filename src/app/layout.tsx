import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { villageData } from "@/data/content";
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
  themeColor: "#2F5D50",
  width: "device-width",
  initialScale: 1,
};

// Teks dan gambar di bawah ini diatur dari villageData.site di src/data/content.ts.
// Ikon tab browser diambil otomatis dari src/app/icon.svg.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.author }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: villageData.identity.shortName,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: site.ogImageUrl,
        width: 1200,
        height: 630,
        alt: site.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal font-sans antialiased selection:bg-sage-light selection:text-forest-dark">
        {children}
      </body>
    </html>
  );
}

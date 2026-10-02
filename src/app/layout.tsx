import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2F5D50",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Cerita Sukomangun — Profil dan Potensi Dusun Sukomangun",
  description:
    "Mengenal Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang melalui sejarah, kehidupan masyarakat, potensi, fasilitas, dan cerita warga.",
  keywords: [
    "Dusun Sukomangun",
    "Cerita Sukomangun",
    "Desa Genito",
    "Windusari",
    "Magelang",
    "Jawa Tengah",
    "Profil Dusun",
    "Potensi Dusun",
    "Pertanian Sukomangun",
    "Komoditas Ketela",
  ],
  authors: [{ name: "Masyarakat Dusun Sukomangun" }],
  openGraph: {
    title: "Cerita Sukomangun — Profil dan Potensi Dusun Sukomangun",
    description:
      "Mengenal Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang melalui sejarah, kehidupan masyarakat, potensi, fasilitas, dan cerita warga.",
    url: "https://sukomangun.desa.id",
    siteName: "Cerita Sukomangun",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Pemandangan Perbukitan Dusun Sukomangun Magelang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cerita Sukomangun — Profil dan Potensi Dusun Sukomangun",
    description:
      "Mengenal Dusun Sukomangun, Desa Genito, Kecamatan Windusari, Kabupaten Magelang.",
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  icons: {
    icon: "/favicon.ico",
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

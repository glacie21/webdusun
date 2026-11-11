import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteLogo from "@/components/ui/SiteLogo";

interface PageTopBarProps {
  // Tujuan dan teks tombol kembali, misalnya "/#cerita" dan "Kembali ke Semua Cerita".
  backHref: string;
  backLabel: string;
}

// Baris atas untuk halaman selain beranda (cerita, kabar): logo yang kembali
// ke beranda dan tombol kembali. Diletakkan di atas latar gelap atau foto.
export default function PageTopBar({ backHref, backLabel }: Readonly<PageTopBarProps>) {
  return (
    <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between gap-4">
      <Link href="/" className="group inline-flex">
        <SiteLogo />
      </Link>
      <Link
        href={backHref}
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-sm text-white/90 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{backLabel}</span>
      </Link>
    </div>
  );
}

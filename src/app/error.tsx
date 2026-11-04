"use client";

import Link from "next/link";
import { Home, RotateCcw, TriangleAlert } from "lucide-react";
import { villageData } from "@/data/content";

const { identity } = villageData;
const { error: errorText } = villageData.sections;

// Halaman kesalahan: tampil jika ada bagian halaman yang gagal dimuat,
// supaya pengunjung tidak melihat layar kosong. Teksnya diatur dari
// villageData.sections.error di src/data/content.ts.
// retry() memuat ulang data bagian yang gagal lalu menampilkannya kembali.
export default function ErrorPage({ retry }: Readonly<{ retry: () => void }>) {
  return (
    <main
      id="konten"
      tabIndex={-1}
      className="relative flex-grow min-h-screen flex flex-col items-center justify-center overflow-hidden bg-forest-dark text-white px-4 sm:px-6 lg:px-8 py-16 focus:outline-none"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 text-cream-soft">
          <TriangleAlert className="w-3.5 h-3.5 text-earth" />
          <span>{errorText.badge}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5 text-balance">
          {errorText.title}
        </h1>

        <p className="text-base sm:text-lg text-white/85 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          {errorText.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={retry}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-cream-soft text-forest hover:bg-white font-medium text-sm md:text-base tracking-wide transition-all shadow-lg hover:shadow-xl"
          >
            <RotateCcw className="w-4 h-4 text-earth" />
            <span>{errorText.retryButtonLabel}</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/30 text-white hover:bg-white/10 font-medium text-sm md:text-base tracking-wide transition-colors"
          >
            <Home className="w-4 h-4 text-earth" />
            <span>{errorText.homeButtonLabel}</span>
          </Link>
        </div>

        <p className="mt-12 text-xs sm:text-sm text-white/60">{identity.subLocationText}</p>
      </div>
    </main>
  );
}

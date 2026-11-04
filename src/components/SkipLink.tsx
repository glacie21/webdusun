"use client";

// Tautan "Lewati ke konten utama": tersembunyi sampai disorot dengan tombol Tab.
// Setiap halaman menandai area isinya dengan <main id="konten" tabIndex={-1}>.
// Fokus dipindah secara manual karena klik anchor ditangani Lenis (smooth scroll),
// sehingga browser tidak otomatis memindahkan fokus keyboard ke tujuan.
export default function SkipLink({ label }: Readonly<{ label: string }>) {
  return (
    <a
      href="#konten"
      onClick={() => document.getElementById("konten")?.focus({ preventScroll: true })}
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
    >
      {label}
    </a>
  );
}

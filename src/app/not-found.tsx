import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Compass, Home, MapPin } from "lucide-react";
import { villageData } from "@/data/content";

const { identity } = villageData;
const { hero, notFound } = villageData.sections;

export const metadata: Metadata = {
  title: notFound.pageTitle,
};

// Halaman 404: tampil untuk setiap alamat yang tidak ada di website ini.
// Teksnya diatur dari villageData.sections.notFound di src/data/content.ts.
export default function NotFound() {
  // Pintasan ke bagian halaman utama, kecuali Beranda yang sudah jadi tombol utama.
  const shortcuts = villageData.navLinks.filter((link) => link.href !== "#hero");

  return (
    <main className="relative flex-grow min-h-screen flex flex-col overflow-hidden text-white">
      {/* Foto latar dan lapisan gelap, sama seperti Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.imageUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest/75 to-black/50" />
      </div>

      {/* Logo */}
      <header className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <Link href="/" className="group inline-flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center font-serif text-lg font-bold group-hover:bg-white/30 transition-colors">
            {identity.logoInitial}
          </span>
          <span className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight">
              {identity.shortName}
            </span>
            <span className="text-[10px] tracking-widest uppercase font-medium text-white/80">
              {identity.areaLabel}
            </span>
          </span>
        </Link>
      </header>

      {/* Isi utama */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 text-cream-soft animate-fade-in">
            <Compass className="w-3.5 h-3.5 text-earth" />
            <span>{notFound.badge}</span>
          </div>

          <p
            aria-hidden="true"
            className="font-serif text-7xl sm:text-8xl md:text-9xl font-bold text-earth-bright leading-none mb-4"
          >
            404
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5 text-balance">
            {notFound.title}
          </h1>

          <p className="text-base sm:text-lg text-white/90 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            {notFound.description}
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-cream-soft text-forest hover:bg-white font-medium text-sm md:text-base tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-98"
          >
            <Home className="w-4 h-4 text-earth" />
            <span>{notFound.homeButtonLabel}</span>
          </Link>

          {/* Pintasan ke bagian halaman utama */}
          <nav aria-label={notFound.shortcutsLabel} className="mt-12">
            <p className="text-xs uppercase tracking-wider text-white/70 mb-3">
              {notFound.shortcutsLabel}
            </p>
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {shortcuts.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${link.href}`}
                    className="inline-block px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-sm text-white/90 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Lokasi */}
      <footer className="relative z-10 pb-8 px-4 flex justify-center">
        <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-white/80">
          <MapPin className="w-3.5 h-3.5 text-earth shrink-0" />
          <span>{identity.subLocationText}</span>
        </p>
      </footer>
    </main>
  );
}

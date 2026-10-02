"use client";

import React from "react";
import { ArrowUp, MapPin, Heart } from "lucide-react";
import { villageData } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#tentang" },
    { name: "Sejarah", href: "#sejarah" },
    { name: "Potensi", href: "#potensi" },
    { name: "Alur Ketela", href: "#komoditas" },
    { name: "Kehidupan", href: "#kehidupan" },
    { name: "Fasilitas", href: "#fasilitas" },
    { name: "Galeri", href: "#galeri" },
    { name: "Lokasi", href: "#lokasi" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#1E3D34] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Kolom 1: Identitas Dusun */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2F5D50] border border-white/20 text-[#FAF8F2] flex items-center justify-center font-serif text-lg font-bold">
                S
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                Cerita Sukomangun
              </span>
            </div>
            <p className="text-sm text-white/80 font-light leading-relaxed max-w-sm">
              &ldquo;Mengenal Sukomangun melalui cerita, masyarakat, dan potensinya.&rdquo;
            </p>
            <p className="text-xs text-white/60 font-light">
              Website profil komunitas & etalase digital untuk mendokumentasikan kehidupan serta
              mengembangkan potensi Dusun Sukomangun.
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold uppercase tracking-wider text-[#B8895A]">
              Navigasi
            </h4>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm font-light text-white/80">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="hover:text-[#FAF8F2] hover:underline underline-offset-4 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Lokasi Administratif */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-semibold uppercase tracking-wider text-[#B8895A]">
              Lokasi Wilayah
            </h4>
            <div className="space-y-1.5 text-sm font-light text-white/80">
              <div className="flex items-center gap-2 text-white font-medium">
                <MapPin className="w-4 h-4 text-[#B8895A]" />
                <span>{villageData.location.dusun}</span>
              </div>
              <p className="pl-6">{villageData.location.desa}</p>
              <p className="pl-6">{villageData.location.kecamatan}</p>
              <p className="pl-6">{villageData.location.kabupaten}</p>
              <p className="pl-6">{villageData.location.provinsi}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-light">
          <p className="text-center sm:text-left">
            © 2026 Cerita Sukomangun. Dibuat untuk mengenalkan dan mendokumentasikan potensi Dusun Sukomangun.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-xs"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

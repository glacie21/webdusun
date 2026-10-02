"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";

interface NavbarProps {
  onExploreClick?: () => void;
}

export default function Navbar({ onExploreClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#tentang" },
    { name: "Sejarah", href: "#sejarah" },
    { name: "Potensi", href: "#potensi" },
    { name: "Alur Ketela", href: "#komoditas" },
    { name: "Kehidupan", href: "#kehidupan" },
    { name: "Fasilitas", href: "#fasilitas" },
    { name: "Galeri", href: "#galeri" },
    { name: "Kontak", href: "#lokasi" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F5EF]/95 backdrop-blur-md shadow-sm border-b border-[#E3DDD0] py-3.5"
          : "bg-gradient-to-b from-black/60 via-black/25 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="group flex items-center gap-2.5 focus:outline-none"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif text-lg font-bold transition-all shadow-sm ${
                isScrolled
                  ? "bg-[#2F5D50] text-[#F7F5EF] group-hover:bg-[#1E3D34]"
                  : "bg-white/20 backdrop-blur-md text-white border border-white/30 group-hover:bg-white/30"
              }`}
            >
              S
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg md:text-xl font-bold tracking-tight transition-colors ${
                  isScrolled ? "text-[#252525]" : "text-white"
                }`}
              >
                Cerita Sukomangun
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase font-medium transition-colors ${
                  isScrolled ? "text-[#7A9B84]" : "text-white/80"
                }`}
              >
                Windusari · Magelang
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isScrolled
                    ? "text-[#595959] hover:text-[#2F5D50] hover:bg-[#EBF2ED]"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#potensi"
              onClick={(e) => {
                if (onExploreClick) {
                  onExploreClick();
                } else {
                  handleScrollTo(e, "#potensi");
                }
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all shadow-sm ${
                isScrolled
                  ? "bg-[#2F5D50] text-white hover:bg-[#1E3D34] hover:shadow-md active:scale-95"
                  : "bg-white text-[#2F5D50] hover:bg-[#F7F5EF] hover:shadow-md active:scale-95"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Jelajahi Sukomangun</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled
                ? "text-[#252525] hover:bg-[#EBF2ED]"
                : "text-white hover:bg-white/20"
            }`}
            aria-label="Buka menu navigasi"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F5EF] border-b border-[#E3DDD0] px-4 pt-4 pb-6 mt-3 shadow-xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-[#252525] hover:bg-[#EBF2ED] hover:text-[#2F5D50] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E3DDD0]">
              <a
                href="#potensi"
                onClick={(e) => handleScrollTo(e, "#potensi")}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2F5D50] text-white font-medium text-sm shadow-sm"
              >
                <Compass className="w-4 h-4" />
                <span>Jelajahi Sukomangun</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

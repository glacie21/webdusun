"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, MapPin, Sparkles, ChevronRight } from "lucide-react";
import { villageData } from "@/data/content";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 76;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Image with optimized Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          alt="Lanskap perbukitan hijau Dusun Sukomangun Windusari Magelang"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-pulse duration-1000"
          style={{ animationDuration: "12s" }}
        />
        {/* Cinematic Multi-layered Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3D34]/95 via-[#2F5D50]/60 to-black/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-12 md:mt-6">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 sm:mb-8 text-[#FAF8F2] shadow-sm animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#B8895A]" />
          <span>DUSUN SUKOMANGUN</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 text-balance drop-shadow-sm">
          Di balik perbukitan Magelang, ada cerita yang terus hidup.
        </h1>

        {/* Narrative Description */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
          {villageData.identity.shortDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-14">
          <button
            type="button"
            onClick={() => scrollToSection("tentang")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FAF8F2] text-[#2F5D50] hover:bg-white font-medium text-sm md:text-base tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 group"
          >
            <span>Jelajahi Sukomangun</span>
            <ChevronRight className="w-4 h-4 text-[#B8895A] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("potensi")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-sm md:text-base tracking-wide transition-all hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2"
          >
            <span>Kenali Potensinya</span>
          </button>
        </div>

        {/* Bottom Geographical Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-white/80 font-normal">
          <MapPin className="w-3.5 h-3.5 text-[#B8895A]" />
          <span>{villageData.identity.subLocationText}</span>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        type="button"
        onClick={() => scrollToSection("tentang")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-1.5 focus:outline-none"
        aria-label="Scroll ke bagian tentang"
      >
        <span className="text-[11px] uppercase tracking-wider font-light">Gulir ke Bawah</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}

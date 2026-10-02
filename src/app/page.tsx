"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import History from "@/components/History";
import Potentials from "@/components/Potentials";
import CommodityFlow from "@/components/CommodityFlow";
import Community from "@/components/Community";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import FeaturedStories from "@/components/FeaturedStories";
import QuoteSection from "@/components/QuoteSection";
import MapSection from "@/components/MapSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  const handleExplore = () => {
    const el = document.getElementById("potensi");
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
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#252525]">
      {/* Sticky Navigation */}
      <Navbar onExploreClick={handleExplore} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Introduction / Tentang Sukomangun */}
        <About />

        {/* 3. Quick Information / Minimalist Statistics */}
        <Statistics />

        {/* 4. Sejarah / Perjalanan Dusun */}
        <History />

        {/* 5. Potensi Dusun */}
        <Potentials />

        {/* 6. Alur Komoditas Ketela */}
        <CommodityFlow />

        {/* 7. Kehidupan Masyarakat & Kebudayaan */}
        <Community />

        {/* 8. Fasilitas Dusun */}
        <Facilities />

        {/* 9. Galeri Foto & Lightbox */}
        <Gallery />

        {/* 10. Featured Editorial Stories */}
        <FeaturedStories />

        {/* 11. Quote Section */}
        <QuoteSection />

        {/* 12. Peta Wilayah & Lokasi */}
        <MapSection />

        {/* 13. Call To Action Section */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { villageData, GalleryPhoto } from "@/data/content";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("Semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    "Semua",
    "Masyarakat",
    "Alam",
    "Pertanian",
    "Kegiatan",
    "Fasilitas",
  ];

  const filteredPhotos =
    activeFilter === "Semua"
      ? villageData.gallery
      : villageData.gallery.filter((photo) => photo.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="galeri" className="py-20 md:py-28 bg-[#F7F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2ED] text-[#2F5D50] text-xs font-semibold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-[#7A9B84]" />
            <span>DOKUMENTASI VISUAL</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#252525] tracking-tight mb-3">
            Potret Sukomangun
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#B8895A]">
            Merekam momen, menyimpan cerita.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-[#2F5D50] text-white shadow-sm"
                  : "bg-white text-[#595959] hover:text-[#252525] hover:bg-[#EBF2ED] border border-[#E3DDD0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo, index) => {
            const isTall = index % 3 === 0;
            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E3DDD0] bg-white ${
                  isTall ? "sm:row-span-2 min-h-[380px]" : "min-h-[260px]"
                }`}
              >
                <Image
                  src={photo.imageUrl}
                  alt={photo.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/40 text-white/90 backdrop-blur-sm border border-white/20">
                    {photo.category}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-base sm:text-lg font-bold mb-1 leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-white/80 font-light line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 p-2.5 bg-white/10 hover:bg-white/25 text-white rounded-full transition-colors"
            aria-label="Tutup foto"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            type="button"
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/15 hover:bg-white/30 text-white rounded-full transition-colors backdrop-blur-sm"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            type="button"
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/15 hover:bg-white/30 text-white rounded-full transition-colors backdrop-blur-sm"
            aria-label="Foto selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredPhotos[lightboxIndex].imageUrl}
                alt={filteredPhotos[lightboxIndex].imageAlt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#B8895A] font-semibold">
                {filteredPhotos[lightboxIndex].category} · Foto {lightboxIndex + 1} dari{" "}
                {filteredPhotos.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-sm text-white/80 font-light mt-1.5">
                {filteredPhotos[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

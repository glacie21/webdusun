"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, X, Maximize2, Info } from "lucide-react";
import { villageData } from "@/data/content";
import Modal from "@/components/Modal";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("Semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const { gallery } = villageData.sections;

  // Kategori filter mengikuti kategori yang benar-benar ada di data.
  const filterCategories = [
    "Semua",
    ...new Set(villageData.gallery.map((photo) => photo.category)),
  ];

  const filteredPhotos =
    activeFilter === "Semua"
      ? villageData.gallery
      : villageData.gallery.filter((photo) => photo.category === activeFilter);

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % filteredPhotos.length));
  };

  const prevPhoto = () => {
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  };

  // Tombol panah kiri/kanan di keyboard untuk berpindah foto.
  const isLightboxOpen = lightboxIndex !== null;
  const photoCount = filteredPhotos.length;
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i === null ? i : (i + 1) % photoCount));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((i) => (i === null ? i : (i - 1 + photoCount) % photoCount));
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, photoCount]);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="galeri" className="py-20 md:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-sage" />
            <span>{gallery.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-3">
            {gallery.title}
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-earth-dark">
            {gallery.subtitle}
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-xs sm:text-sm text-charcoal-muted bg-white px-4 py-2 rounded-full border border-sand">
            <Info className="w-4 h-4 text-earth shrink-0" />
            <span>{gallery.photoNote}</span>
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-forest text-white shadow-sm"
                  : "bg-white text-charcoal-muted hover:text-charcoal hover:bg-sage-light border border-sand"
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
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className={`group relative block w-full text-left rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-sand bg-white ${
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
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/40 text-white/90 backdrop-blur-sm border border-white/20">
                  {photo.category}
                </span>

                {/* Expand Icon */}
                <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </span>

                {/* Bottom Caption */}
                <span className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="block font-serif text-base sm:text-lg font-bold mb-1 leading-snug">
                    {photo.title}
                  </span>
                  <span className="block text-xs text-white/80 font-light line-clamp-2">
                    {photo.caption}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && activePhoto && (
        <Modal
          onClose={closeLightbox}
          labelledBy="lightbox-title"
          className="bg-black/90 backdrop-blur-md p-4 sm:p-8"
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
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={activePhoto.imageUrl}
                alt={activePhoto.imageAlt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-white max-w-xl" aria-live="polite">
              <span className="text-xs uppercase tracking-widest text-earth-bright font-semibold">
                {activePhoto.category} · Foto {lightboxIndex + 1} dari {filteredPhotos.length}
              </span>
              <h3 id="lightbox-title" className="font-serif text-xl sm:text-2xl font-bold mt-1">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-white/80 font-light mt-1.5">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

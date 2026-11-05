"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Camera, ChevronLeft, ChevronRight, X, Maximize2, Info } from "lucide-react";
import { villageData } from "@/data/content";
import Modal from "@/components/ui/Modal";
import Reveal from "@/components/motion/Reveal";
import ContourLines from "@/components/decor/ContourLines";
import FilterPills, { filterOptions } from "@/components/ui/FilterPills";
import { easeOut } from "@/components/motion/presets";
import { fillTemplate } from "@/lib/text";

const TALL = "h-96 sm:h-auto sm:row-span-2";
const NORMAL = "h-64 sm:h-auto";
const WIDE = "h-64 sm:h-auto sm:col-span-2";
const FULL = "h-64 sm:h-auto sm:col-span-2 lg:col-span-4";

// Ukuran tiap foto supaya grid selalu terisi penuh tanpa ruang kosong.
// Setiap 6 foto membentuk satu blok: 2 foto tinggi + 4 foto biasa, yang pas
// mengisi 2 baris di grid 4 kolom dan 4 baris di grid 2 kolom. Posisi foto
// tinggi berselang-seling antar blok. Sisa foto (kurang dari 6) dilebarkan
// supaya baris terakhir tetap penuh.
const REST_PATTERNS: Record<number, string[]> = {
  1: [FULL],
  2: [WIDE, WIDE],
  3: [WIDE, NORMAL, NORMAL],
  4: [NORMAL, NORMAL, NORMAL, NORMAL],
  5: [WIDE, NORMAL, NORMAL, WIDE, WIDE],
};

function tileClass(index: number, total: number) {
  const blockCount = Math.floor(total / 6);
  if (index < blockCount * 6) {
    const pos = index % 6;
    const tallPositions = Math.floor(index / 6) % 2 === 0 ? [0, 3] : [1, 2];
    return tallPositions.includes(pos) ? TALL : NORMAL;
  }
  return REST_PATTERNS[total - blockCount * 6][index - blockCount * 6];
}

// Gerak foto lightbox: masuk dari arah tombol yang ditekan, keluar ke arah sebaliknya.
const slide = {
  enter: (direction: number) => ({ x: direction * 80, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({ x: direction * -80, opacity: 0, scale: 0.97 }),
};

const { gallery: photos } = villageData;
const { gallery: text, ui } = villageData.sections;
const categories = filterOptions(
  ui.allFilterLabel,
  photos.map((photo) => photo.category)
);

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState(ui.allFilterLabel);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const filteredPhotos =
    activeFilter === ui.allFilterLabel ? photos : photos.filter((photo) => photo.category === activeFilter);
  const photoCount = filteredPhotos.length;
  const isLightboxOpen = lightboxIndex !== null;
  const activePhoto = isLightboxOpen ? filteredPhotos[lightboxIndex] : null;

  const openLightbox = (index: number) => {
    setDirection(0);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  // step 1 = foto berikutnya, -1 = foto sebelumnya. Berputar di ujung daftar.
  const paginate = useCallback(
    (step: number) => {
      setDirection(step);
      setLightboxIndex((i) => (i === null ? i : (i + step + photoCount) % photoCount));
    },
    [photoCount]
  );

  // Tombol panah kiri/kanan di keyboard untuk berpindah foto.
  useEffect(() => {
    if (!isLightboxOpen) return;
    const steps: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key in steps) paginate(steps[e.key]);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, paginate]);

  return (
    <section id="galeri" className="py-20 md:py-28 bg-forest-dark relative">
      {/* Latar hijau tua supaya warna foto lebih menonjol, seperti ruang pamer */}
      <ContourLines className="text-white/[0.04]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul bagian. Berbeda dari SectionHeader karena latarnya gelap
            dan memakai subjudul miring sebagai pengganti deskripsi. */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal y={16} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-earth-bright text-xs font-semibold tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-earth-bright" />
            <span>{text.badge}</span>
          </Reveal>
          <Reveal as="h2" delay={0.08} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            {text.title}
          </Reveal>
          <Reveal as="p" delay={0.16} className="font-serif italic text-lg sm:text-xl text-earth-bright">
            {text.subtitle}
          </Reveal>
          <Reveal as="p" delay={0.24} className="mt-5 inline-flex items-center gap-2 text-xs sm:text-sm text-white/75 bg-white/5 px-4 py-2 rounded-full border border-white/15">
            <Info className="w-4 h-4 text-earth-bright shrink-0" />
            <span>{text.photoNote}</span>
          </Reveal>
        </div>

        <FilterPills
          options={categories}
          active={activeFilter}
          onChange={setActiveFilter}
          layoutId="gallery-filter"
          tone="dark"
        />

        {/* Kisi foto: berganti dengan pudar saat filter diubah */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:auto-rows-[240px] gap-5"
          >
            {filteredPhotos.map((photo, index) => (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: easeOut }}
                className={`group relative block w-full text-left rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-black/40 transition-shadow duration-300 border border-white/10 bg-forest ${tileClass(
                  index,
                  filteredPhotos.length
                )}`}
              >
                <Image
                  src={photo.imageUrl}
                  alt={photo.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Kategori */}
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-black/40 text-white/90 backdrop-blur-sm border border-white/20">
                  {photo.category}
                </span>

                {/* Ikon perbesar */}
                <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </span>

                {/* Judul dan keterangan: naik sedikit saat disorot */}
                <span className="absolute bottom-4 left-4 right-4 text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block font-serif text-base sm:text-lg font-bold mb-1 leading-snug">
                    {photo.title}
                  </span>
                  <span className="block text-xs text-white/80 font-light line-clamp-2">
                    {photo.caption}
                  </span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox: foto besar */}
      <AnimatePresence>
        {isLightboxOpen && activePhoto && (
          <Modal
            onClose={closeLightbox}
            labelledBy="lightbox-title"
            className="bg-black/90 backdrop-blur-md p-4 sm:p-8"
          >
            {/* Tombol tutup */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-20 p-2.5 bg-white/10 hover:bg-white/25 text-white rounded-full transition-colors"
              aria-label={ui.closePhotoLabel}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Foto sebelumnya */}
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/15 hover:bg-white/30 text-white rounded-full transition-colors backdrop-blur-sm"
              aria-label={ui.previousPhotoLabel}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Foto berikutnya */}
            <button
              type="button"
              onClick={() => paginate(1)}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/15 hover:bg-white/30 text-white rounded-full transition-colors backdrop-blur-sm"
              aria-label={ui.nextPhotoLabel}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Foto */}
            <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
              <div className="relative w-full h-[65vh]">
                <AnimatePresence custom={direction}>
                  {/* Foto bisa digeser ke kiri/kanan dengan jari atau mouse */}
                  <motion.div
                    key={activePhoto.id}
                    custom={direction}
                    variants={slide}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: easeOut }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.7}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -80 || info.velocity.x < -500) paginate(1);
                      else if (info.offset.x > 80 || info.velocity.x > 500) paginate(-1);
                    }}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
                  >
                    <Image
                      src={activePhoto.imageUrl}
                      alt={activePhoto.imageAlt}
                      fill
                      priority
                      draggable={false}
                      sizes="(max-width: 1200px) 100vw, 1000px"
                      className="object-contain select-none"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Keterangan foto */}
              <div className="mt-4 text-center text-white max-w-xl" aria-live="polite">
                <motion.div
                  key={activePhoto.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
                >
                  <span className="text-xs uppercase tracking-widest text-earth-bright font-semibold">
                    {activePhoto.category} ·{" "}
                    {fillTemplate(ui.photoCounter, { nomor: lightboxIndex + 1, jumlah: photoCount })}
                  </span>
                  <h3 id="lightbox-title" className="font-serif text-xl sm:text-2xl font-bold mt-1">
                    {activePhoto.title}
                  </h3>
                  <p className="text-sm text-white/80 font-light mt-1.5">
                    {activePhoto.caption}
                  </p>
                </motion.div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Leaf, HeartHandshake, ShieldCheck, X } from "lucide-react";
import { villageData } from "@/data/content";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { identity } = villageData;
  const { about } = villageData.sections;
  const locationPhrase = `${identity.subdistrict}, ${identity.district}, ${identity.regency}`;

  // Menebalkan nama wilayah administratif yang muncul di dalam paragraf.
  const renderParagraph = (text: string) =>
    text.split(locationPhrase).map((part, i) => (
      <React.Fragment key={i}>
        {i > 0 && <strong className="font-semibold text-[#252525]">{locationPhrase}</strong>}
        {part}
      </React.Fragment>
    ));

  return (
    <section id="tentang" className="py-20 md:py-28 bg-[#F7F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Foto Komunitas & Lingkungan Sukomangun */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src={about.imageUrl}
                alt={about.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs font-medium uppercase tracking-wider bg-[#2F5D50]/90 backdrop-blur-sm px-3 py-1 rounded-full text-white inline-block mb-2">
                  {about.imageBadge}
                </span>
                <p className="text-sm font-light text-white/90">
                  {about.imageCaption}
                </p>
              </div>
            </div>

            {/* Floating Info Badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-[#E3DDD0] max-w-[240px] hidden sm:flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#EBF2ED] text-[#2F5D50] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-[#595959] uppercase tracking-wider font-semibold">
                  {about.floatingLabel}
                </p>
                <p className="text-sm font-serif font-bold text-[#252525]">
                  {about.floatingTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Narasi Pengenalan */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2ED] text-[#2F5D50] text-xs font-semibold tracking-wider uppercase">
              <Leaf className="w-3.5 h-3.5 text-[#7A9B84]" />
              <span>{about.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#252525] leading-tight">
              {about.title}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#595959] leading-relaxed font-light">
              {identity.longDescription.map((paragraph, idx) => (
                <p key={idx}>{renderParagraph(paragraph)}</p>
              ))}
            </div>

            {/* Feature Pills */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              {about.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-sm text-[#252525] font-medium bg-white/70 px-3.5 py-2.5 rounded-xl border border-[#E3DDD0]"
                >
                  <ShieldCheck className="w-4 h-4 text-[#2F5D50]" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Link Modal Selengkapnya */}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 text-base font-semibold text-[#2F5D50] hover:text-[#1E3D34] transition-colors"
              >
                <span className="underline underline-offset-4 decoration-[#B8895A]">
                  {about.moreLabel}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#B8895A]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail Profil Dusun */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F2] max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E3DDD0] max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-[#E3DDD0]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#7A9B84] font-semibold">
                  {about.modal.label}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#252525]">
                  {about.modal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-[#595959] hover:text-[#252525] hover:bg-[#EBF2ED] rounded-full transition-colors"
                aria-label="Tutup jendela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-4 text-[#595959] text-sm sm:text-base leading-relaxed">
              {about.modal.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              <div className="bg-white p-4 rounded-2xl border border-[#E3DDD0] space-y-2 mt-4">
                <h4 className="font-serif font-bold text-sm text-[#2F5D50]">
                  {about.modal.valuesTitle}
                </h4>
                <p className="text-xs text-[#595959]">
                  {about.modal.valuesText}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E3DDD0] flex justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-[#2F5D50] text-white text-sm font-medium hover:bg-[#1E3D34] transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

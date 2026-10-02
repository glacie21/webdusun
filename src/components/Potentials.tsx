"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, X, CheckCircle2 } from "lucide-react";
import { villageData, PotentialItem } from "@/data/content";

export default function Potentials() {
  const [selectedPotential, setSelectedPotential] = useState<PotentialItem | null>(null);

  return (
    <section id="potensi" className="py-20 md:py-28 bg-[#F7F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2ED] text-[#2F5D50] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B8895A]" />
            <span>KEMAKMURAN DESA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#252525] tracking-tight mb-5">
            Potensi yang Tumbuh dari Tanah Sukomangun
          </h2>
          <p className="text-base sm:text-lg text-[#595959] font-light leading-relaxed">
            Tanah, masyarakat, dan aktivitas sehari-hari menjadi bagian dari potensi yang dimiliki
            Sukomangun. Berbagai hasil pertanian dan usaha masyarakat menjadi sumber kehidupan
            sekaligus peluang yang dapat terus dikembangkan.
          </p>
        </div>

        {/* Potentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villageData.potentials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E3DDD0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                {/* Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#2F5D50] uppercase tracking-wider shadow-sm">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs text-white/80 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#252525] mb-2.5 group-hover:text-[#2F5D50] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#595959] font-light leading-relaxed mb-6">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Button Selengkapnya */}
                <div className="pt-4 border-t border-[#E3DDD0]/70 flex items-center justify-between">
                  <span className="text-xs text-[#7A9B84] font-medium">
                    Dusun Sukomangun
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedPotential(item)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F5D50] hover:text-[#1E3D34] transition-colors group/btn"
                  >
                    <span>Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 text-[#B8895A] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail Potensi */}
      {selectedPotential && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F2] max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E3DDD0] max-h-[90vh] flex flex-col">
            <div className="relative h-60 w-full shrink-0">
              <Image
                src={selectedPotential.imageUrl}
                alt={selectedPotential.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedPotential(null)}
                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors"
                aria-label="Tutup jendela"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B8895A] bg-white/20 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  {selectedPotential.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {selectedPotential.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 overflow-y-auto space-y-4">
              <p className="text-sm sm:text-base text-[#252525] leading-relaxed">
                {selectedPotential.fullDescription}
              </p>

              <div className="bg-[#EBF2ED] p-4 rounded-2xl border border-[#D9E5DC] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2F5D50] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#2F5D50] tracking-wider mb-0.5">
                    Keunggulan & Karakter
                  </h4>
                  <p className="text-xs sm:text-sm text-[#252525]">
                    {selectedPotential.highlightText}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-white border-t border-[#E3DDD0] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedPotential(null)}
                className="px-6 py-2.5 rounded-xl bg-[#2F5D50] text-white text-sm font-medium hover:bg-[#1E3D34] transition-colors"
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

"use client";

import React from "react";
import { BookOpen, Clock, Info } from "lucide-react";
import { villageData } from "@/data/content";

export default function History() {
  return (
    <section id="sejarah" className="py-20 md:py-28 bg-[#FAF8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2ED] text-[#2F5D50] text-xs font-semibold tracking-wider uppercase mb-3">
            <Clock className="w-3.5 h-3.5 text-[#7A9B84]" />
            <span>SEJARAH & PERJALANAN</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#252525] tracking-tight mb-5">
            Jejak yang Membentuk Sukomangun
          </h2>
          <p className="text-base sm:text-lg text-[#595959] font-light leading-relaxed max-w-2xl mx-auto">
            Setiap tempat memiliki cerita. Sukomangun tumbuh melalui perjalanan masyarakat yang
            tinggal, bekerja, dan membangun kehidupan bersama dari generasi ke generasi.
          </p>

          {/* Official History Notice Badge */}
          <div className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm text-[#7A9B84] bg-white px-4 py-2 rounded-full border border-[#E3DDD0] shadow-2xs">
            <Info className="w-4 h-4 text-[#B8895A] shrink-0" />
            <span>
              Cerita sejarah Sukomangun sedang dihimpun bersama para sesepuh dan masyarakat setempat.
            </span>
          </div>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative">
          {/* Vertical timeline line for mobile & tablet, horizontal line on lg desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#E3DDD0] -translate-y-1/2 z-0" />
          <div className="lg:hidden absolute top-4 bottom-4 left-6 w-0.5 bg-[#E3DDD0] z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {villageData.historyMilestones.map((item, index) => (
              <div
                key={index}
                className="flex flex-row lg:flex-col items-start gap-5 lg:gap-4 group"
              >
                {/* Node marker */}
                <div className="relative shrink-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#2F5D50] text-[#2F5D50] group-hover:bg-[#2F5D50] group-hover:text-white transition-all shadow-sm flex items-center justify-center font-serif text-sm font-bold">
                    0{index + 1}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white p-6 rounded-2xl border border-[#E3DDD0] shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#B8895A]">
                      {item.period}
                    </span>
                    <span className="text-[10px] uppercase px-2 py-0.5 rounded-full bg-[#F7F5EF] text-[#595959]">
                      Dokumentasi
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#252525] mb-2 leading-snug group-hover:text-[#2F5D50] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#595959] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Box */}
        <div className="mt-16 bg-[#2F5D50] text-white p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <BookOpen className="w-7 h-7 text-[#B8895A]" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold">
                Merekam Warisan Lisan Dusun
              </h4>
              <p className="text-xs sm:text-sm text-white/80 font-light mt-1">
                Proses pengumpulan naskah dan memori para sesepuh Dusun Sukomangun terus berjalan
                sebagai arsip berharga bagi generasi mendatang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

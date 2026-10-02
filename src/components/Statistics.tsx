"use client";

import React from "react";
import { villageData } from "@/data/content";

export default function Statistics() {
  return (
    <section className="py-14 sm:py-18 bg-white border-y border-[#E3DDD0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#7A9B84] font-semibold">
            SEKILAS IDENTITAS
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#252525] mt-1">
            Mengenal Sukomangun dalam Angka & Makna
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {villageData.quickStats.map((item, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#F7F5EF]/60 hover:bg-[#F7F5EF] border border-[#E3DDD0] transition-all duration-300 hover:shadow-md group flex flex-col justify-between"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#2F5D50] group-hover:text-[#B8895A] transition-colors">
                  {item.number}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#7A9B84] px-2.5 py-0.5 rounded-full bg-[#EBF2ED]">
                  Profil
                </span>
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#252525] mb-1.5">
                  {item.label}
                </h4>
                <p className="text-xs sm:text-sm text-[#595959] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

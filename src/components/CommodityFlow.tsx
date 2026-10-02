"use client";

import React from "react";
import { Sprout, Warehouse, Droplets, Truck, Building2, ArrowRight, ArrowDown } from "lucide-react";
import { villageData } from "@/data/content";

export default function CommodityFlow() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Sprout":
        return <Sprout className="w-6 h-6" />;
      case "Warehouse":
        return <Warehouse className="w-6 h-6" />;
      case "Droplets":
        return <Droplets className="w-6 h-6" />;
      case "Truck":
        return <Truck className="w-6 h-6" />;
      case "Building2":
        return <Building2 className="w-6 h-6" />;
      default:
        return <Sprout className="w-6 h-6" />;
    }
  };

  return (
    <section id="komoditas" className="py-20 md:py-28 bg-[#FAF8F2] relative border-t border-[#E3DDD0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2ED] text-[#2F5D50] text-xs font-semibold tracking-wider uppercase mb-3">
            <span>CERITA KOMODITAS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#252525] tracking-tight mb-5">
            Dari Kebun hingga Perjalanan ke Kota
          </h2>
          <p className="text-base sm:text-lg text-[#595959] font-light leading-relaxed">
            Perjalanan komoditas ketela Sukomangun merajut kerja keras petani, tenaga pembersih,
            hingga terdistribusi ke sentra pengolahan pangan di kota-kota besar.
          </p>
        </div>

        {/* Commodity Flow Steps: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-3 relative items-stretch">
          {villageData.commodityFlow.map((step, idx) => (
            <div key={step.step} className="flex flex-col lg:flex-row items-center">
              {/* Card Container */}
              <div className="w-full bg-white rounded-3xl p-6 border border-[#E3DDD0] shadow-sm hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between group">
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-8 h-8 rounded-full bg-[#EBF2ED] text-[#2F5D50] font-serif font-bold text-sm flex items-center justify-center">
                      0{step.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#F7F5EF] text-[#2F5D50] group-hover:bg-[#2F5D50] group-hover:text-white transition-colors flex items-center justify-center">
                      {getIcon(step.iconName)}
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B8895A] block mb-1">
                    {step.actor}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#252525] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#595959] font-light leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E3DDD0]/70 text-[11px] text-[#7A9B84] font-medium leading-normal">
                  {step.detail}
                </div>
              </div>

              {/* Arrow Connector */}
              {idx < villageData.commodityFlow.length - 1 && (
                <div className="my-3 lg:my-0 lg:mx-2 text-[#7A9B84] flex items-center justify-center">
                  <div className="lg:hidden">
                    <ArrowDown className="w-5 h-5 animate-pulse text-[#B8895A]" />
                  </div>
                  <div className="hidden lg:block">
                    <ArrowRight className="w-5 h-5 text-[#B8895A]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Storytelling Narrative Footer */}
        <div className="mt-14 max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-[#E3DDD0] text-center shadow-xs">
          <p className="font-serif italic text-base sm:text-lg text-[#252525] leading-relaxed">
            &ldquo;Setiap singkong yang dipanen membawa harapan dan berkah bagi keluarga petani di Sukomangun,
            sekaligus menyuplai gizi dan bahan baku kuliner tradisional di Jawa Tengah dan D.I. Yogyakarta.&rdquo;
          </p>
          <div className="mt-3 text-xs uppercase tracking-widest text-[#7A9B84] font-semibold">
            Rantai Nilai Pertanian Rakyat Sukomangun
          </div>
        </div>
      </div>
    </section>
  );
}

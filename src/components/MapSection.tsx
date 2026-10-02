"use client";

import React from "react";
import { MapPin, Navigation, ExternalLink, Info, Compass } from "lucide-react";
import { villageData } from "@/data/content";

export default function MapSection() {
  return (
    <section id="lokasi" className="py-20 md:py-28 bg-[#F7F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Administrative Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2ED] text-[#2F5D50] text-xs font-semibold tracking-wider uppercase">
              <Navigation className="w-3.5 h-3.5 text-[#7A9B84]" />
              <span>LOKASI WILAYAH</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#252525] tracking-tight">
              Temukan Sukomangun
            </h2>

            <p className="text-base sm:text-lg text-[#595959] font-light leading-relaxed">
              Dusun Sukomangun terletak di kawasan asri pegunungan Windusari, Kabupaten Magelang,
              berdekatan dengan pesona lereng Gunung Sumbing.
            </p>

            {/* Address Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E3DDD0] shadow-sm space-y-3">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#EBF2ED] text-[#2F5D50] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#252525]">
                    {villageData.location.dusun}
                  </h3>
                  <p className="text-sm text-[#595959] mt-1 font-light leading-relaxed">
                    {villageData.location.desa}, {villageData.location.kecamatan}
                    <br />
                    {villageData.location.kabupaten}, {villageData.location.provinsi}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E3DDD0] flex items-center gap-2 text-xs text-[#7A9B84]">
                <Info className="w-4 h-4 shrink-0" />
                <span>Kawasan perbukitan agraris berhawa sejuk di Jawa Tengah</span>
              </div>
            </div>

            {/* Direct Google Maps Button */}
            <div>
              <a
                href={villageData.location.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2F5D50] hover:bg-[#1E3D34] text-white font-medium text-sm sm:text-base tracking-wide transition-all shadow-md hover:shadow-lg active:scale-98"
              >
                <Compass className="w-4 h-4" />
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </a>
            </div>
          </div>

          {/* Right Column: Map Embed / Interactive Placeholder Map */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white min-h-[380px] sm:min-h-[440px] flex flex-col">
              {/* Stylized Map View / Embed */}
              <div className="relative flex-1 w-full bg-[#EBF2ED] overflow-hidden">
                {/* Embed iframe query for Windusari, Magelang */}
                <iframe
                  title="Peta Dusun Sukomangun Genito Windusari Magelang"
                  src="https://maps.google.com/maps?q=Genito,+Windusari,+Magelang,+Central+Java&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full min-h-[360px] border-0 filter saturate-95"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Floating GPS card */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#E3DDD0]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#2F5D50] mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B8895A]" />
                    <span>Dusun Sukomangun, Genito</span>
                  </div>
                  <p className="text-[11px] text-[#595959] leading-tight font-light">
                    Kecamatan Windusari, Kabupaten Magelang, Jawa Tengah
                  </p>
                </div>
              </div>

              {/* Note bar */}
              <div className="p-4 bg-white border-t border-[#E3DDD0] text-xs text-[#595959] flex items-center justify-between">
                <span>{villageData.location.embedPlaceholderNote}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

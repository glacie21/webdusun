"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen, Calendar, Clock, ArrowRight, X } from "lucide-react";
import { villageData, EditorialStory } from "@/data/content";

export default function FeaturedStories() {
  const [selectedStory, setSelectedStory] = useState<EditorialStory | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F2] relative border-t border-[#E3DDD0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2ED] text-[#2F5D50] text-xs font-semibold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#7A9B84]" />
            <span>EDITORIAL DUSUN</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#252525] tracking-tight mb-4">
            Cerita dari Sukomangun
          </h2>
          <p className="text-base sm:text-lg text-[#595959] font-light leading-relaxed">
            Menyimak lebih dalam kisah keseharian, nilai kebersamaan, dan asa masyarakat yang
            menghidupkan dusun di lereng Windusari.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {villageData.editorialStories.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#E3DDD0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={story.imageUrl}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#2F5D50] uppercase tracking-wider">
                    {story.date}
                  </span>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-[#7A9B84] mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {story.readTime}
                    </span>
                    <span>·</span>
                    <span>{story.author}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#252525] mb-2 leading-snug group-hover:text-[#2F5D50] transition-colors">
                    {story.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider font-semibold text-[#B8895A] mb-3">
                    {story.subtitle}
                  </p>

                  <p className="text-sm text-[#595959] font-light leading-relaxed mb-6">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3DDD0]/70">
                  <button
                    type="button"
                    onClick={() => setSelectedStory(story)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F5D50] hover:text-[#1E3D34] group/link"
                  >
                    <span>Baca Cerita Selengkapnya</span>
                    <ArrowRight className="w-4 h-4 text-[#B8895A] group-hover/link:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Baca Artikel Lengkap */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F2] max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E3DDD0] max-h-[90vh] flex flex-col">
            <div className="relative h-64 w-full shrink-0">
              <Image
                src={selectedStory.imageUrl}
                alt={selectedStory.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors"
                aria-label="Tutup jendela cerita"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B8895A] bg-white/20 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  {selectedStory.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {selectedStory.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-white/80 mt-1">
                  <span>{selectedStory.author}</span>
                  <span>·</span>
                  <span>{selectedStory.readTime}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              {selectedStory.content.map((p, idx) => (
                <p key={idx} className="text-sm sm:text-base text-[#252525] font-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="p-4 sm:p-5 bg-white border-t border-[#E3DDD0] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="px-6 py-2.5 rounded-xl bg-[#2F5D50] text-white text-sm font-medium hover:bg-[#1E3D34] transition-colors"
              >
                Tutup Cerita
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

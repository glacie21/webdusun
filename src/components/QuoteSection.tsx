"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { villageData } from "@/data/content";

export default function QuoteSection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={villageData.quote.imageUrl}
          alt={villageData.quote.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center filter saturate-90"
        />
        {/* Deep Forest Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3D34]/95 via-[#2F5D50]/90 to-[#1E3D34]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-8 border border-white/20">
          <Quote className="w-8 h-8 text-[#B8895A]" />
        </div>

        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-snug tracking-tight mb-8 text-balance">
          &ldquo;{villageData.quote.text}&rdquo;
        </blockquote>

        <div className="inline-block border-t border-white/30 pt-4">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#B8895A] font-medium">
            {villageData.quote.source} · {villageData.quote.location}
          </p>
        </div>
      </div>
    </section>
  );
}

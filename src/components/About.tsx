"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Leaf, HeartHandshake, ShieldCheck, X } from "lucide-react";
import { villageData } from "@/data/content";
import Modal from "@/components/Modal";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { identity } = villageData;
  const { about } = villageData.sections;
  const locationPhrase = `${identity.subdistrict}, ${identity.district}, ${identity.regency}`;

  // Menebalkan nama wilayah administratif yang muncul di dalam paragraf.
  const renderParagraph = (text: string) =>
    text.split(locationPhrase).map((part, i) => (
      <React.Fragment key={i}>
        {i > 0 && <strong className="font-semibold text-charcoal">{locationPhrase}</strong>}
        {part}
      </React.Fragment>
    ));

  return (
    <section id="tentang" className="py-20 md:py-28 bg-cream relative overflow-hidden">
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
                <span className="text-xs font-medium uppercase tracking-wider bg-forest/90 backdrop-blur-sm px-3 py-1 rounded-full text-white inline-block mb-2">
                  {about.imageBadge}
                </span>
                <p className="text-sm font-light text-white/90">
                  {about.imageCaption}
                </p>
              </div>
            </div>

            {/* Floating Info Badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-sand max-w-[240px] hidden sm:flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-sage-light text-forest flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-charcoal-muted uppercase tracking-wider font-semibold">
                  {about.floatingLabel}
                </p>
                <p className="text-sm font-serif font-bold text-charcoal">
                  {about.floatingTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Narasi Pengenalan */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold tracking-wider uppercase">
              <Leaf className="w-3.5 h-3.5 text-sage" />
              <span>{about.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              {about.title}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-charcoal-muted leading-relaxed font-light">
              {identity.longDescription.map((paragraph, idx) => (
                <p key={idx}>{renderParagraph(paragraph)}</p>
              ))}
            </div>

            {/* Feature Pills */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              {about.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-sm text-charcoal font-medium bg-white/70 px-3.5 py-2.5 rounded-xl border border-sand"
                >
                  <ShieldCheck className="w-4 h-4 text-forest" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Link Modal Selengkapnya */}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 text-base font-semibold text-forest hover:text-forest-dark transition-colors"
              >
                <span className="underline underline-offset-4 decoration-earth">
                  {about.moreLabel}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-earth" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail Profil Dusun */}
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          labelledBy="about-modal-title"
          className="p-4 bg-black/60 backdrop-blur-sm"
        >
          <div className="bg-cream-soft max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-sand max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-sand">
              <div>
                <span className="text-xs uppercase tracking-wider text-sage-dark font-semibold">
                  {about.modal.label}
                </span>
                <h3 id="about-modal-title" className="font-serif text-2xl font-bold text-charcoal">
                  {about.modal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-charcoal-muted hover:text-charcoal hover:bg-sage-light rounded-full transition-colors"
                aria-label="Tutup jendela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-4 text-charcoal-muted text-sm sm:text-base leading-relaxed">
              {about.modal.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              <div className="bg-white p-4 rounded-2xl border border-sand space-y-2 mt-4">
                <h4 className="font-serif font-bold text-sm text-forest">
                  {about.modal.valuesTitle}
                </h4>
                <p className="text-xs text-charcoal-muted">
                  {about.modal.valuesText}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-sand flex justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-forest text-white text-sm font-medium hover:bg-forest-dark transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}

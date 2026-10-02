"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Leaf, HeartHandshake, ShieldCheck, X } from "lucide-react";
import { villageData } from "@/data/content";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="tentang" className="py-20 md:py-28 bg-[#F7F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Foto Komunitas & Lingkungan Sukomangun */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                alt="Kehangatan masyarakat dan lanskap alam Dusun Sukomangun"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs font-medium uppercase tracking-wider bg-[#2F5D50]/90 backdrop-blur-sm px-3 py-1 rounded-full text-white inline-block mb-2">
                  Harmoni Alam & Warga
                </span>
                <p className="text-sm font-light text-white/90">
                  Aktivitas harian masyarakat yang bersahaja di kaki perbukitan Windusari.
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
                  Semangat Guyub
                </p>
                <p className="text-sm font-serif font-bold text-[#252525]">
                  Gotong Royong & Keramahan Warga
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Narasi Pengenalan */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2ED] text-[#2F5D50] text-xs font-semibold tracking-wider uppercase">
              <Leaf className="w-3.5 h-3.5 text-[#7A9B84]" />
              <span>TENTANG SUKOMANGUN</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#252525] leading-tight">
              Sebuah dusun dengan cerita yang sederhana, tetapi berarti.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#595959] leading-relaxed font-light">
              <p>
                Dusun Sukomangun merupakan salah satu bagian dari{" "}
                <strong className="font-semibold text-[#252525]">
                  Desa Genito, Kecamatan Windusari, Kabupaten Magelang
                </strong>
                . Kehidupan masyarakatnya tumbuh berdampingan dengan alam, aktivitas pertanian,
                gotong royong, serta berbagai kegiatan sosial yang menjadi bagian dari keseharian warga.
              </p>
              <p>
                Di balik aktivitas sehari-hari tersebut, Sukomangun memiliki potensi yang layak dikenal
                lebih luas, mulai dari hasil pertanian, kehidupan masyarakat, fasilitas pendidikan dan
                sosial, hingga cerita para warga yang menjadi bagian dari perjalanan dusun.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-[#252525] font-medium bg-white/70 px-3.5 py-2.5 rounded-xl border border-[#E3DDD0]">
                <ShieldCheck className="w-4 h-4 text-[#2F5D50]" />
                <span>Lingkungan Asri & Sejuk</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#252525] font-medium bg-white/70 px-3.5 py-2.5 rounded-xl border border-[#E3DDD0]">
                <ShieldCheck className="w-4 h-4 text-[#2F5D50]" />
                <span>Kearifan Lokal Terjaga</span>
              </div>
            </div>

            {/* Link Modal Selengkapnya */}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 text-base font-semibold text-[#2F5D50] hover:text-[#1E3D34] transition-colors"
              >
                <span className="underline underline-offset-4 decoration-[#B8895A]">
                  Selengkapnya tentang Sukomangun
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
                  Profil Lengkap
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#252525]">
                  Mengenal Dusun Sukomangun
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
              <p>
                Dusun Sukomangun terletak di wilayah Desa Genito, Kecamatan Windusari, Kabupaten Magelang,
                Jawa Tengah. Dikelilingi panorama perbukitan yang menyejukkan mata, wilayah ini memiliki
                kontur tanah berbukit yang dimanfaatkan warga untuk lahan pertanian produktif.
              </p>
              <p>
                Masyarakat di Dusun Sukomangun dikenal menjunjung tinggi tradisi kerukunan hidup bertetangga.
                Semangat guyub rukun terwujud dalam berbagai aspek kehidupan, mulai dari kerja bakti rutin,
                saling membantu saat panen komoditas ketela dan cabai, hingga pendampingan anak-anak dalam
                menuntut ilmu agama di TPQ setempat.
              </p>
              <div className="bg-white p-4 rounded-2xl border border-[#E3DDD0] space-y-2 mt-4">
                <h4 className="font-serif font-bold text-sm text-[#2F5D50]">
                  Nilai & Komitmen Dusun
                </h4>
                <p className="text-xs text-[#595959]">
                  Menjaga kelestarian alam perbukitan, mempererat kebersamaan masyarakat, serta membuka
                  akses informasi agar potensi lokal Dusun Sukomangun berdaya saing dan bermanfaat bagi
                  kesejahteraan warga bersama.
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

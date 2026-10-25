"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Users, Heart } from "lucide-react";
import { villageData } from "@/data/content";
import Reveal from "@/components/Reveal";
import { easeOut, staggerDelay } from "@/components/motionPresets";

export default function Community() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const { community } = villageData.sections;

  // Kategori filter mengikuti kategori yang benar-benar ada di data.
  const categories = [
    "Semua",
    ...new Set(villageData.communityLife.map((item) => item.category)),
  ];

  const filteredItems =
    activeCategory === "Semua"
      ? villageData.communityLife
      : villageData.communityLife.filter((item) => item.category === activeCategory);

  return (
    <section id="kehidupan" className="py-20 md:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Reveal y={16} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <Users className="w-3.5 h-3.5 text-sage" />
            <span>{community.badge}</span>
          </Reveal>
          <Reveal as="h2" delay={0.08} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-5">
            {community.title}
          </Reveal>
          <Reveal as="p" delay={0.16} className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            {community.description}
          </Reveal>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={isActive}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 border ${
                  isActive
                    ? "text-white border-transparent"
                    : "bg-white text-charcoal-muted hover:text-charcoal hover:bg-sage-light border-sand"
                }`}
              >
                {/* Latar hijau yang meluncur ke filter yang dipilih */}
                {isActive && (
                  <motion.span
                    layoutId="community-filter"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-forest shadow-sm"
                  />
                )}
                <span className="relative">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Community Grid: berganti dengan pudar saat filter diubah */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.7, delay: staggerDelay(index, 0.08), ease: easeOut }}
                  className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-[box-shadow,translate] duration-500 border border-sand bg-white flex flex-col"
                >
                  {/* Photo */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    {/* Category Pill */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-forest uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    {/* Caption & Title on Photo */}
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <h3 className="font-serif text-lg sm:text-xl font-bold mb-1 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description under photo */}
                  <div className="p-5 flex-1 flex items-center">
                    <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Social Harmony Note */}
        <Reveal className="mt-12 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-sage-dark">
          <Heart className="w-4 h-4 text-earth" />
          <span>{community.closingNote}</span>
        </Reveal>
      </div>
    </section>
  );
}

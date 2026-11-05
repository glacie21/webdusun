"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Users, Heart } from "lucide-react";
import { villageData } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import FilterPills, { filterOptions } from "@/components/ui/FilterPills";
import { easeOut, staggerDelay } from "@/components/motion/presets";

const { communityLife } = villageData;
const { community: text, ui } = villageData.sections;
const categories = filterOptions(
  ui.allFilterLabel,
  communityLife.map((item) => item.category)
);

export default function Community() {
  const [activeCategory, setActiveCategory] = useState(ui.allFilterLabel);

  const filteredItems =
    activeCategory === ui.allFilterLabel
      ? communityLife
      : communityLife.filter((item) => item.category === activeCategory);

  return (
    <section id="kehidupan" className="py-20 md:py-28 bg-sage-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon={Users}
          badge={text.badge}
          title={text.title}
          description={text.description}
          badgeClassName="bg-white"
          className="mb-12"
        />

        <FilterPills
          options={categories}
          active={activeCategory}
          onChange={setActiveCategory}
          layoutId="community-filter"
        />

        {/* Kartu kegiatan: berganti dengan pudar saat filter diubah */}
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
                  {/* Foto */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    {/* Kategori */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-forest uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    {/* Judul di atas foto */}
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <h3 className="font-serif text-lg sm:text-xl font-bold mb-1 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Keterangan di bawah foto */}
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

        {/* Catatan penutup */}
        <Reveal className="mt-12 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-sage-dark">
          <Heart className="w-4 h-4 text-earth" />
          <span>{text.closingNote}</span>
        </Reveal>
      </div>
    </section>
  );
}

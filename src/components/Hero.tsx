"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, MapPin, Sparkles, ChevronRight } from "lucide-react";
import { villageData } from "@/data/content";
import { easeOut } from "@/components/motionPresets";

// Urutan muncul isi Hero: badge, judul kata demi kata, lalu deskripsi dan tombol.
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: easeOut },
});

export default function Hero() {
  const { hero } = villageData.sections;
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: latar bergerak lebih lambat dari isi, isi memudar saat digulir.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const titleWords = hero.title.split(" ");
  const afterTitle = 0.25 + titleWords.length * 0.07;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Image with optimized Next.js Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY, scale: imageScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
      >
        <Image
          src={hero.imageUrl}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      {/* Cinematic Multi-layered Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-forest-dark/95 via-forest/60 to-black/40" />
      <div className="absolute inset-0 z-0 bg-radial from-transparent via-black/20 to-black/60" />

      {/* Hero Content Container */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-12 md:mt-6"
      >
        {/* Small badge */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 sm:mb-8 text-cream-soft shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-earth" />
          <span>{hero.badge}</span>
        </motion.div>

        {/* Main Heading: setiap kata naik dari balik garis */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6 text-balance drop-shadow-sm">
          {titleWords.map((word, i) => (
            <span key={i}>
              <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.25 + i * 0.07, ease: easeOut }}
                >
                  {word}
                </motion.span>
              </span>
              {i < titleWords.length - 1 && " "}
            </span>
          ))}
        </h1>

        {/* Narrative Description */}
        <motion.p
          {...fadeUp(afterTitle)}
          className="text-base sm:text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow"
        >
          {villageData.identity.shortDescription}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          {...fadeUp(afterTitle + 0.12)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-14"
        >
          <a
            href="#tentang"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cream-soft text-forest hover:bg-white font-medium text-sm md:text-base tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 group"
          >
            <span>{villageData.identity.exploreLabel}</span>
            <ChevronRight className="w-4 h-4 text-earth group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#potensi"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-sm md:text-base tracking-wide transition-all hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2"
          >
            <span>{hero.secondaryButtonLabel}</span>
          </a>
        </motion.div>

        {/* Bottom Geographical Badge */}
        <motion.div
          {...fadeUp(afterTitle + 0.24)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-white/80 font-normal"
        >
          <MapPin className="w-3.5 h-3.5 text-earth" />
          <span>{villageData.identity.subLocationText}</span>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.a
        href="#tentang"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: afterTitle + 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-1.5"
        aria-label="Gulir ke bagian Tentang"
      >
        <span className="text-[11px] uppercase tracking-wider font-light">{hero.scrollLabel}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

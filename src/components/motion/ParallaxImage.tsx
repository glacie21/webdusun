"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  // Seberapa jauh foto bergeser (persen tinggi) dari atas ke bawah layar.
  strength?: number;
}

// Foto latar yang bergerak lebih lambat dari halaman, memberi kesan kedalaman.
// Diletakkan di dalam elemen induk yang memakai position relative.
export default function ParallaxImage({
  src,
  alt,
  sizes = "100vw",
  className = "",
  strength = 10,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Diperbesar agar tepi foto tidak terlihat saat bergeser */}
      <motion.div className="absolute inset-0" style={{ y, scale: 1 + (strength * 2) / 100 }}>
        <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover object-center ${className}`} />
      </motion.div>
    </div>
  );
}

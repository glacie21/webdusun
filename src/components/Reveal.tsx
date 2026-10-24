"use client";

import { motion } from "motion/react";
import { easeOut } from "@/components/motionPresets";

const tags = {
  div: motion.div,
  article: motion.article,
  h2: motion.h2,
  p: motion.p,
  blockquote: motion.blockquote,
};

interface RevealProps {
  as?: keyof typeof tags;
  className?: string;
  // Jeda sebelum mulai (detik). Untuk deretan kartu, pakai staggerDelay(index).
  delay?: number;
  // Jarak awal dari bawah (px).
  y?: number;
  children?: React.ReactNode;
}

// Elemen yang muncul (pudar sambil naik) ketika masuk ke layar, sekali saja.
// Catatan: jangan beri elemen ini class transition-all, karena transisi CSS
// pada transform akan membuat gerakannya tersendat. Untuk efek hover pakai
// transition-[translate,box-shadow] dan hover:-translate-y-*.
export default function Reveal({ as = "div", className, delay = 0, y = 28, children }: RevealProps) {
  const Tag = tags[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </Tag>
  );
}


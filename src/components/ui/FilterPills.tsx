"use client";

import { motion } from "motion/react";

const tones = {
  // Di atas latar terang.
  light: {
    active: "text-white border-transparent",
    idle: "bg-white text-charcoal-muted hover:text-charcoal hover:bg-cream border-sage-soft",
    marker: "bg-forest",
  },
  // Di atas latar hijau tua.
  dark: {
    active: "text-forest-dark border-transparent",
    idle: "bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border-white/15",
    marker: "bg-cream-soft",
  },
};

interface FilterPillsProps {
  options: string[];
  active: string;
  onChange: (option: string) => void;
  // Nama unik untuk animasi penanda yang meluncur. Wajib berbeda di setiap bagian.
  layoutId: string;
  tone?: keyof typeof tones;
}

// Deretan tombol filter kategori. Latar penanda meluncur ke tombol yang dipilih.
export default function FilterPills({ options, active, onChange, layoutId, tone = "light" }: Readonly<FilterPillsProps>) {
  const style = tones[tone];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 border ${
              isActive ? style.active : style.idle
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className={`absolute inset-0 rounded-full shadow-sm ${style.marker}`}
              />
            )}
            <span className="relative">{option}</span>
          </button>
        );
      })}
    </div>
  );
}

// Pilihan filter: "Semua" lalu setiap kategori yang benar-benar ada di data.
export function filterOptions(allLabel: string, categories: string[]) {
  return [allLabel, ...new Set(categories)];
}

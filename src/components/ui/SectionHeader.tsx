import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  // Warna ikon di dalam badge.
  iconClassName?: string;
  // Warna latar badge. Pakai "bg-white" di bagian yang latarnya sage-light.
  badgeClassName?: string;
  // Jarak ke isi di bawahnya, misalnya "mb-16".
  className?: string;
  // Tambahan di bawah deskripsi, misalnya catatan "contoh tampilan".
  children?: React.ReactNode;
}

// Judul bagian di tengah: badge kecil, judul besar, dan deskripsi.
// Ketiganya muncul bergantian saat bagian terlihat di layar.
export default function SectionHeader({
  badge,
  title,
  description,
  icon: Icon,
  iconClassName = "text-sage",
  badgeClassName = "bg-sage-light",
  className = "mb-16",
  children,
}: Readonly<SectionHeaderProps>) {
  return (
    <div className={`max-w-3xl mx-auto text-center ${className}`}>
      <Reveal
        y={16}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-forest text-xs font-semibold tracking-wider uppercase mb-3 ${badgeClassName}`}
      >
        {Icon && <Icon className={`w-3.5 h-3.5 ${iconClassName}`} />}
        <span>{badge}</span>
      </Reveal>
      <Reveal
        as="h2"
        delay={0.08}
        className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-5"
      >
        {title}
      </Reveal>
      {description && (
        <Reveal as="p" delay={0.16} className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
          {description}
        </Reveal>
      )}
      {children}
    </div>
  );
}

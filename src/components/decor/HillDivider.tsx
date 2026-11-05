import * as motion from "motion/react-client";
import { easeOut } from "@/components/motion/presets";

// Bentuk perbukitan. "back" digambar lebih samar di belakang "front"
// supaya terlihat seperti deretan bukit yang berlapis.
const shapes = {
  gentle: {
    back: "M0,48 C160,22 330,14 520,34 C700,52 820,26 1010,20 C1200,14 1330,36 1440,30 L1440,100 L0,100 Z",
    front: "M0,72 C180,44 360,38 540,56 C720,74 900,82 1080,62 C1260,42 1350,40 1440,48 L1440,100 L0,100 Z",
  },
  rolling: {
    back: "M0,36 C140,18 280,30 420,24 C560,18 660,6 820,18 C980,30 1100,44 1260,30 C1350,22 1400,26 1440,30 L1440,100 L0,100 Z",
    front: "M0,66 C120,48 240,40 380,52 C520,64 600,82 760,74 C920,66 1000,40 1160,42 C1320,44 1380,60 1440,64 L1440,100 L0,100 Z",
  },
};

interface HillDividerProps {
  // Warna latar memakai class bg-* (warna bagian di atasnya), warna bukit
  // memakai class text-* (warna bagian di bawahnya). Contoh: "bg-cream text-forest".
  className?: string;
  variant?: keyof typeof shapes;
  // Balik kiri-kanan supaya dua pembatas yang berdekatan tidak terlihat kembar.
  flip?: boolean;
}

// Siluet perbukitan sebagai peralihan antara dua bagian halaman yang warnanya
// berbeda. Bukit perlahan "tumbuh" dari bawah saat terlihat di layar.
export default function HillDivider({ className = "", variant = "gentle", flip = false }: HillDividerProps) {
  const { back, front } = shapes[variant];

  return (
    <div aria-hidden="true" className={`relative -mb-px overflow-hidden ${className}`}>
      <motion.svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="currentColor"
        className={`block w-full h-12 sm:h-16 lg:h-24 origin-bottom ${flip ? "-scale-x-100" : ""}`}
        initial={{ scaleY: 0.35 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "0px 0px -5% 0px" }}
        transition={{ duration: 1.2, ease: easeOut }}
      >
        <path d={back} opacity="0.4" />
        <path d={front} />
      </motion.svg>
    </div>
  );
}

"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, motion, useScroll, useSpring } from "motion/react";
import "lenis/dist/lenis.css";

// Pengaturan gerak untuk seluruh halaman:
// - Lenis membuat scroll mouse/touchpad terasa halus (layar sentuh tetap native).
// - MotionConfig "user" mematikan gerakan geser/skala bagi pengunjung yang
//   mengaktifkan "kurangi gerakan" di perangkatnya; animasi pudar tetap jalan.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis root options={{ lerp: 0.1, anchors: true, stopInertiaOnNavigate: true }} />
      <ScrollProgress />
      {children}
    </MotionConfig>
  );
}

// Garis tipis di atas layar yang memanjang sesuai seberapa jauh halaman digulir.
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-0.5 bg-earth origin-left z-[60] pointer-events-none"
    />
  );
}

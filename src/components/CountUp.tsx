"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import { easeOut } from "@/components/motionPresets";

// Angka yang berhitung naik dari nol saat terlihat di layar, misalnya "05".
// Teks yang bukan angka (seperti "∞") ditampilkan apa adanya.
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const target = /^\d+$/.test(value) ? Number(value) : null;

  useEffect(() => {
    const el = ref.current;
    if (!isInView || target === null || !el) return;
    const format = (n: number) => String(Math.round(n)).padStart(value.length, "0");
    const controls = animate(0, target, {
      duration: 1.4,
      ease: easeOut,
      onUpdate: (n) => {
        el.textContent = format(n);
      },
    });
    return () => controls.stop();
  }, [isInView, target, value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

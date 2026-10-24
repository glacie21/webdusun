"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { easeOut } from "@/components/motionPresets";

interface ModalProps {
  onClose: () => void;
  // id judul di dalam modal, dibacakan pembaca layar sebagai nama dialog.
  labelledBy: string;
  // Class tambahan untuk latar gelap (warna, blur, padding).
  className?: string;
  children: React.ReactNode;
}

// Animasi bersama untuk kotak isi modal. Pakai pada motion.div pembungkus isi:
// <motion.div {...modalPanel} className="...">. Agar animasi tutup ikut jalan,
// bungkus {isOpen && <Modal>} dengan <AnimatePresence> di komponen induk.
export const modalPanel = {
  initial: { opacity: 0, y: 32, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: easeOut } },
  exit: { opacity: 0, y: 16, scale: 0.98, transition: { duration: 0.2, ease: "easeIn" } },
} as const;

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Dialog bersama: tutup dengan Esc atau klik latar, kunci scroll halaman,
// dan jaga fokus keyboard tetap di dalam dialog selama terbuka.
export default function Modal({ onClose, labelledBy, className = "", children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  const lenis = useLenis();

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Hentikan smooth scroll halaman selama modal terbuka.
  useEffect(() => {
    lenis?.stop();
    return () => lenis?.start();
  }, [lenis]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      tabIndex={-1}
      // Scroll di dalam modal memakai scroll bawaan browser, bukan Lenis.
      data-lenis-prevent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.05 } }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className={`fixed inset-0 z-[70] flex items-center justify-center focus:outline-none ${className}`}
    >
      {children}
    </motion.div>
  );
}

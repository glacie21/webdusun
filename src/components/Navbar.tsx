"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";
import { villageData } from "@/data/content";
import { easeOut } from "@/components/motionPresets";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(villageData.navLinks[0].href);
  const { scrollY } = useScroll();

  // Navbar bersembunyi saat menggulir ke bawah dan muncul lagi saat ke atas.
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(current > 40);
    setIsHidden(current > previous && current > 400);
  });

  useEffect(() => {
    // Cek sekali saat dimuat, karena browser bisa memulihkan posisi scroll
    // setelah reload tanpa memicu event scroll.
    const frame = requestAnimationFrame(() => setIsScrolled(window.scrollY > 40));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Tandai menu sesuai bagian yang sedang berada di tengah layar.
  useEffect(() => {
    const sections = villageData.navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Tutup menu mobile dengan tombol Esc.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: isHidden && !mobileMenuOpen ? "-100%" : 0 }}
      transition={{ duration: 0.45, ease: easeOut }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-sand py-3.5"
          : "bg-gradient-to-b from-black/60 via-black/25 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#hero"
            onClick={closeMenu}
            className="group flex items-center gap-2.5"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif text-lg font-bold transition-all shadow-sm ${
                isScrolled
                  ? "bg-forest text-cream group-hover:bg-forest-dark"
                  : "bg-white/20 backdrop-blur-md text-white border border-white/30 group-hover:bg-white/30"
              }`}
            >
              {villageData.identity.logoInitial}
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg md:text-xl font-bold tracking-tight transition-colors ${
                  isScrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {villageData.identity.shortName}
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase font-medium transition-colors ${
                  isScrolled ? "text-sage-dark" : "text-white/80"
                }`}
              >
                {villageData.identity.areaLabel}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {villageData.navLinks.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isScrolled
                      ? isActive
                        ? "text-forest"
                        : "text-charcoal-muted hover:text-forest"
                      : isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {/* Latar penanda yang meluncur ke menu aktif */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className={`absolute inset-0 rounded-full ${
                        isScrolled ? "bg-sage-light" : "bg-white/15"
                      }`}
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#tentang"
              onClick={closeMenu}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all shadow-sm ${
                isScrolled
                  ? "bg-forest text-white hover:bg-forest-dark hover:shadow-md active:scale-95"
                  : "bg-white text-forest hover:bg-cream hover:shadow-md active:scale-95"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{villageData.identity.exploreLabel}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled
                ? "text-charcoal hover:bg-sage-light"
                : "text-white hover:bg-white/20"
            }`}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            data-lenis-prevent
            className="lg:hidden bg-cream border-b border-sand mt-3 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-2 px-4 pt-4 pb-6">
              {villageData.navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.04, ease: easeOut }}
                  aria-current={activeHref === link.href ? "location" : undefined}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium hover:bg-sage-light hover:text-forest transition-colors ${
                    activeHref === link.href ? "bg-sage-light text-forest" : "text-charcoal"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-3 border-t border-sand">
              <a
                href="#tentang"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest text-white font-medium text-sm shadow-sm"
              >
                <Compass className="w-4 h-4" />
                <span>{villageData.identity.exploreLabel}</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

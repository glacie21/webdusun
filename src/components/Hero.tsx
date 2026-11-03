"use client";

import { useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, MapPin, Sparkles, ChevronRight } from "lucide-react";
import { villageData, HeroGreeting } from "@/data/content";
import { easeOut } from "@/components/motionPresets";

// Urutan muncul isi Hero: badge, judul kata demi kata, lalu deskripsi dan tombol.
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: easeOut },
});

const { greetings } = villageData.sections.hero;

// Jam sekarang di Sukomangun (WIB), apa pun zona waktu pengunjung.
function jakartaHour() {
  const hour = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    hourCycle: "h23",
    timeZone: "Asia/Jakarta",
  }).format(new Date());
  return Number(hour);
}

// Nomor sapaan yang berlaku sekarang. Dini hari sebelum sapaan pertama
// masih memakai sapaan terakhir (malam).
function currentGreetingIndex() {
  const hour = jakartaHour();
  const index = greetings.findLastIndex((greeting) => hour >= greeting.fromHour);
  return index === -1 ? greetings.length - 1 : index;
}

// Dicek ulang setiap menit, supaya sapaan ikut berganti bila halaman dibiarkan terbuka.
function subscribeToClock(onChange: () => void) {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
}

// Warna suasana di atas foto, mengikuti waktu sapaan.
const moodOverlay: Record<HeroGreeting["mood"], string> = {
  pagi: "bg-gradient-to-b from-white/15 via-white/5 to-transparent",
  siang: "bg-gradient-to-b from-earth-bright/10 via-transparent to-transparent",
  sore: "bg-gradient-to-t from-earth/40 via-earth/15 to-transparent",
  malam: "bg-[#0b1820]/45",
};

// Butir cahaya yang melayang naik. Posisinya ditulis tetap (bukan acak)
// supaya tampilan dari server dan di browser sama persis.
const particles = [
  { left: 6, bottom: 22, size: 3, duration: 11, delay: 0 },
  { left: 14, bottom: 12, size: 2, duration: 9, delay: 3.5 },
  { left: 21, bottom: 30, size: 4, duration: 13, delay: 6 },
  { left: 29, bottom: 16, size: 2, duration: 10, delay: 1.5 },
  { left: 37, bottom: 26, size: 3, duration: 12, delay: 8 },
  { left: 44, bottom: 10, size: 2, duration: 9, delay: 4.5 },
  { left: 52, bottom: 20, size: 3, duration: 14, delay: 2 },
  { left: 59, bottom: 32, size: 2, duration: 10, delay: 7 },
  { left: 66, bottom: 14, size: 4, duration: 12, delay: 0.8 },
  { left: 73, bottom: 24, size: 2, duration: 11, delay: 5.5 },
  { left: 80, bottom: 12, size: 3, duration: 13, delay: 2.8 },
  { left: 87, bottom: 28, size: 2, duration: 9, delay: 6.8 },
  { left: 93, bottom: 18, size: 3, duration: 12, delay: 4 },
  { left: 33, bottom: 40, size: 2, duration: 10, delay: 9 },
];

// Tiga lapis siluet perbukitan di bagian bawah Hero. Lapis depan berwarna
// sama dengan latar bagian Tentang, sehingga Hero menyatu ke bagian berikutnya.
const hills = {
  back: "M0,70 C140,40 260,22 400,38 C540,54 620,20 760,14 C900,8 1000,48 1140,52 C1280,56 1360,30 1440,36 L1440,160 L0,160 Z",
  middle: "M0,104 C150,82 280,92 420,86 C560,80 660,56 800,66 C940,76 1030,104 1170,98 C1310,92 1380,80 1440,84 L1440,160 L0,160 Z",
  front: "M0,138 C180,124 330,146 520,136 C710,126 830,118 1000,128 C1170,138 1300,126 1440,130 L1440,160 L0,160 Z",
};

export default function Hero() {
  const { hero } = villageData.sections;
  const sectionRef = useRef<HTMLElement>(null);

  // Di server jam pengunjung belum diketahui (-1), jadi sapaan baru muncul di browser.
  const greetingIndex = useSyncExternalStore(subscribeToClock, currentGreetingIndex, () => -1);
  const greeting = greetingIndex >= 0 ? greetings[greetingIndex] : null;

  // Parallax: latar bergerak lebih lambat dari isi, isi memudar saat digulir.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  // Bukit yang lebih jauh bergeser lebih banyak, memberi kesan kedalaman.
  const backHillY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const middleHillY = useTransform(scrollYProgress, [0, 1], [0, 35]);

  const titleWords = hero.title.split(" ");
  const afterTitle = 0.25 + titleWords.length * 0.07;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32 lg:pb-40"
    >
      {/* Background Image with optimized Next.js Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY, scale: imageScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: easeOut }}
      >
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src={hero.imageUrl}
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </motion.div>
      {/* Cinematic Multi-layered Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-forest-dark/95 via-forest/60 to-black/40" />
      <div className="absolute inset-0 z-0 bg-radial from-transparent via-black/20 to-black/60" />

      {/* Suasana pagi, siang, sore, atau malam */}
      {greeting && (
        <motion.div
          key={greeting.mood}
          aria-hidden="true"
          className={`absolute inset-0 z-0 ${moodOverlay[greeting.mood]}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}

      {/* Kabut tipis yang bergeser pelan di atas lembah */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-3/5 z-0 pointer-events-none">
        <div className="absolute -inset-x-1/4 bottom-[8%] h-2/3 animate-mist bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_65%)]" />
        <div className="absolute -inset-x-1/4 bottom-[24%] h-1/2 animate-mist [animation-duration:31s] [animation-direction:alternate-reverse] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)]" />
      </div>

      {/* Butir cahaya */}
      <div aria-hidden="true" className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-earth-bright opacity-0 animate-float-up shadow-[0_0_8px_2px_rgba(227,196,159,0.55)]"
            style={{
              left: `${p.left}%`,
              bottom: `${p.bottom}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Siluet perbukitan berlapis */}
      <div aria-hidden="true" className="absolute inset-x-0 -bottom-px z-[2] h-24 sm:h-32 lg:h-44 pointer-events-none">
        <motion.svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="currentColor"
          style={{ y: backHillY }}
          className="absolute inset-0 w-full h-full text-sage/25"
        >
          <path d={hills.back} />
        </motion.svg>
        <motion.svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="currentColor"
          style={{ y: middleHillY }}
          className="absolute inset-0 w-full h-full text-forest-dark/85"
        >
          <path d={hills.middle} />
        </motion.svg>
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="currentColor"
          className="absolute inset-0 w-full h-full text-cream"
        >
          <path d={hills.front} />
        </svg>
      </div>

      {/* Hero Content Container */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-12 md:mt-6"
      >
        {/* Small badge */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium tracking-widest uppercase mb-5 sm:mb-6 text-cream-soft shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-earth" />
          <span>{hero.badge}</span>
        </motion.div>

        {/* Sapaan sesuai jam di Sukomangun. Tingginya disiapkan sejak awal
            supaya judul tidak bergeser saat sapaan muncul. */}
        <div className="h-12 sm:h-8 mb-3 sm:mb-4">
          {greeting && (
            <motion.p
              key={greeting.text}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeOut }}
              className="font-serif italic text-lg sm:text-xl text-earth-bright leading-7"
            >
              {greeting.text}
              <span className="block sm:inline font-sans not-italic text-sm sm:text-base text-white/80 leading-5">
                <span className="hidden sm:inline"> — </span>
                {greeting.meaning}
              </span>
            </motion.p>
          )}
        </div>

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
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10"
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

      {/* Subtle Scroll Indicator: berada di atas lapisan bukit yang gelap */}
      <motion.a
        href="#tentang"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: afterTitle + 0.5 }}
        className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors flex flex-col items-center gap-1.5"
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

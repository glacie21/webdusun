import { ArrowUpRight, Compass, Sparkles } from "lucide-react";
import * as motion from "motion/react-client";
import { villageData } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function CtaSection() {
  const { cta } = villageData.sections;

  return (
    <section className="py-20 md:py-24 bg-forest text-white relative overflow-hidden">
      {/* Subtle organic background patterns */}
      {/* Pendar cahaya yang bergerak pelan */}
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-earth/10 pointer-events-none blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal y={16} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold tracking-wider uppercase mb-6 text-cream">
          <Sparkles className="w-3.5 h-3.5 text-earth" />
          <span>{cta.badge}</span>
        </Reveal>

        <Reveal as="h2" delay={0.08} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          {cta.title}
        </Reveal>

        <Reveal as="p" delay={0.16} className="text-base sm:text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {cta.description}
        </Reveal>

        <Reveal delay={0.24} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#potensi"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-cream-soft text-forest hover:bg-white font-medium text-base tracking-wide transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2.5"
          >
            <Compass className="w-5 h-5 text-earth" />
            <span>{cta.buttonLabel}</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

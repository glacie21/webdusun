import { ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { villageData } from "@/data/content";

export default function CtaSection() {
  const { cta } = villageData.sections;

  return (
    <section className="py-20 md:py-24 bg-forest text-white relative overflow-hidden">
      {/* Subtle organic background patterns */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-earth/10 pointer-events-none blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-semibold tracking-wider uppercase mb-6 text-cream">
          <Sparkles className="w-3.5 h-3.5 text-earth" />
          <span>{cta.badge}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          {cta.title}
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {cta.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#potensi"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-cream-soft text-forest hover:bg-white font-medium text-base tracking-wide transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2.5"
          >
            <Compass className="w-5 h-5 text-earth" />
            <span>{cta.buttonLabel}</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

import { villageData } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import ContourLines from "@/components/decor/ContourLines";

const { quickStats } = villageData;
const text = villageData.sections.statistics;

export default function Statistics() {
  return (
    <section className="relative py-14 sm:py-20 bg-forest text-white overflow-hidden">
      {/* Tekstur garis kontur dan pendar cahaya hangat. Memudar di tepi atas
          dan bawah supaya menyatu dengan siluet bukit di atas dan di bawahnya. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
      >
        <ContourLines className="text-white/[0.07]" />
        <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-earth/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-sage/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-earth-bright font-semibold">
            {text.badge}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
            {text.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {quickStats.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.08}
              className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 backdrop-blur-sm transition-[background-color,box-shadow,translate] duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="flex items-baseline justify-between mb-4">
                <CountUp
                  value={item.number}
                  className="font-serif text-4xl sm:text-5xl font-bold text-earth-bright group-hover:text-white transition-colors tabular-nums"
                />
                <span className="text-[10px] tracking-widest uppercase font-semibold text-white/80 px-2.5 py-0.5 rounded-full bg-white/10">
                  {text.cardLabel}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white mb-1.5">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

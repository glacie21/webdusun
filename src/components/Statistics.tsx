import { villageData } from "@/data/content";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

export default function Statistics() {
  return (
    <section className="py-14 sm:py-18 bg-white border-y border-sand/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-sage-dark font-semibold">
            {villageData.sections.statistics.badge}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mt-1">
            {villageData.sections.statistics.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {villageData.quickStats.map((item, index) => (
            <Reveal
              key={index}
              delay={index * 0.08}
              className="relative p-6 sm:p-7 rounded-2xl bg-cream/60 hover:bg-cream border border-sand transition-[background-color,box-shadow,translate] duration-300 hover:shadow-md hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="flex items-baseline justify-between mb-4">
                <CountUp
                  value={item.number}
                  className="font-serif text-4xl sm:text-5xl font-bold text-forest group-hover:text-earth-dark transition-colors tabular-nums"
                />
                <span className="text-[10px] tracking-widest uppercase font-semibold text-sage-dark px-2.5 py-0.5 rounded-full bg-sage-light">
                  {villageData.sections.statistics.cardLabel}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-1.5">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-light">
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

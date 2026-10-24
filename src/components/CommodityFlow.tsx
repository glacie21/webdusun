import { Sprout, Warehouse, Droplets, Truck, Building2, ArrowRight, ArrowDown } from "lucide-react";
import { villageData } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function CommodityFlow() {
  const { commodityFlow } = villageData.sections;

  const getIcon = (name: string) => {
    switch (name) {
      case "Sprout":
        return <Sprout className="w-6 h-6" />;
      case "Warehouse":
        return <Warehouse className="w-6 h-6" />;
      case "Droplets":
        return <Droplets className="w-6 h-6" />;
      case "Truck":
        return <Truck className="w-6 h-6" />;
      case "Building2":
        return <Building2 className="w-6 h-6" />;
      default:
        return <Sprout className="w-6 h-6" />;
    }
  };

  return (
    <section id="komoditas" className="py-20 md:py-28 bg-cream-soft relative border-t border-sand/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal y={16} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-light text-forest text-xs font-semibold tracking-wider uppercase mb-3">
            <span>{commodityFlow.badge}</span>
          </Reveal>
          <Reveal as="h2" delay={0.08} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-5">
            {commodityFlow.title}
          </Reveal>
          <Reveal as="p" delay={0.16} className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            {commodityFlow.description}
          </Reveal>
        </div>

        {/* Commodity Flow Steps: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-3 relative items-stretch">
          {villageData.commodityFlow.map((step, idx) => (
            <Reveal
              key={step.step}
              delay={idx * 0.12}
              y={36}
              className="flex flex-col lg:flex-row items-center"
            >
              {/* Card Container */}
              <div className="w-full bg-white rounded-3xl p-6 border border-sand shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-[box-shadow,translate] duration-300 flex-1 flex flex-col justify-between group">
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-8 h-8 rounded-full bg-sage-light text-forest font-serif font-bold text-sm flex items-center justify-center">
                      0{step.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-cream text-forest group-hover:bg-forest group-hover:text-white transition-colors flex items-center justify-center">
                      {getIcon(step.iconName)}
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-earth-dark block mb-1">
                    {step.actor}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand/70 text-[11px] text-sage-dark font-medium leading-normal">
                  {step.detail}
                </div>
              </div>

              {/* Arrow Connector */}
              {idx < villageData.commodityFlow.length - 1 && (
                <div className="my-3 lg:my-0 lg:mx-2 text-sage-dark flex items-center justify-center">
                  <div className="lg:hidden">
                    <ArrowDown className="w-5 h-5 animate-pulse text-earth" />
                  </div>
                  <div className="hidden lg:block">
                    <ArrowRight className="w-5 h-5 text-earth" />
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* Storytelling Narrative Footer */}
        <Reveal className="mt-14 max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-sand text-center shadow-xs">
          <p className="font-serif italic text-base sm:text-lg text-charcoal leading-relaxed">
            &ldquo;{commodityFlow.closingQuote}&rdquo;
          </p>
          <div className="mt-3 text-xs uppercase tracking-widest text-sage-dark font-semibold">
            {commodityFlow.closingCaption}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
